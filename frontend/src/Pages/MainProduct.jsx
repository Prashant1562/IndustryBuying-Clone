import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Gridsection from "../Components/Products/GridSection/Gridsection";
import Leftside from "../Components/Products/Leftside/Leftside";
import TopSection from "../Components/Products/TopSection/TopSection";

const MainProduct = () => {
  
  return (
    <Flex direction="column" mt="2.8rem">
      <Box>
        <TopSection />
      </Box>
      <Flex width={{ base: "100%", sm: "100%", md: "93%" }} margin="auto">
         <Box width="25%"> <Leftside /></Box>
        <Box width="70%"> <Gridsection /> </Box>
      </Flex>
    </Flex>
  );
};

export default MainProduct;
