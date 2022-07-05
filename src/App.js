// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit
//           {' '}
//           <code>src/App.js</code>
//           {' '}
//           and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';

const App = () => {
  const Numbers = () => {
    const digits = [];
    for (let i = 1; i < 10; i += 1) {
      digits.push(
        <button type="button" key={i}>{i}</button>,
      );
    }
    return digits;
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="result">
          0
        </div>
        <div className="operator">
          <button type="button">/</button>
          <button type="button">*</button>
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
        <div className="digits">
          { Numbers() }
          <button type="button">0</button>
          <button type="button">.</button>
          <button type="button">=</button>
        </div>
      </div>
    </div>
  );
};
export default App;
