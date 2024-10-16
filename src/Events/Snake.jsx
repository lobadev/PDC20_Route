import React, { useState, useEffect } from 'react';

const Snake = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [position2, setPosition2] = useState({ x:0, y: 50 });

  const moveSquare = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        setPosition((prev) => ({ ...prev, y: prev.y - 10 }));
        break;
    case 'w':
        setPosition2((prev) => ({ ...prev, y: prev.y - 10 }));
        break;
      case 'ArrowDown':
        setPosition((prev) => ({ ...prev, y: prev.y + 10 }));
        break;
    case 's':
        setPosition2((prev) => ({ ...prev, y: prev.y + 10 }));
        break;
      case 'ArrowLeft':
        setPosition((prev) => ({ ...prev, x: prev.x - 10 }));
        break;
    case 'a':
        setPosition2((prev) => ({ ...prev, x: prev.x - 10 }));
        break;
      case 'ArrowRight':
        setPosition((prev) => ({ ...prev, x: prev.x + 10 }));
        break;
    case 'd':
        setPosition2((prev) => ({ ...prev, x: prev.x + 10 }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', moveSquare);
    return () => {
      window.removeEventListener('keydown', moveSquare);
    };
  }, []);

  return (
    <div className="container">
      <div
        className="square"
        style={{
          position: 'absolute',
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: '20px',
          height: '20px',
          backgroundColor: 'red',
        }}
      ></div>
      <div
        className="square2"
        style={{
          position: 'absolute',
          top: `${position2.y}px`,
          left: `${position2.x}px`,
          width: '20px',
          height: '20px',
          backgroundColor: 'blue',
        }}
      ></div>
    </div>
  );
};

export default Snake;
