import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { GreenNav } from "./components/greenNav/GreenNav";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Signin } from "./components/signin/Signin";
import { About } from "./components/about/About";
import { Signup } from "./components/signup/Signup";
import { Contact } from "./components/contact/Contact";

function App() {
  return (
    <>
      <GreenNav />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/about" exact element={<About />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
        <Route path="/signin" exact element={<Signin />}></Route>
        <Route path="/signup" exact element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
