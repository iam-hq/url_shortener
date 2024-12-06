import {useState} from "react";

export default function useForm(initialState = null) {
    const [formData,setData] = useState(initialState);

    const onChange = (e) => {
        if (e.target?.files && e.target?.files?.length > 0) {
            setData({ ...formData, [e.target.name]: e.target.files[0] });
            return;
        }
        setData({ ...formData, [e.target.name]: e.target.value });
    };

    return [formData, onChange];
}