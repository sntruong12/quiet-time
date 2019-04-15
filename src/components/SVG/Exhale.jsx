import React from 'react';

import './Exhale.css';

const Exhale = () => (
  <div className="exhale">
    <h3>exhale for 10 seconds</h3>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="129.921 228.968 380.159 182.063"
      width="200"
      height="200">
      <defs>
        <path d="M340.95 320c2.41-27.46 10.45-48.36 24.13-62.7 13.68-14.34 32.99-22.11 57.94-23.33 27.06.55 47.43 8.33 61.11 23.33 13.67 15 20.66 37.22 20.95 66.67-.29 19.13-7.28 35.53-20.95 49.2-13.68 13.68-34.05 24.63-61.11 32.86h-288.1" id="exhale"/>
      </defs>
      <use xlinkHref="#exhale" fillOpacity="0" stroke="#FFF" strokeWidth="15"/>
    </svg>
  </div>
)

export default Exhale;