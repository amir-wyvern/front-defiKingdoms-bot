import React from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './Chart';
import Accounts  from './Accounts';

export default function Dashboard(classes) {
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  
  return (

    <main className={classes.content}>
    <div className={classes.appBarSpacer}/>
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>

        <Grid container item spacing={3}>
        
        <Grid container item spacing={3}>
          <Grid item xs={12}>
              {Accounts(classes)}
          </Grid>
        </Grid>

          <Grid item xs={12} >
            <Paper className={fixedHeightPaper}>
              <Chart />
            </Paper>
          </Grid>
          
        </Grid> 
      </Grid>
    </Container>
    </main>
    
  );
}