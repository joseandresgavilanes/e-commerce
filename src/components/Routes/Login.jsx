import React from 'react'
import "../login/login.css"
import { useEffect, useState } from 'react'
import FormLogout from '../login/FormLogOut'
import FormLogin from '../login/FormLogin'


const Login = () => {

  const [isLogged, setIsLooged] = useState()

  useEffect(() => {
    setIsLooged(localStorage.getItem('token'))
  }, [])

  return (
    <main className='login'>
      {
        isLogged ?
          <FormLogout setIsLooged={setIsLooged} isLogged={isLogged} />
        :
          <FormLogin setIsLooged={setIsLooged} />
      }
    </main>
  )
}


export default Login