import {useState} from "react";
import axios from "axios";

export function usePost(url, config = {}) {
    const [resData, setData] = useState(null);
    const [error, setError] = useState(null);

    const post = (body = null) => {
        axios.post(url, body, config).then(res => setData(res.data)).catch(err => setError(err));
    }

    return [resData, error, post];
}