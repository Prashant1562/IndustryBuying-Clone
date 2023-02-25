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
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../style/signup.css";
import logo from "../assets/image/tooler logo 1.png"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const initState = {
  firstname: "",
  lastname: "",
  email: "",
  number:"",
  gender: "",
  password: "",
};

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initState);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const toggle = () => {
    setOpen(!open);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res = await fetch('https://exuberant-slippers-slug.cyclic.app/users/register',
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      let resData = await res.json();
      setLoading(false);
      if (res.status >= 400) {
        toast({
          position: "top",
          description: resData.message,
          status: "error",
          duration: 2000,
          isClosable: false,
        });
      } else {
        toast({
          position: "top",
          title:"Welcome",
          description: resData.message,
          status: "success",
          duration: 2000,
          isClosable: false,
        });
        navigate("/login");
      }
    } catch (error) {
      setLoading(false);
      toast({
        position: "top",
        description: error.message,
        status: "error",
        duration: 2000,
        isClosable: false,
      });
    }
    
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
                placeholder="First Name"
                _placeholder={{ color: "inherit" }}
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
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
                value={formData.lastname}
                type="text"
                placeholder="Enter Last Name"
                _placeholder={{ color: "inherit" }}
                name="lastname"
                onChange={handleChange}
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
                value={formData.email}
                type="email"
                placeholder="Enter Email"
                _placeholder={{ color: "inherit" }}
                name="email"
                onChange={handleChange}
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
                value={formData.number}
                type="Number"
                placeholder="Enter your number"
                _placeholder={{ color: "inherit" }}
                name="number"
                onChange={handleChange}
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
                value={formData.gender}
                variant="filled"
                placeholder="Gender"
                ml={"10px"}
                fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
                name="gender"
                onChange={handleChange}
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
                  value={formData.password}
                  placeholder="Password"
                  _placeholder={{ color: "inherit" }}
                  name="password"
                  onChange={handleChange}
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
                   onClick={handleSubmit}
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
