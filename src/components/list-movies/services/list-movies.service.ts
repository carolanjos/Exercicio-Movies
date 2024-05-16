// serviço para consumir a API - usar o axios 

import axios from 'axios';
import Movie from '../models/movie.entity'; 

const OMDB_API_URL = 'http://www.omdbapi.com/'; //url da API
const API_KEY = 'b524b60b'; // chave para acessar a API - tem que estar ativa

export async function searchMoviesByTitle(title: string): Promise<Movie[]> { //criei uma função searchMovieByTitle que recebe um param Title que é uma string. 
  try {
    const response = await axios.get(OMDB_API_URL, { // requisição GET para API OMDb passando primeiro a url da API
      params: {
        apikey: API_KEY, //chave da API
        s: title, //titulo do filme que será pesquisado
      },
    });
    
    if (response.data && response.data.Search) { //verifica se existe uma propriedade Search
      return response.data.Search; // A API retorna um objeto com uma propriedade Search 
    } else {
      throw new Error();
    }
  } catch (error) { // erro - será capturado pelo bloco catch
    console.error(error);
    throw new Error();
  }
}