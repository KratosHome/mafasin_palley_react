import React, {useState} from 'react';
import "./Body/body.css"
import Header from "./Header/Header";
import {BrowserRouter} from "react-router-dom";
import Main from "./Main/Main";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Main / >
        </BrowserRouter>
);
}

export default App;
