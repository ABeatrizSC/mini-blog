import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { Loader } from '../../components/Loader';
import { db } from '../../firebase/config';
import { Tag } from '../../components/Post/style';
import { PostDetailsContainer, PostDetailsHeader, PostDetailsImage, TagsContainerDetails } from './style';
import { Button } from '../../components/Button';
import { Home } from 'lucide-react';

export function PostDetails() {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <PostDetailsContainer>
      {loading && <Loader />}
      {post && (
        <>
          <PostDetailsHeader>
            <Button navigationLink={"/"}>
              <Home />
            </Button>
            <h1>{post.title}</h1>
          </PostDetailsHeader>
          <PostDetailsImage src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <TagsContainerDetails>
            {post.tagsArray.map((tag) => (
                <Tag key={tag}>
                    #{tag}
                </Tag>
            ))}
          </TagsContainerDetails> 
        </>
      )}
    </PostDetailsContainer>
  )
}