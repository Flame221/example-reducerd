import { Button, Text, VStack } from '@chakra-ui/react'
import React, { useReducer } from 'react'

const initialState = {
  counter: 0,
  isLogged: false,
}

const reducer = (state, { type, payload }) => {
  switch (type) {

  case state:
    return { ...state, ...payload }

  case 'INC':
    return {  ...state, counter: state.counter+1 };
    
  case 'DEC':
    return { ...state, counter: state.counter-1,  }
    
  case 'LOG':
    return { ...state, isLogged: !state.isLogged } 

  default:
    return state
  }
}


const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <VStack>
      <Text>Hello world: {state.counter}</Text>
      <Button onClick={() => dispatch({type: 'INC'})}>INC</Button>
      <Button onClick={() => dispatch({type: 'DEC'})}>DEC</Button>
      <Button onClick={() => dispatch({type: 'LOG'})}>DEC</Button>
      <Text>Hello world: {state.isLogged ? 'true' : 'false'}</Text>
    </VStack>
  )
}

export default Main