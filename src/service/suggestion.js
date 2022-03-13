import api from "./api";

export const fetchSuggestion = async (params) => {
    return await api
        .get("/api/home", {
            params: params,
        })

};
