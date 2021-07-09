import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            siteUrl
            siteTitle
            description
            author
            image
            siteLanguage
            siteLocale
            twitterUsername
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
