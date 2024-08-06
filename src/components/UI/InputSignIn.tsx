import React from "react";
// import  { GithubSignIn} } from '../../hooks/context/userData'
import { GithubSignIn } from "../../hooks/context/userData";

type Props = {};

const InputSignIn = (props: Props) => {
  const HandelSignIn = () => {
    GithubSignIn();
  };
  return (
    <div>
      <h1>Sign In With you Github </h1>
      <button onClick={HandelSignIn}>Sign In</button>
    </div>
  );
};

export default InputSignIn;
