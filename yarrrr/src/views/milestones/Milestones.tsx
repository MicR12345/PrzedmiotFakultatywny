import React from 'react';
import NavPanel from '../../components/NavPanel';
import { makeStyles } from '@material-ui/core/styles';
import Milestone from '../../components/Milestone';
import background from '../../img/Background2.jpg';
import { MilestoneDefault } from '../../defaults/Milestones';
import ClickCounterDefault from '../../defaults/DefaultClickCounter';

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

    const CheckAcheivementCondiditons = () =>{
      if(!window.localStorage.getItem('ClickCounter'))window.localStorage.setItem('ClickCounter',JSON.stringify(ClickCounterDefault));
      const ClickCounter = JSON.parse(window.localStorage.getItem('ClickCounter') || JSON.stringify(ClickCounterDefault));
      let Milestones = JSON.parse(window.localStorage.getItem('Milestones') || JSON.stringify(MilestoneDefault));
      if(ClickCounter.count>=10000){
          Milestones.Milestone[1]=1;
      }
      if(ClickCounter.count>=50000){
          Milestones.Milestone[2]=1;
      }
      if(
          ClickCounter.passiveClicker[1] >= 10 &&
          ClickCounter.passiveClicker[2] >= 10 &&
          ClickCounter.passiveClicker[3] >= 10 &&
          ClickCounter.passiveClicker[4] >= 10 &&
          ClickCounter.passiveClicker[5] >= 10 &&
          ClickCounter.passiveClicker[6] >= 10 &&
          ClickCounter.passiveClicker[7] >= 10
      ){
          Milestones.Milestone[3]=1;
      }
      else Milestones.Milestone[3]=0;
      if(ClickCounter.passiveClicker[1] >= 100){
          Milestones.Milestone[4]=1;
      }
      else Milestones.Milestone[4]=0;
      if(ClickCounter.count>=100000){
          Milestones.Milestone[5]=1;
      }
      if(
          ClickCounter.passiveClicker[1] >= 50 &&
          ClickCounter.passiveClicker[2] >= 50 &&
          ClickCounter.passiveClicker[3] >= 50 &&
          ClickCounter.passiveClicker[4] >= 50 &&
          ClickCounter.passiveClicker[5] >= 50 &&
          ClickCounter.passiveClicker[6] >= 50 &&
          ClickCounter.passiveClicker[7] >= 50
      ){
          Milestones.Milestone[6]=1;
      }
      else Milestones.Milestone[6]=0;
      if(ClickCounter.passiveClicker[7] >= 100){
          Milestones.Milestone[7]=1;
      }
      else Milestones.Milestone[7]=0;
      window.localStorage.setItem('Milestones',JSON.stringify(Milestones));
  }

const Milestones:React.FC = () =>{
    const classes = useStyles();
  CheckAcheivementCondiditons();
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
              <Milestone milestoneNumber={7} name='Król Piratów' description="Ulepsz ostatniego pasywnego clickera na 100 poziom." />
            </div>
        </div>);
}

export default Milestones;