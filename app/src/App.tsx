import React from 'react';
import './App.css';

import CustomHeader,{addNumber} from './components/CustomHeader'
import Counter from './components/Counter';

const App = () => {
  const addedNumber = addNumber(1,2);
  const [changedNumber, setChangedNumber] = React.useState(0);

  const handleNumberChange = (newNumber:number) =>{
    setChangedNumber(newNumber);
  }

  const liczbaMniejszaOdZera = (liczba:number) =>{
    if(liczba < 0){
      return (<div>liczba jest mniejsza od 0</div>)
    }
  }
  
  return (
    <div className="App">
      <CustomHeader>
        <Counter onNumberChange={handleNumberChange} initialNumber={10}/>
        {changedNumber > 10 && changedNumber<=15 &&
            <div>
                Liczba jest wieksza od 10
            </div> 
            }
            {changedNumber > 15 &&
            <div>
                Liczba przekroczona
            </div> 
            }
            {changedNumber < -10 &&
            <div>
                Liczba jest mniejsza od -10
            </div> 
            }
      </CustomHeader>
    </div>
  );
}

export default App;
