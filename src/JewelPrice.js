import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function JewelPrice() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Jewel Price</Title>
      <Typography component="p" variant="h4">
        5.63 dollar
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        16 Agu 2021
      </Typography>
    </React.Fragment>
  );
}