import * as axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

export const authAPI = {
  login(email, password) {
    return instance.post(`/login`, {
      email,
      password,
    });
  },
  logout() {
    return instance.delete(`/login`);
  },
};
