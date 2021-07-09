import React from 'react';
import '../styles/tooltip.css';

export function Tooltip({ children, text, className, isCopied, ...rest }) {
  return (
    <div className={`tooltip ${className}`} {...rest}>
      {children}
      {isCopied && <span className="tooltiptext">{text}</span>}
    </div>
  );
}
