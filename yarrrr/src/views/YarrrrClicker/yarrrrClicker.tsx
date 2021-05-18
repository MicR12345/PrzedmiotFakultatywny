import React from 'react';
import NavPanel from '../../components/NavPanel';
import ClickerObject from '../../components/ClickerObject';
import PassiveClicker from '../../components/PassiveClicker';

const YarrrrClicker = () => {
    return(
        <div>
            <NavPanel/>
            <ClickerObject/>
            <PassiveClicker value={1} time={10000} />
            Tu będzie strona klikera
        </div>
    );
}
export default YarrrrClicker;