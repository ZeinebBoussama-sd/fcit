const sendRefreshToken = (res, token) => {
  res.cookie("token", token, {
    httpOnly: false,
    path: "/refresh_token",
  });
};
module.exports = sendRefreshToken;
