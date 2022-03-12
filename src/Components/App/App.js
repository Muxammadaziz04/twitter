import React from "react";
import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";
import Home from "../home/Home";
import Login from "../Login/Login";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={localStorage.getItem('token') ? <Navigate to='/home' /> : <Login />}/>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
