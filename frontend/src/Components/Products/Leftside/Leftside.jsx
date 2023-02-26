import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { CgPlayPauseR } from "react-icons/cg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./LeftSide.css";
import { useDispatch, useSelector } from "react-redux";
import { GetProductData } from "../../../Redux/MainProduct/MainProduct.action";
import {
  GetDataByBrands,
  GetDataByPriceRange,
} from "../../../Redux/FilterSection/Filter.action";
import { DiscountInFilter } from "../RawData";
import { Link } from "react-router-dom";

let id;

const Leftside = () => {
  const dispatch = useDispatch();
  const { loader, Data, min, max } = useSelector(
    (store) => store.ProductManager
  );
  const [defaultmin, setDefaultmin] = useState(100);
  const [defaultmax, setDefaultmax] = useState(1000);
  const [discount, setDiscount] = useState(DiscountInFilter());
  const [minn, setMinn] = useState(0);
  const [maxx, setMaxx] = useState(60);

  useEffect(() => {
    dispatch(GetProductData());
    // setDefaultmin(min);
    // setDefaultmax(max);
    // console.log(min,max)
    setMinn(min);
    setMaxx(max);
    // console.log(minn,maxx,defaultmin,defaultmax,min,max)
  }, [dispatch]);

  const handlePriceRangle = (val) => {
    // console.log(val.target.value)
    const [mn, mx] = val;
    setMinn(mn);
    setMaxx(mx);
    // console.log(mn, mx);

    // debouncing
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      dispatch(GetDataByPriceRange(mn, mx));
    }, 2000);
  };

  const handleminValue = (e) => {
    console.log(e.target.value);
    dispatch(GetDataByPriceRange(e.target.value, max));
  };

  const handlemaxValue = (e) => {
    console.log(e.target.value);
    dispatch(GetDataByPriceRange(min, e.target.value));
  };

  const handleBrandChange = (e) => {
    //  dispatch(GetProductData());
    dispatch(GetDataByBrands(e.target.name));
  };

  return (
    <Flex
    padding="1rem 0.8rem"
    width="100%"
    flex="2"
    // border="3px solid green"
    flexDirection="column"
    gap="3rem"
  >
    <Box>
      <Heading as="h3" textAlign="left" fontSize={14}>
        Categories
      </Heading>
    </Box>
    <Flex
      gap="0.5rem"
      pb="0.6rem"
      borderBottom="1px dashed rgba(185, 182, 182,0.5)"
    >
      <Flex paddingTop="0.4rem">
        <BiArrowBack />
      </Flex>
      <Flex flexDirection="column">
        <Text textAlign="left">Agriculture Garden & Landscaping</Text>
        <Text as="b" color="red.300" textAlign="left">
          Grain Processing Machine
        </Text>
      </Flex>
    </Flex>
    <Flex direction="column" gap="2rem">
      <Box
        borderBottom="1px dashed rgba(185, 182, 182,0.5)"
        pb="0.6rem"
        margin="auto"
        width="100%"
      >
        <Flex>
          <Flex justifyContent="center" alignItems="center">
            <Heading as="h3" textAlign="left" fontSize={14}>
              PRICE RANGE
            </Heading>
            <Text color="grey"> (Rs)</Text>
          </Flex>
        </Flex>
        <RangeSlider
          width="95%"
          defaultValue={[defaultmin,defaultmax]}
          min={defaultmin}
          max={defaultmax}
          onChange={handlePriceRangle}
        >
          <RangeSliderTrack bg="red.100">
            <RangeSliderFilledTrack bg="tomato" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0}>
            <Box color="tomato" as={CgPlayPauseR} />
          </RangeSliderThumb>
          <RangeSliderThumb boxSize={6} index={1}>
            <Box color="tomato" as={CgPlayPauseR} />
          </RangeSliderThumb>
        </RangeSlider>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          margin="auto"
        >
          <Input
            className="PriceRangeMin"
            width="5rem"
            textAlign="center"
            value={minn}
            onChange={handleminValue}
          />
          <Text>to</Text>
          <Input
            className="PriceRangeMax"
            width="5rem"
            textAlign="center"
            value={maxx}
            onChange={handlemaxValue}
          />
        </Flex>
      </Box>

      <Box pb="0.6rem" borderBottom="1px dashed rgba(185, 182, 182,0.5)">
        <Heading mb="0.4rem" as="h3" textAlign="left" fontSize={14}>
          BRANDS
        </Heading>
        <Box>
          <Stack spacing={4}>
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<SearchIcon color="gray.500" />}
              />
              <Input
                className="SearchInFilter"
                border="0px solid rgba(185, 182, 182,0.5)"
                borderBottom="1px solid rgba(185, 182, 182,0.5)"
                _focusVisible={{ outline: "none" }}
                _hover={{
                  border: "0px solid rgba(185, 182, 182,0.5)",
                  borderBottom: "1px solid rgba(185, 182, 182,0.5)",
                }}
                type="text"
                placeholder="Search here"
              />
            </InputGroup>
          </Stack>
        </Box>
        <Box height="10rem" className="SearchInFilter" overflowY="scroll">
          {loader ? (
            <Box>....Loading</Box>
          ) : (
            Data?.map((brand, i) => (
              <Flex key={i} gap="0.7rem" m="0.3rem 0rem">
                <Checkbox
                  colorScheme="green"
                  name={`${brand[0]}`}
                  onChange={handleBrandChange}
                ></Checkbox>
                <Flex gap="0.2rem" fontSize={15}>
                  <Text fontWeight="500">{brand[0]}</Text>
                  <Text fontWeight="400">({brand[1]})</Text>
                </Flex>
              </Flex>
            ))
          )}
        </Box>
        <Flex
          mt="0.6rem"
          justifyContent="left"
          gap="0.3rem"
          alignItems="center"
          fontSize={13}
        >
          <Text as="b" color="rgb(12, 155, 251)">
            MORE BRANDS
          </Text>
          <AiOutlinePlusCircle size="17" fill="rgb(12, 155, 251)" />
        </Flex>
      </Box>

      <Box pb="0.6rem" borderBottom="1px dashed rgba(185, 182, 182,0.5)">
        <Heading mb="0.4rem" as="h3" textAlign="left" fontSize={14}>
          DISCOUNT
        </Heading>
        <Box height="10rem" className="SearchInFilter" overflowY="scroll">
          {discount &&
            discount?.map((disc, i) => (
              <Flex key={i} gap="0.7rem" m="0.3rem 0rem">
                <Checkbox colorScheme="green"></Checkbox>
                <Flex gap="0.2rem" fontSize={15}>
                  <Text fontWeight="500">{disc}</Text>
                  {/* <Text fontWeight="400">({disc[1]})</Text> */}
                </Flex>
              </Flex>
            ))}
          {/* {discount && console.log(discount)} */}
        </Box>
      </Box>

      <Box pb="0.6rem" borderBottom="1px dashed rgba(185, 182, 182,0.5)">
        <Heading mb="0.4rem" as="h3" textAlign="left" fontSize={14}>
          OFFERS
        </Heading>
        <Flex gap="0.7rem">
          <Checkbox colorScheme="green"></Checkbox>
          <Text>Clearence SELL (1)</Text>
        </Flex>
      </Box>

      <Box pb="0.6rem" borderBottom="1px dashed rgba(185, 182, 182,0.5)">
        <Heading mb="0.4rem" as="h3" textAlign="left" fontSize={14}>
          AVAILABILITY
        </Heading>
        <Flex gap="0.7rem">
          <Checkbox colorScheme="green"></Checkbox>
          <Text>Exclude out of stock (8)</Text>
        </Flex>
      </Box>
    </Flex>
  </Flex>
  );
};

export default Leftside;
