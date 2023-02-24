const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AdminUserModel } = require("../model/AdminUser.model");

const AdminUserRouter = express.Router();

//all users




AdminUserRouter.get("/", async (req, res) => {
  const notes = await AdminUserModel.find();
  res.send(notes);
});

//register

AdminUserRouter.post("/register", async (req, res) => {
  const { name, email, pass, avatar,age,gender } = req.body;

  let addminlogindata = await AdminUserModel.find({ email: email })

  try {
    if (addminlogindata.length !== 0) {
      return res.send({ massege: " Register Already Exist" });
    } else {


    bcrypt.hash(pass, 5, async (err, hash) => {
      // Store hash in your password DB.
      if (err) {
        res.send({ massege: "something went wrong", error: err.message });
      } else {
        const adminuser = new AdminUserModel({ name, email, pass: hash,avatar,age,gender });
        await adminuser.save();
        res.send({ massege: "New user register" });
      }
    });

  }

  } catch (error) {
    res.send({ massege: "something went wrong" });
  }
});

//login


AdminUserRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await AdminUserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(pass, user[0].pass, (err, result) => {
        // result == true
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, "masai");

          res.send({ massege: "login successful", token: token });
        } else {
          res.send({ massege: "something went wrong" });
        }
      });
    } else {
      res.send({ massege: "wrong coredentials" });
    }
  } catch (error) {
    res.send({ massege: "something went wrong" });
  }
});

AdminUserRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id
  await AdminUserModel.findByIdAndDelete({_id:id})
  res.send({ massege: `Product ${id} has been deleted` });

});
module.exports = {
  AdminUserRouter,
};
