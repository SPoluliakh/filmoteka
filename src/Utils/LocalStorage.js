export const getLocalStorage = key => {
  try {
    const savedMovies = JSON.parse(localStorage.getItem(key)) ?? [];
    return savedMovies;
  } catch (error) {
    console.log(error.message);
  }
};

export const setLocalStorage = (key, item) => {
  const myMovies = getLocalStorage(key);

  let data;
  let IsInFavorite;
  if (myMovies.some(({ data }) => data.id === item.data.id)) {
    data = myMovies.filter(({ data }) => data.id !== item.data.id);
    IsInFavorite = false;
  } else {
    data = [...myMovies, item];
    IsInFavorite = true;
  }
  localStorage.setItem(key, JSON.stringify(data));
  return IsInFavorite;
};
