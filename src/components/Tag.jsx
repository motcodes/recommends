import React from 'react';

export default function Tag({ children }) {
  return (
    <span className="py-1 px-2 bg-yellow-900 text-yellow-200 rounded">
      {children}
    </span>
  );
}
