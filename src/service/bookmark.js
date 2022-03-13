import api from "./api";

export const bookmarkApi = async (params) => {
    return await api
        .get("/api/bookmark", {
            params: params,
        })

};
