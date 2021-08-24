import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Position</Title>
      <Typography component="p" variant="h4">
        25 per Hour
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        16 Agu 2021
      </Typography>
    </React.Fragment>
  );
}