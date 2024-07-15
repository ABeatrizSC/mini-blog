import React from 'react'
import { StyledButton } from './style'
import { useNavigate } from 'react-router-dom'

export function Button({ children, navigationLink = null}) {
  const navigate = useNavigate();

  return (
    <StyledButton onClick={() => navigate(navigationLink)}>{children}</StyledButton>
  )
}