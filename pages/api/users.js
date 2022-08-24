import axios from "axios";
import { apiUrl } from "../../constants/api";
import { favoriteUsers } from "../../infrastructure/db";

export default async function handler(req, res) {
  const { name } = req.query;
  const response = await axios.get(`${apiUrl}/search/users?q=${name} in:login`);
  const users = response.data.items;
  let isFavorite;
  users.forEach((user) => {
    debugger;
    isFavorite =
      favoriteUsers.findIndex((favorite) => favorite.id === user.id) !== -1;
    user.isFavorite = isFavorite;
  });
  res.status(200).send(users.sort((x) => x.id));
}
