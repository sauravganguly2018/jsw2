// Loader.js

import React, {useState} from 'react';
import './Loader.css'

const Loader = ({ show }) => {
  const [rounds, setRounds] = useState(0);

  return (
    <div className="loader-container">
      <div className="loader">Please Wait... </div>
    </div>
  );
};

export default Loader;
