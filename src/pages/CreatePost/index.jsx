import React, { useState } from 'react'
import { Container, ErrorMessage, Form, Label, Title } from '../../assets/styles/form';
import { Button } from '../../components/Button';
import { Loader } from '../../components/Loader';
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useAuthValue } from '../../context/AuthContext';
import { db } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

export function CreatePost() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  const navigate = useNavigate();
  
  //use context with auth value
  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    
    //validations
    //URL image
    // validate image
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
      return;
    }

    //create tags array
    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());
    
    //check all values
    if (!body || !title || !image || !tags) {
      setFormError("Por favor, preencha todos os campos.")
      return;
    }
    
    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
       uid: user.uid,
      createdBy: user.displayName,
    });

    //redirect to home page
    navigate("/");
  };

  return (
    <>
      {response.loading && <Loader />}
      <Container>
        <Title>Criar post</Title>
        <p>Escreva sobre o que quiser e compartilhe!</p>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor='title'>
            <span>Título do post:</span>
            <input 
              type="text" 
              name='title'
              id='title'
              required 
              placeholder='Insira o título'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Label>
          <Label htmlFor='image'>
            <span>Imagem:</span>
            <input 
              type="text" 
              name='image'
              id='image'
              required 
              placeholder='Insira a URL da imagem'
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Label>
          <Label htmlFor='body'>
            <span>Conteúdo:</span>
            <textarea 
              name="body" 
              id="body" 
              required
              placeholder='Insira o conteúdo do post'
              rows="5"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Label>
          <Label htmlFor='tags'>
            <span>Tags:</span>
            <input 
              type="text" 
              name='tags'
              id='tags'
              required 
              placeholder='Tags separadas por vírgula'
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </Label>
          <Button>Criar Post</Button>
          {response.error && <ErrorMessage>{response.error}</ErrorMessage>}
          {formError && <ErrorMessage>{formError}</ErrorMessage>}
        </Form>
      </Container>
    </>
  )
}