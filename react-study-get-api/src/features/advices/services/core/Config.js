import axios from "axios";

const baseURL = "https://api.adviceslip.com"

export const Api = () => {
    return axios.create({
        baseURL 
    });
}