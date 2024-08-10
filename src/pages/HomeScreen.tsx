import React from "react";
import { useAuth } from "../hooks/context/userData";

// home Screen  , we hve already a user if not we diplay not .

type Props = {};

const Homescreen = (props: Props) => {
  const { currentUser } = useAuth();

  return (
    <>
      {currentUser ? (
        <h1>WELCOME TO HITHUB : {currentUser.uid}</h1>
      ) : (
        <h1> No freagknign user </h1>
      )}
      <h1></h1>
    </>
  );
};

export default Homescreen;
