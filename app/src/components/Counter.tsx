import React from 'react';
import CustomButton from './CustomButton';

interface CounterProps{
    initialNumber?: number;
    onNumberChange?: (someNumber:number) => void;
}

const Counter:React.FC<CounterProps> = ({initialNumber,onNumberChange}) => {
    const [counterNumber,setCounterNumber] = React.useState(initialNumber || 0);

    const addNumber = () => {
        const number = counterNumber + 1;
        setCounterNumber(number);
        // if(onNumberChange){
        //     onNumberChange(number);
        // }
        onNumberChange && onNumberChange(number);
    }
    const decreaseNumber = () => {
        const number = counterNumber - 1;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }
    const setStartNumber = () => {
        setCounterNumber(initialNumber || 0);
    }


    // return (
    //     <div>
    //         <button onClick={addNumber} >+</button>
    //         {counterNumber}
    //         <button onClick={decreaseNumber} >-</button>
    //     </div>
    // );
    return(
        <div>
            <CustomButton onClickFunction = {addNumber} text="+"></CustomButton>
            {counterNumber}
            <CustomButton onClickFunction = {decreaseNumber} text="-"></CustomButton>
            <br/>
            <CustomButton onClickFunction = {setStartNumber} text="Wyzeruj"></CustomButton>
        </div>
    );
}
export default Counter;