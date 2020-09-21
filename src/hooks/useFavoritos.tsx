const useFavoritos = (favoritos) => {

  const checkFavorito = (id) => {
    if (favoritos.length)
      return favoritos.some(favorito => favorito === id);

    return false;
  };

  return {
    checkFavorito
  };
};



export default useFavoritos;