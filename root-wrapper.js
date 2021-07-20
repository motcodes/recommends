import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { Code } from './src/components/code';

const components = {
  h2: ({ children, style, ...rest }) => (
    <h2 {...rest} style={{ marginTop: 32, ...style }}>
      {children}
    </h2>
  ),
  h3: ({ children, style, ...rest }) => (
    <h3 {...rest} style={{ marginTop: 32, ...style }}>
      {children}
    </h3>
  ),
  ul: ({ children, style, ...rest }) => (
    <ul {...rest} style={{ marginLeft: 24, ...style }}>
      {children}
    </ul>
  ),
  ol: ({ children, style, ...rest }) => (
    <ol {...rest} style={{ marginLeft: 24, ...style }}>
      {children}
    </ol>
  ),
  li: ({ children, style, ...rest }) => (
    <li {...rest} style={{ lineHeight: '130%', ...style }}>
      {children}
    </li>
  ),
  'p.inlineCode': (props) => (
    <code
      style={{
        backgroundColor: '#777',
        padding: '2px 4px',
        borderRadius: 4,
        color: 'white',
      }}
      {...props}
    />
  ),
  iframe: ({ style, ...props }) => (
    <iframe style={{ marginBottom: 48, ...style }} {...props} />
  ),
  a: ({ children, style, ...rest }) => (
    <a
      {...rest}
      style={{ ...style, display: 'inline-flex', alignItems: 'center' }}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        style={{ marginLeft: 4, height: 20, width: 20 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace('language-', '')}
          {...props}
        />
      );
    }
  },
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
