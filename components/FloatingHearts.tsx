
import React from 'react';

interface HeartProps {
  count: number;
}

const FloatingHearts: React.FC<HeartProps> = ({ count }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 20 + 10;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 10;
        
        return (
          <div
            key={i}
            className="heart-particle absolute"
            style={{
              left: `${left}%`,
              bottom: '-50px',
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          >
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="#F8C8DC"
              className="opacity-40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default FloatingHearts;
