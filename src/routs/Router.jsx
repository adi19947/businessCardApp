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

import ChooseCountry from "../sandbox/ChooseCountry";

import SignUpPage from "../users/pages/SignUpPage";

import SearchBar from "../layout/header/topNavBar/search-bar/SearchBar";
import UserProfilePage from "../users/pages/UserProfilePage";
import EditProfile from "../users/pages/EditProfilePage";
import UserManagementSystem from "../users/pages/UserManagementSystem";
import MapPage from "../cards/map/MapPage";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.CARDS} element={<CardPage />} />
        <Route path={ROUTES.ROOT} element={<CardPage />} />
        <Route path={ROUTES.USERS} element={<UserManagementSystem />} />

        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
        <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
        <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage />} />
        <Route path="test" element={<MapPage />} />

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
        <Route path={ROUTES.USER_PROFILE} element={<UserProfilePage />} />
        <Route path={ROUTES.EDIT_USER} element={<EditProfile />} />

        <Route path={ROUTES.ERROR} element={<ErrorPage />} />
      </Routes>
    </>
  );
}
