import React ,{useRef} from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './Chart';
import JewelPrice from './JewelPrice';
import Accounts  from './Accounts';
import TextField from "@material-ui/core/TextField";
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import Cookies from 'universal-cookie';
import Web3 from 'web3';  

export default function Dashboard(classes) {
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  
  return (

    <main className={classes.content}>
    <div className={classes.appBarSpacer}/>
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
      <Grid container item spacing={3}>
        
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Chart />
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <JewelPrice />
          </Paper>
        </Grid> 
        </Grid> 

      <Grid container item spacing={3}>
        <Grid item xs={12}>
            {Accounts(classes)}
        </Grid>
      </Grid>

      </Grid>
    </Container>
    </main>
    
  );
}