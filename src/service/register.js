import api from "./api";

export const registerApi = async (params) => {
  return await api
    .post("/api/user", null, { params: params })
};
