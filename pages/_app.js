import { Container, Link } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <nav>
        <ul style={{ display: "inline-block", listStyleType: "none" }}>
          <li style={{ float: "left", paddingRight: 10 }}>
            <Link href="/">Github Users</Link>
          </li>
          <li style={{ float: "left" }}>
            <Link href="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
