const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hellow world from server router js");
});

// User Signup route

router.post("/signup", async (req, res) => {
  // console.log(req.body);
  // res.json({ message: req.body });
  const { name, phone, cnic, password } = req.body;
  if (!name || !phone || !cnic || !password) {
    return res.status(422).json({ error: "filled the form properly" });
  }

  try {
    const userExist = await User.findOne({ phone: phone });

    if (userExist) {
      return res.status(422).json({ error: "Account Already Exist" });
    }

    const user = new User({ name, phone, cnic, password });
    //yaha pe
    await user.save();

    res.status(201).json({ message: "Successfully Get your response" });
  } catch (err) {
    console.log(err);
  }
});

//User Signin route

router.post("/signin", async (req, res) => {
  try {
    let token;
    const { phone, password } = req.body;

    if (!phone || !password) {
      return res.status(400).json({ error: "plz filled the data" });
    }

    const userLogin = await User.findOne({ phone: phone });

    // console.log(userLogin);
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Password" });
      } else {
        res.json({ message: "user Sign Successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid phone" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
