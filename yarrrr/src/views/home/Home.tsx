import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import NavPanel from './../../components/NavPanel';

const useStyles = makeStyles({
    HomePage:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'column',
    },
    Buttons:{
      display:'flex',
      
      alignItems:'baseline'
      
    },
    Button:{
      display:'flex',
      height:'50px',
      border:'1px solid black',
      background:'gray',
  },
  Text:{
    display:'flex',
  },
    });

const Home = () => {
    const classes = useStyles();
    return(
        <div>
            <NavPanel/>
            <div className={classes.HomePage}>
                <div className={classes.Text}><h1>Strona główna</h1></div>
                <div className={classes.Text}><h2>Najlepszy clicker jaki istnieje na tej stronie</h2></div>
            </div>
        </div>
    );
}
export default Home;