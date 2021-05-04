import React, { Component } from 'react';

class ChestClicker extends Component {
    
    ClickKeeper = () => {
        this.props.onClick();
    }

    render() {
        return(
            <div className='ChestClicker'>
                <div className='ChestClicker_Chest' onClick={this.ClickKeeper}></div>
            </div>
        )
    };
}

export default ChestClicker;