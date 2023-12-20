const router = require("express").Router();
const {
  createTodo,
  getTodos,
  updateTitleTodo,
  updateStatusTodo,
  deleteTodo,
} = require("../controllers/todo_controller");
const { verifyToken } = require("../middlewares/jwt");

/**
 * @swagger
 * /todo/create:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - "Todo"
 *     summary: Example to create Todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized (Token not provided or invalid)
 *       500:
 *         description: Internal Server Error
 */
router.post("/create", verifyToken, createTodo);

/**
 * @swagger
 * /todo:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - "Todo"
 *     summary: Example to get Todo
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized (Token not provided or invalid)
 *       500:
 *         description: Internal Server Error
 */
router.get("/", verifyToken, getTodos);

/**
 * @swagger
 * /todo/updateTitle:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - "Todo"
 *     summary: Example to ypdateTitle Todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized (Token not provided or invalid)
 *       500:
 *         description: Internal Server Error
 */
router.put("/updateTitle", verifyToken, updateTitleTodo);

/**
 * @swagger
 * /todo/updateStatus:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - "Todo"
 *     summary: Example to ypdateTitle Todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized (Token not provided or invalid)
 *       500:
 *         description: Internal Server Error
 */
router.put("/updateStatus", verifyToken, updateStatusTodo);

/**
 * @swagger
 * /todo/delete:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - "Todo"
 *     summary: Example to ypdateTitle Todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized (Token not provided or invalid)
 *       500:
 *         description: Internal Server Error
 */
router.delete("/delete", verifyToken, deleteTodo);

module.exports = router;
