import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:9442/api", // Adjust the base URL to match your ASP.NET backend
//     baseURL: "http://localhost:5075/api",
// >>>>>>> baba05a05847166819a7a4a178051e84cf979bda
// 
});

axiosInstance.interceptors.request.use((config)=>{
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
});

export default axiosInstance;