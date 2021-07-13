import { graphql } from 'gatsby';
import React from 'react';
import Seo from 'react-seo-component';
import Layout from '../components/layout';
import { useSiteMetadata } from '../hooks/useMetadata';

export default function IndexPage({ data }) {
  const { nodes } = data.allMdx;

  const {
    description,
    siteTitle,
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
        <h1 className="mt-0 mb-2">{siteTitle}</h1>
        <p>{description}</p>
      </div>
      <ul className="list-none">
        {nodes &&
          nodes
            .filter((node) => node.frontmatter.chapter !== null)
            .map((page) => (
              <li key={page.slug} className="text-xl my-1">
                <a href={`/${page.slug}`} className="">
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
    allMdx(sort: { fields: frontmatter___chapter }) {
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
