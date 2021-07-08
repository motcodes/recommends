import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <main className="grid place-content-center h-full">
        <title>Not found</title>
        <h1>Page not found</h1>
        <p>
          Sorry we couldn’t find what you were looking for.
          <br />
          <Link to="/" className="underline">
            Go home
          </Link>
          .
        </p>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
