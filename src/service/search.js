import api from "./api";

export const searchApi = async (params) => {
    return await api
        .post("/api/ranking/home", null, { params: params })
};
