import React ,{useEffect ,useState} from 'react';
import { createTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer ,Legend ,CartesianGrid ,Tooltip} from 'recharts';
import Title from './Title';
import axios from 'axios';


export default function Chart() {

  const theme = createTheme({
    palette: {
      hero: {
        main: '#49098E',
      },
      jewel: {
        main: '#4E8E09',
      },
    },
  });

  const [price, setPrice] = useState([]);
  const [lastJewel, setLastJewel] = useState(0);
  const [lastHero, setLastHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
    axios.get('http://wyvernbots.com:8585/hero_jewel/price') 
      .then(res => {
        setPrice( res.data.map((x) => ({'jewel':x[0] ,'hero':x[1] ,'time': x[2]})) );
        setLastJewel(res.data[res.data.length-1][0]);
        setLastHero(res.data[res.data.length-1][1]);
      })
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);


  return (
    <React.Fragment>
      <Title><span style={{color : "primary"}} > Hero : {lastHero}</span>  |  <span style={{color : theme.palette.jewel.main}} > Jewel : {lastJewel}</span>  </Title>
      <ResponsiveContainer>
        <LineChart
          data={price}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" /> 
          <YAxis yAxisId="left"> </YAxis>
          <YAxis yAxisId="right" orientation="right" ></YAxis>
          <Tooltip/>
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="hero"
            color="primary"
            activeDot={{ r: 4 }}
          />
          <Line yAxisId="right" type="monotone" dataKey="jewel" stroke={theme.palette.jewel.main} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );

}
