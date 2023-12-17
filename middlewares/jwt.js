const { ResponseTemplate } = require("../helper/template_helper");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    let resp = ResponseTemplate(null, "not authorized", null, 400);
    res.json(resp);
    return;
  }

  jwt.verify(authorization, "secret", (err, user) => {
    if(err) {
      let resp = ResponseTemplate(null, "invalid token", null, 400);
      res.json(resp);
      return;
    }
    req.user = user;
    next();
  })
};

module.exports = {
  verifyToken
}
