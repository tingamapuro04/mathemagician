function Calculator() {
  return (
    <div className="App">
      <div className="calculator">
        <Result />
        <div className="second">
          <Digits />

          <Operator />
        </div>
        <Bottom />
      </div>
    </div>
  );
}

function Result() {
  return (
    <div className="result">
      0
    </div>
  );
}

function Operator() {
  return (
    <div className="operator">
      <button type="button">÷</button>
      <button type="button">×</button>
      <button type="button">–</button>
      <button type="button">+</button>
    </div>
  );
}

function Bottom() {
  return (
    <div className="last">
      <button type="button">0</button>
      <button type="button">.</button>
      <button className="equals" type="button">=</button>
    </div>
  );
}

function Digits() {
  return (
    <div className="digits">
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
    </div>
  );
}

export default Calculator;
