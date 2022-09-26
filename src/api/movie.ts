import axios from "axios";
import { API_URL, api_key } from "@/helpers/utils";
import { Movie } from "@/interfaces/movie";

export const getPopularMovies = async (pageNumber: number | null): Promise<Movie[]> => {
    const { data } = await axios.get(`${API_URL}movie/popular?api_key=${api_key}&language=pt-BR&page=${pageNumber}`);
    return data.results;
};