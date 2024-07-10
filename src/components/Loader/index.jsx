import React from 'react';
import { Container, LoaderIcon } from './style';
import loaderGif from '../../assets/images/loader.gif';

function Loader() {
  return (
    <Container>
        <LoaderIcon src={loaderGif} alt="Loader ícone" />
    </Container>
  )
}

export default Loader