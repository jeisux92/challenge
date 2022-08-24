import axios from "axios";

const getUsersAsync = (user) => axios.get(`/api/users?name=${user}`);
const setFavoriteAsync = (user) => axios.post("/api/favorites", user);
const getFavoritesAsync = () => axios.get("/api/favorites");
export { getUsersAsync, setFavoriteAsync, getFavoritesAsync };
