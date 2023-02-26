import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Gridsection from "../Components/Products/GridSection/Gridsection";
import Leftside from "../Components/Products/Leftside/Leftside";
import TopSection from "../Components/Products/TopSection/TopSection";

const MainProduct = () => {
  
  return (
    <Flex direction="column" mt="2.8rem" width="100%" boxSizing="border-box">
      <Box boxSizing="border-box">
        <TopSection />
      </Box>
      <Flex boxSizing="border-box" width={{ base: "100%", sm: "71%", md: "93%" }} direction={{base:"column",sm:"row"}} >
         <Box boxSizing="border-box" width={{base:"100%",sm:"25%"}}> <Leftside /></Box>
        <Box boxSizing="border-box" width={{base:"100%",sm:"70%"}} > <Gridsection /> </Box>
      </Flex>
    </Flex>
  );
};

export default MainProduct;
