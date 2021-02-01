
import React from "react"
import './App.css';
import Profilphoto from "./Component/Profile/ProfilPhoto";
import Name from "./Component/Profile/FullName";
import Addresse from "./Component/Profile/Address";

function App()   {
  return (
    <div className="App">
      <div className="Carte">
        <div> <Profilphoto/></div>
        <div><Name/></div>
        <div><Addresse/></div>
      </div>
      
    </div>
  );
}

export default App;
