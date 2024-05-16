<!-- Recipiente principal para os componente da aplicação -->
<!-- O <router-view/> permite que a aplicação navegue entre diferentes páginas enquanto mantém a estrutura geral consistente -->
<template>
  <div class="app">
    <header>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">
          <img src="../src/img/filme.jpg">
          Catálogo de Filmes
        </a>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style>
body, .app {
  margin: 0;
  padding: 0;
  background-color: var(--primary-color);
}

:root{
    --primary-color:#2e2e2e;
    --secondary-color: #000; 
}

header{
    padding:1rem;
    background-color: var(--secondary-color);
}

.app {
  background-color: var(--primary-color);
  font-family: 'Bebas Neue';
  margin: 0;
  width: 100vw; 
  height: 100vh; 
}

.navbar {
  background-color: #b13030;
  padding: 10px 20px;
  color: #ffffff; 
  text-align: center;
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  font-size: 2.5rem; 
  margin-right: 20px; 
  flex-grow: 1; 
}

.navbar-brand img {
  margin-right: 10px; 
  width: 60px; 
  height: auto;
}

@media screen and (max-width: 768px) {
  .navbar-brand {
    font-size: 1.2rem; 
  }

  .navbar-brand img {
    width: 30px; 
  }
}

</style>
