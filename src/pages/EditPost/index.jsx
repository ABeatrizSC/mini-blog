import React, { useEffect, useState } from 'react'
import { Container, ErrorMessage, Form, Label, Title } from '../../assets/styles/form';
import { Button } from '../../components/Button';
import { Loader } from '../../components/Loader';
import { useAuthValue } from '../../context/AuthContext';
import { db } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useParams } from 'react-router-dom';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';

export function EditPost() {
  const { id } = useParams();
  const {document: post} = useFetchDocument("posts", id);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if(post) {
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);

      const textTags = post.tagsArray.join(", ");
      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue();

  const { updateDocument, response } = useUpdateDocument("posts", id);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    //validations
    //URL image
    try {
      new URL(image);
    } catch (error) {
      setFormError("URL da imagem inválida.")
    }
    //create tags array
    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());
    
    //check all values
    if (!body || !title || !image || !tags) {
      setFormError("Por favor, preencha todos os campos.")
    }
    
    if (formError) return;

    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    }

    updateDocument(id, data)

    //redirect to home page
    navigate("/dashboard");
  };

  return (
    <>
      {response.loading && <Loader />}
      {post && 
        <Container>
          <Title>Editar post</Title>
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
            <Button>Editar</Button>
             {response.error && <ErrorMessage>{response.error}</ErrorMessage>}
            {formError && <ErrorMessage>{formError}</ErrorMessage>}
          </Form>
        </Container>
      }
    </>
  )
}