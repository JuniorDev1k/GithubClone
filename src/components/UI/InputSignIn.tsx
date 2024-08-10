import React from "react";
import { useAuth } from "../../hooks/context/userData";
type Props = {};

const InputSignIn = (props: Props) => {
  const { GithubSignIn } = useAuth();
  const HandelSignIn = () => {
    GithubSignIn();
    // navigate to home ,
  };
  return (
    <div>
      <h1>Sign In With you Github </h1>
      <button onClick={HandelSignIn}>Sign In</button>
    </div>
  );
};

export default InputSignIn;
