import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/login/login"
import { useGlobalContext } from "./context/globalContext"
import { MainLayout } from "./styles/Layout"
import { useEffect } from "preact/hooks"


export function App() {
  const {token} = useGlobalContext()
  
    if (!token) {
      { return <Login /> }
    }

  return (
    <MainLayout>
      <Home />
    </MainLayout>
  )

}


