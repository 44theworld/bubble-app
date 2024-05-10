import React, { useState, useRef } from 'react';
import useInterval from 'use-interval';
import './MovingComponent.css';

const MovingComponent = ({inputText}) => {
  const componentRef = useRef(null);
  const [x, setX] = useState(window.innerWidth / 2);
  const [y, setY] = useState(window.innerHeight / 2);
  const [directionX, setDirectionX] = useState(Math.floor(Math.random() * 10 - 5));
  const [directionY, setDirectionY] = useState(Math.floor(Math.random() * 10 - 5));
  // Consider using a separate state or library for frequent color updates
  const [color, setColor] = useState(() => {
    const red = Math.floor(Math.random() * 150) + 100;
    const green = Math.floor(Math.random() * 150) + 100;
    const blue = Math.floor(Math.random() * 150) + 100;
    const hexColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    return hexColor;
  });
  
  const updatePosition = () => {
    const nextX = x + directionX;
    const nextY = y + directionY;

    const hasReachedBoundaryX =
      (directionX > 0 && nextX > window.innerWidth - componentRef.current?.offsetWidth) ||
      (directionX < 0 && nextX < 0);
    
    const hasReachedBoundaryY =
      (directionY > 0 && nextY > window.innerHeight - componentRef.current?.offsetHeight) ||
      (directionY < 0 && nextY < 0);

    if (hasReachedBoundaryX) {
      setDirectionX(-directionX);
      console.log(x, nextX, window.innerWidth - componentRef.current.offsetWidth);
    } else {
      setX(nextX);
    }

    if (hasReachedBoundaryY) {
      setDirectionY(-directionY);
      console.log(y, nextY, window.innerHeight, componentRef.current.offsetHeight) - 30;
    } else {
      setY(nextY);
    }
  }
  useInterval(updatePosition, 20);

  return (
    <div className='moving-component' ref={componentRef} style={{ transform: `translate(${x}px, ${y}px)`, color: color}}>
      {inputText}
    </div>
  );
};

export default MovingComponent;
