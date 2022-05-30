import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { filterData, getFilterValues } from '../utils/filterData';

import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from '@chakra-ui/react';
import { MdCancel } from 'react-icons/md';

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
  };

  return (
    <Flex p="4" justifyContent={'center'} flexWrap="wrap">
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            cursor={'pointer'}
            borderWidth='2px'
            onChange={(e) =>
              searchProperties({
                [filter.queryName]: e.target.value,
              })
            }
            placeholder={filter.placeholder}
            w="fit-content"
            p={'2'}
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
