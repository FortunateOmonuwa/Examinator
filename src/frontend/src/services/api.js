import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use(
//   (config) => {
//     const user = localStorage.getItem("user");
//     if (user) {
//       const userData = JSON.parse(user);
//       if (userData.token) {
//         config.headers.Authorization = `Bearer ${userData.token}`;
//       }
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem("user");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

export { api };
