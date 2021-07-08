import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '../components/layout';
import Tag from '../components/Tag';
import { getOpenGraph } from '../getOpenGraph';

export default function PostPage({ data, location }) {
  const {
    body,
    frontmatter: { title, tags },
  } = data.mdx;

  const currentPage = location.pathname;
  const currentFile =
    currentPage === '/'
      ? 'content/index.mdx'
      : `content${currentPage.replace(/\/$/, '')}.mdx`;
  const editOnGithub = `https://github.com/motcodes/recommends/blob/main/${currentFile}`;

  const [ogData, setOgData] = useState();

  useEffect(() => {
    const data = getOpenGraph(
      'https://www.oreilly.com/library/view/javascript-the-good/9780596517748/'
    );
    console.log('data :', data);
    setOgData(data);
  }, []);

  return (
    <Layout editOnGithub={editOnGithub}>
      <h1 className="mt-0">{title}</h1>
      <ul className="flex gap-1 mb-6 flex-wrap">
        {tags &&
          tags.map((tag) => (
            <li key={tag} className="inline-flex">
              <Tag>{tag}</Tag>
            </li>
          ))}
      </ul>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
}

export const query = graphql`
  query POST_BY_SLUG($slug: String) {
    mdx(slug: { regex: $slug }) {
      id
      slug
      body
      frontmatter {
        tags
        title
      }
    }
  }
`;
