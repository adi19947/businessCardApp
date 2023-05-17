import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import useAxios from "../hooks/useAxios";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../cards/services/CardApiService";
import { useSnack } from "./SnackbarProvider";
import { useUser } from "../users/providers/UserProvider";
import { useSearchParams } from "react-router-dom";
export const CardsContext = createContext({});

export const CardsProvider = ({ children }) => {
  const context = useCardsContextProvider();

  const { Provider } = CardsContext;
  return <Provider value={context}>{children}</Provider>;
};

export const useCardsContext = () => {
  const context = useContext(CardsContext);
  if (!context)
    throw new Error("useCardsContext must be used within a CardsProvider");
  return context;
};

export default function useCardsContextProvider() {
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [card, setCard] = useState(null);
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams();
  const [filteredCards, setFilterCards] = useState([]);
  const [favCards, setFavCards] = useState([]);
  useAxios();
  const snack = useSnack();
  const { user } = useUser();

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (cards) {
      setFilterCards(
        cards.filter(
          (card) =>
            card.title.toLowerCase().includes(query.toLowerCase()) ||
            String(card.bizNumber).includes(query)
        )
      );
    }
  }, [cards, query]);

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();

      requestStatus(false, null, cards);
      //snack("success", "All the cards are here!");
    } catch (error) {
      requestStatus(false, error, []);
    }
  }, [cards]);

  const handleGetMyCards = useCallback(async () => {
    try {
      setLoading(true);

      const cards = await getMyCards();
      console.log(cards);
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, []);
    }
  }, []);

  const handleDeleteCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);

  //handleGetCard
  const handleGetCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, cards, card);
      return card;
    } catch (error) {
      requestStatus(false, error, []);
    }
  }, []);

  //handleUpdateCard
  const handleUpdateCard = useCallback(async (cardId, cardFromClient) => {
    try {
      setLoading(true);
      const card = await editCard(cardId, cardFromClient);
      requestStatus(false, null, cards, card);
      snack("success", "The business card has been successfully updated");
    } catch (error) {
      requestStatus(false, error, []);
    }
  }, []);

  //handleLikeCard
  const handleLikeCard = useCallback(
    async (cardId) => {
      try {
        const card = await changeLikeStatus(cardId);
        setFavCards(favCards.filter((card) => card._id !== cardId));
        handleGetCards();
        requestStatus(false, null, cards, card);

        if (card.likes.includes(user?.id)) {
          snack("success", "The business card has been Liked");
        } else {
          snack("success", "The business card has been unliked");
        }
      } catch (error) {
        requestStatus(false, error, []);
      }
    },
    [favCards, user, cards, card]
  );

  //handleGetFavCards
  const handleGetFavCards = useCallback(async () => {
    try {
      setLoading(true);
      if (!user) {
        // Handle the case when the user is null
        throw new Error("User is null");
      }
      const cards = await getCards();

      setFavCards(cards.filter((card) => card.likes.includes(user?.id)));

      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, []);
    }
  }, [user]);

  //handleCreateCard
  const handleCreateCard = useCallback(async (cardFromClient) => {
    try {
      setLoading(true);
      const card = await createCard(cardFromClient);
      requestStatus(false, null, cards, card);
      snack("success", "A new business card has been created");
    } catch (error) {
      requestStatus(false, error, []);
    }
  }, []);

  const value = useMemo(() => {
    return { isLoading, card, cards, error, filteredCards, favCards };
  }, [isLoading, card, error, cards, filteredCards, favCards]);

  return {
    value,
    handleGetFavCards,
    handleGetCards,
    handleGetMyCards,
    handleDeleteCard,
    handleGetCard,
    handleUpdateCard,
    handleCreateCard,
    handleGetFavCards,
    handleLikeCard,
  };
}
