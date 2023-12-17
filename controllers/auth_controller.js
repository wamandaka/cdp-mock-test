const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
const { ResponseTemplate } = require("../helper/template_helper");

const register = async (req, res) => {
  try {
    let { name, email, password, pin } = req.body;

    let existUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existUser) {
      let resp = ResponseTemplate(null, "Email sudah terdaftar", true, 400);
      res.json(resp);
      return;
    }

    let encryptedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: encryptedPassword,
        pin: parseInt(pin),
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
        pin: true,
      },
    });

    // const token = jwt.sign(
    //   {
    //     id: user.id,
    //     email: user.email,
    //   },
    //   "secret"
    // );

    let resp = ResponseTemplate(user, "berhasil daftar", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    // let resp = ResponseTemplate(null, "internal server error", error, 500);
    // res.json(resp);
    console.log(error);
    return;
  }
};

const login = async (req, res) => {
  let { identifier, pin } = req.body;

  try {
    let user = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: identifier,
          },
          {
            name: identifier,
          }
        ]
      },
    });

    if (!user) {
      let resp = ResponseTemplate(null, "User not found", null, 400);
      res.json(resp);
      return;
    }
    if (user.pin != pin) {
      let resp = ResponseTemplate(null, "Pin not match", null, 400);
      res.json(resp);
      return;
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      "secret"
    );
    let resp = ResponseTemplate(token, "login success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    // console.log(error);
    return;
  }
};

module.exports = {
  register,
  login,
};
