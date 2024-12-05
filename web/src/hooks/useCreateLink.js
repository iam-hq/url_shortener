import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";


export const useCreateLink = (token) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data) =>
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/urls`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['links']})
        },
    })
}