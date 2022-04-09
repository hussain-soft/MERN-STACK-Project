import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="heading">
          <h1>DSS MOON</h1>
        </div>
        <div className="list-container">
          <ul>
            <li className="items item-1">
              <a href="/">home</a>
            </li>
            {/* <li className="items item-2">
              <a href="#article">article</a>
            </li>
            <li className="items item-3">
              <a href="#objective">objective</a>
            </li>
            <li className="items item-4">
              <a href="#about">about</a>
            </li> */}
            <li className="items item-5">
              <a href="/about">About</a>
            </li>
            <li className="items item-6">
              <a href="/contact">Contact</a>
            </li>
            <li className="items item-7">
              <a href="/signin">Login</a>
            </li>
            <li className="items item-8">
              <a href="/signup">Signup</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
