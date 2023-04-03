import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CardPage from "../cards/pages/CardPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
//import Password from "../sandbox/state-hook/Password";
import LoginPage from "../users/pages/LoginPage";

import ROUTES from "./routesModel";
import Counter from "../sandbox/state-hook/Counter";
import MyDetails from "../sandbox/state-hook/MyDetails";
//import Password from "../sandbox/stateHook/Password";
import Todo from "../sandbox/state-hook/Todo";
import SandBox from "../sandbox/SandBox";
import Password from "../sandbox/state-hook/Password";
import Countries from "../sandbox/effect-hook/Countries";
import FavCardPage from "../cards/pages/FavCardPage";
import MyCardsPage from "../cards/pages/MyCardsPage";
import CreateCardPage from "../cards/pages/CreateCardPage";
import EditCardPage from "../cards/pages/EditCardPage";
import DataDisplay from "../sandbox/data-display/DataDisplay";
import CardComponent from "../sandbox/data-display/CardComponent";
import TypographyComponent from "../sandbox/data-display/typographyComponent";
import StackComp from "../sandbox/data-display/StackComp";
import Weather from "../sandbox/effect-hook/Weather";
import RenderComponent from "../sandbox/render/RenderComponent";
import Country2 from "../sandbox/effect-hook/Country2";
import ChooseCountry from "../sandbox/ChooseCountry";
import ChangeColor from "../sandbox/class/stateTasks/ChangeColor";
import ChangeStyle from "../sandbox/class/stateTasks/ChangeStyle";
import Data from "../sandbox/class/memorization/Data";
import ShowData from "../sandbox/class/memorization/ShowData";
import MyCounter from "../sandbox/custom hooks/MyCounter";
import SignUpPage from "../users/pages/SignUpPage";
import Form from "../cards/components/Form";
import MyForm from "../sandbox/forms/MyForm";
import MyForm2 from "../sandbox/forms/MyForm2";
import TestForm from "../sandbox/forms/TestForm";
import LoginComp from "../users/pages/LoginComp";
import SignUpComp from "../users/pages/SignUpComp";
import Menu from "../layout/header/topNavBar/menu/Menu";
import DialogAlert from "../cards/components/DialogAlert";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.CARDS} element={<CardPage />} />
        <Route path={ROUTES.ROOT} element={<CardPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
        <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
        <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage />} />

        <Route path={ROUTES.SANDBOX} element={<SandBox />}>
          <Route path="counter" element={<Counter />} />
          <Route path="mydetails" element={<MyDetails />} />
          <Route path="password" element={<Password />} />
          <Route path="todo" element={<Todo />} />
          <Route path="countries" element={<Countries />} />
          <Route path="datadisplay" element={<DataDisplay />}>
            <Route path="cardcomponent" element={<CardComponent />} />
            <Route path="typographycomp" element={<TypographyComponent />} />
            <Route path="stackcomp" element={<StackComp />} />
          </Route>
          <Route path="weather" element={<Weather />} />
          <Route path="render" element={<ChooseCountry />} />
        </Route>
        <Route path={ROUTES.FAV_CARDS} element={<FavCardPage />} />
        <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
        <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />
        <Route path={ROUTES.EDIT_CARD} element={<EditCardPage />} />
        <Route path="test" element={<DialogAlert />} />

        <Route path={ROUTES.ERROR} element={<ErrorPage />} />
      </Routes>
    </>
  );
}
