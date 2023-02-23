import { Box, Flex, Heading, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BiArrowBack } from "react-icons/bi";
import { CgPlayPauseR } from "react-icons/cg";
import { AgriDataArray, MinAndMax } from '../AgriData';

let small;
let big;
const  GetSmallAndBig = ()=>{
  [small,big] = MinAndMax(AgriDataArray())
  return [small,big]
}

GetSmallAndBig();
console.log(small,big);


const Leftside = () => {

  const [min,setMin]= useState(300);
  const [max,setMax] = useState(30000);
  const [defaultmin,setDefaultmin] = useState(300)
  const [defaultmax,setDefaultmax] = useState(30000);

  useEffect(()=>{
    console.log("Hii")
    setMin(GetSmallAndBig()[0])
    setMax(GetSmallAndBig()[1])
  },[])

  const handlePriceRangle = (val)=>{
    const [mn,mx] = val;
    console.log(mn,mx)
    setMin(mn);
    setMax(mx)
  }

  const handleminValue = (e)=>{
    console.log(e.target.value)
  }

  const handlemaxValue = (e)=>{
    console.log(e.target.value)
  }



  return (<Box width="40%" margin="auto" border="3px solid green">
      <Box>
        <Heading as="h3" textAlign="left" fontSize={14}>Categories</Heading>
      </Box>
      <Flex gap="0.5rem">
        <Flex paddingTop="0.4rem">
          <BiArrowBack/>
        </Flex>
        <Flex flexDirection="column"
              borderBottom="1px dashed grey" >
          <Text textAlign="left">Agriculture Garden & Landscaping
          </Text>
          <Text as="b" color="red.300" textAlign="left">Grain Processing Machine
          </Text>
        </Flex>
      </Flex>
      <Box>
      <Box>
      <RangeSlider defaultValue={[defaultmin,defaultmax]} min={defaultmin} max={defaultmax} onChange={handlePriceRangle}>
        <RangeSliderTrack bg='red.100'>
          <RangeSliderFilledTrack bg='tomato' />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={6} index={0}>
          <Box color='tomato' as={CgPlayPauseR} />
        </RangeSliderThumb>
        <RangeSliderThumb boxSize={6} index={1}>
          <Box color='tomato' as={CgPlayPauseR} />
        </RangeSliderThumb>
      </RangeSlider>
      <Flex justifyContent="space-between" alignItems="center" width="90%" margin="auto">
      <Input width="7rem" textAlign="center" value={min} onChange={handleminValue}/>
      <Text>to</Text>
      <Input width="7rem" textAlign="center" value={max} onChange={handlemaxValue}/>
      </Flex>
      </Box>

      </Box>
    </Box>
  )
}

export default Leftside