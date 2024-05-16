<template>
  <div class="movie-search"> 
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="Digite o nome do filme..." class="search-input"> 
      <button @click="searchMovies" class="search-button">Buscar</button> 
    </div>
    <h2 class="search-results" v-if="showSearchResults">Resultado da Pesquisa</h2> 
    <div class="loading" v-if="loading">Carregando...</div> 
    <div class="error" v-if="error">Nenhum filme foi encontrado com o título "{{ searchQuery }}"</div> 
    <div class="movies" v-else-if="movies.length > 0">
    <div class="movie-container">
        <div v-for="movie in movies" :key="movie.imdbID" class="movie-item">
            <div class="movie-content">
                <img :src="movie.Poster" alt="Movie Poster" class="movie-poster">
                <span class="movie-title">{{ movie.Title }}</span>
                <span class="movie-year">{{ movie.Year }}</span>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import { ref } from 'vue';
import { searchMoviesByTitle } from '../list-movies/services/list-movies.service'; //componente importa a função searchMoviesByTitle do serviço responsável por consumir a API de filmes

export default {
  name: 'MovieSearch', //define o nome do componente 
  data() { //é uma função que retorna um objeto
    return {
      searchQuery: '', // inicia como vazia
      movies: [], 
      loading: false,
      error: '',
      showSearchResults: false // que será usada para controlar se os resultados da pesquisa 
    };
  },
  methods: {
    async searchMovies() { // o metodo que chama quando o usuario clica no botão de pesquisa
      this.loading = true; 
      this.error = '';
      this.movies = [];
      if (this.searchQuery.trim() !== '') {
        try {
          this.movies = await searchMoviesByTitle(this.searchQuery);
          this.showSearchResults = true; 
        } catch (error) {
          this.error = 'Falha ao carregar filmes';
        }
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.search-bar {
    width: 70%; 
    margin: 20px auto; 
    display: flex;
    flex-direction: column; 
    align-items: center;
}

.search-input {
    width: 112%; 
    padding: 10px; 
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
    margin-bottom: 15px; 
}

.search-button {
    padding: 15px 25px;
    background-color: #b13030;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0px 3px 6px rgba(143, 141, 141, 0.706); 
    transition: background-color 0.3s; 
    font-weight: bold;
}

.search-button:hover {
    background-color: #bf5b5b; 
}

.search-results {
  color: #f9f9f9;
  font-size: 30px;
  margin-bottom: 20px; 
  margin-left: 150px; 
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  left: auto;
  padding: 20px;
  font-family: Bebas Neue, serif;;
}

.loading, .error {
  margin-top: 30px;
  color: #ccc;
  background-color: var(--primary-color);
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.movie-container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.movie-item:hover {
  background-color: #b13030;
  cursor: pointer; 
}

.movie-item {
    width: calc(20% - 20px); 
    margin-right: 20px;
    margin-bottom: 20px;
    border: 3px solid #9a9191;
    box-sizing: border-box; 
    align-items: center;
}

.movie-poster {
    width: 100%;
    height: auto;
}

.movie-title {
    padding: 10px;
    display: block;
    font-size: 20px;
    font-weight: bold;
    color: #fff; 
    font-family: Bebas Neue;
}

.movie-year {
    padding: 10px;
    display: block;
    font-size: 16px;
    color: #fff; 
    font-family: Bebas Neue; 
}

@media screen and (max-width: 768px) {
  .search-bar {
    width: 90%; 
  }

  .search-results {
    font-size: 24px; 
  }

  .movie-item {
    width: calc(50% - 20px); 
  }

  .search-button {
    padding: 10px 20px; 
    font-size: 14px; 
  }

  .search-input {
    width: 100%; 
    font-size: 14px; 
  }

}
</style>