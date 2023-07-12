import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/login/login"
import { useGlobalContext } from "./context/globalContext"
import { MainLayout } from "./styles/Layout"


export function App() {


    const  token  = sessionStorage.getItem('token')
    if (!token) {
      { return <Login /> }
    }


  return (
    <MainLayout>
      <Home />
    </MainLayout>
  )

}


