import React from 'react'
import TypoAndLottie from './Service/typoandlottie';
import ContainerTypo from './Service/containertypo';
import CountrySelection from './Service/countryselection';
import SocialMedia from './Service/socialmedialottie'
import Gif from './Service/gif';
import CarD from './Service/card';
import APIReference from './Service/apireference';
import QandA from './Service/qna';
import Footer from './Service/footer';

const Services = () => {
  return (
   <>
   <TypoAndLottie/>
   <ContainerTypo/>
   <CountrySelection/>
   <SocialMedia/>
   <Gif/>
   <CarD/>
   <APIReference/>
   <QandA/>
   <Footer/>
   
   </>
  )
}

export default Services