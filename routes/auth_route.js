const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/auth_controller");


/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags:
 *     - "Auth"
 *     summary: example to register
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *                pin:
 *                  type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
router.post("/register", register);

router.get("/login", (req, res) => {
  res.render("login.ejs");
} )

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *     - "Auth"
 *     summary: example to login
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                identifier:
 *                  type: string
 *                pin:
 *                  type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
router.post("/login", login);

router.get("/logout", logout)

module.exports = router;