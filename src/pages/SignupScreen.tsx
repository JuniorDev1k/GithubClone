import React,{FormEvent, useState} from "react";
import { useAuth } from "../hooks/context/AuthContext";
import {User} from '../hooks/context/AuthContext'
const SignupScreen: React.FC = () => {
  const {FirebaseSignUp} = useAuth()
  const [userInput,setUserInput] = useState<User | null>({
    email:'',
    password:''
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     // Get form values
    

      try {
         await FirebaseSignUp('terstUser2@gmail.com','passwordNigga')



      } catch (error) {
        console.log('error logging in to our website');
        
      }

  }
  return<>
  
   <main>
  <h1>SignUp To Our Website</h1>
  <form action="" onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email">Enter your Email</label>
      <input type="email" name="email" value={userInput?.email} onChange={(e:any) => setUserInput({email:e.target.value})} />
    </div>
    <div>
      <label htmlFor="password">Enter your Password</label>
      <input type="password" name="password" id="password" />
    </div>
    <button type='submit' >SignUp</button>
  </form>
</main>;
  </>
};

export default SignupScreen;
