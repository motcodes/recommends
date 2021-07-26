import React from 'react';
import { graphql } from 'gatsby';
import Seo from 'react-seo-component';
import Layout from '../components/layout';
import { useSiteMetadata } from '../hooks/useMetadata';

export default function IndexPage({ data }) {
  const { nodes } = data.allMdx;

  const {
    siteTitle,
    description,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();

  return (
    <Layout>
      <Seo
        title={siteTitle}
        titleTemplate={'a collection of recommendations and useful links'}
        description={description || ``}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <div className="mb-10">
        <h1 className="mt-0 mb-2">/recommends</h1>
        <p>
          recommends, as the name says, is a collection of recommendations with
          the purpose to guide my fellow multimedia technology students on their
          path to becoming a developer 👩‍💻
        </p>
      </div>
      <ul className="list-none flex flex-wrap gap-4 justify-center">
        {nodes.map((page) => (
          <li
            key={page.slug}
            className="text-base my-1 px-3 text-center w-36 h-32 shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center rounded-md cursor-pointer bg-white"
          >
            <a href={`/${page.slug}`} className="no-underline">
              {page.frontmatter.title}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query INDEX_QUERY {
    allMdx(
      sort: { fields: frontmatter___chapter }
      filter: { frontmatter: { chapter: { ne: null } } }
    ) {
      nodes {
        slug
        frontmatter {
          tags
          title
          chapter
        }
      }
    }
  }
`;
