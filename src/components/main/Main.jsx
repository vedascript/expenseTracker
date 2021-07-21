import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { Form } from "./form/Form";
import { List } from "./list/List";
import { ExpenseTrackerContext } from "../../context/context";

export const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Expense Tracker"
        subheader="Tracking Expenses Smartly"
      />
      <CardContent>
        <Typography variant="h5" align="center">
          Total balance:{balance}$
        </Typography>
        {/* <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }} >
                    Try Saying
                </Typography> */}
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
