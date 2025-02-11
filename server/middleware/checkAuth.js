const { models } = require("mongoose");

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).send("Access Denied");
  }
};

module.exports = isLoggedIn;
