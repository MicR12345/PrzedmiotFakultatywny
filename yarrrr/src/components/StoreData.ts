import ClickCounterDefault from '../defaults/DefaultClickCounter';

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