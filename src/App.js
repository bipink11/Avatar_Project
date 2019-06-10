import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Bipin from './Component/Bipin';
//import Sohan from './Component/Sohan';
import img1 from '../src/n.jpg'
import img2 from '../src/birds.jpg'
import Image from './Component/Image'
function App() {
  return (
    <div>
      <Image balike={img1}/><br/>
      <Image balike={img2}/><br/>
       {/* <Bipin camp="120"/>
       <Sohan camp = "116"/>  */}
    </div>
  );
}

export default App;
