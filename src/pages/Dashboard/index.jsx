import React from 'react'
import './style'
import { useAuthValue } from '../../context/AuthContext';
import { NoPostsContainer } from '../../components/Post/style'
import { Button } from '../../components/Button';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';
import { Link } from 'react-router-dom';
import { ActionsContainer, DashboardContainer, DeleteButton, Table, TableContainer, TableData, TableHeader, TableRow } from './style';
import { Edit, EyeIcon, Trash } from 'lucide-react';

export function Dashboard() {
  const { user } = useAuthValue();
  const uid = user.id;
  //get the posts by user id
  const {documents: posts, loading} = useFetchDocuments("posts", null, uid);
  //get the hook to delete a post
  const {deleteDocument} = useDeleteDocument("posts");

  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <p>Gerencie seus posts</p>
      {posts && posts.length === 0 ? (
        <NoPostsContainer>
          <p>Nenhum post foi encontrado.</p>
          <Button navigationLink={'/posts/create'}>
            Criar primeiro post
          </Button>
        </NoPostsContainer>
      ) : 
        <TableContainer>
          <Table>
            <thead>
              <TableRow>
                <TableHeader>
                  Post
                </TableHeader>
                <TableHeader>
                  Ações
                </TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {posts && posts.map((post) => (
                <TableRow key={post.id}>
                  <TableData>{post.title}</TableData>
                  <TableData>
                    <ActionsContainer>
                      <Link to={`/posts/${post.id}`}>
                        <EyeIcon />
                      </Link>
                      <Link to={`/posts/edit/${post.id}`}>
                        <Edit />
                      </Link>
                      <DeleteButton onClick={() => deleteDocument(post.id)}>
                        <Trash />
                      </DeleteButton>
                    </ActionsContainer>
                  </TableData>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      }
    </DashboardContainer>
  )
}