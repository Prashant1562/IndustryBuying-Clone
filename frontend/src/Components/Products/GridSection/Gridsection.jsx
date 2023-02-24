import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Box,
  Heading,
  Stack,
  InputGroup,
  InputRightElement,
  Input,
  Checkbox,
  Grid,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Popularity = () => {
  return [
    "Popularity",
    "Price - Low to High",
    "Price - High to Low",
    "Discount - Low to High",
    "Discount - High to Low",
    "New Arrivals",
  ];
};

const Gridsection = ({data,handleGrid}) => {
  console.log(data,"Hello Grid")
  const [popularity, setPopularity] = useState([]);
  const [prodData,setProdData] = useState(data || []);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    setPopularity(Popularity());
    console.log(prodData,"In useEffect")
  }, [flag,prodData]);

  const handlePopularity = () => {
    setFlag(!flag);
  };
  const handlePopularityFilter = (data1) => {
      
  };


  return (
    <Flex direction="column" borderLeft="1px solid rgba(185, 182, 182,0.5)" flex="6">
      <Flex
        fontSize={13}
        padding="1rem"
        justifyContent="center"
        alignItems="center"
      >
        <Link to="/">Home</Link>{" "}
        <Box>
          {" "}
          <ChevronRightIcon fontSize={16} />
        </Box>{" "}
        <Link to="">Agriculture Garden & Landscaping</Link>{" "}
        <Box>
          {" "}
          <ChevronRightIcon fontSize={16} />
        </Box>
        <Link to="">
          <Text as="b">Grain Processing Machine</Text>
        </Link>
      </Flex>

      <Flex>
        <Heading as="h1" fontSize={23}>
          Grain Processing Machine
        </Heading>
        <Text>(1-46 products of 46)</Text>
        <Flex>
          <Box>
            <Stack spacing={4}>
              <InputGroup>
                <InputRightElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.500" />}
                />
                <Input
                  border="1px solid red"
                  borderRadius="2px"
                  _focusVisible={{ outline: "red" }}
                  _hover={{
                    border: "1px solid red",
                  }}
                  type="text"
                  placeholder="Search here"
                />
              </InputGroup>
            </Stack>
          </Box>
        </Flex>

        <Flex
          gap="1rem"
          padding="0rem 1rem"
          justifyContent="center"
          alignItems="center"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          <Checkbox colorScheme="green"></Checkbox>
          <Text as="b" colorScheme="red">
            Clearance Sale Products
          </Text>
        </Flex>

        <Flex
          position="relative"
          gap="1rem"
          padding="0rem 1rem"
          justifyContent="center"
          alignItems="center"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;"
        >
          <Flex
            _hover={{ cursor: "pointer" }}
            gap="1rem"
            onClick={handlePopularity}
          >
            <Text as="b" colorScheme="red">
              Popularity
            </Text>
            <Box>{flag ? <ChevronDownIcon /> : <ChevronUpIcon />}</Box>
          </Flex>
          <Box
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            display={flag ? "none" : "block"}
            position="absolute"
            top="3rem"
            left="-2rem"
            backgroundColor="white"
            padding="1rem"
            width="12.5rem"
          >
            {popularity &&
              popularity?.map((data, i) => (
                <Text
                  _hover={{ cursor: "pointer" }}
                  textAlign="left"
                  key={i}
                  onClick={() => handlePopularityFilter(data)}
                >
                  {data}
                </Text>
              ))}
          </Box>
        </Flex>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {prodData &&
          prodData?.map((data,i) => (
            <Flex
               key={i}
              _hover={{
                transition: "all 0.2s ease-out 0.2s",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
              direction="column"
            >
              <Image src={data.images[0]["image_url"]} />
              <Text>{data.title}</Text>
              <Text>{data.price}</Text>
              <Text>{data.category}</Text>
              <Text>{data.brand}</Text>
            </Flex>
          ))}
          
      </Grid>
    </Flex>
  );
};

export default Gridsection;
