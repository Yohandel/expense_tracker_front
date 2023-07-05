import React from 'react'
import { MainLayout } from '../../styles/Layout'
import Form from '../Forms/Form'
import { useGlobalContext } from '../../context/globalContext'


const Login = () => {
  const { logIn } = useGlobalContext()
  return (
    <MainLayout>
      <Form />
      <button onClick={() => logIn({ email: 'eJimenez@gmail.com', password: '123456789' })}>LOGIN</button>
    </MainLayout>
  )
}

export default Login