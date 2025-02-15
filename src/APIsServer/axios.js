import axios from "axios";

// Axios instance with request interceptor
export const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: { "Content-Type": "application/json" },
});


