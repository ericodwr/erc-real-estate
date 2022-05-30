import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

const Banner = ({
  purpose,
  imageUrl,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
  buttonBg,
  buttonColor,
}) => (
  <Flex flexWrap={'wrap'} justifyContent="center" alignItems={'center'} m="10">
    <Image src={imageUrl} width={500} height={300} alt="Banner" />
    <Box p={'5'}>
      <Text color={'grey.500'} fontSize="sm" fontWeight={'medium'}>
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight={'bold'}>
        {title1} <br /> {title2}
      </Text>
      <Text fontSize="lg" paddingTop={'3'} paddingBottom="3" color={'grey.700'}>
        {desc1} <br /> {desc2}
      </Text>
      <Button fontSize={'xl'} bg={buttonBg} color={buttonColor}>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default Banner;
