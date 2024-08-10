import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { Auth } from "../../firebase";
import { useEffect, useState, useContext } from "react";
import { createContext } from "react";

// creating conext
export const AuthContext = createContext();
// setting up our Auth Context.
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  // sign in with Gituhb function :

  const provider = new GithubAuthProvider();
  const GithubSignIn = async (): Promise<any> => {
    try {
      const result = await signInWithPopup(Auth, provider);
      const user = result.user;
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
    } catch (error) {
      console.log(`error signing user ${error}`);
    } finally {
      console.log("completed !!!");
    }
  };

  // traking user State :
  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged((user: string[]) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    GithubSignIn,
  };

  return (
    <>
      <AuthContext.Provider data={value}>{children}</AuthContext.Provider>
    </>
  );
};
