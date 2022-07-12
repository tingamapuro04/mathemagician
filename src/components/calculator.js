import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../Logic/calculate';

const Calculator = () => {
  const [calc, setCalc] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const eventHandle = (e) => {
    const val = e.target.innerText;
    setCalc(calculate(calc, val));
  };

  return (
    <div className="App">
      <h3 className="picato">Lets do some maths</h3>
      <div className="calculator">
        <Result result={calc} />
        <div className="second">
          <div className="Digits">
            <Digits name="AC" handle={eventHandle} />
            <Digits name="+/-" handle={eventHandle} />
            <Digits name="%" handle={eventHandle} />
            <Digits name="7" handle={eventHandle} />
            <Digits name="8" handle={eventHandle} />
            <Digits name="9" handle={eventHandle} />
            <Digits name="4" handle={eventHandle} />
            <Digits name="5" handle={eventHandle} />
            <Digits name="6" handle={eventHandle} />
            <Digits name="1" handle={eventHandle} />
            <Digits name="2" handle={eventHandle} />
            <Digits name="3" handle={eventHandle} />
          </div>
          <div className="operations">
            <Operator name="÷" handle={eventHandle} />
            <Operator name="x" handle={eventHandle} />
            <Operator name="-" handle={eventHandle} />
            <Operator name="+" handle={eventHandle} />
          </div>
        </div>
        <div className="lastOne">
          <Bottom name="0" handle={eventHandle} />
          <Bottom name="." handle={eventHandle} />
          <Bottom name="=" handle={eventHandle} />
        </div>

      </div>
    </div>
  );
};

const Result = ({ result }) => {
  const { total, next, operation } = result;
  const results = `${total || next || operation ? `${total || ''} ${operation || ''} ${next || ''}` : 0}`;
  return (
    <div className="result">
      { results }
    </div>
  );
};

Result.propTypes = {
  result: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,

  }),
};

Result.defaultProps = { result: null };

const Operator = ({ handle, name }) => (
  <div className="operator">
    <button type="button" onClick={handle}>
      {' '}
      {name}
      {' '}
    </button>
  </div>
);

Operator.propTypes = {
  handle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const Digits = ({ handle, name }) => (
  <div className="digits">
    <button type="button" onClick={handle}>
      {' '}
      {name}
      {' '}
    </button>
  </div>
);

Digits.propTypes = {
  handle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

const Bottom = ({ handle, name }) => (
  <div className="last">
    <button type="button" onClick={handle}>
      {' '}
      { name}
      {' '}
    </button>
  </div>
);

Bottom.propTypes = {
  handle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Calculator;
