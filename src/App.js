import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './component/asset/css/style.css'
import 'react-bootstrap'
import Header from "./component/Header/Header";
import Slider from "./component/Header/Slider.js"
import Routes from './header.js/routes'
import Cards  from "./component/Header/cards.js"
import Footer from "./component/Footer/footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;