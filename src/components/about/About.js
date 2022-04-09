import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./About.css";

export const About = () => {
  //Request to About page at server/auth.js k last ma

  const navigate = useNavigate();

  const redirectUser = async (e) => {
    e.preventDefault();

    //    navigate("/");
  };

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      // const data = await res.json();

      if (res.status === 401) {
        window.alert("Invalid Credentials");
        console.log("Invalid Credentials");
      }
      //console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // navigate("/signin");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="about-container" onLoad={redirectUser}>
        <form method="GET" className="about-form">
          <div className="img-container">
            <img src="https://picsum.photos/536/354" alt="error-user-img"></img>
          </div>

          <div className="detail-container">
            <div className="">
              <h2>Saqib Ali</h2>
              <br />
              <h3>User</h3>
              <br />
            </div>
            <div className="">
              <ul>
                <li>
                  <a href="https://www.youtube.com/" target="blank">
                    <i class="fab fa-facebook"></i> facebook
                  </a>
                </li>

                <li>
                  <a href="https://www.youtube.com/" target="blank">
                    <i class="fab fa-instagram-square"></i> instagram
                  </a>
                </li>

                <li>
                  <a href="https://www.youtube.com/" target="blank">
                    <i class="fab fa-youtube"></i> youtube
                  </a>
                </li>
                <br />
              </ul>
            </div>
            <div className="row-carrier">
              <div className="row">
                <label>
                  <i class="fas fa-id-badge"></i> User id
                </label>
              </div>
              <div className="row-opp">
                <p>1234556</p>
              </div>
              <br />
              <div className="row">
                <label>
                  <i class="fas fa-user"></i> Name
                </label>
              </div>
              <div className="row-opp">
                <p>Saqib</p>
              </div>
              <br />
              <div className="row">
                <label>
                  <i class="fas fa-id-card"></i> Cinc
                </label>
              </div>
              <div className="row-opp">
                <p>1234556</p>
              </div>
              <br />
              <div className="row">
                <label>
                  <i class="fas fa-city"></i> Provience
                </label>
              </div>
              <div className="row-opp">
                <p>islamabad</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
