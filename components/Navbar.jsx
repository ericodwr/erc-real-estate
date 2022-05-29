import React from 'react';
import Link from 'next/link';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  Button,
} from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = ({ darkMode, isDarkMode }) => {
  return (
    <Flex p={'2'} borderBottom="1px" borderColor={'gray.100'}>
      <Box fontSize={'3xl'} color="blue.400" fontWeight={'bold'}>
        <Link href={'/'} paddingLeft="2">
          Router
        </Link>
      </Box>
      <Spacer />
      <Box color={'black'}>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant={darkMode ? null : 'outlined'}
            color={'red.400'}
          />
          <MenuList>
            <Link href={'/'} passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href={'/search'} passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href={'/search?purpose=for-sale'} passHref>
              <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>
            <Link href={'/search?purpose=for-rent'} passHref>
              <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
            <Button
              w={'100%'}
              onClick={isDarkMode}
              bg={darkMode ? 'gray.300' : 'gray.600'}
              size="xs"
            >
              {darkMode ? 'LIGHT' : 'DARK'}
            </Button>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
