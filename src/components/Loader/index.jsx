import React from 'react';
import { Container, LoaderIcon } from './style';
import loaderGif from '../../assets/images/loader.gif';

export function Loader() {
  return (
    <Container>
        <LoaderIcon src={loaderGif} alt="Loader ícone" />
    </Container>
  )
}