import React from 'react';
// import { Link } from 'react-router-dom';

// const UnList = { display: 'flex', listStyle: 'none', paddingRight: 0 };
function Nav() {
  return (
    <nav>
      <h1 className="title" href="/">Math Magician</h1>
      <ul className="UnList">
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/calculator">Calculator</a>
        </li>
        <li>
          <a href="/quote">Quote</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
