// define uma interface que representa a estrutura de um objeto que contém informações sobre um filme. 

export default class Movie {
    public Title: string;
    public Year: string;
    public imdbID: string;
    public Type: string;
    public Poster: string;
  
    constructor(data: any = {}) { // inicializar as propriedades do objeto com valores iniciais ou realizar qualquer configuração necessária para que o objeto funcione corretamente.
      this.Title = data.Title || '';
      this.Year = data.Year || '';
      this.imdbID = data.imdbID || '';
      this.Type = data.Type || '';
      this.Poster = data.Poster || '';
    }
}
  