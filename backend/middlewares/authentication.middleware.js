const jwt = require("jsonwebtoken");

const UsreAuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, "masai", (err, decoded) => {
      if (decoded) {
        console.log(decoded)
        req.body.user=decoded.userID
        next();
      } else {
        res.send({ massege: "Please Login" });
      }
    });
  } else {
    res.send({ massege: "Please Login" });
  }
};

module.exports = {
  UsreAuthMiddleware,
  };
