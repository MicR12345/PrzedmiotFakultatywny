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
      flexWrap:'wrap',
      height:'100vh',
      flexDirection: 'column',
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
              <Milestone milestoneNumber={1} name='Prawdziwy Kapitan' description="Posiadaj co najmniej 10000 monet." />
              <Milestone milestoneNumber={2} name='Czarnobrody' description="Posiadaj co najmniej 50000 monet." />
              <Milestone milestoneNumber={3} name='Twórca Libertali' description="Ulepsz wszystkie pasywne clickery do co najmniej 10 poziomu." />
              <Milestone milestoneNumber={4} name='Prawdziwy degenerat' description="Ulepsz pierwszego pasywnego clickera do 100 poziomu." />
              <Milestone milestoneNumber={5} name='Wróg Kompani Wschodnioindyjskiej' description="Posiadaj co najmniej 100000 monet." />
              <Milestone milestoneNumber={6} name='Stopy wody pod kilem' description="Ulepsz wszystkie pasywne clickery do co najmniej 50 poziomu." />
              <Milestone milestoneNumber={6} name='Król Piratów' description="Ulepsz ostatniego pasywnego clickera na 100 poziom." />
            </div>
        </div>);
}

export default Milestones;