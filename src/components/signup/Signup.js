import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  // -----------UseState Hooks Starts-------

  // front-end conn with backend using fetch api for sign-up
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: "",
    phone: "",
    cnic: "",
    password: "",
  });
  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, phone, cnic, password } = user;
    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        cnic,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Successfullly Registration");
      console.log("successfully  Registration");
      navigate("/signin");
    }
  };
  // --------UseState Hooks End----------
  return (
    <>
      <div className="form-div">
        <form method="POST" className="register-form" id="register-form">
          <div className="img-div">
            <img src="https://cdn-icons-png.flaticon.com/512/359/359858.png" />
          </div>
          <h1>Signup</h1>
          <div class="txt_field">
            <label htmlFor="name">
              <i class="fas fa-user"></i>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={user.name}
              onChange={handleInputs}
              required
            />
          </div>
          {/* <div class="txt_field">
            <label>Last Name </label>
            <span></span>
            <input type="text" name="" id="" value={user.name}
              onChange={handleInputs} required />
          </div> */}
          <div class="txt_field">
            <label>
              <i class="fas fa-phone"></i>
            </label>
            <span></span>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone"
              value={user.phone}
              onChange={handleInputs}
              required
            />
          </div>
          {/* <div class="txt_field">
            <i class="fas fa-envelope"></i>
            <span></span>
            <input type="text" name="" id="" placeholder="e-mail" value={user.name}
              onChange={handleInputs} required />
          </div> */}
          <div class="txt_field">
            <label>
              <i class="fas fa-id-card"></i>
            </label>
            <span></span>
            <input
              type="text"
              name="cnic"
              id="cnic"
              placeholder="cnic no"
              value={user.cnic}
              onChange={handleInputs}
              required
            />
          </div>
          <div class="txt_field">
            <label>
              <i class="fas fa-lock"></i>{" "}
            </label>
            <span></span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={user.password}
              onChange={handleInputs}
              required
            />
          </div>
          <div class="submit">
            <input
              type="submit"
              name="signup"
              id="signup"
              value="Submit"
              onClick={PostData}
            />
          </div>
          <div>
            <p>
              or already have
              <a href="/signin"> account?</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
