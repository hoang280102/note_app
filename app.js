const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const main = require("./server/routes/index.js");
const dashboard = require("./server/routes/dashboard.js");
const database = require("./server/config/db.js");
const auth = require("./server/routes/auth.js");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");
require("dotenv").config();

const app = express();
const port = 3001 || process.env.PORT;

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URL,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);
app.use(methodOverride("_method"));
database();

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", main);
app.use("/", dashboard);
app.use("/", auth);

app.get("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(port, (req, res) => {
  console.log(`listening on http://localhost:${port}`);
});
