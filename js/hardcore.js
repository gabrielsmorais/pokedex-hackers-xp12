pokemonsFavoritados = [];


const favoritarPokemon = id => {
    pokemonsFavoritados.push(id)
    
    sessionStorage.setItem("id", JSON.stringify(pokemonsFavoritados));
    console.log(pokemonsFavoritados);
  };
  

  const exportaFavoritos = (res, pokemonsFavoritados) => {
    console.log(res);
    console.log(pokemonsFavoritados);
      for (let index = 0; index < pokemonsFavoritados.length; index++) {
        //   res.results[pokemonsFavoritados[id-1];
      }
  }