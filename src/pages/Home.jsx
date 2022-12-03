import React from "react";
import { Link } from "react-router-dom";

import "../style/home.css";

function App() {
  return (
    <>
      <div className="home-page-container">
        <h1>WELCOME</h1>
        
        <Link to="/users">
          <button>Get Started</button>
        </Link>
      </div>
    </>
  );
}

export default App;