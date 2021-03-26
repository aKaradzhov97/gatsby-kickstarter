const title = 'Gatsby Kickstart';

const config = {
  siteTitle: title, // Site title.
  siteTitleShort: title, // Short site title for home screen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: `${title} - the one and only!`, // Alternative site title for SEO.
  siteTitleTemplate: `%s | ${title}`,
  logo: '/path/to/logo.png', // Logo used for SEO and manifest.
  siteUrl: 'https://gatsby-kickstarter-ak.netlify.app', // Domain of your website without pathPrefix.
  siteDescription: `${title} - the biggest leader in area of creativity!`, // Website description used for RSS feeds/meta description tag.
  robots: 'index,follow',
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  googleAnalyticsID: 'UA-111111111-1', // GA tracking ID.
  themeColor: '#663399', // Used for setting manifest and progress theme colors.
  backgroundColor: '#663399', // Used for setting manifest background color.
};

// Validate
// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure url doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') {
  config.siteUrl = config.siteUrl.slice(0, -1);
}

module.exports = {
  siteMetadata: {
    siteTitle: title,
    siteTitleShort: config.siteTitleShort,
    siteTitleAlt: config.siteTitleAlt,
    siteTitleTemplate: config.siteTitleTemplate,
    siteDescription: config.siteDescription,
    robots: config.robots,
    siteUrl: config.siteUrl,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
        defer: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/intl`,
        languages: ['bg-bg', 'en-us'],
        defaultLanguage: 'bg-bg'
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix || '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: config.siteUrl,
        sitemap: `${config.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: config.siteUrl,
        // stripQueryString: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-split-css',
    'gatsby-plugin-offline',
  ],
};
