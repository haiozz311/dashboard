import axios from 'axios'
const axiosClient = axios.create({
    baseURL: "https://duolingo-v1.herokuapp.com/",
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
export default axiosClient;