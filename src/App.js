import React, { useEffect, useState } from "react";
import "./components/Body/body.css";
import AppRouters from "./components/AppRouter";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <Header />
      <AppRouters />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
