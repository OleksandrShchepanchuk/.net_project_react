import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:9442/api", // Adjust the base URL to match your ASP.NET backend
});

axiosInstance.interceptors.request.use((config)=>{
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
});

export default axiosInstance;