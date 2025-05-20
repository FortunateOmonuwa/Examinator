import axios from "axios"

// Create an axios instance with default config
const api = axios.create({
  baseURL: "http://localhost:3000", // Change this to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
})

// Add a request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem("user")
    if (user) {
      const userData = JSON.parse(user)
      if (userData.token) {
        config.headers.Authorization = `Bearer ${userData.token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Add a response interceptor to handle errors
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("user")
      window.location.href = "/login"
    }
    return Promise.reject(error)
  },
)

export { api }
