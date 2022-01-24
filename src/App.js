import React from "react";
import "./components/Body/body.css";
import AppRouters from "./components/AppRouter";
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import {AuthContext} from "./components/contecst/contecst";

function App() {
  return (
    <AuthContext.Provider>
      <BrowserRouter>
        <Header />
        <AppRouters />
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
