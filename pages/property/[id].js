import { fetchApi, baseUrl } from '../../utils/fetchApi';
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Box, Flex, Avatar, Text } from '@chakra-ui/react';

import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';

import millify from 'millify';

import ImageScrollbar from '../../components/ImageScrollbar';

const PropertyDetails = ({
  propertyDetails: {
    price,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    rentFrequency,
    photos,
    location,
  },
}) => (
  <Box maxWidth={'1000px'} margin="auto" p={'4'}>
    {photos && <ImageScrollbar data={photos} />}
    <Box w={'full'} p="6">
      <Text fontSize={'2xl'} fontWeight="bold">
        {location[3]?.name ? location[3]?.name : 'Property Name'}
      </Text>
      <Flex alignItems="center" justifyContent={'space-between'}>
        <Flex alignItems={'center'}>
          {isVerified && (
            <Box paddingRight={'3'} color={'green.400'}>
              <GoVerified />
            </Box>
          )}
          <Text fontWeight={'bold'} fontSize="medium">
            AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
          </Text>
        </Flex>
        <Box>
          <Avatar size={'sm'} src={agency?.logo?.url} />
        </Box>
      </Flex>
      <Flex
        alignItems={'center'}
        padding="1"
        justifyContent={'space-between'}
        w="250px"
        color={'blue.400'}
      >
        {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{' '}
        <BsGridFill />
      </Flex>
      <Box marginTop={'2'}>
        <Text fontSize={'lg'} marginBottom="2" fontWeight={'bold'}>
          {title}
        </Text>
        <Text lineHeight={'2'}>{description}</Text>
      </Box>
      <Flex
        flexWrap={'wrap'}
        textTransform="uppercase"
        justifyContent={'space-between'}
      >
        <Flex
          justifyContent={'space-between'}
          width="400px"
          borderBottom={'1px'}
          borderColor="gray.100"
          p={'3'}
        >
          <Text>Type</Text>
          <Text fontWeight={'bold'}>{type}</Text>
        </Flex>
        <Flex
          justifyContent={'space-between'}
          width="400px"
          borderBottom={'1px'}
          borderColor="gray.100"
          p={'3'}
        >
          <Text>Purpose</Text>
          <Text fontWeight={'bold'}>{purpose}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex
            justifyContent={'space-between'}
            width="400px"
            borderBottom={'1px'}
            borderColor="gray.100"
            p={'3'}
          >
            <Text>Furnishing Status</Text>
            <Text fontWeight={'bold'}>{furnishingStatus}</Text>
          </Flex>
        )}
      </Flex>
      {amenities.length ? (
        <Box>
          <Text fontSize={'2xl'} fontWeight="black" marginTop={'5'}>
            Amenities
          </Text>
          <Flex flexWrap={'wrap'}>
            {amenities.map((item) =>
              item.amenities.map((amenity) => (
                <Text
                  fontWeight={'bold'}
                  color="blue.400"
                  key={amenity.text}
                  fontSize="l"
                  p={'2'}
                  bg="gray.200"
                  m="1"
                  borderRadius={'5'}
                >
                  {amenity.text}
                </Text>
              )),
            )}
          </Flex>
        </Box>
      ) : null}
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  return {
    props: {
      propertyDetails: data,
    },
  };
}
