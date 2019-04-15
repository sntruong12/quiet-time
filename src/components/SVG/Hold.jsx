import React from 'react';

import './Hold.css';

const Hold = () => (
  <div className="hold">
    <h3>hold for 8 seconds</h3>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="219 219 204 204"
      width="200"
      height="200">
      <defs>
        <path d="M249.37 253.33c-25 25-29.37 32.15-29.37 66.67s4.37 46.43 29.37 71.43c25 25 34.52 28.57 70.63 28.57 36.11 0 48.81-3.57 73.81-28.57S420 354.52 420 320c0-34.52-1.19-41.67-26.19-66.67S356.11 220 320 220s-45.63 8.33-70.63 33.33z" id="hold"/>
      </defs>
      <use xlinkHref="#hold" fillOpacity="0" stroke="#FFF" strokeWidth="10"/>
    </svg>
  </div>
)

export default Hold;