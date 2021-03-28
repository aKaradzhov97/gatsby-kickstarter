import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface ISEOProps {
  title: string;
  titleTemplate?: string;
  description?: string;
  robots?: string;
  meta?: {}[];
  lang?: string;
}

export const SEO = ({
  title,
  titleTemplate,
  description,
  robots,
  lang,
}: ISEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteTitleTemplate
            siteDescription
            siteRobots
          }
        }
      }
    `
  );

  const {
    siteTitle,
    siteTitleTemplate,
    siteDescription,
    siteRobots,
  } = site.siteMetadata;

  const metaTitle = title || siteTitle;
  const metaTitleTemplate = titleTemplate || siteTitleTemplate;
  const metaDescription = description || siteDescription;

  const metaTagNameArray = [
    {
      name: 'robots',
      content: robots ? robots : siteRobots,
    },
  ];

  const metaTagOpenGraphArray = [
    {
      property: `og:title`,
      content: metaTitle,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang: lang ? lang : 'bg-BG',
      }}
      title={metaTitle}
      titleTemplate={metaTitleTemplate}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        ...metaTagNameArray,
        ...metaTagOpenGraphArray,
      ]}
    />
  );
};
