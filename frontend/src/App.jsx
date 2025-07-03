import { Route, Routes } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Home from "../pages/Home"
import CardDetails from "../pages/CardDetails"
import { useState } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlaceOrder from "../pages/PlaceOrder"


function App() {
  const[cardItems,setCardItems]= useState([])

  return (
    <>
    <ToastContainer position='top-center' theme="dark"/>
    <Header cardItems={cardItems}/>

    <Routes>
       <Route path="/" element={<Home/>} />
      <Route path="/search" element={<Home/>} />
      <Route path="/product/:id" element={<CardDetails cardItems={cardItems} setCardItems={setCardItems}/>} />
      <Route path="/cart" element={<PlaceOrder cardItems={cardItems} setCardItems={setCardItems}/>} />


    </Routes>

    <Footer/>

      
    </>

  )
}

export default App
