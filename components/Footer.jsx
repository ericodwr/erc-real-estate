import React from 'react';

import { Box } from '@chakra-ui/react';

const Footer = ({ darkMode }) => {
  return (
    <Box
      textAlign={'center'}
      p="5"
      color={darkMode ? 'blue.400' : 'gray.600'}
      borderTop="2px"
      borderColor={'gray.300'}
    >
      &copy; 2022 Real Estate, Inc.
    </Box>
  );
};

export default Footer;
