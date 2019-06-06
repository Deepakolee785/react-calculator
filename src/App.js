import React,{useState} from 'react';
import './App.css';
import * as math from 'mathjs';
function App() {

  const [result, setResult] = useState('');

  let handleClick = btn => {
    setResult(result+ btn)
  }

  let calculate = (button) => {
    try {
      if(button === "="){
        if(result){
        let output = math.eval(result)
        setResult(output)}
      }
      else if(button==='C'){
        setResult('')
      }
      else if(button==='CE'){
        setResult(result.slice(0, -1))
      }
  }catch(e) {
      setResult('Error')
    }
    
  }

  return (
    <div className="App">
      <p className="heading">ReactJS Calculator</p><br/>
      <h3 className='display'>{result}</h3>
      <div className="btn-group">
        <button name="CE" onClick={e => calculate(e.target.name)}>CE</button>
        <button name="(" onClick={e => handleClick(e.target.name)}>(</button>     
        <button name=")" onClick={e => handleClick(e.target.name)}>)</button>
        <button name="C" className="clear" onClick={e => calculate(e.target.name)}>C</button><br/>
      </div>
      <div className="btn-group">
        <button name='7' onClick={e => handleClick(e.target.name)}>7</button>
        <button name='8' onClick={e => handleClick(e.target.name)}>8</button>
        <button name='9' onClick={e => handleClick(e.target.name)}>9</button>
        <button name='*' onClick={e => handleClick(e.target.name)}>x</button><br/>
      </div>
       <div className="btn-group">
        <button name='4' onClick={e => handleClick(e.target.name)}>4</button>
        <button name='5' onClick={e => handleClick(e.target.name)}>5</button>
        <button name='6' onClick={e => handleClick(e.target.name)}>6</button>
        <button name='/' onClick={e => handleClick(e.target.name)}>/</button><br/>
      </div>
       <div className="btn-group">
        <button name='1' onClick={e => handleClick(e.target.name)}>1</button>
        <button name='2' onClick={e => handleClick(e.target.name)}>2</button>
        <button name='3' onClick={e => handleClick(e.target.name)}>3</button>
        <button name='-' onClick={e => handleClick(e.target.name)}>-</button><br/>
      </div>
      <div className="btn-group">
        <button name="." onClick={e => handleClick(e.target.name)}>.</button>
        <button name="0" onClick={e => handleClick(e.target.name)}>0</button>
        <button name="=" onClick={e => calculate(e.target.name)}>=</button>
        <button name="+" onClick={e => handleClick(e.target.name)}>+</button>
      </div>
      <br/><br/>
      <p>&copy;By Deepak Oli using ReactJS and MathJS</p>
    </div>

  );
}

export default App;
