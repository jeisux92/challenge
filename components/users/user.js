import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";

export default function User(props) {
  const { user, onSetFavorite } = props;

  return (
    <Card sx={{ width: 300 }}>
      <CardContent sx={{ display: "flex" }}>
        <Box width="50%">
          <Typography variant="h6">{user.login}</Typography>
          <Box component={"img"} height={100} src={user.avatar_url} />
        </Box>
        <Box width="50%" pt={3}>
          <Link href={user.html_url}>
            <a target="_blank">Profile</a>
          </Link>
          <br />
          <Box pt={1}>
            <Typography variant="body1" align="left" display="inline">
              Favorite
            </Typography>
            <IconButton align="left" onClick={() => onSetFavorite(user)}>
              {user?.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Box>
        </Box>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
