import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSiteMetadata } from '../hooks/useMetadata';

export function Seo({
  title,
  titleTemplate,
  description,
  image,
  pathname,
  article = false,
}) {
  const {
    description: defaultDescription,
    siteTitle: defaultTitle,
    titleTemplate: defaultTemplate,
    image: defaultImage,
    siteUrl,
    siteLanguage,
    siteLocale,
    author,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    titleTemplate:
      titleTemplate ||
      defaultTemplate ||
      'a collection of recommendations and useful links',
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: pathname || siteUrl,
    siteLanguage: siteLanguage ? siteLanguage : 'en-US',
    article: article ? 'article' : 'website',
  };
  // console.log('defaultTemplate :', seo.titleTemplate);

  return (
    <>
      <Helmet title={seo.title} titleTemplate={`%s | ${seo.titleTemplate}`}>
        <html lang={siteLanguage ? siteLanguage : 'en'} />
        <link rel="canonical" href={seo.url} />
        <meta name="description" content={seo.description} />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href={`${siteUrl}/apple-icon-57x57.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href={`${siteUrl}/apple-icon-60x60.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={`${siteUrl}/apple-icon-72x72.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${siteUrl}/apple-icon-76x76.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={`${siteUrl}/apple-icon-114x114.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={`${siteUrl}/apple-icon-120x120.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href={`${siteUrl}/apple-icon-144x144.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${siteUrl}/apple-icon-152x152.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${siteUrl}/apple-icon-180x180.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${siteUrl}/android-icon-192x192.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${siteUrl}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${siteUrl}/favicon-96x96.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${siteUrl}/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${siteUrl}/manifest.json`} />
        <meta name="theme-color" content="#F9FAFB" />
      </Helmet>
      {seo.image && (
        <>
          <Facebook
            desc={seo.description}
            image={seo.image}
            title={seo.title}
            type={seo.article}
            url={pathname}
            locale={siteLocale ? siteLocale : 'de_at'}
          />
          <Twitter
            title={seo.title}
            image={seo.image}
            desc={seo.description}
            username={twitterUsername}
          />
        </>
      )}
    </>
  );
}

export const Facebook = ({ url, type, title, desc, image, locale }) => (
  <Helmet>
    <meta property="og:locale" content={locale} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={desc} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </Helmet>
);

export const Twitter = ({
  type = 'summary_large_image',
  username,
  title,
  desc,
  image,
}) => (
  <Helmet>
    {username && <meta name="twitter:creator" content={username} />}
    <meta name="twitter:card" content={type} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content={desc} />
  </Helmet>
);
