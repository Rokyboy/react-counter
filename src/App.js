import { useState } from 'react'

import Button from './components/button/Button' 
import Total from "./components/total/Total";

function App() {
  const [count , setValue] = useState(0)

  const handleIncrease = () => {
    setValue(count + 1)
  }

  const handleDecrease = () => {
    if (count > 0){
    setValue(count - 1)
    }
    else{
      return 0;
    }
  }

  return (
    <div className="App">
      <Total count={count} text='Current value'/>
      
      <Button onClick={handleIncrease}>
      Increase  
      </Button>

      <Button onClick={handleDecrease} disabled={count === 0}>
      Decrease  
      </Button>
    </div>
  );
}

export default App;
