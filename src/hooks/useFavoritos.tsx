import { useState, useEffect } from 'react';

const useFavoritos = () => {

  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    if (window) {
      const localFavoritos = localStorage.getItem('favoritos');
      if (localFavoritos?.length)
        setFavoritos(localFavoritos.split(','));

    }
  }, []);

  const handleFavoritos = (itemID) => {
    const alreadyExist = favoritos.some(favorito => favorito === itemID);

    if (alreadyExist) {
      return removeItem(itemID);
    }


    return addItem(itemID);

  };

  const addItem = (itemID: string) => {
    let newFavoritos = favoritos.length ? favoritos : [];
    newFavoritos.push(itemID);
    setItemLocalStorage(newFavoritos);
    return alert('Adicionado aos favoritos com sucesso');
  };

  const removeItem = (itemID: string) => {
    let newFavoritos = favoritos;

    newFavoritos = newFavoritos.map(item => {
      if (item === itemID)
        return;
      return item;
    });

    setItemLocalStorage(newFavoritos);
    return alert('Removido dos favoritos com sucesso');
  };

  const setItemLocalStorage = (listaFavoritos) => {
    setFavoritos(listaFavoritos);
    localStorage.setItem('favoritos', listaFavoritos.toString());
  };

  const checkFavorito = (id) => {
    return favoritos.some(favorito => favorito === id);
  };

  return {
    favoritos,
    handleFavoritos,
    checkFavorito
  };
};

export default useFavoritos;