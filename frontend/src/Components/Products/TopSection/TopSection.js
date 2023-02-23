import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import AgriData, { Breakpoints } from "../AgriData";
// import "./TopSection.css"

const TopSection = () => {
  return (
    <Flex
      borderTop="1px solid rgba(185, 182, 182,0.5)"
      boxSizing="border-box"
      borderBottom="1px solid rgba(185, 182, 182,0.5)"
      width={{ base: "100%", sm: "100%", md: "93%" }}
      margin="auto"
      marginTop="3rem"
      justifyContent="center"
      alignItems="center"
      paddingLeft={Breakpoints("1", "1.5", "2")}
      paddingRight={Breakpoints("1", "1.5", "2")}
      gap={Breakpoints("0.2rem", "0.7rem", "1.6rem")}
    >
      <Box>
        <Heading fontSize="13px" as="h5">
          GRAIN PROCESSING
        </Heading>
      </Box>
      <Box width="85%">
      <Flex
        boxSizing="border-box"
        justifyContent="center"
        width="100%"
        margin="auto"
        alignItems="center"
        gap={Breakpoints("0.2rem", "0.7rem", "1.3rem")}
        borderLeft="1px solid rgba(185, 182, 182,0.5)"
        borderRight="1px solid rgba(185, 182, 182,0.5)"
      >
        <Box>
          <BsChevronLeft size={"1.1rem"} />
        </Box>

        <Box overflow="hidden" margin="auto" height="99%">
        <Flex height="99%"  className="Scrollbar" overflow={{base:"scroll",sm:"hidden"}} margin="auto">
          {AgriData?.map((item, i) => (
            <Box
              marginLeft="-1rem"
              boxSizing="border-box"
              margin="auto"
              key={i}
              gap={Breakpoints("0.2rem", "0.7rem", "1rem")}
              padding={Breakpoints("0.1", "0.3", "1")}
            >
              <Text fontSize={13}>{item}</Text>
            </Box>
          ))}
        </Flex>
        </Box>
       
        <Box>
          <BsChevronRight size="1.1rem" />
        </Box>
      </Flex>
      </Box>
      <Box></Box>
    </Flex>
  );
};

export default TopSection;
