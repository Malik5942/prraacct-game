import React from 'react';

const Ground = (props) => {
  const groundStyle = {
    fill: '#ffcc99',
    stroke: '#458232',
    strokeWidth: '3px'
  };

  const groundWidth = 5000;

  return (
    <g id="ground">
      <rect
        id="ground-2"
        data-name="ground"
        style={groundStyle}
        x={groundWidth / -2}
        y={-50}
        width={groundWidth}
        height={150}
      />
    </g>
  );
};

export default Ground;