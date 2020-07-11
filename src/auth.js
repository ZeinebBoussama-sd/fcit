const { sign } = require("jsonwebtoken");

const createAccessToken = (user) => {
  return sign({ code_IP: user.code_IP }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};
module.exports = createAccessToken;

const createRefreshToken = (user) => {
  return sign({ code_IP: user.code_IP }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};
module.exports = createRefreshToken;
