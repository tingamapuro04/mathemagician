/*eslint-disable*/
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import calculate from '../Logic/calculate'



class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: ''
    }
  }

  eventHandle = (e) => {
    const val = e.target.innerText
    this.setState((obj) => calculate(obj, val))
  }


  eventcomplete = () => {
    this.setState({
      total: 0,
      next: null,
      operation: null
    })
  }

  render() {

    const { total, next, operation} = this.state

    const result = `${ total || next || operation ? `${ total || '' } ${operation || ''} ${next || ''}` :  0}`

    return (
      <div className="App">
        <div className="calculator">
          <Result result= { result } />
          <div className="second">
            <div className="Digits">
              <Digits name="AC" handle= {this.eventHandle} />
              <Digits name="+/-" handle= {this.eventHandle} />
              <Digits name="%" handle= {this.eventHandle} />
              <Digits name="7" handle= {this.eventHandle} />
              <Digits name="8" handle= {this.eventHandle} />
              <Digits name="9" handle= {this.eventHandle} />
              <Digits name="4" handle= {this.eventHandle} />
              <Digits name="5" handle= {this.eventHandle} />
              <Digits name="6" handle= {this.eventHandle} />
              <Digits name="1" handle= {this.eventHandle} />
              <Digits name="2" handle= {this.eventHandle} />
              <Digits name="3" handle= {this.eventHandle} />
            </div>
            <div className="operations">
              <Operator name ="÷" handle= {this.eventHandle} />
              <Operator name ="x" handle= {this.eventHandle} />
              <Operator name ="-" handle= {this.eventHandle} />
              <Operator name ="+" handle= {this.eventHandle} />
            </div>
          </div>
          <div className="lastOne">
            <Bottom name ="0" handle= {this.eventHandle} />
            <Bottom name ="." handle= {this.eventHandle} />
            <Bottom name ="=" handle= {this.eventHandle} />
          </div>

        </div>
      </div>
    );
  }
}

class Result extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="result">
        {this.props.result}
      </div>
    )
  }
}

class Operator extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="operator">
      <button type="button" onClick= {this.props.handle} > {this.props.name} </button>
    </div>
    )
  }
}

class Digits extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="digits">
        <button type="button" onClick={ this.props.handle } > {this.props.name} </button>
      </div>
    )
  }
}

class Bottom extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="last">
      <button type="button" onClick={ this.props.handle } > {this.props.name} </button>
    </div>
    )
  }
}

export default Calculator;
