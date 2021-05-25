import React from 'react';
import NavPanel from '../../components/NavPanel';
import ClickerObject from '../../components/ClickerObject';
import PassiveClicker from '../../components/PassiveClicker';

const YarrrrClicker = () => {
    return(
        <div>
            <NavPanel/>
            <ClickerObject/>
            Automatic Clickers
            <PassiveClicker value={1} time={1000} ClickerNumber={1} />
            <PassiveClicker value={2} time={2000} ClickerNumber={2} />
            <PassiveClicker value={4} time={4000} ClickerNumber={3} />
            <PassiveClicker value={8} time={8000} ClickerNumber={4} />
            <PassiveClicker value={16} time={16000} ClickerNumber={5} />
            <PassiveClicker value={32} time={32000} ClickerNumber={6} />
        </div>
    );
}
export default YarrrrClicker;