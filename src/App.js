import React from 'react';
import './fonts/stylesheet.css';
import './styles/reset.css';
import Header from "./components/header/Header";
import MainContent from "./components/main/MainContent";

function App() {
  return (
      <div>
        <Header/>
        <MainContent/>
    </div>
  );
}

export default App;
