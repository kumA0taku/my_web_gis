import "./App.css";
import React from 'react';
import Menu from "./Components/TapComponents/Menu";
import Tabs from "./Components/TapComponents/Taps";

const App = ()=> {
  return (
    <div className="App">
      <div >
      <Menu/>
      <Tabs />
      </div>
    </div>
  );
}
export default App;