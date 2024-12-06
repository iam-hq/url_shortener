import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {createUrl, fetchUrls, updateUrl} from "../services/urlService";

export const useLinks = (token) => {
    return useQuery({queryKey: ['links'], queryFn: () => fetchUrls(token)})
}

export const useCreateLink = (token) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => createUrl(token, data),
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['links']}),
    })
}