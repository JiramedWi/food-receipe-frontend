import api from "./api"

export const searchBookMarkApi = async (params) => {
    return await api
        .post("/api/ranking/bookmark", null, { params: params })
}

