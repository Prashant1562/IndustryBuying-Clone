import { useState } from "react";
import {Link} from 'react-router-dom'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,

  useDisclosure,
 
} from "@chakra-ui/react";



  const Signup=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    //const navigate=useNavigate()
    
const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    onClose();
  };
 

    return(
        <>
        <Button onClick={onOpen}>Sign up</Button>
  
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent bg="gray.800" color="white">
      <ModalHeader>Sign up</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <Stack spacing="2">
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Enter your name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Confirm password</FormLabel>
              <Input type="password" placeholder="Confirm your password" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Age</FormLabel>
              <Input type="age" placeholder="Enter your age" />
            </FormControl>
            <FormControl isRequired>
            <FormLabel>Gender</FormLabel>
                <Select >
                    <option style={{color:"Black"}} value="male">Male</option>
                    <option style={{color:"Black"}} value="Female">Female</option>
                    <option style={{color:"Black"}} value="others">Others</option>
                </Select>
            </FormControl>
            <Button type="submit" colorScheme="teal">
              Sign up
            </Button>
          </Stack>
        </form>
      </ModalBody>
       
      <ModalFooter>
        <Button variant="ghost" mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
        </>
    )
  }

export default Signup