import React from 'react';

interface propsButton{
    onClickFunction?: () => void; 
    text?:string;
}

const CustomButton:React.FC<propsButton> = ({text,onClickFunction}) => {
    return( 
    <button onClick={onClickFunction}>{text}</button>
    );
}

export default CustomButton;