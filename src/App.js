import React, { useEffect, useState } from "react";
import "./components/Body/body.css";
import AppRouters from "./components/AppRouter";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import ScrollToTop from "./components/UL/ScrolToTop/SkrolTotTp";
import { createStore } from "redux";
import rootReducer from "./redux/rootReduser";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

function App() {


  return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <AppRouters />
          <Footer />
        </BrowserRouter>
      </Provider>
  );
}

export default App;
