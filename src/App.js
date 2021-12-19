import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Typical from "react-typical";
import React from "react";
import About from "./Pages/About/About";


function App() {
  return (
    <div className="App">
        <Navbar/>
         <Home />
        <About/>

    </div>
  );
}

export default App;
