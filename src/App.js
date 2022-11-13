import classNames from "classnames";
import "./styles/webdev-project2.scss";
import "./styles/webdev-project2-css-variables.scss";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from 'react';
import ReactDOM from 'react-dom/client';

//import Content from './components/Content';

function App() {
  return (
    <>
      <Header />
      
       <Content />
      <NavBar />
      <Footer />
   </> 
  );
}

export default App;
