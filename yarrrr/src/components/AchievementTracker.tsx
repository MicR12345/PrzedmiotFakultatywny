import React from 'react';
import { MilestoneDefault } from '../defaults/Milestones';

const AchievementTracker = () =>{
    React.useEffect(() => {
        const CheckAcheivementCondiditons = () =>{
            if(){
                
            }
        }
        let interval = setInterval(() => {
            const Milestones = MilestoneDefault;
        }, 100);
        return () => clearInterval(interval)
      },[]);
}
export default AchievementTracker;