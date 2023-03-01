import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const changeHandler=(e)=>{
    setCity(e.target.value)
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
    .then(res=>{
      res.json()
      .then(data=>{
        const kelvin = data.main.temp;
        const celcius = kelvin - 273.15
        setResult("Temperature at "+city+"\n"+Math.round(celcius)+"°C");
        setCity("");
      })
    })
    // console.log(city)
  }
  return (
    <>
    <center>
      <div className='card'>
        <div className='card-body'>
          <h2 className='card-title'>Weather App</h2>
          <form onSubmit={submitHandler}>
            <input type='text' name='city' value={city} onChange={changeHandler}/> <br/> <br/>
            <input type="submit" value='Get Temperature'/>
          </form>
          <h3>{result}</h3>
        </div>
      </div>
    </center>
    </>
  );
}

export default App;
