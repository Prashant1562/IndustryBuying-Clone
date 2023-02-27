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
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  GetDataBySort,
  GetDataFilter,
} from "../../../Redux/FilterSection/Filter.action";

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

const Gridsection = () => {
  const dispatch = useDispatch();
  const prodData = useSelector((store) => store.FilterManger.FData);
  const [popularity, setPopularity] = useState([]);
  // const [prodData,setProdData] = useState([]);
  const [flag, setFlag] = useState(true);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetDataFilter());
    setPopularity(Popularity());
    // console.log(prodData,"In useEffect
  }, [dispatch]);

  const handlePopularity = () => {
    setFlag(!flag);
  };
  const handlePopularityFilter = (str) => {
    dispatch(GetDataBySort(str,prodData));
    setFlag((val)=>!val)
  };



  return (
    <Flex
      direction="column"
      borderLeft="1px solid rgba(185, 182, 182,0.5)"
      flex="6"
      boxSizing="border-box"
    >
      <Flex
        fontSize={13}
        padding="1rem"
        alignItems="center"
        // justifyContent="space-between"
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

      <Flex
        justifyContent={{base:"center",sm:"space-between"}}
        marginBottom="2rem"
        direction={{base:"column",sm:"row"}}
        alignItems="center"
        gap="3rem"
        padding="0rem 0.5rem"
      >
        <Flex
          justifyContent="left"
          height="90%"
          direction={{base:"column",sm:"row"}}
          alignItems="center"
          gap="0.5rem"
        >
          <Heading as="h1" textAlign="left" fontSize={21}>
            Grain Processing Machine
          </Heading>
          <Text fontSize={13}>
           { prodData &&  `(1- ${prodData.length} products of ${prodData.length})`}
          </Text>
        </Flex>
        <Flex gap="1rem" flexWrap="wrap">
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
                    fontSize={12}
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
            padding="0rem 0.3rem"
            justifyContent="center"
            alignItems="center"
            boxShadow="1px 1px 8px rgb(0 0 0 / 10%)"
          >
            <Checkbox colorScheme="green" fontSize={5}></Checkbox>
            <Text
              as="b"
              padding={0}
              width="7rem"
              colorScheme="red"
              fontSize={12}
            >
              Clearance Sale Products
            </Text>
          </Flex>

          <Flex
            position="relative"
            gap="1rem"
            padding="0rem 1rem"
            justifyContent="center"
            alignItems="center"
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 1px;"
          >
            <Flex
              _hover={{ cursor: "pointer" }}
              gap="1rem"
              onClick={handlePopularity}
              justifyContent="space-between"
              alignItems="center"
              boxSizing="border-box"
            >
              <Text as="b" colorScheme="red" fontSize={12}>
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
      </Flex>
      <Grid m="0px" p="0px"  boxSizing="border-box" templateColumns={{base:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(4, 1fr)"}} gap={{base:"2rem",sm:"0rem",md:"0rem"}}>
        {prodData &&
          prodData?.map((data, i) => (
            <Box
              key={data._id}
              height="100%"
              boxSizing="border-box"
              padding="1rem"
              _hover={{
                transition: "all 0.2s ease-out 0.2s",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
              direction="column"
            >
           <Link to={`/product/${data._id}`} height="61%"  flex="2"><Image height="61%" width="100%"  src={data.images[0]} /></Link>
           <Flex height="15%">
            <Text  fontSize={14} textAlign="left">{data.title}</Text>
           </Flex>
           <Flex height="4%" gap="0.4rem">
            <Text fontSize={12} color="grey">
              by
            </Text>
            <Text fontSize={12}>{data.brand}</Text>
          </Flex>
          <Flex height="4%" gap="0.5rem" fontSize={11}>
            <Text fontSize={11} color="grey">
              category
            </Text>
            <Text width="12rem" textAlign="left">
              {data.category}
            </Text>
          </Flex>
          <Text height="7%" textAlign="left" color="#F54702">Rs. {data.price} / Piece</Text>
          <Flex gap={{base:"0.2rem",sm:"0.5rem",md:"1rem"}} height="8%" justifyContent="space-between" direction={{base:"column",sm:"column",md:"row"}}>
            <Button
              // padding="0.2rem 0.7rem"
              fontSize={12}
              color="#F54702"
              border="0.5px solid #F54702"
              borderRadius="0.1rem"
              variant="outline"
              onClick={()=>{toast({
                status: 'success',
                title: "Congrats",
                description:"Item Added successfully",
                position: "top",
                isClosable: true,
              });dispatch()}}
            >
              ADD TO CART
            </Button>
            <Button
              // padding="0.7rem 0.7rem"
              fontSize={11}
              borderRadius="0.1rem"
              colorScheme="grey"
              variant="outline"
              onClick={()=>navigate("/")}
            >
              BUY NOW
            </Button>
          </Flex>
            </Box>
          ))}
      </Grid>
    </Flex>
  );
};

export default Gridsection;
