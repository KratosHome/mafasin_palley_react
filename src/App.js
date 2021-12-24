import React, { useState } from "react";
import "./components/Body/body.css";
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./components/AppRouter";
import Header from "./components/Header/Header";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <BrowserRouter>
      <Header />
      <AppRouters />
    </BrowserRouter>
  );
}

export default App;
