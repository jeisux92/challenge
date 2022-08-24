import {
  favoriteUsers,
  getFavoriteById,
  removeFavoriteById,
  setFavorites,
} from "../../infrastructure/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const user = req.body;
    user.isActive = true;
    const exists = getFavoriteById(user.id);
    if (exists) {
      setFavorites(user);
    } else {
      removeFavoriteById(user.id);
    }
    res.status(200).send();
  } else {
    res.status(200).send(favoriteUsers);
  }
}
