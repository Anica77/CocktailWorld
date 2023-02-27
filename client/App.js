import React from "react";

import Navbar from "./components/Navbar";
import ScrollButton from "./components/ScrollToTop";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <ScrollButton />
    </div>
  );
};

export default App;
