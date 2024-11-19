// Fetch de datos iniciales para el banner
export async function fetchDest() {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      {
        method: 'GET',
        headers: new Headers({
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTY2ZmQ5YzZlMmNhOGJhMTIwY2Y3ZDdiMzQxYmYzMyIsIm5iZiI6MTcyNjg2NzQxNy41NTU1ODcsInN1YiI6IjY2ZWRkMmZmNWVlNjFmYmI3MzhjZjQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bWjggVWq6adKWxt4PIdcYSayIGF9Oth2mWCrjnqGlME',
        }),
      },
    );

    const data = await response.json();
    const { results } = data;
    const dataPrimero = results[0];
    return dataPrimero;
  } catch (error) {
    console.error('Error en el Fetch');
    throw error;
  }
}

// Fetch para la busqueda de palabras clave en el buscador
export async function fetchKeywords(value: string) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/keyword?query=${value}&page=1`,
      {
        method: 'GET',
        headers: new Headers({
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTY2ZmQ5YzZlMmNhOGJhMTIwY2Y3ZDdiMzQxYmYzMyIsIm5iZiI6MTcyNjg2NzQxNy41NTU1ODcsInN1YiI6IjY2ZWRkMmZmNWVlNjFmYmI3MzhjZjQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bWjggVWq6adKWxt4PIdcYSayIGF9Oth2mWCrjnqGlME',
        }),
      },
    );

    const data = await response.json();
    const { results } = data;
    return results;
  } catch (error) {
    console.error('Error en el Fetch');
    throw error;
  }
}

// fetch de géneros para la lista del filtro
export async function fetchGenres() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en`,
      {
        method: 'GET',
        headers: new Headers({
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTY2ZmQ5YzZlMmNhOGJhMTIwY2Y3ZDdiMzQxYmYzMyIsIm5iZiI6MTcyNjg2NzQxNy41NTU1ODcsInN1YiI6IjY2ZWRkMmZmNWVlNjFmYmI3MzhjZjQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bWjggVWq6adKWxt4PIdcYSayIGF9Oth2mWCrjnqGlME',
        }),
      },
    );

    const data = await response.json();
    const { genres } = data;
    return genres;
  } catch (error) {
    console.error('Error en el Fetch');
    throw error;
  }
}

// Fetch de datos para la pagina las filas en la pagina principal
export async function fetchDataRows(rowTitle: string) {
  let url = '';

  if (rowTitle == 'Popular') {
    url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
  }
  if (rowTitle == 'Now Playing') {
    url = 'https://api.themoviedb.org/3/movie/now_playing';
  }
  if (rowTitle == 'Upcoming') {
    url = 'https://api.themoviedb.org/3/movie/upcoming';
  }
  if (rowTitle == 'Top Rated') {
    url = 'https://api.themoviedb.org/3/movie/top_rated';
  }
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTY2ZmQ5YzZlMmNhOGJhMTIwY2Y3ZDdiMzQxYmYzMyIsIm5iZiI6MTcyNjg2NzQxNy41NTU1ODcsInN1YiI6IjY2ZWRkMmZmNWVlNjFmYmI3MzhjZjQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bWjggVWq6adKWxt4PIdcYSayIGF9Oth2mWCrjnqGlME',
      }),
    });

    const data = await response.json();
    const { results } = data;
    return results;
  } catch (error) {
    console.error('Error en el Fetch');
    throw error;
  }
}

// Fetch de la info completa una pelicula
export async function fecthDataMovie(movie: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie}`,
      {
        method: 'GET',
        headers: new Headers({
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTY2ZmQ5YzZlMmNhOGJhMTIwY2Y3ZDdiMzQxYmYzMyIsIm5iZiI6MTcyNjg2NzQxNy41NTU1ODcsInN1YiI6IjY2ZWRkMmZmNWVlNjFmYmI3MzhjZjQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bWjggVWq6adKWxt4PIdcYSayIGF9Oth2mWCrjnqGlME',
        }),
      },
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en el Fetch');
    throw error;
  }
}

// Fetch de las pelis relacionadas por genero en interna de pelicula
export async function fecthRelatedMovie(genres: string) {
  console.log(genres);

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?page=1&with_genres=${genres}`,
      {
        method: 'GET',
        headers: new Headers({
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTY2ZmQ5YzZlMmNhOGJhMTIwY2Y3ZDdiMzQxYmYzMyIsIm5iZiI6MTcyNjg2NzQxNy41NTU1ODcsInN1YiI6IjY2ZWRkMmZmNWVlNjFmYmI3MzhjZjQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bWjggVWq6adKWxt4PIdcYSayIGF9Oth2mWCrjnqGlME',
        }),
      },
    );

    const data = await response.json();
    const { results } = data;
    return results;
  } catch (error) {
    console.error('Error en el fetch');
    throw error;
  }
}
