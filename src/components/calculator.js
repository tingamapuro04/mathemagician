/*eslint-disable*/
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import calculate from '../Logic/calculate'



const Calculator = () => {
  const [calc, setCalc] = useState({
    total: 0,
    next: '',
    operation: ''
  })


  const eventHandle = (e) => {
    const val = e.target.innerText
    setCalc(calculate(calc, val))
  }

  return (
    <div className="App">
      <div className="calculator">
        <Result result= { calc } />
        <div className="second">
          <div className="Digits">
            <Digits name="AC" handle= {eventHandle} />
            <Digits name="+/-" handle= {eventHandle} />
            <Digits name="%" handle= { eventHandle } />
            <Digits name="7" handle= { eventHandle } />
            <Digits name="8" handle= { eventHandle } />
            <Digits name="9" handle= { eventHandle } />
            <Digits name="4" handle= { eventHandle } />
            <Digits name="5" handle= { eventHandle } />
            <Digits name="6" handle= { eventHandle } />
            <Digits name="1" handle= { eventHandle } />
            <Digits name="2" handle= { eventHandle } />
            <Digits name="3" handle= { eventHandle } />
          </div>
          <div className="operations">
            <Operator name ="÷" handle= { eventHandle } />
            <Operator name ="x" handle= { eventHandle } />
            <Operator name ="-" handle= { eventHandle } />
            <Operator name ="+" handle= { eventHandle } />
          </div>
        </div>
        <div className="lastOne">
          <Bottom name ="0" handle= { eventHandle } />
          <Bottom name ="." handle= { eventHandle } />
          <Bottom name ="=" handle= { eventHandle } />
        </div>

      </div>
    </div>
  );

}

const Result = (props) => {
  const { total, next, operation} = props.result
  const results = `${ total || next || operation ? `${ total || '' } ${operation || ''} ${next || ''}` :  0}`
  return (
    <div className="result">
      { results }
    </div>
  )
}

const Operator = (props) => {
  return (
    <div className="operator">
    <button type="button" onClick= {props.handle} > {props.name} </button>
  </div>
  )
}

const Digits = (props) =>  {

  return (
    <div className="digits">
      <button type="button" onClick={ props.handle } > {props.name} </button>
    </div>
  )
}

const Bottom = (props) =>  {
  return (
    <div className="last">
    <button type="button" onClick={ props.handle } > { props.name} </button>
  </div>
  )
}

export default Calculator;
