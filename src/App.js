import React, {useState} from 'react';
import "./App.css";

function App() {

  const [billAmount, setBillAmount] = useState()

  const [person, setPerson] = useState()

  const [percent, setPercent] = useState()

  const [total, setTotal] = useState()

  const ChangeBillValue = (e) => {
    setBillAmount(e.target.value)
  }

  const ChangePerson = (e) => {
    setPerson(e.target.value)
  }

  const ChangePercent = (e) => {
    setPercent(e.target.value)
  }


  const Calculate = () => {
    
    setTotal((billAmount*(percent/100))/person)
 
  }

  return (
    <div className="App">
      <h1>TIP CALCULATOR</h1>
      <div className="billAmount">
        <label>How much your bill?</label>
        <input value={billAmount} onChange={ChangeBillValue}></input>
      </div>
      <div className="percent">
        <label>How was your service? </label>
        <select value={percent} onChange={ChangePercent}>
          <option disabled selected >Choose an option</option>
          <option value="10">%10 - Bad</option>
          <option value="20">%20 - It was OK</option>
          <option value="30">%30 - Good</option>
          <option value="40">%40 - Outstanding</option>
        </select>

      </div>
      <div className="person">
        <label>How many people shairing the bill?</label>
        <input value={person} onChange={ChangePerson}></input>
      </div>
      <div className="buttonArea">
        <button onClick={Calculate}>Calculate</button>
        <h1>{total}</h1>
      </div>
    </div>
  );
}

export default App;
