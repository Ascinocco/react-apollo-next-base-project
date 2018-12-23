import PropTypes from 'prop-types';
import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from 'components/Header';
import Meta from 'components/Meta';

const theme = {
  white: '#fff',
  black: '#000',
  maxWidth: '1000px',
};

const StyledPage = styled.div`
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  padding: 2rem;
`;

/* eslint-disable */
injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.5rem;
    line-height: 2;
    margin: 0;
    padding: 0;
  }
  a {
    color: ${theme.black};
    text-decoration: none;
  }
`;
/* eslint-enable */

const propTypes = {
  children: PropTypes.element,
};

const defaultProps = {
  children: {},
};

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      <Header />
      <Inner>{children}</Inner>
    </StyledPage>
  </ThemeProvider>
);

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
