import api from "./api";

export const loginApi = async (params) => {
    return await api
        .post("/api/login", null, { params: params })
};
