import React, { useState } from 'react'
import './style'
import { Button } from '../../components/Button'
import { SearchIcon } from 'lucide-react'
import { Container, SearchForm } from './style'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { Loader } from '../../components/Loader'
import { Post } from '../../components/Post'
import { useNavigate } from 'react-router-dom'
import { PostsContainer, NoPostsContainer } from '../../components/Post/style'

export function Home() {
  const [search, setSearch] = useState('');
  const {documents: posts, loading} = useFetchDocuments("posts");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //algo dentro do campo de busca
    if (search) {
      return navigate(`/search?q=${search.toLowerCase()}`);
    }
  }
  return (
    <Container>
      {loading && <Loader />}
      <h1>Veja os posts mais recentes</h1>
      <SearchForm onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Buscar por tag' 
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button>
          <SearchIcon />
        </Button>
      </SearchForm>
      <PostsContainer>
        {posts && posts.map((post, i) => (
          <Post key={post.id} post={post} />
        ))}
      </PostsContainer>
      {posts && posts.length === 0 && (
        <NoPostsContainer>
          <p>Nenhum post foi encontrado.</p>
          <Button navigationLink={'/posts/create'}>
            Criar primeiro post
          </Button>
        </NoPostsContainer>
      )}
    </Container>
  )
}