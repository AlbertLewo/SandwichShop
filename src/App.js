import './App.css';
import Header from "./Header";
import SecondHeader from "./SecondHeader";
import 'react-dropdown/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import ComplexGrid from "./Image";
import { Route, Routes } from 'react-router-dom';
import Stores from "./Stores";
import React, { useState } from "react";
import Contact from './Contact.js';
import Help from './Help.js';



function App() {
  const [result, setResult] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loggedInUsername, setCurrentUsername] = useState("")

  function handleIsAuthChange(isLoggedIn) {
    if(isLoggedIn){
      console.log("Logged in = True")
    }
    else{
      console.log("Logged in = False")
    }
    setLoggedIn({ isLoggedIn })
  }


  function handleUserLoggedIn(loggedInUsername) {
    setCurrentUsername(loggedInUsername)
    console.log("The user logged in is " + loggedInUsername)
  }

  return(
    <main>
    {result && <h1>{result}</h1>}  
      <Header handleIsAuthChange={handleIsAuthChange}
      isLoggedIn={isLoggedIn}
      handleUserLoggedIn={handleUserLoggedIn}
      loggedInUsername={loggedInUsername}
      /> 

      <SecondHeader />
      <Routes>
        <Route path='/' element={<ComplexGrid isLoggedIn={isLoggedIn} loggedInUsername={loggedInUsername}/>}/>
        <Route path='/Stores' element={<Stores/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Help' element={<Help/>} />
      </Routes>
    </main>
  )
}
export default App;