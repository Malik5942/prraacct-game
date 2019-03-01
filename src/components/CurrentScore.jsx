import React from 'react';
import PropTypes from 'prop-types';

const CurrentScore = (props) => {
  const scoreStyle = {
    fontFamily: 'san-sarif',
    fontSize: 80,
    fill: 'white',
  };

  return (
    <g filter="url(#shadow)">
      <text style={scoreStyle} x="500" y="55">
       Score: {props.score}
      </text>
    </g>
  );
};

CurrentScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default CurrentScore;