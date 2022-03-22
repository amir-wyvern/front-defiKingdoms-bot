import React ,{useEffect ,useRef , useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Title from './Title';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import Web3 from 'web3';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';


const cookies = new Cookies();

function preventDefault(event) {
  event.preventDefault();
}


export default function Accounts(classes) {

  const constructorCache = cookies.get('ListAddress')
  let lsAddr = []
  if (constructorCache) {
    lsAddr = constructorCache.split("|,|").map((addr) => ({'name': 'None' ,'addr':addr ,'balance':'None' ,'hero':'None' ,'onSell': 'None'}) );
    console.log(lsAddr);
  }
  const [rows, setRows] = useState(lsAddr);

  const delAccount = index =>{
      
    let list_address = cookies.get('ListAddress');
    if (list_address) {
      const newRow = [...rows]; 
      newRow.splice(index ,1);
      setRows(newRow);

      const myArray = list_address.split("|,|");
      myArray.splice(index ,1);
      const newCache = myArray.join('|,|');
      cookies.set('ListAddress',newCache , {path: '/' });
    }
  }

  const delAllAccount = index =>{
      
    let list_address = cookies.get('ListAddress');
    if (list_address) {
      const newRow = []; 
      setRows(newRow);
      cookies.set('ListAddress','' , {path: '/' });
    }
  }


  useEffect(() => {
    const interval = setInterval(() => {
      let addresses = cookies.get('ListAddress')  
      if (addresses) {
          const myArray = addresses.split("|,|"); 
          let json = JSON.stringify(myArray);
          let post_data={json_data:json}
          axios.post('http://wyvernbots.com:8585/list_address/' ,post_data) 
            .then(res => {
              setRows(res.data);
            })
          }
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);


  const valueRef = useRef('') 
  const AddAddressToCache = () => {
    let result = Web3.utils.isAddress(valueRef.current.value);
    
    const checkExist = rows.map((n) => n.addr == valueRef.current.value).some( (n) => n == true);
    if (result == true && checkExist){
      alert('This address already exists!');
      valueRef.current.value = '';
    }else if (result == true && !checkExist) { 

      const cookies2 = new Cookies();
      let list_address = cookies2.get('ListAddress');
      if (!list_address) {
        list_address = valueRef.current.value;
      }
      else {
        list_address = list_address +'|,|' + valueRef.current.value;
      }

      const newRow = [...rows];  
      newRow.push({'name' : 'None' ,'addr':valueRef.current.value ,'balance':'None' ,'hero':'None' ,'onSell':'None'}) ;
      setRows(newRow);
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
    <React.Fragment>
      
      <Grid container item spacing={3}>
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
      
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button variant="contained" size="small" className="btn-delete" color="secondary" onClick={()=> delAllAccount() } >del all account</Button>
            <Title>Review Accounts</Title>
            
            <Table size="small"> 
            <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Balance</TableCell>
                  <TableCell>Hreoes</TableCell>
                  <TableCell >OnSell</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {rows.map((row, index) => {
                  return ( <TableRow >
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.addr.slice(0,4) + '***' +row.addr.slice(-4) }</TableCell>
                    <TableCell>{row.balance}</TableCell>
                    <TableCell>{row.hero}</TableCell>
                    <TableCell>{row.onSell}</TableCell>
                    <Button variant="contained" size="small" className="btn-info" color="primary" >more</Button>
                    <Button  variant="contained" size="small" className="btn-delete" color="secondary" onClick={()=> delAccount(index) }>del</Button>
                  </TableRow>) })}
              </TableBody> 
            </Table>

            <div className={classes.seeMore}>
              <Link color="primary" href="#" onClick={preventDefault}>
                See more Accounts
              </Link>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}