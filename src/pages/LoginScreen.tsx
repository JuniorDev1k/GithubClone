import React from 'react'

type Props = {}
import { useAuth } from '../hooks/context/AuthContext'
 
const  LoginScreen = () => {
  const {FirebaseLogin,user} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();

      try {
         await FirebaseLogin(email,password)



      } catch (error) {
        console.log('error logging in to our website');
        
      }

  }
  return (
    <main>
      <h1>Login To Our Website</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Enter your Email</label>
          <input type="email" name="email" id="" />
        </div>
        <div>
          <label htmlFor="">Enter your Password</label>
          <input type="password" name="password" id="" />
        </div>
        <button type='submit' >SignIn</button>
      </form>
    </main>
  )
}

export default LoginScreen