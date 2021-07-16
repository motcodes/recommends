import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Seo from 'react-seo-component';
import Layout from '../components/layout';
import Tag from '../components/Tag';
import { useSiteMetadata } from '../hooks/useMetadata';
import { TabelOfContents } from '../components/tabelOfContents';

export default function PostPage({ data, location }) {
  const { frontmatter, body, excerpt, slug, tableOfContents } = data.mdx;
  const { title, tags } = frontmatter;
  const { items: tocItems } = tableOfContents;
  const {
    description,
    siteTitle,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();

  const currentPage = location.pathname;
  const currentFile =
    currentPage === '/'
      ? 'src/page/index.jsx'
      : frontmatter.chapter !== null
      ? `content${currentPage.replace(/\/$/, '')}/index.mdx`
      : `content${currentPage.replace(/\/$/, '')}.mdx`;
  const editOnGithub = `https://github.com/motcodes/recommends/blob/main/${currentFile}`;

  return (
    <Layout editOnGithub={editOnGithub}>
      <Seo
        title={title}
        titleTemplate={siteTitle}
        description={excerpt || description || ``}
        image={`${siteUrl}${image}`}
        pathname={`${siteUrl}/${slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        article={true}
      />
      <h1 className="mt-0">{title}</h1>
      <ul className="flex gap-1 mb-6 flex-wrap">
        {tags &&
          tags.map((tag) => (
            <li key={tag} className="inline-flex">
              <Tag>{tag}</Tag>
            </li>
          ))}
      </ul>
      {tocItems && tocItems.length > 1 && <TabelOfContents data={tocItems} />}
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
}

export const query = graphql`
  query POST_BY_SLUG($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      body
      excerpt(pruneLength: 250)
      slug
      tableOfContents
      frontmatter {
        tags
        title
        chapter
      }
    }
  }
`;
