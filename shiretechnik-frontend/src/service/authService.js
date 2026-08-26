import axios from "axios";
import { toast } from "sonner";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

API.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const data = error.response?.data;

    if (status === 401 && sessionStorage.getItem("token")) {
      window.dispatchEvent(new Event("forceLogout"));
      toast.error("Session expired. Please login again.");
      window.location.href = "/";
      return Promise.reject(error);
    }

    if (data?.errors && Object.keys(data.errors).length > 0) {
      Object.values(data.errors).forEach((msg) => toast.error(msg));
    } else {
      toast.error(data?.message || "Something went wrong.");
    }

    return Promise.reject(error);
  }
);

export async function sendOTP(email) {
  const response = await API.post("/auth/login", { email });
  return response.data;
}

export async function verifyOTP(email, otp) {
  const response = await API.post("/auth/verify", { email, otp });
  return response.data;
}

export async function register(data) {
  const response = await API.post("/auth/register", data);
  return response.data;
}

export async function submitContact(data) {
  const response = await API.post("/contact", data);
  return response.data;
}