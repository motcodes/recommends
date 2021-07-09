import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React, { useState } from 'react';
import { Tooltip } from './tooltip';

export const Code = ({ codeString, language }) => {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy(e) {
    navigator.clipboard.writeText(codeString);
    console.log('clicked');
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`relative my-8 p-4 rounded-lg overflow-x-auto font-mono text-sm leading-5 sm:text-base sm:leading-6 ${className}`}
          style={style}
        >
          <Tooltip
            className={`absolute inline-flex items-center top-2 right-2 p-1 rounded-md border-2
            transition-all duration-200 ease-in-out cursor-pointer
            ${
              isCopied
                ? 'bg-green-900 border-green-500 text-green-500'
                : 'bg-gray-900 border-gray-500 text-gray-500 hover:border-gray-100 hover:text-gray-100 '
            }
             `}
            onClick={(e) => handleCopy(e)}
            text="Copied!"
            isCopied={isCopied}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isCopied ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              )}
            </svg>
          </Tooltip>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
