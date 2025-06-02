import { useRouter } from 'next/router'
import React,{useState,useEffect} from 'react';
import { Container, Screen, Tagline, Title } from "./LoadingScreen.styled"



const LoadingScreen = () => {

    

  return (
   <Screen>
    <Container>
        <Title>arcera</Title>
        <Tagline>You Study, We Support</Tagline>
    </Container>
   </Screen>
  )
}

export default LoadingScreen