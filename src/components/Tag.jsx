import React from 'react';

export default function Tag({ children }) {
  return (
    <span className="py-1 px-2 bg-blue-200 text-blue-900 dark:bg-blue-200 dark:text-blue-900 rounded">
      {children}
    </span>
  );
}
