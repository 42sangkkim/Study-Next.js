import { Preview } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import React from 'react';
import { theme } from '../src/themes';
import * as  NextImage from "next/image";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    transition: 0.25s;
    color: #000000;
  }
`;

// const OriginalImage = NextImage.default;

// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => typeof props.src === 'string' ? (
//     <OriginalImage {...props} unoptimized blurDataUrl={props.src} />
//   ) : (
//     <OriginalImage {...props} unoptimized />
//   ),
// });

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {Story()}
      </ThemeProvider>
    ),
  ],
};

export default preview;
