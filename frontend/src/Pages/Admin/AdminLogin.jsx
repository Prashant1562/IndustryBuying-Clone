import React from 'react';
import {
  Box,
  Image,
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
  useToast,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import { Link, Navigate, useNavigate} from "react-router-dom"
import "../../style/admin.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import logo from '../../assets/image/tooler logo 1.png';

const Login = () => {

  const navigate = useNavigate()
  // const token = JSON.parse(localStorage.getItem("token")) || "";
  // const GSTIN = JSON.parse(localStorage.getItem("GSTIN")) || ""

  const toast = useToast()
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.400', 'gray.700');
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [value, setValue] = React.useState(false)




  const handleSubmit = () => {

    const payload = {
      email,
      password,
    };

    if (!payload.email) {

      toast({
        position:"top",
        title: "Please fill your Email",
        description: "Your email is missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
     
    }
    else if (!payload.password) {

      toast({
        position:"top",
        title: "Please fill your Password",
        description: "Your password is missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    
    }

    console.log(payload);
{

   
      axios.post("https://doubtful-wasp-cowboy-boots.cyclic.app/admin/login",payload)
      .then(res=>{
        localStorage.setItem("adminToken",JSON.stringify(res.data.token))
        localStorage.setItem("GSTIN", JSON.stringify(res.data.GSTIN))
        console.log(res.data,"token in login");
        if(res.data.token){
          toast({
            position:"top",
            title: "Your are successfully logged in",
            description: "Taking you to Admin Dashboard",
            status: "success",
            duration: 3000,
            isClosable: true,
          });

          setTimeout(() => {
            navigate("/admin/dashboard")
          },3000)
        }
        else{
          toast({
            position:"top",
            title: "Invalid email/password",
            description: "Please write correct email / password",
            status: "error",
            duration: 3000,
            isClosable: true,
          });

        }
      })
      .catch(err=>console.log(err));
    }


  };
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex className='login_container'
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Admin Log In</Heading>
        <Input
          placeholder="Enter your email"
          type="email"
          variant="filled"
          mb={3}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="orange" mb={8} onClick={handleSubmit} >
          Log In
        </Button>


        <Flex gap={"8px"} mb="12px">
          <Text>Signup Here</Text>
          <Text color={"skyblue"}><Link to={"/admin/signup"}>Signup</Link></Text>
        </Flex>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
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
      </Flex>
      {/* <Flex flex={1}>
        <Image h="40vh" v='40vh' marginLeft='50px' marginTop='25%'
          alt={'Login Image'}
          objectFit={'cover'}
          src={logo}
        />
      </Flex> */}
    </Flex>
    
  );
};

export default Login;
