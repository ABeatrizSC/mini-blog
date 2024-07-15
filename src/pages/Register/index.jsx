import React, { useEffect, useState } from 'react'
import { Container, Title, Form, Label, ErrorMessage } from '../../assets/styles/form'
import { useAuthentication } from '../../hooks/useAuthentication';
import { Loader } from '../../components/Loader';
import { NavLink } from 'react-router-dom';
import { Button } from '../../components/Button';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const {createUser, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user = {
      name,
      email,
      password
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!")
      return
    }

    const res = await createUser(user);
  };

  //update the error state withtehe authError value if necessary
  useEffect(() => {
    setError(authError);
  }, [authError]);

  return (
    <>
      {loading && <Loader />}
      <Container>
        <Title>Cadastre-se</Title>
        <p>Crie uma conta e compartilhe suas histórias.</p>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">
            <span>Nome:</span>
            <input 
              type="text" 
              name='name'
              id='name'
              required 
              placeholder='Insira seu nome'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Label>
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
          <Label htmlFor="confirmPassword">
            <span>Confirmação de senha:</span>
            <input 
              type="password" 
              name='confirmPassword'
              id='confirmPassword'
              required 
              placeholder='Insira a senha anterior'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Label>
          <Button>
            Cadastrar
          </Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <p>Já possui uma conta? <NavLink to="/login">Faça login</NavLink></p>
        </Form>
      </Container>
    
    </>
  )
}