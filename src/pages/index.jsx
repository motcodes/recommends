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
        <h1 className="mt-0 mb-2">
          <span>📓</span> /recommends
        </h1>
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
            className="text-base px-3 text-center w-36 h-32 shadow-md transition duration-300 flex items-center justify-center rounded-md cursor-pointer border-2 border-white bg-white dark:bg-gray-900 dark:border-gray-900 hover:border-yellow-500"
          >
            <a href={`/${page.slug}`} className="no-underline">
              {page.frontmatter.icon && (
                <>
                  <span>{page.frontmatter.icon}</span>
                  <br />
                </>
              )}
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
          icon
        }
      }
    }
  }
`;
