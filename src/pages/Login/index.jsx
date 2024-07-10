import React, { useEffect, useState } from 'react'
import { Container, Title, Form, Label, ErrorMessage } from '../../assets/styles/authForm'
import { NavLink } from 'react-router-dom'
import { Button } from '../../components/Button'
import Loader from '../../components/Loader';
import { useAuthentication } from '../../hooks/useAuthentication';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {login, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      email,
      password
    };

    const res = await login(user);
  };

  //update the error state withtehe authError value if necessary
  useEffect(() => {
    setError(authError);
  }, [authError]);

  return (
    <>
      {loading && <Loader />}
      <Container>
        <Title>Entrar</Title>
        <p>Seja bem-vindo!</p>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">
            <span>E-mail:</span>
            <input 
              type="email" 
              name='email'
              id='email'
              required 
              placeholder='Insira seu email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
          <Button>
            Entrar
          </Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <p>Ainda não possui uma conta? <NavLink to="/register">Cadastre-se</NavLink></p>
        </Form>
      </Container>
    </>
  )
}