import { createContext, useContext, useState } from "react";
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
export const CardsContext = createContext({});

export const CardsProvider = ({ children }) => {
  const context = useCardsContextProvider();

  const { Provider } = CardsContext;
  return <Provider value={context}>{children}</Provider>;
};

export const useCardsContext = () => useContext(CardsContext);

export default function useCardsContextProvider() {
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [card, setCard] = useState(null);
  useAxios();
  const snack = useSnack();
  const { user } = useUser();

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCards = async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
      snack("success", "All the cards are here!");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleGetMyCards = async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleDeleteCard = async (cardId) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  //handleGetCard
  const handleGetCard = async (cardId) => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      return card;
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  //handleUpdateCard
  const handleUpdateCard = async (cardId, cardFromClient) => {
    try {
      setLoading(true);
      const card = await editCard(cardId, cardFromClient);
      requestStatus(false, null, null, card);
      snack("success", "The business card has been successfully updated");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  //handleLikeCard
  const handleLikeCard = async (cardId) => {
    try {
      const card = await changeLikeStatus(cardId);
      requestStatus(false, null, cards, card);
      snack("success", "The business card has been Liked");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };
  //handleGetFavCards
  const handleGetFavCards = async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      const favCards = cards.filter((card) => card.likes.includes(user.id));
      requestStatus(false, null, favCards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  //handleCreateCard
  const handleCreateCard = async (cardFromClient) => {
    try {
      setLoading(true);
      const card = await createCard(cardFromClient);
      requestStatus(false, null, null, card);
      snack("success", "A new business card has been created");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  return {
    cards,
    isLoading,
    card,
    error,
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
