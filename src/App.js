import React, {useState} from 'react';
import "./App.css";

function App() {

  const [billAmount, setBillAmount] = useState()

  const [person, setPerson] = useState();

  const [percent, setPercent] = useState();

  const [total, setTotal] = useState();


  const Calculate = () => {
    setTotal((billAmount*(percent/100))/person)
  }

  return (
    <div className="App">
      <div className='main'>
      <h2>TIP CALCULATOR</h2>
      <div className="billAmount">
        <label>How much your bill?</label>
        <input value={billAmount} onChange={(e) => setBillAmount(e.target.value)}></input>
      </div>
      <div className="person">
        <label>How many people shairing the bill?</label>
        <input value={person} onChange={(e) => setPerson(e.target.value)}></input>
      </div>
      <div className="percent">
        <label>How was your service? </label>
        <select value={percent} onChange={(e) => setPercent(e.target.value)}>
          <option disabled selected >Choose an option</option>
          <option value="10">%10 - Bad</option>
          <option value="20">%20 - It was OK</option>
          <option value="30">%30 - Good</option>
          <option value="40">%40 - Outstanding</option>
        </select>

      </div>
      
      <div className="buttonArea">
        <button onClick={Calculate}>Calculate</button>
        <h2>{total}</h2>
      </div>
      </div>
 
    </div>
  );
}

export default App;
