import React from "react";
import { Routes, Route } from "react-router-dom";
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
