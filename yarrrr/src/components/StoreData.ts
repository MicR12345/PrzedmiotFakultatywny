import ClickCounterDefault from '../defaults/DefaultClickCounter';
import {MilestoneDefault} from '../defaults/Milestones';

export const StoreClickData = (count:number,clickMultiplier?:number,passiveClicker?:Array<number>) => {
    const ClickCounterOld = JSON.parse(window.localStorage.getItem('ClickCounter') || JSON.stringify(ClickCounterDefault));
    if (!clickMultiplier)clickMultiplier = ClickCounterOld.clickMultiplier;
    if (!passiveClicker)passiveClicker = ClickCounterOld.passiveClicker;
    const ClickCounterNew = {
        count,
        clickMultiplier,
        passiveClicker,
    }
    window.localStorage.setItem('ClickCounter',JSON.stringify(ClickCounterNew));
    return ClickCounterNew;
}

export const StoreMilestone = (milestoneNumber:number,value:number) =>{
    const MilestoneOld = JSON.parse(window.localStorage.getItem('Milestones') || JSON.stringify(MilestoneDefault));
    let milestoneArrayNew = MilestoneOld.Milestone;
    milestoneArrayNew[milestoneNumber] = value;
    const MilestoneNew = {
        milestoneArrayNew,
    }
    window.localStorage.setItem('Milestones',JSON.stringify(MilestoneNew));
    return MilestoneNew;
}