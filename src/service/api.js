import axios from "axios";

export default axios.create({
	baseURL: "https://api.themoviedb.org/3/movie/now_playing",
	responstType: "json",
});