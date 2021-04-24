import axios from 'axios'
const axiosClient = axios.create({
    // baseURL: "https://duolingo-v1.herokuapp.com/",
    baseURL: "http://localhost:5000/",
});
export const setToken = (token) => {
    axiosClient.defaults.headers.common["token"] = token;
}
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token") && JSON.parse(localStorage.getItem("token"))
    config.headers.Authorization = `${token}`;
    console.log("config", config);
    return config;
})

axiosClient.interceptors.response.use((response) => {
    if (response.status === 401) {
        alert("You are not authorized");
    }
    return response;
}, (error) => {
    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }
    console.log("error", error)
    return Promise.reject(error.message);
});

export default axiosClient;