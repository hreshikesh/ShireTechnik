import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "https://sandebtech.com/api";

const API = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

API.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * Submits user info before allowing a PDF download.
 */
export async function submitDownloadInfo(payload) {
  if (!payload?.name?.trim()) throw new Error("Name is required.");
  if (!payload?.email?.trim()) throw new Error("Email is required.");
  if (!payload?.documentTitle?.trim())
    throw new Error("Document title is required.");

  const response = await API.post("/download/save", {
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone?.trim() || null,
    documentTitle: payload.documentTitle.trim(),
  });

  if (response.data !== true && response.status !== 200 && response.status !== 201) {
    throw new Error("Server did not confirm the save operation.");
  }

  return response.data;
}