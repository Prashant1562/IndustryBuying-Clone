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




const Signup = () => {
  const [firstname,setFirstname]=useState("")
  const [lastname,setLastname]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [number,setNumber]=useState("")
  const [gender,setGender]=useState("")
  const navigate=useNavigate()
  const toast=useToast()
 
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const payload={
      firstname,
      lastname,
      email,
      number,
      gender,
      password
    }

    if(!payload.firstname){
      toast({
        position:"top",
        title: "Please fill your Name",
        description: "Your name is missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return
    }else if(!payload.lastname){
      toast({
        position:"top",
        title: "Please fill your Last name",
        description: "Your last name is missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return
    }else if(!payload.email){
      toast({
        position:"top",
        title: "Please fill your Email",
        description: "Your email is missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return
    }else if(!payload.number){
      toast({
        position:"top",
        title: "Please fill your Contact",
        description: "Your Contact is missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return
    }else if(!payload.gender){
      toast({
        position:"top",
        title: "Please select you gender",
        description: "Your gender is missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return
    }else if(!payload.password){
      toast({
        position:"top",
        title: "Please fill your Password",
        description: "Your Password is missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return
    }
    try{
       
        let res=await fetch("http://localhost:4444/users/register",{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
          'Content-type':'application/json'
        }
       })
       let response=await res.json()
     
       toast({
        position:"top",
        title: `${res.message}`,
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTimeout (() => {
        navigate("/login")
      },3000)
       console.log(response)
       
      
        
       
       
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
                value={firstname}
                type="text"
                placeholder="Enter First Name"
                _placeholder={{ color: "inherit" }}
                name=" firstname"
                onChange={(e)=>setFirstname(e.target.value)}
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
                value={lastname}
                type="text"
                placeholder="Enter Last Name"
                _placeholder={{ color: "inherit" }}
                name="lastname"
                onChange={(e)=>setLastname(e.target.value)}
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
                value={email}
                type="email"
                placeholder="Enter Email"
                _placeholder={{ color: "inherit" }}
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
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
                value={number}
                type="Number"
                placeholder="Enter your number"
                _placeholder={{ color: "inherit" }}
                name="number"
                onChange={(e)=>setNumber(e.target.value)}
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
                value={gender}
                variant="filled"
                placeholder="Gender"
                ml={"10px"}
                fontSize={{ base: "12px", sm: "12px", md: "14px", lg: "14px" }}
                name="gender"
                onChange={(e)=>setGender(e.target.value)}
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
                  value={password}
                  placeholder="Password"
                  _placeholder={{ color: "inherit" }}
                  name="password"
                  onChange={(e)=>setPassword(e.target.value)}
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
