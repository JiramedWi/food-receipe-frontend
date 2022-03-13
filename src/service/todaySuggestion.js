import api from "./api";

export const todaySuggestionApi = async (params) => {
    return await api
        .get("", {
            params: params,
        })

};
