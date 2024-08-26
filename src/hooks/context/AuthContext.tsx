// create a custome hook that uses to login and signup function   
// as well as the user state using contextAPI to manage the State Globally .

import { createContext ,ReactNode,useContext, useEffect,useState } from "react"; 
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import {Auth} from '../../firebase/config'

export type User = {
    email:string;
    password:string;
}

interface AuthContextType {
user: null | User ;
FirebaseLogin: (email:string, passowrd:string) => Promise<any> 
FirebaseSignUp:(email:string, passowrd:string) => Promise<any>
LogOut:() => Promise<void>
}

// creating the context : 
export const AuthContext = createContext<AuthContextType | undefined >(undefined)

// creating the custom hook for auth :

export const useAuth  = ():AuthContextType =>  {
    const context = useContext(AuthContext)
    if(context === undefined) {
        throw new Error ("useAuth must be used within an AuthProvider")
    }
    return context
}

interface AuthProviderProps {
    children : ReactNode
}


export const AuthProvider:React.FC<AuthProviderProps> = ({children}) => {
    
    const [user,setUser] = useState<any | null>(null)

    const FirebaseSignUp = (email:string, password:string) => {

         return  createUserWithEmailAndPassword(Auth,email,password)
    }
    const FirebaseLogin =  (email:string, password:string) => {
    
          return signInWithEmailAndPassword(Auth,email,password)
              
    } 

    // tracking the user state ( user data )

        useEffect(() => {
            const unsubscribe =onAuthStateChanged(Auth,(user) => {
                setUser(user)
            })
            return () =>  unsubscribe()
        },[])

        const LogOut = () => {
                return signOut(Auth)    
        }


        const Value:AuthContextType = {
            user ,
            FirebaseLogin, 
            FirebaseSignUp, 
            LogOut,
            
        }


    return <>
        <AuthContext.Provider value={Value}>{children}</AuthContext.Provider>    

</>
}








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
