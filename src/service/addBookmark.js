import api from "./api";

export const addBookmarkApi = async (params) => {
    return await api
        .post("/api/bookmark", null, { params: params })
};



