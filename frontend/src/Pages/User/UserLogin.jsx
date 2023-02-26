import {
  Button,
  Checkbox,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  useColorModeValue,
  useColorMode,
  Switch,
  useToast,
  Container,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom"
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import "../../style/login.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import logo from '../../assets/image/tooler logo 1.png';
export default function UserLogin() {
  const navigate=useNavigate()
  const toast=useToast()
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.400', 'gray.700');
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    const payload = {
      
      email,
      password,
      
    };

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
    
    console.log(payload);

    {

     axios.post("https://doubtful-wasp-cowboy-boots.cyclic.app/login",payload)
      .then(res=>{
        localStorage.setItem("token",JSON.stringify(res.data.token))
        console.log(res.data);
        if(res.data.token){
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

    <>
   <Navbar/>

    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} margin='auto'>
        <Flex h="100vh" alignItems="center" justifyContent="center" w="30%" marginLeft='300px'>
      <Flex className='login_container'
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
         <Heading fontSize={"2xl"} textAlign={"center"}>
            Welcome
          </Heading>
          <Text color={"white"}>TO THE WORLD OF INDUSTRY TOOLS</Text>
        <Input
          placeholder="Email"
          type="email"
          // variant="filled"
          mb={3}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          variant="filled"
          mb={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="orange" mb={8} fontSize={20}  onClick={handleSubmit}>
          Log In
        </Button>
        <Flex gap={"8px"} mb="12px">
          <Text>Signup Here</Text>
          <Text color={"skyblue"}><Link to={"/signup"}>SignUp</Link></Text>
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
      </Flex>
      <Flex flex={1}>
        <Image h="40vh" v='40vh' marginLeft='50px' marginTop='25%'
          alt={'Login Image'}
          objectFit={'cover'}
          src={logo}
        />
      </Flex>
      
    </Stack>

    <Footer/>

    </>
  );
}