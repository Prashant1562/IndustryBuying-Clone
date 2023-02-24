const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("./../model/User.model");

const UserRouter = express.Router();

//all users


/**
* @swagger
* components:
*   schemas:
*       User:
*           type: object
*           properties:
*               name:
*                   type: string
*                   description: The user name
*               pass:
*                    type: string
*                    description: The user email
*               email:
*                     type: string
*                     description: The user email
*               avatar:
*                     type: string
*                     description: The user avatar
*               age:
*                     type: number
*                     description: The user age
*               number:
*                     type: number
*                     description: The user number
*               gender:
*                     type: string
*                     description: The user gender
*/


/**
 * @swagger
 * /users:
 *  get:
 *      summary: This will get all the user data from the database
 *      tags: [User]
 *      responses:
 *          200:
 *              description: The list of all the users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          item:
 *                              $ref: "#/components/schemas/User"
 *
 */

/**
 * @swagger
 * /users/register:
 *  post:
 *      summary: This is to post a new user to the database.
 *      tags: [User]
 *
 */


/**
 * @swagger
 * /users/delete/:id:
 *  delete:
 *      summary: This is to post a new user to the database.
 *      tags: [User]
 *
 */

UserRouter.get("/", async (req, res) => {

  const notes = await UserModel.find()
  res.send(notes);
});

//register

UserRouter.post("/register", async (req, res) => {
  const { name, email, pass, avatar, age, gender } = req.body;
  let logindata = await UserModel.find({ email: email })
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
        const user = new UserModel({ name, email, pass: hash, avatar, age, gender });
        await user.save();
        res.send({ massege: "New user register" });
      }
    });




  } catch (error) {
    res.send({ massege: "something went wrong" });
  }


});

//login


UserRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await UserModel.find({ email });
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

UserRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id
  await UserModel.findByIdAndDelete({_id:id})
  res.send({ massege: `Product ${id} has been deleted` });

});

module.exports = {
  UserRouter,
};
