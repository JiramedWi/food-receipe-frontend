import api from "./api";

export const registerApi = async (params) => {
  return await api
    .post("/", {
      params: params,
    })
    .then((response) => response.data)
    .catch((error) => console.log("error", error));
};
