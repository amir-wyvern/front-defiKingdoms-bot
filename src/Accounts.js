import React ,{useEffect , useState} from 'react';
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
 
const cookies = new Cookies();

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}
)
);


export default function Orders() {

  
  const [rows, setRows] = useState([]);

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


  useEffect(() => {
    const interval = setInterval(() => {
      let addresses = cookies.get('ListAddress')
      if (addresses) {
          const myArray = addresses.split("|,|");
          let json = JSON.stringify(myArray);
          let post_data={json_data:json}
          axios.post('http://127.0.0.1:8000/list_address/' ,post_data)
            .then(res => {
              setRows(res.data);
            })
          }
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);

  const classes = useStyles();  

  return (
    <React.Fragment>
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
              <TableCell>{row.addr}</TableCell>
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
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}