import api from "./api";

export const removeBookmarkApi = async (params) => {
    return await api
        .delete("/api/bookmark", { params: params })
};



