require("dotenv").config();
const express = require("express");
const session = require("express-session");
const app = express();
const morgan = require("morgan");
const router = require("./routes/route");
const port = process.env.PORT || 3000;
const ejs = require("ejs");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const swaggerDef = require("./helper/swagger_template.helper.js");
const swaggerSpec = swaggerJsDoc(swaggerDef);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/", router);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));


app.use(
  session({
    secret: "rahasiasesi",
    resave: false,
    saveUninitialized: true,
  })
);

app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.send("Hallo, Selamat datang!");
  // res.render("login.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
