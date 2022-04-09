import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

export const Signin = () => {
  // front-end conn with backend using fetch api for sign-up

  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone,
        password,
      }),
    });
    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else {
      window.alert("Successfullly login");
      console.log("successfully login");
      navigate("/");
    }
  };
  return (
    <>
      <div className="form-div">
        <form method="POST" className="signin-form" id="signin-form">
          <div className="img-div">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828499.png" />
          </div>
          <h1>Login</h1>
          <div class="txt_field">
            <label>
              <i class="fas fa-phone"></i>
            </label>
            <span></span>
            <input
              type="Number"
              name="phone"
              id="phone"
              placeholder="phone no"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div class="txt_field">
            <label>
              <i class="fas fa-lock"></i>
            </label>
            <span></span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="submit">
            <input type="submit" value="Login" onClick={loginUser} />
          </div>
          <div>
            <p>
              <a href="/signup">Signup</a> or <a href="#">forgot Password</a>
            </p>
          </div>
          {/* <div class="txt_field">
            <label>First Name </label>
            <span></span>
            <input type="text" required />
          </div>
          <div class="txt_field">
            <label>Last Name </label>
            <span></span>
            <input type="text" required />
          </div>
          <div class="txt_field">
            <label>Mobile No.</label>
            <span></span>
            <input type="text" required />
          </div> */}
          {/* <div class="txt_field">
            <label> CNIC No.</label>
            <span></span>
            <input type="text" required />
          </div>
          <div class="txt_field">
            <label> CNIC No.</label>
            <span></span>
            <input type="text" required />
          </div>
          <div class="txt_field">
            <label>Oath</label>
            <span></span>
            <input type="text" required />
          </div>
          <div class="txt_field">
            <label>User Img.</label>
            <span></span>
            <input type="file" required />
          </div> */}
        </form>
      </div>
    </>
  );
};
