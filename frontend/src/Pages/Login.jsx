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


const Login = () => {
   const toast=useToast()
   const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleSubmit=async(e)=>{
    e.preventDefault()

    const payload={
      email,
      password
    }
    if(!payload.email){

      toast({
        position:"top",
        title: "Please fill your Email",
        description: "Your email is missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return
    }
    else if(!payload.password){

      toast({
        position:"top",
        title: "Please fill your Password",
        description: "Your password is missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return
    }

    try{
            let res=await fetch("http://localhost:4444/users/login",{
              method:"POST",
              body:JSON.stringify(payload),
              headers:{
                "Content-type":'application/json'
              }
              
            })
            let response=await res.json()
              console.log(response)
            localStorage.setItem("token",response.token)
            if(response.token){
              toast({
                position:"top",
                title: "Your are successfully logged in",
                description: "Taking you to homepage",
                status: "success",
                duration: 3000,
                isClosable: true,
              })
              
              setTimeout (() => {
                navigate('/')
              },3000)
            }else{
              toast({
                position:"top",
                title: "Invalid email/password",
                description: "Please write correct email / password",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            }
    }catch(error){
      console.log(error)
    }
  }
  
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
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
              <InputGroup>
                <Input
                  type={open === false ? "password" : "text"}
                  paddingLeft={"10px"}
                  variant="flushed"
                  value={password}
                onChange={(e)=>setPassword(e.target.value)}
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

export default Login;
