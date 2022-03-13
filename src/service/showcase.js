import api from "./api";

export const fetchShowcase = async (params) => {
	return await api
		.get("/", {
			params: params,
		})
		.then((response) => response.data)
		.catch((error) => console.log("error", error));
};
