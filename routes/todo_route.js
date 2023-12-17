const router = require("express").Router();
const {
  createTodo,
  getTodos,
  updateTitleTodo,
  updateStatusTodo,
  deleteTodo,
} = require("../controllers/todo_controller");
const { verifyToken } = require("../middlewares/jwt");

router.post("/create", verifyToken, createTodo);
router.get("/get", verifyToken, getTodos);
router.put("/updateTitle", verifyToken, updateTitleTodo);
router.put("/updateStatus", verifyToken, updateStatusTodo);
router.delete("/delete", verifyToken, deleteTodo);

module.exports = router;
