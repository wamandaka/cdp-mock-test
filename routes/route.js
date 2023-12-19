const express = require("express");
const router = express.Router();
const auth = require("./auth_route");
const todo = require("./todo_route");
const { verifyToken } = require("../middlewares/jwt");

router.use("/auth", auth);
router.use("/todo", todo)
router.get("/dashboard", verifyToken, (req, res) => {
  res.render("dashboard.ejs", { user: req.session.user, token: req.session.user.id });
})

module.exports = router;