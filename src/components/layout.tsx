import React, { lazy, Suspense } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Spinner } from './spinner/spinner';
import './layout.css';

const Header = lazy(() => import('./header/header'));

const Fallback = () => <Spinner/>;

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
    <Suspense fallback={Fallback()}>
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
    </Suspense>
  );
};
