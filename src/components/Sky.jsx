import React from 'react';

const Sky = (props) => {
  const skyStyle = {
    fill: '#00ccff',
  };
  const skyWidth = 5000;
  const gameHeight = 1300;
  return (
      <rect
        style={skyStyle}
        x={skyWidth / -2}
        y={100 - gameHeight}
        width={skyWidth}
        height={gameHeight}
      >
      </rect>
  );
};

export default Sky;