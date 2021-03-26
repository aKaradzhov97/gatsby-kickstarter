import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Header } from './header';
import './layout.css';

interface ILayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

export const Layout = ({ children }: ILayoutProps) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          siteTitle
        }
      }
    }
  `);

  const {
    siteMetadata: { siteTitle },
  } = site;

  return (
    <>
      <Header siteTitle={siteTitle || 'Title'} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};