import { Link } from 'gatsby';
import React from 'react';
import { useLocation } from '@reach/router';
import { EditOnGithub } from './editOnGithub';

function Layout({
  children,
  className = '',
  headerClassName = '',
  footerClassName = '',
  editOnGithub = 'https://github.com/motcodes/recommends',
}) {
  const { pathname } = useLocation();
  return (
    <div className={`max-w-2xl mx-auto px-4 ${headerClassName}`}>
      <header className="py-4" style={{ minHeight: 52 }}>
        {pathname !== '/' && (
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-lg no-underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            /recommends
          </Link>
        )}
      </header>
      <main className={`min-h-screen h-full py-8 ${className}`}>
        {children}
      </main>
      <footer
        className={`py-10 border-t-2 border-gray-500 dark:border-gray-100 flex justify-between w-full ${footerClassName}`}
      >
        <p>
          a website by <a href="https://twitter.com/motcodes">@motcodes</a> and
          friends,
          <br /> written in <a href="https://gatsbyjs.com">Gatsby</a> and hosted
          on <a href="https://vercel.com">Vercel</a>.
        </p>
        <EditOnGithub href={editOnGithub} />
      </footer>
    </div>
  );
}

export default Layout;
