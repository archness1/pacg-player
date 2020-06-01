import React from "react";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FirebaseAuth } from "react-firebaseui";
import { Main } from "./components/Main";
import {
  createMuiTheme,
  useMediaQuery,
  ThemeProvider,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  loginHeader: {
    textAlign: "center",
  },
}));

function App() {
  const [user, loading] = useAuthState(firebase.auth());
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const styles = useStyles();

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading ? null : user ? (
        <Router>
          <Main />
        </Router>
      ) : (
        <>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={styles.loginHeader}
          >
            Welcome to the Pathfinder Adventure Card Game site please login to
            continue
          </Typography>
          <FirebaseAuth
            uiConfig={{
              siteName: "Pathfinder Adventure Card Game",

              signInFlow: "redirect",
              signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
              ],
            }}
            firebaseAuth={firebase.auth()}
          />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;