import React from 'react';
import { Link } from 'react-router-dom';

// const UnList = { display: 'flex', listStyle: 'none', paddingRight: 0 };
function Nav() {
  return (
    <nav>
      <p className="title">Math Magician</p>
      <ul className="UnList">
        <li className="Litem">
          <Link to="/">Home</Link>
        </li>
        <li className="Litem">
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="Litem">
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
