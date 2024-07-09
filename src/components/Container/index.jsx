import React from 'react'
import { StyledContainer } from './style'

export function Container({ children }) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}