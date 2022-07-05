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
import {
  Result, Operator, Bottom, Digits,
} from './components/calculator';

function App() {
  // const Numbers = () => {
  //   const digits = [];
  //   for (let i = 9; i > 0; i -= 1) {
  //     digits.push(
  //       <button type="button" key={i}>{i}</button>,
  //     );
  //   }
  //   return digits;
  // };
  return (
    <div className="App">
      <div className="calculator">
        <Result />
        <div className="second">
          <Digits />
          {/* <div className="digits">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            { Numbers() }
          </div> */}

          <Operator />
        </div>
        <Bottom />
      </div>
    </div>
  );
}

// const atieno = (props) => {
//   return (
//     <h1>Hello</h1>
//   )
// }

// function Atieno() {
//   return (
//     <h1>Hello</h1>
//   );
// }

export default App;
