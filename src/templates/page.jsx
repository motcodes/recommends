import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import Tag from '../components/Tag';
import { useSiteMetadata } from '../hooks/useMetadata';
import { TabelOfContents } from '../components/tabelOfContents';
import { Seo } from '../components/seo';

export default function PostPage({ data, location }) {
  const { frontmatter, body, excerpt, slug, tableOfContents } = data.mdx;
  const { title, tags, icon, image } = frontmatter;
  const { items: tocItems } = tableOfContents;
  const { siteUrl } = useSiteMetadata();

  const currentPage = location.pathname;
  const currentFile =
    currentPage === '/'
      ? 'src/page/index.jsx'
      : frontmatter.chapter !== null
      ? `content${currentPage.replace(/\/$/, '')}/index.mdx`
      : `content${currentPage.replace(/\/$/, '')}.mdx`;
  const editOnGithub = `https://github.com/motcodes/recommends/blob/main/${currentFile}`;

  const pageTitle = icon ? `${icon} ${title}` : title;

  return (
    <Layout editOnGithub={editOnGithub}>
      <Seo
        title={pageTitle}
        description={excerpt}
        image={image}
        pathname={`${siteUrl}/${slug}`}
        article
      />
      <h1 className="mt-0">
        {icon && <span>{icon}</span>} {title}
      </h1>
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
        image
        chapter
        icon
      }
    }
  }
`;
