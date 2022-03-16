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
  const valueRef = useRef('') 

  const AddAddressToCache = () => {
    let result = Web3.utils.isAddress(valueRef.current.value);
    
    if (result == true) { 

      const cookies2 = new Cookies();
      let list_address = cookies2.get('ListAddress');
      if (!list_address) {
        list_address = valueRef.current.value;
      }
      else {
        list_address = list_address +'|,|' + valueRef.current.value;
      }

      cookies2.set('ListAddress',list_address , {path: '/' });
      valueRef.current.value = '';

    }
    else {
      alert('This Address is not valid!');
      valueRef.current.value = '';
    }

  };

  const AddButton = () => (

      <IconButton onClick={AddAddressToCache}>
        <AddCircleOutlineTwoToneIcon fontSize="large" color="action" />
      </IconButton>
    )
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

      <Grid container item spacing={1}>

        <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="pub_address"
              label="Public Address"
              name="pub_address"
              autoComplete="0x"
              autoFocus
              inputRef={valueRef} 
              InputProps={{startAdornment: <AddButton />}}
            />
        </Grid>

      </Grid>

      <Grid container item spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Accounts  />
          </Paper>
        </Grid>
      </Grid>

      </Grid>
    </Container>
    </main>
    
  );
}