import React from 'react';

import Head from 'next/head';

import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, isDarkMode, darkMode }) => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box
        bg={darkMode ? 'gray.800' : null}
        color={darkMode ? 'gray.100' : null}
      >
        <Box maxWidth={'1280px'} m="auto">
          <header>
            <Navbar darkMode={darkMode} isDarkMode={isDarkMode} />
          </header>
          <main style={{ position: 'relative' }}>{children}</main>
          <footer>
            <Footer darkMode={darkMode} />
          </footer>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
