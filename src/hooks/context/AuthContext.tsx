// create a custome hook that uses to login and signup function   
// as well as the user state using contextAPI to manage the State Globally .



// import {
//   getAuth,
//   signInWithPopup,
//   GithubAuthProvider,
//   onAuthStateChanged,
// } from "firebase/auth";



//   // traking user State :
//   useEffect(() => {
//     const unsubscribe = Auth.onAuthStateChanged((user: string[]) => {
//       if (user) {
//         setCurrentUser(user);
//       } else {
//         setCurrentUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const value = {
//     currentUser,
//     GithubSignIn,
//   };

//   return (
//     <>
//       <AuthContext.Provider data={value}>{children}</AuthContext.Provider>
//     </>
//   );
// };
