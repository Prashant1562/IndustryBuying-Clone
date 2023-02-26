import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Gridsection from "../Components/Products/GridSection/Gridsection";
import Leftside from "../Components/Products/Leftside/Leftside";
import TopSection from "../Components/Products/TopSection/TopSection";

const MainProduct = () => {
  
  
  return (
    <Flex direction="column">
      <Box>
        {" "}
        <TopSection />
      </Box>
      <Flex width={{ base: "100%", sm: "100%", md: "93%" }} margin="auto">
        <Leftside />
        <Gridsection />
      </Flex>
    </Flex>
  );
};

export default MainProduct;
