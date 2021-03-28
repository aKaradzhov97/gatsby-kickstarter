import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { Layout } from '../components/layout/layout';
import { SEO } from '../components/seo/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      <FormattedMessage id="home.greeting" />
    </h1>
    <p>
      <FormattedMessage id="home.welcome" />
    </p>
    <p>
      <FormattedMessage id="home.start_building" />
    </p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      loading="eager"
      width={300}
      quality={95}
      formats={['auto', 'webp', 'avif']}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
);

export default IndexPage;
