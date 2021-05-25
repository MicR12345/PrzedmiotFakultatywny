import React from 'react';
import { Component } from 'react';
import ClickCounterDefault from '../defaults/DefaultClickCounter';

class Points extends Component{
    clickerCounter = ClickCounterDefault;
    componentDidMount(){
        this.clickerCounter = this.getData();
        setInterval(this.getData, 1000);
    }
    getData = () =>{
        return JSON.parse(window.localStorage.getItem('ClickCounter') || JSON.stringify(ClickCounterDefault));
    }
    render(){
        this.clickerCounter = this.getData();
        return(
            <div>
                {this.clickerCounter.count}
            </div>
        )
    }
}
export default Points;