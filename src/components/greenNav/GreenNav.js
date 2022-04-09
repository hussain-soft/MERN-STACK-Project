import React from "react";
import "./GreenNav.css";

export const GreenNav = () => {
  return (
    <>
      <section className="gnav-container">
        <div className="date-div">
          <img src="https://cdn-icons-png.flaticon.com/128/1827/1827444.png" />
          <p>MONDAY, 4 OCTOBER 2021</p>
        </div>
        <div className="socialmedia-div">
          <ul className="socialmedia-list">
            <li className="icon">
              <a href="/">
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png"></img>
              </a>
            </li>
            <li className="icon">
              <a href="#">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384088.png"></img>
              </a>
            </li>
            <li className="icon">
              <a href="#">
                <img src="https://cdn-icons-png.flaticon.com/128/2111/2111392.png"></img>
              </a>
            </li>
            <li className="icon">
              <a href="#">
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384089.png"></img>
              </a>
            </li>
            <li className="icon">
              <a href="#">
                <img src="https://cdn-icons-png.flaticon.com/128/733/733635.png"></img>
              </a>
            </li>
            <li className="icon">
              <a href="#">
                <img src="https://cdn-icons-png.flaticon.com/128/1384/1384086.png"></img>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
