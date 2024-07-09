import React from 'react'
import { Container, Title, Form, Label } from '../../assets/styles/authForm'

export function Login() {
  return (
    <Container>
      <Title>Entrar</Title>
      <p>Seja bem-vindo!</p>
      <Form>
        <Label htmlFor="email">
          <span>E-mail:</span>
          <input 
            type="email" 
            name='email'
            id='email'
            required 
            placeholder='Insira seu email'
          />
        </Label>
        <Label htmlFor="password">
          <span>Senha:</span>
          <input 
            type="password" 
            name='password'
            id='password'
            required 
            placeholder='Insira sua senha'
          />
        </Label>
        <button>
          Entrar
        </button>
      </Form>
    </Container>
  )
}