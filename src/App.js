import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import SecondHeader from "./SecondHeader";
import Button from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import Box from '@material-ui/core/Box';
import {Helmet} from 'react-helmet';
import Background from "./Background";
import ComplexGrid from "./Image";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from "./Contact";
import Stores from "./Stores";


/*
function App() {
  return (
    <>
      <Header /> 
      <SecondHeader />
      <ComplexGrid />
      <Background />
      
      <br></br>
      <br></br>
    </>

  );
}
*/

function App() {
  return(
    <main>
      <Header /> 
      <SecondHeader />
      {/* <ComplexGrid /> */}
      {/* <Background /> */}

      <Routes>
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/' element={<ComplexGrid/>} />
        <Route path='/Stores' element={<Stores/>} />
      </Routes>
    </main>
  )
}
export default App;
