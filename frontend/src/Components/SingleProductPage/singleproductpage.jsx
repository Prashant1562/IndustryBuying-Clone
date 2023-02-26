import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { RxTriangleRight } from "react-icons/rx";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GetProductData } from "../../Redux/MainProduct/MainProduct.action";
import "./singleproductpage.css";
import { GetDataForPatch } from "../../Redux/FilterSection/Filter.action";

const Loader = () => {
  return <Box>Loading...</Box>;
};

const Singleproductpage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const toast = useToast();
  console.log(id);
  // const [data, setData] = useState([]);
  // const [loader, setLoader] = useState(false);
  const [count, setCount] = useState(1);
  const { loader, Data } = useSelector((store) => store.ProductManager);
  const [top, setTop] = useState(false);
  const [pincode, setPincode] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  //   const [showTopBtn, setShowTopBtn] = useState(false);
  //   const aboutSection = useRef(null);

  useEffect(() => {
    dispatch(GetProductData(id));
  }, [id, dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setPincode(e.target.value);
  };

  const listenToScroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 100 && window.scrollY <= 724) {
      setTop(true);
      //   setShowTopBtn(true);
    } else {
      setTop(false);
      //   setShowTopBtn(false);
      //   console.log("1");
    }
  };

  //   const goToTop = () => {
  //     window.scrollTo({
  //       top: 0,
  //       left: 0,
  //       behavior: "smooth",
  //     });
  //   };

  //   const goToBottom = () => {
  //     window.scrollTo({
  //       top: document.documentElement.scrollHeight,
  //       behavior: "smooth",
  //     });
  //   };

  const handleonClick = (val) => {
    setCount((value) => value + val);
    dispatch(GetDataForPatch({ id, price: val }));
  };

  const handleChangeImg = (Img) => {
    setImg(Img);
  };

  if (loader) {
    return <Loader />;
  }
  return (
    <>
      {Data.data && console.log(Data.data.images[0])}
      {Data.data && (
        <Flex
          gap="1rem"
          justifyContent={{ base: "center", sm: "center", md: "space-between" }}
          alignItems={{ base: "center", sm: "center", md: "center" }}
          direction={{ base: "column", sm: "column", md: "row" }}
          m="auto"
          mt="6rem"
          pb="10rem"
          width="85%"
        >
          <Flex
            direction="column"
            justifyContent="space-between"
            width={{ base: "100%", sm: "90%", md: "72%" }}
            boxShadow="rgba(0, 0, 0, 0.09) 0px 3px 14px"
          >
            {/* Top Section */}
            <Flex
              fontSize={13}
              padding="1rem"
              alignItems="center"
              direction={{ base: "column", sm: "row", md: "row" }}
              // justifyContent="space-between"
            >
              <Link to="/">Home</Link>
              <Box>
                <ChevronRightIcon fontSize={16} />
              </Box>
              <Link to="">Agriculture Garden & Landscaping</Link>
              <Box>
                <ChevronRightIcon fontSize={16} />
              </Box>
              <Link to="">
                <Text as="b"> {Data.data.category}</Text>
              </Link>
            </Flex>

            {/* Product information section */}
            <Flex
              position="relative"
              justifyContent="space-between"
              p={{ base: "0.5rem", sm: "1rem", md: "2rem" }}
            >
              <Flex flex="1" direction="column">
                <Image height="40%" src={img ? img : Data.data["images"][0]} />
                <Flex gap="1rem">
                  {Data.data.images &&
                    Data.data.images.map((item, i) => (
                      <Box key={i}>
                        <Image
                          onClick={() => handleChangeImg(item)}
                          boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                          width="30px"
                          height="30px"
                          src={`${item}`}
                        />
                      </Box>
                    ))}
                </Flex>
              </Flex>
              <Flex direction="column" flex="1.4">
                <Box
                  borderBottom="1px solid rgba(193, 192, 192,0.5)"
                  mb="1rem"
                  pb="1rem"
                >
                  <Heading mb={18} as="h1" textAlign="left" fontSize={18}>
                    {Data.data.title}
                  </Heading>
                  <HStack>
                    <Text fontSize={14} color="#A1A1A1">
                      by
                    </Text>
                    <Text fontSize={14} color="#046699">
                      AgriPro
                    </Text>
                  </HStack>
                </Box>

                <Box>
                  <Box
                    borderBottom="1px solid rgba(193, 192, 192,0.5)"
                    mb="1rem"
                    pl="1.5rem"
                    pb="1rem"
                  >
                    <Heading fontSize={16} color="#000000" textAlign="left">
                      Features
                    </Heading>
                    <ul>
                      <li>
                        <Flex
                          gap="2rem"
                          direction={{ base: "column", sm: "row", md: "row" }}
                        >
                          <Text
                            textAlign="left"
                            fontSize={14}
                            color="#8C8A8A"
                            flex="1.4"
                          >
                            Brand Name :
                          </Text>
                          <Text
                            textAlign="left"
                            fontSize={14}
                            color="#8C8A8A"
                            flex="3"
                          >
                            {Data.data.brand}
                          </Text>
                        </Flex>
                      </li>
                      <li>
                        <Flex
                          gap="2rem"
                          direction={{ base: "column", sm: "row", md: "row" }}
                        >
                          <Text
                            textAlign="left"
                            fontSize={14}
                            color="#8C8A8A"
                            flex="1.4"
                          >
                            Machine Size :
                          </Text>
                          <Text
                            textAlign="left"
                            fontSize={14}
                            color="#8C8A8A"
                            flex="3"
                          >
                            800(L) * 300(W) * 1130(H) mm
                          </Text>
                        </Flex>
                      </li>
                      <li>
                        <Flex
                          gap="2rem"
                          direction={{ base: "column", sm: "row", md: "row" }}
                        >
                          <Text
                            textAlign="left"
                            fontSize={14}
                            color="#8C8A8A"
                            flex="1.4"
                          >
                            Spindle Speed :
                          </Text>
                          <Text
                            textAlign="left"
                            fontSize={14}
                            color="#8C8A8A"
                            flex="3"
                          >
                            1400-1600 RPM
                          </Text>
                        </Flex>
                      </li>
                      <li>
                        <Flex
                          gap="2rem"
                          direction={{ base: "column", sm: "row", md: "row" }}
                        >
                          <Text
                            textAlign="left"
                            fontSize={14}
                            color="#8C8A8A"
                            flex="1.4"
                          >
                            Types of Product :
                          </Text>
                          <Text
                            textAlign="left"
                            fontSize={14}
                            color="#8C8A8A"
                            flex="3"
                          >
                            {Data.data.sub_category}
                          </Text>
                        </Flex>
                      </li>
                      <li>
                        <Flex
                          gap="2rem"
                          direction={{ base: "column", sm: "row", md: "row" }}
                        >
                          <Text
                            textAlign="left"
                            fontSize={14}
                            color="#8C8A8A"
                            flex="1.4"
                          >
                            Production Capacity :
                          </Text>
                          <Text
                            textAlign="left"
                            fontSize={14}
                            color="#8C8A8A"
                            flex="3"
                          >
                            {Data.data.title}
                          </Text>
                        </Flex>
                      </li>
                      <li>
                        <Flex
                          gap="2rem"
                          direction={{ base: "column", sm: "row", md: "row" }}
                        >
                          <Text
                            textAlign="left"
                            fontSize={14}
                            color="#8C8A8A"
                            flex="1.4"
                          >
                            Certification :
                          </Text>
                          <Text
                            textAlign="left"
                            fontSize={14}
                            color="#8C8A8A"
                            flex="3"
                          >
                            ISO9001:2015,CCC
                          </Text>
                        </Flex>
                      </li>
                    </ul>
                    <Flex justifyContent="left">
                      <Button
                        textAlign="left"
                        fontSize={14}
                        color="#046699"
                        bgColor="#EEEEEE"
                        m="18px 0px 0px"
                        p="5px 10px"
                      >
                        MORE DETAILS
                      </Button>
                    </Flex>
                    <Flex
                      direction="column"
                      justifyContent="left"
                      gap="0.3rem"
                      mt="1rem"
                    >
                      <Link
                        to=""
                        style={{
                          fontSize: "13px",
                          color: "#046699",
                          textAlign: "left",
                        }}
                      >
                        More {Data.data.brand} Grain Processing Machine
                      </Link>
                      <Link
                        to=""
                        style={{
                          fontSize: "13px",
                          color: "#046699",
                          textAlign: "left",
                        }}
                      >
                        More Grain Processing Machine
                      </Link>
                    </Flex>
                  </Box>
                  <Flex
                    direction="column"
                    pl="0.5rem"
                    borderBottom="1px solid rgba(193, 192, 192,0.5)"
                    mb="1rem"
                    pb="1rem"
                  >
                    <Heading
                      textAlign="left"
                      as="h1"
                      fontSize={16}
                      color="#214141"
                      m="11px 0px 10px"
                    >
                      Available offers
                    </Heading>
                    <Flex
                      justifyContent="left"
                      gap="0.4rem"
                      alignItems="center"
                    >
                      <Text textAlign="left" fontSize={14} color="#444444">
                        IB BNPL, No cost EMI
                      </Text>
                      <Link
                        to=""
                        style={{
                          fontSize: "11px",
                          color: "#046699",
                          textAlign: "left",
                        }}
                      >
                        View Plans
                      </Link>
                    </Flex>
                  </Flex>
                  <Flex direction="column" pl="0.5rem">
                    <Heading
                      as="h1"
                      textAlign="left"
                      ml="0.4rem"
                      mb="0.7rem"
                      fontSize={14}
                      color="#444444"
                    >
                      Check Seriveability at your Pincode:
                    </Heading>
                    <InputGroup
                      textAlign="left"
                      boxSizing="border-box"
                      p="0px 3px 6px 0px"
                      fontSize={14}
                      color="#FFFFFF"
                    >
                      <Input
                        color="black"
                        name="pincode"
                        placeholder="Enter your Pincode"
                        value={pincode}
                        onChange={handleChange}
                      />
                      <InputRightElement pr="2.35rem">
                        <Button
                          fontSize={14}
                          color="#046699"
                          p="0px 13px 0px 14px"
                          h="96%"
                          size="base"
                        >
                          CHECK
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </Flex>
                </Box>

                {/* position fixed after scrolling , section */}

                <Flex
                  height={{ base: "8rem", sm: "6.6rem", md: "8rem" }}
                  boxShadow="rgba(0, 0, 0, 0.09) 0px 3px 14px"
                  // width="100%"
                  backgroundColor="white"
                  display={top ? "flex" : "none"}
                  position={top ? "fixed" : "absolute"}
                  top={top ? "6rem" : "-1rem"}
                  left={{ base: "7%", sm: "12%", md: "7.5%" }}
                  mt="-0.5rem"
                  width={{ base: "63%", sm: "76.5%", md: "60%" }}
                  p="1rem 0rem"
                >
                  <Box flex={{ base: "10", sm: "7", md: "5" }}>
                    <Image
                      height="100%"
                      width="50%"
                      src={img ? img : Data.data["images"][0]}
                    />
                  </Box>
                  <Box flex="5">
                    <Heading
                      as="h1"
                      fontSize={{ base: "11px", sm: "13px", md: "18px" }}
                      color="#444444"
                      textAlign="left"
                    >
                      {Data.data.title}
                    </Heading>
                    <Flex
                      gap="0.7rem"
                      fontSize={{ base: "9px", sm: "11px", md: "14px" }}
                      textAlign="left"
                    >
                      <Text color="#A1A1A1">by</Text>
                      <Text color="#046699">{Data.data.brand}</Text>
                    </Flex>
                  </Box>
                  <Box flex="2" pl="2rem">
                    <Flex gap="1rem">
                      <RxTriangleRight />
                      <Text
                        textAlign="left"
                        fontSize={{ base: "9px", sm: "11px", md: "14px" }}
                        color="#666666"
                      >
                        Description
                      </Text>
                    </Flex>
                    <Flex gap="1rem">
                      <RxTriangleRight />
                      <Text
                        textAlign="left"
                        fontSize={{ base: "9px", sm: "11px", md: "14px" }}
                        color="#666666"
                      >
                        Product Specification
                      </Text>
                    </Flex>
                    <Flex gap="1rem">
                      <RxTriangleRight />
                      <Text
                        textAlign="left"
                        fontSize={{ base: "9px", sm: "11px", md: "14px" }}
                        color="#666666"
                      >
                        Quick Links
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          {/* Right hand Price section */}

          <Flex
            // height="50%"
            justifyContent="center"
            alignSelf="flex-start"
            position="sticky"
            top="6rem"
            direction="column"
            width={{ base: "100%", sm: "28%", md: "28%" }}
            gap="1rem"
            margin={{ base: "auto", sm: "1" }}
            padding={{ base: "0.3rem", sm: "1rem", md: "1rem 1.3rem" }}
            boxShadow="rgba(0, 0, 0, 0.09) 0px 3px 14px"
          >
            <Flex
              direction="column"
              borderBottom="1px dashed rgba(185, 182, 182,0.5)"
              gap="1rem"
              pb="1rem"
            >
              <Flex
                justifyContent="left"
                alignItems="center"
                gap="0.3rem"
                direction={{ base: "column", sm: "column", md: "row" }}
              >
                <Heading
                  as="h2"
                  fontSize={{ base: "16px", sm: "22px", md: "30px" }}
                  color="#FA832A"
                >
                  ₹ {Data.data && count * Data.data.price}
                </Heading>
                <Text
                  mt="0.7rem"
                  fontSize={{ base: "10px", sm: "12px", md: "14px" }}
                >
                  (GST inclusive price)
                </Text>
              </Flex>
              <Flex
                justifyContent="left"
                alignItems="center"
                gap="0.3rem"
                fontSize={{ base: "16px", sm: "22px", md: "30px" }}
                direction={{ base: "column", sm: "column", md: "row" }}
              >
                <Heading fontSize={16}>
                  ₹ {Data.data && count * Data.data.price}
                </Heading>
                <Text fontSize={{ base: "10px", sm: "12px", md: "14px" }}>
                  (GST extra)
                </Text>
              </Flex>
            </Flex>
            <Flex
              borderBottom="1px dashed rgba(185, 182, 182,0.5)"
              direction="column"
              pb={{ base: "4rem", sm: "0.7rem", md: "0.7rem" }}
            >
              <Text
                fontSize={{ base: "11px", sm: "13px", md: "15px" }}
                textAlign="left"
                as="b"
              >
                Update Quantity
              </Text>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                height="6rem"
                gap="0.8rem"
                direction={{ base: "column", sm: "column", md: "row" }}
              >
                <Flex
                  borderRadius="1px"
                  height="2rem"
                  direction={{ base: "row", sm: "row", md: "row" }}
                  width={{ base: "auto", sm: "auto", md: "auto" }}
                  alignItems="center"
                  justifyContent="left"
                >
                  <Button
                    borderRadius="1px"
                    width="30%"
                    height="100%"
                    border="1px solid #A1A1A1"
                    size="sm"
                    bgColor="transparent"
                    _hover={{ backgroundColor: "rgba(240,240,240,0.5)" }}
                    onClick={() => handleonClick(-1)}
                    isDisabled={count <= 1}
                  >
                    -
                  </Button>
                  <Button
                    borderRadius="1px"
                    width="30%"
                    border="1px solid #A1A1A1"
                    size="sm"
                    height="100%"
                    isDisabled
                  >
                    {count}
                  </Button>
                  <Button
                    borderRadius="1px"
                    width="30%"
                    border="1px solid #A1A1A1"
                    size="sm"
                    height="100%"
                    bgColor="transparent"
                    _hover={{ backgroundColor: "rgba(240,240,240,0.5)" }}
                    onClick={() => handleonClick(1)}
                  >
                    +
                  </Button>
                </Flex>
                <Flex
                  flex="4"
                  width="60%"
                  direction="column"
                  pl="0.5rem"
                  justifyContent="left"
                >
                  <Text fontSize={13} width="100%" textAlign="left">
                    minimum order Quantity- 1
                  </Text>
                  <Text textAlign="left" fontSize={13}>
                    Piece
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Text
              pb="1rem"
              color="blue"
              borderBottom="1px dashed rgba(185, 182, 182,0.5)"
              fontSize={11}
            >
              Get customized price
            </Text>
            <Flex direction="column" gap="0.7rem">
              <Button
                borderRadius="0.2rem"
                color="white"
                as="b"
                _hover={{ backgroundColor: "#4C993E" }}
                bgColor="#4C993E"
                fontSize={13}
                onClick={() =>{
                  toast({
                    status: "success",
                    title: "Congrats",
                    description: "Item Added successfully",
                    position: "top",
                    isClosable: true,
                  });dispatch()}
                }
              >
                ADD TO CART
              </Button>
              <Button
                borderRadius="0.2rem"
                color="white"
                as="b"
                _hover={{ backgroundColor: "#F98700" }}
                bgColor="#F98700"
                fontSize={13}
                onClick={()=>navigate("/cart")}
              >
                BUY NOW
              </Button>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Singleproductpage;
