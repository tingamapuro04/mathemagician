/*eslint-disable*/
import React from 'react';



class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="calculator">
          <Result result="0"/>
          <div className="second">
            <div className="Digits">
              <Digits digit="AC"/>
              <Digits digit="+/-"/>
              <Digits digit="%"/>
              <Digits digit="7"/>
              <Digits digit="8"/>
              <Digits digit="9"/>
              <Digits digit="4"/>
              <Digits digit="5"/>
              <Digits digit="6"/>
              <Digits digit="1"/>
              <Digits digit="2"/>
              <Digits digit="3"/>
            </div>
            <div className="operations">
              <Operator operator="÷"/>
              <Operator operator="×"/>
              <Operator operator="-"/>
              <Operator operator="+"/>
            </div>
          </div>
          <div className="lastOne">
            <Bottom last="0"/>
            <Bottom last="."/>
            <Bottom last="="/>
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
      <button type="button"> {this.props.operator} </button>
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
        <button type="button"> {this.props.digit} </button>
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
      <button type="button"> {this.props.last} </button>
    </div>
    )
  }
}

export default Calculator;
