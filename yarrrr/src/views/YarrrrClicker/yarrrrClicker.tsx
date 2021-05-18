import React from 'react';
import NavPanel from '../../components/NavPanel';
import ClickerObject from '../../components/ClickerObject';
import PassiveClicker from '../../components/PassiveClicker';

const YarrrrClicker = () => {
    return(
        <div>
            <NavPanel/>
            <ClickerObject/>
            <PassiveClicker value={1} time={1000} />
            <PassiveClicker value={2} time={2000} />
            <PassiveClicker value={4} time={4000} />
            <PassiveClicker value={8} time={8000} />
            <PassiveClicker value={16} time={16000} />
            <PassiveClicker value={32} time={32000} />
        </div>
    );
}
export default YarrrrClicker;