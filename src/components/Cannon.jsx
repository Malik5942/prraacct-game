import React from 'react';
import { pathFromBezierCurve } from '../utils/formulas';
import PropTypes from 'prop-types';

export const CannonBase = (props) => {
  const cannonBaseStyle = {
    fill: '#cccc99',
    stroke: 'white',
    strokeWidth: '2px',
  };

  const baseWidth = 100;
  const halfBase = 65;
  const height = 100;
  const negativeHeight = height * -1;

  const cubicBezierCurve = {
    initialAxis: {
      x: -halfBase,
      y: height,
    },
    initialControlPoint: {
      x: 20,
      y: negativeHeight,
    },
    endingControlPoint: {
      x: 60,
      y: negativeHeight,
    },
    endingAxis: {
      x: baseWidth,
      y: 0,
    },
  };

  return (
    <g>
      <path
        style={cannonBaseStyle}
        d={pathFromBezierCurve(cubicBezierCurve)}
      />
      <line
        // x1={-halfBase}
        y1={height}
        // x2={halfBase}
        y2={height}
        style={cannonBaseStyle}
      />
    </g>
  );
};

export const CannonPipe = (props) => {
  const cannonPipeStyle = {
    fill: '#ff6600',
    stroke: 'white',
    strokeWidth: '3px',
  };
  const transform = `rotate(${props.rotation}, 0, 0)`;

  const muzzleWidth = 80;
  const halfMuzzle = 40;
  const height = 150;
  const yBasis = 110;

  const cubicBezierCurve = {
    initialAxis: {
      x: -halfMuzzle,
      y: -yBasis,
    },
    initialControlPoint: {
      x: -40,
      y: height * 1.7,
    },
    endingControlPoint: {
      x: 80,
      y: height * 1.7,
    },
    endingAxis: {
      x: muzzleWidth,
      y: 0,
    },
  };

  return (
    <g transform={transform}>
      <path
        style={cannonPipeStyle}
        d={pathFromBezierCurve(cubicBezierCurve)}
      />
      <line
        x1={-halfMuzzle}
        y1={-yBasis}
        x2={halfMuzzle}
        y2={-yBasis}
        style={cannonPipeStyle}
      />
    </g>
  );
};

CannonPipe.propTypes = {
  rotation: PropTypes.number.isRequired,
};