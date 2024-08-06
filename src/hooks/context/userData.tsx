import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { Auth } from "../../firebase/config.js";
import { useState } from "react";
import { OAuthCredential } from "firebase/auth/web-extension";

const provider = new GithubAuthProvider();

export const GithubSignIn = async (): Promise<any> => {
  try {
    const response = await signInWithPopup(Auth, provider);
    const credential = GithubAuthProvider.credentialFromResult(response);
    const token = credential.accessToken;

    const User = response.user;

    if (User) {
      console.log("sign in alreadt");
    }
  } catch (error) {
    console.log(`error signing user ${error}`);
  } finally {
    console.log("completed !!!");
  }
};
