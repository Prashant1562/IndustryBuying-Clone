import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../style/login.css";
import logo from '../assets/image/tooler logo 1.png';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useToast } from "@chakra-ui/react";

const initState = {
  email: "",
  password: "",
};
const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initState);
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res = await fetch(
        "https://exuberant-slippers-slug.cyclic.app/login",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      let resData = await res.json();
      localStorage.setItem("token",resData.token)
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
          title:"You are Successfully logged in",
          description: resData.message,
          status: "success",
          duration: 2000,
          isClosable: false,
        });
        localStorage.setItem(
          "toolers",
          JSON.stringify({
            token: resData.token,
            firstName: resData.firstname,
            email: resData.email,
            
          })
        );
        navigate("/");
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
  
        
  
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Box
      className="login_container"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      paddingBottom={{ base: "120px", sm: "100px", md: "50px", lg: "50px" }}
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
          <Text fontSize={"xl"} color={"white"}>
            WELCOME !!
          </Text>
          <Text color={"white"}>TO THE WORLD OF INDUSTRY TOOLS</Text>
          <form action="">
            <Stack color="white" p={"0px 25px"} mt="20px">
              <Input
                paddingLeft={"10px"}
                variant="flushed"
                type="email"
                placeholder="Enter Email"
                _placeholder={{ color: "inherit" }}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <InputGroup>
                <Input
                  type={open === false ? "password" : "text"}
                  paddingLeft={"10px"}
                  variant="flushed"
                  value={formData.password}
                onChange={handleChange}
                  placeholder="Password"
                  _placeholder={{ color: "inherit" }}
                  name="password"
                  required
                />
                <InputRightElement>
                  <Box>
                    {open === false ? (
                      <AiOutlineEyeInvisible onClick={toggle} />
                    ) : (
                      <AiOutlineEye onClick={toggle} />
                    )}
                  </Box>
                </InputRightElement>
              </InputGroup>
            </Stack>
            <Box mt={"20px"}>
              <Button onClick={handleSubmit}>
                  SIGN IN
                </Button>
            </Box>
          </form>

          <Box
            mt={"20px"}
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            alignItems={"center"}
            gap={"10px"}
          >
            <Button
              bg="white"
              border={"1px solid lightgrey"}
              _hover={{ bg: "#e2e6eb", color: "black" }}
              leftIcon={<FcGoogle fontSize={"20px"} />}
              textColor={"black"}
              fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
              w="80%"
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
              w="80%"
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
              Don't Have an Account ?
            </Text>
            <Link to="/signup">
              <Text
                textDecoration={"underline"}
                fontSize={"lg"}
                color={"Black"}
              >
                SIGN UP
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserLogin;
