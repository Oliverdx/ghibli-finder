const useFavoritos = (bookmarks, setBookmark, removeBookmark) => {

  const checkFavorito = (id) => {
    if (bookmarks.length) {
      return bookmarks.some(favorito => favorito === id);
    }

    return false;
  };

  const handleBookmark = (newItem) => {
    const checkFavorito = bookmarks.some(bookmark => bookmark === newItem);

    if (checkFavorito)
      return removeBookmark(newItem);

    return setBookmark(newItem);
  };

  return {
    checkFavorito,
    handleBookmark
  };
};

export default useFavoritos;