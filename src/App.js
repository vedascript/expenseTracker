import "./App.css";
import { Details } from "./components/details/Details";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import { Main } from "./components/main/Main";
import { Provider } from "./context/context";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";

function App() {
  const classes = useStyles();

  return (
    <Provider>
      <div>
        <Grid
          className={classes.grid}
          container
          spacing={0}
          alignItems="center"
          justify="center"
          style={{ height: "100vh" }}
        >
          <Grid item xs={12} sm={4} md={4}>
            <Details title="Income" />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Main />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Details title="Expense" />
          </Grid>
        </Grid>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-90px",
            position: "relative",
          }}
        >
          {/* <PushToTalkButton size='4rem' /> */}
          <ErrorPanel />
        </div>
      </div>
    </Provider>
  );
}

export default App;
