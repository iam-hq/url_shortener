import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export const useLinks = (token) => {
    const fetchLinks = axios.get(`${process.env.REACT_APP_BACKEND_URL}/urls`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    return useQuery({
        queryKey: ['links'],
        queryFn: fetchLinks,
    })
}