import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';

function IndexPage() {
  const {
    allMdx: { nodes },
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
      allMdx {
        nodes {
          slug
          frontmatter {
            tags
            title
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <main>
        <div className="mb-10">
          <h1 className="mt-0 mb-2">{siteMetadata.title}</h1>
          <p>{siteMetadata.description}</p>
        </div>
        <ul>
          {nodes &&
            nodes.map((page) => (
              <li key={page.slug} className="text-xl my-1">
                <a href={`/${page.slug}`}>{page.frontmatter.title}</a>
              </li>
            ))}
        </ul>
      </main>
    </Layout>
  );
}

export default IndexPage;
