import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { Loader } from '../../components/Loader';
import { db } from '../../firebase/config';
import { TagsContainer } from '../../components/Post/style';
import { Tag } from 'lucide-react';

export function PostDetails() {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocuments("posts", null, id);

  return (
    <div>
      {loading && <Loader />}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <TagsContainer>
            {post.tagsArray.map((tag) => (
                <Tag key={tag}>
                    #{tag}
                </Tag>
            ))}
          </TagsContainer> 
        </>
      )}
    </div>
  )
}