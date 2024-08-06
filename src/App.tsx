import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import {
  Homescreen,
  LoginScreen,
  SignupScreen,
  CreatePost,
  NotFound,
  RepositoryScreen,
} from "./pages";
type Props = {};

const App = (props: Props) => {
  return (
    <>
      <h1 className="text-red m-6 "> This is the app guys </h1>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/RepositoryScreen" element={<RepositoryScreen />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/Login" element={<LoginScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
