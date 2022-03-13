import api from "./api";

export const fetchShowcase = async (params) => {
	return await api
		.get("/", {
			params: params,
		})
};
