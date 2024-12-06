import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchUrls = async (token) => {
    const response = await axios.get(`${API_URL}/urls`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    console.log(response.data)
    return response.data;
}

export const fetchUrl = async (token, id) => {
    const response = await axios.get(`${API_URL}/urls/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export const createUrl = async (token, body) => {
    const response = await axios.post(`${API_URL}/urls`, body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export const updateUrl = async (token, body, id) => {
    const response = await axios.put(`${API_URL}/urls/${id}`, body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export const deleteUrl = async (token, id) => {
    const response = await axios.delete(`${API_URL}/urls/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}