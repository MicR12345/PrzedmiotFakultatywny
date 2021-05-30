import React from 'react';
import NavPanel from '../../components/NavPanel';
import { makeStyles } from '@material-ui/core/styles';
import Milestone from '../../components/Milestone';
import background from '../../img/Background2.jpg';

const useStyles = makeStyles({
    Milestones:{
      display:'flex',
      justifyContent:'space-evenly',
      alignItems:'baseline',
      
    },
    Milestone:{
      display:'flex',
      height:'50px',
      width:'200px',
      border:'1px solid black',
      background:'gray',
  },
  Text:{
    display:'flex',
  },
    });

const Milestones:React.FC = () =>{
    const classes = useStyles();
    return(
        <div style ={{ backgroundImage: `url(${background})` }}>
            <NavPanel/>
            <div className={classes.Milestones}>
            </div>
        </div>);
}

export default Milestones;