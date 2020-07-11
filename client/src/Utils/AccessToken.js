let token = "";

export const setAccessToken = (s) => {
  localStorage.setItem("token", s);
  token = s;
};
export const getAccessToken = () => {
  return localStorage.getItem("token");
};
export const DeleteAccessToken = () => {
  return localStorage.removeItem("token");
};
