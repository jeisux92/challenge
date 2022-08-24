import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import User from "../../components/users/user";
import { getFavoritesAsync } from "../../services/users";

export default function Search() {
  const [users, setUsers] = useState([]);

  const getAllFavoritesAsync = useCallback(async () => {
    try {
      const { data } = await getFavoritesAsync();
      setUsers(data);
    } catch (error) {
      console.log("an error has ocurred");
    }
  }, []);

  useEffect(() => {
    getAllFavoritesAsync();
  }, [getAllFavoritesAsync]);

  const onSetFavorite = async (user) => {
    try {
      await setFavoriteAsync(user);
      await searchUser();
    } catch (error) {
      console.log("An error has ocurred");
    }
  };

  return (
    <Container>
      <Box>
        <Typography variant="h4" pt={2}>
          {users.length > 0 ? "Favorite Users" : "No favorites yet"}
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns={"1fr 1fr 1fr"}
          gap={2}
          justifyContent="center"
          sx={{
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
          }}
        >
          {users.map((u) => (
            <User user={u} key={u.login} onSetFavorite={onSetFavorite} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
