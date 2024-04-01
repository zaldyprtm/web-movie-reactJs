import axios from "axios";

const apiKey = "a493bcde01469a07f59d05ae360d3fa7";
const baseUrl = "https://api.themoviedb.org/3";

export const getMovieList = async () => {
    try {
        const response = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
        console.log({ movieList: response });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching movie list:", error);
        return [];
    }
};

export const searchMovie = async (q) => {
    try {
        const response = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`);
        return response.data;
    } catch (error) {
        console.error("Error searching for movie:", error);
        return null;
    }
};
