import './App.css';
import Header from "./Header";
import SecondHeader from "./SecondHeader";
import Button from 'react-bootstrap';
import 'react-dropdown/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import ComplexGrid from "./Image";
import { Route, Routes } from 'react-router-dom';
import Stores from "./Stores";
import axios from "./axios";
import React, { useEffect, useState } from "react";
import Contact from './Contact.js';



function App() {
  const [result, setResult] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  function handleIsAuthChange(isLoggedIn) {
    if(isLoggedIn){
      console.log("Logged in = True")
    }
    else{
      console.log("Logged in = False")
    }
    setLoggedIn({ isLoggedIn })
  }

  

  useEffect(() => {
    axios.get("api/login").then((response) => {
      setResult(response.data);
    });
   }, []);

  return(
    <main>
    {result && <h1>{result}</h1>}  
      <Header handleIsAuthChange={handleIsAuthChange} isLoggedIn={isLoggedIn}/> 
      <SecondHeader />
      <Routes>
        <Route path='/' element={<ComplexGrid/>} />
        <Route path='/Stores' element={<Stores/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </main>
  )
}
export default App;
