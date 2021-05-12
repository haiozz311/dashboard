import axios from 'axios'
const axiosClient = axios.create({
    // baseURL: "https://duolingo-v1.herokuapp.com/",
    baseURL: "http://localhost:5000/",
});

axiosClient.interceptors.request.use((config) => {
    let token = JSON.parse(localStorage.getItem("token"));
    config.headers.token = token;
    console.log("config", config)
    return config;
})

axiosClient.interceptors.response.use((response) => {
    if (response.status === 401) {
        alert("You are not authorized");
    }
    console.log("response", response)
    return response;
}, (error) => {
    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }
    console.log("error", error)
    return Promise.reject(error.message);
});

export default axiosClient;