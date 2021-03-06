import React from 'react';
import NavPanel from '../../components/NavPanel';
import ClickerObject from '../../components/ClickerObject';
import PassiveClicker from '../../components/PassiveClicker';
import background from '../../img/Background.png';
import Points from '../../components/Points';

const YarrrrClicker = () => {
    return(
        <div style ={{ backgroundImage: `url(${background})` }}>
            <NavPanel/>
            <div style = {{
                display: 'flex',
                color: 'steelblue',
                fontFamily: 'Times New Roman',
                alignItems:'center',
                flexDirection:'column',
            }}> 
                <h1>TWÓJ UKOCHANY CLICKER! ZAPRASZAMY</h1>
            </div>
            <Points/>
            <ClickerObject/>
            <div style = {{
                display: 'flex',
                color: 'white',
                fontFamily: 'Times New Roman',
            }}> 
                <h1>Automatyczna załoga!</h1>
            </div>
            <PassiveClicker value={1} time={1000} ClickerNumber={1} />
            <PassiveClicker value={4} time={2000} ClickerNumber={2} />
            <PassiveClicker value={16} time={4000} ClickerNumber={3} />
            <PassiveClicker value={64} time={8000} ClickerNumber={4} />
            <PassiveClicker value={256} time={16000} ClickerNumber={5} />
            <PassiveClicker value={1024} time={32000} ClickerNumber={6} />
            <PassiveClicker value={4096} time={64000} ClickerNumber={7} />
        </div>
    );
}
export default YarrrrClicker;