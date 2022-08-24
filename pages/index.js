import { Box, Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import User from "../components/users/user";
import { getUsersAsync, setFavoriteAsync } from "../services/users";
import Head from "next/head";

export default function Search() {
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);

  const searchUser = useCallback(async () => {
    try {
      const { data } = await getUsersAsync(user);
      setUsers(data);
    } catch (error) {
      console.log("An error has ocurred");
    }
  }, [user]);

  useEffect(() => searchUser, [searchUser]);

  const onSetFavorite = async (user) => {
    try {
      await setFavoriteAsync(user);
      await searchUser();
    } catch (error) {
      console.log("An error has ocurred");
    }
  };

  return (
    <>
      <Head>
        <title>Github Users</title>
        <meta name="description" content="Application for github users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Box pt={10}>
          <Box display={"flex"} alignItems={"end"} gap={2}>
            <TextField
              variant="filled"
              label="github user"
              size="small"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchUser();
                }
              }}
            />
            <Button variant="contained" onClick={searchUser}>
              Search
            </Button>
          </Box>
          {users?.length > 0 && (
            <Typography pt={4} variant="h4">
              Users
            </Typography>
          )}
          <Box
            pt={4}
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
    </>
  );
}
