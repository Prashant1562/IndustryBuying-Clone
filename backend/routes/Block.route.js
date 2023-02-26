const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BlockModel } = require("../model/block.model");

const BlockRouter = express.Router();

//all users



BlockRouter.get("/", async (req, res) => {

  const notes = await BlockModel.find()
  res.send(notes);
});

//register

BlockRouter.post("/register", async (req, res) => {
  const { name, email, pass, avatar, age, gender } = req.body;
  let logindata = await BlockModel.find({ email: email })
  try {
    if (logindata.length !== 0) {
     return res.send({ massege: " Register Already Exist" });
    }




    bcrypt.hash(pass, 5, async (err, hash) => {
      // Store hash in your password DB.
      if (err) {
        res.send({ massege: "something went wrong", error: err.message });
      }

      else {
        const user = new BlockModel({ name, email, pass: hash, avatar, age, gender });
        await user.save();
        res.send({ massege: "New user register" });
      }
    });




  } catch (error) {
    res.send({ massege: "something went wrong" });
  }


});

//login


BlockRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await BlockModel.find({ email });
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

BlockRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id
  await BlockModel.findByIdAndDelete({_id:id})
  res.send({ massege: `Product ${id} has been deleted` });

});

module.exports = {
  BlockRouter,
};
