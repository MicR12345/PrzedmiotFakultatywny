import React from 'react';
import ClickCounterDefault from '../defaults/DefaultClickCounter';

const StoreClickData = (count:number,clickMultiplier?:number,passiveClicker1?:number) => {
    const ClickCounterOld = JSON.parse(window.localStorage.getItem('ClickCounter') || JSON.stringify(ClickCounterDefault));
    if (!clickMultiplier)clickMultiplier = ClickCounterOld.clickMultiplier;
    if (!passiveClicker1)passiveClicker1 = ClickCounterOld.passiveClicker1;
    const ClickCounterNew = {
        count,
        clickMultiplier,
        passiveClicker1,
    }
    window.localStorage.setItem('ClickCounter',JSON.stringify(ClickCounterNew));
    return ClickCounterNew;
}
export default StoreClickData;