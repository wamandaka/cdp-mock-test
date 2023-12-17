const express = require("express");
const router = express.Router();
const auth = require("./auth_route");
const todo = require("./todo_route");

router.use("/auth", auth);
router.use("/todo", todo)

module.exports = router;