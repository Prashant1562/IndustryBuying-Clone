import {
  Box,
  Button,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../style/signup.css";
import logo from "../assets/image/tooler logo 1.png"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";




const Signup = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Box
      className="signup_container"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
    >
      <Box
        width={{ base: "80%", sm: "50%", md: "50%", lg: "35%" }}
        bg="blackAlpha.500"
        backdropFilter="blur(20px)"
        border={"1px solid white"}
        borderRadius="20px"
        padding="10px"
      >
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <Box
            mt={"20px"}
            w={"120px"}
            height="120px"
            bg={"black"}
            borderRadius="50%"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
          >
            <Link to="/">
              <Image borderRadius="50%" src={logo}></Image>
            </Link>
          </Box>
        </Box>
        <Box>
          <Text color={"white"}>Create Your Account</Text>
          <form>
            <Stack color="white" p={"0px 25px"} mt="20px">
              <Input
                paddingLeft={"10px"}
                variant="flushed"
                type="text"
                placeholder="Enter Name"
                _placeholder={{ color: "inherit" }}
                name="name"
               
                required
              />
              <Text
                borderRadius={"10px"}
                fontSize={"sm"}
                bg={"white"}
                color="red"
              >
                
              </Text>
              <Input
                paddingLeft={"10px"}
                variant="flushed"
                type="email"
                placeholder="Enter Email"
                _placeholder={{ color: "inherit" }}
                name="email"
                
                required
              />
              <Text
                borderRadius={"10px"}
                fontSize={"sm"}
                bg={"white"}
                color="red"
              >
                
              </Text>
              <Input
                paddingLeft={"10px"}
                variant="flushed"
                type="password"
                placeholder="Enter Password"
                _placeholder={{ color: "inherit" }}
                name="password"
                
                required
              />
              <Text
                borderRadius={"10px"}
                fontSize={"sm"}
                bg={"white"}
                color="red"
              >
                
              </Text>
            
              <Input
                paddingLeft={"10px"}
                variant="flushed"
                type="Number"
                placeholder="Enter your number"
                _placeholder={{ color: "inherit" }}
                name="number"
                
                required
              />
              <Text
                borderRadius={"10px"}
                fontSize={"sm"}
                bg={"white"}
                color="red"
              >
               
              </Text>
              <Select
                colorScheme={"blackAlpha"}
                color="black"
                variant="filled"
                placeholder="Gender"
                ml={"10px"}
                fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
                name="gender"
                
                required
              >
                <option value="male">MALE</option>
                <option value="female">FEMALE</option>
              </Select>
              <Text
                borderRadius={"10px"}
                fontSize={"sm"}
                bg={"white"}
                color="red"
              >
                
              </Text>
              <InputGroup>
                <Input
                 type={open === false ? "password" : "text"}
                  paddingLeft={"10px"}
                  variant="flushed"
                  placeholder="Password"
                  _placeholder={{ color: "inherit" }}
                  name="password"
                 
                  required
                />
                <InputRightElement>
                  <Box>
                  {open === false ? (
                      <AiOutlineEyeInvisible onClick={toggle}  />
                    ) : (
                      <AiOutlineEye onClick={toggle} />
                    )}
                  </Box>
                </InputRightElement>
              </InputGroup>
              <Text
                borderRadius={"10px"}
                fontSize={"sm"}
                bg={"white"}
                color="red"
              >
               
              </Text>
            </Stack>
            <Box mt={"20px"}>
                <Button
                  w="50%"
                  bg={"black"}
                  color="white"
                  _hover={{ bg: "white", color: "black" }}
                
                  type="submit"
                >
                  JOIN US
                </Button>
            </Box>
          </form>
          <Box
            mt={"20px"}
            display="flex"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
            gap={"10px"}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              bg="white"
              border={"1px solid lightgrey"}
              _hover={{ bg: "#e2e6eb", color: "black" }}
              leftIcon={<FcGoogle fontSize={"20px"} />}
              textColor={"black"}
              fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
              w="50%"
            >
              Sign Up with Google
            </Button>
            <Button
              bg="white"
              border={"1px solid lightgrey"}
              _hover={{ bg: "#e2e6eb" }}
              leftIcon={<FaGithub fontSize={"20px"} />}
              textColor={"#black"}
              fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
              w="50%"
            >
              Sign Up with GitHub
            </Button>
          </Box>
          <Box
            mt={"20px"}
            display="flex"
            justifyContent={"center"}
            gap={"10px"}
          >
            <Text fontSize={"md"} color={"neon"}>
              Already Have an Account ?
            </Text>
            <Link to="/login">
              <Text
                textDecoration={"underline"}
                fontSize={"lg"}
                color={"Black"}
              >
                Log In
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
