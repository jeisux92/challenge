let favoriteUsers = [];

const getFavoriteById = (userId) =>
  favoriteUsers.findIndex((x) => x.id === userId) === -1;
const removeFavoriteById = (userId) =>
  (favoriteUsers = favoriteUsers.filter((x) => x.id === userId));

const setFavorites = (user) => favoriteUsers.push(user);

export { getFavoriteById, setFavorites, favoriteUsers, removeFavoriteById };
