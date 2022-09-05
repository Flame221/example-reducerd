import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const ChangeThemeComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton ml={7} aria-label='theme'  onClick={toggleColorMode} 
    icon={colorMode === 'light' ? <BsFillMoonFill/> : <BsFillSunFill/>}/>
  )
}

export default ChangeThemeComponent