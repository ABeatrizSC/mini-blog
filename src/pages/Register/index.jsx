import React from 'react'
import { Container, Title, Form, Label } from '../../assets/styles/authForm'

export function Register() {
  return (
    <Container>
      <Title>Cadastre-se</Title>
      <p>Crie uma conta e compartilhe suas histórias.</p>
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
        <Label htmlFor="confirmPassword">
          <span>Confirmação de senha:</span>
          <input 
            type="password" 
            name='confirmPassword'
            id='confirmPassword'
            required 
            placeholder='Insira a senha anterior'
          />
        </Label>
        <button>
          Cadastrar
        </button>
      </Form>
    </Container>
  )
}