import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://newsapi.org"
});

/**
 *  Get the axios client to make HTTP requests
 * 
 * @returns axiosClient
 */
export function getAxiosClient() {
    return axiosClient;
}
