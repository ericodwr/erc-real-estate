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
  useColorMode,
} from '@chakra-ui/react';

import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

function ToggleDark() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button w={'100%'} size="sm" onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </header>
  );
}

const Navbar = () => {
  return (
    <Flex p={'2'} borderBottom="1px" borderColor={'gray.100'}>
      <Box
        fontSize={'3xl'}
        color="blue.400"
        fontWeight={'bold'}
        _hover={{ color: 'blue.300' }}
      >
        <Link href={'/'} paddingLeft="2">
          REAL-ESTATE
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton as={IconButton} icon={<FcMenu />} color={'red.400'} />
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
            <ToggleDark />
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
