import {useState} from "react";

export default function useForm(initialState = null) {
    const [data,setData] = useState(initialState);

    const onChange = (e) => {
        if (e.target?.files && e.target?.files?.length > 0) {
            setData({ ...data, [e.target.name]: e.target.files[0] });
            return;
        }
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return [data, onChange];
}