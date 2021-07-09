// import React from 'react';
// import { Helmet } from 'react-helmet-async';
// import { useSiteMetadata } from '../hooks/useMetadata';

// export function Seo({ description, title, titleTemplate, image }) {
//   const {
//     description,
//     title,
//     image,
//     siteUrl,
//     siteLanguage,
//     siteLocale,
//     twitterUsername,
//   } = useSiteMetadata();
//   const seo = {
//     title: title || defaultTitle,
//     titleTemplate: titleTemplate || `| ${defaultTitle}`,
//     description: description || defaultDescription,
//     image: `${siteUrl}/${image || defaultImage}`,
//     url: origin,
//   };

//   return (
//     <Helmet title={seo.title} titleTemplate={`%s ${seo.titleTemplate}`}>
//       <html lang="de" />
//       <link rel="canonical" href={seo.url} />
//       <meta name="description" content={seo.description} />
//       {seo.url && <meta property="og:url" content={seo.url} />}
//       {seo.title && <meta property="og:title" content={seo.title} />}
//       {seo.description && (
//         <meta property="og:description" content={seo.description} />
//       )}
//       {seo.image && (
//         <meta property="og:image" loading="lazy" content={seo.image} />
//       )}
//       {seo.image && <meta property="og:image:width" content="1200" />}
//       {seo.image && <meta property="og:image:height" content="630" />}

//       <meta name="twitter:card" content="summary_large_image" />
//       {twitterUsername && (
//         <meta name="twitter:creator" content={twitterUsername} />
//       )}
//       {seo.title && <meta name="twitter:title" content={seo.title} />}
//       {seo.description && (
//         <meta name="twitter:description" content={seo.description} />
//       )}
//       {seo.image && <meta name="twitter:image" content={seo.image} />}
//       {twitterUsername && (
//         <meta name="twitter:creator" content={twitterUsername} />
//       )}
//       {keywords && <meta name="keywords" content={keywords} />}
//       <meta name="robots" content="index,follow" />
//       <meta name="googlebot" content="index,follow" />
//     </Helmet>
//   );
// }
