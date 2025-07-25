"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/api/auth/confirm")
      .then((res) => {
        if (res.data?.response?.isSuccessful) {
          setUser(res.data.response.body);
        }
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const login = async (email, password) => {
    try {
      const res = await api.post("/api/auth/login", { email, password });
      if (res.data.response.isSuccessful) {
        const userInfo = res.data.response.body;
        setUser(userInfo);
      } else {
        throw new Error(res.data.response.message || "Login failed");
      }
    } catch (err) {
      const errorResponse = err.response?.data?.response;

      // Check if account is locked
      if (errorResponse?.resultCode === 403 && errorResponse?.body?.isLocked) {
        // Create a special error object for account locked
        const accountLockedError = new Error(errorResponse.message);
        accountLockedError.isAccountLocked = true;
        accountLockedError.lockedUntil = errorResponse.body.lockedUntil;
        throw accountLockedError;
      } else if (errorResponse?.error === "Unverified") {
        throw errorResponse?.error;
      } else if (errorResponse?.error === "Invalid Email or Password") {
        throw errorResponse?.error;
      }

      throw new Error(errorResponse?.message || err.message || "Login failed");
    }
  };

  const logout = async () => {
    // console.log(user);
    await api.post(`/api/auth/logout/${user.id}`);
    setUser(null);
  };

  // export const AuthProvider = ({ children }) => {
  //   const [user, setUser] = useState(null);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const storedUser = localStorage.getItem("user");
  //     if (storedUser) {
  //       setUser(JSON.parse(storedUser));
  //     }
  //     setLoading(false);
  //   }, []);

  //   const login = async (email, password) => {
  //     try {
  //       const response = await api.post("/api/auth/login", { email, password });
  //       // console.log(response);
  //       if (response.data.response.isSuccessful) {
  //         const userData = response.data.response.body;
  //         setUser(userData);
  //         localStorage.setItem("user", JSON.stringify(userData));
  //       } else {
  //         throw new Error(response.data.response.message || "Login failed");
  //       }
  //     } catch (error) {
  //       console.error("Login error:", error);
  //       throw (
  //         error.response?.data?.response?.message ||
  //         error.message ||
  //         "Login failed"
  //       );
  //     }
  //   };

  const register = async (firstname, lastname, email, password) => {
    try {
      const response = await api.post("/api/examiner", {
        firstname,
        lastname,
        email,
        password,
      });

      console.log("Registration Response from server:", response);

      return response.data.response;
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.response?.message;

      console.log("Registration error:", error);

      if (status === 409) {
        return { status, message };
      }

      console.error("Registration error:", error);

      throw new Error(message || error.message || "Registration failed");
    }
  };
  
  // const logout = () => {
  //   setUser(null);
  //   localStorage.removeItem("user");
  // };
  // const verify = async (id, token) => {
  //   try {
  //     const response = await api.post("/api/account/verify", { id, token });
  //     if (response.data.response.isSuccessful) {
  //       return true;
  //     } else {
  //       throw new Error(response.data.response.message || "Verification failed");
  //     }
  //   } catch (error) {
  //     console.error("Verification error:", error);
  //     throw (
  //       error.response?.data?.response?.message ||
  //       error.message ||
  //       "Verification failed"
  //     );
  //   }
  // };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
