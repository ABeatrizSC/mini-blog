import React from 'react'
import './style'
import { PostContainer, PostAuthor, TagsContainer, Tag, PostImage, Title, Text } from './style'
import { Button } from '../Button'

export function Post({ post }) {
  return (
    <PostContainer>
        <PostAuthor>{post.createdBy}</PostAuthor>
        <TagsContainer>
            {post.tagsArray.map((tag) => (
                <Tag key={tag}>
                    #{tag}
                </Tag>
            ))}
        </TagsContainer>
        <Title>{post.title}</Title>
        <Text>{post.body}</Text>
        <PostImage src={post.image} alt={post.title} />
        <Button navigationLink={`/posts/${post.id}`}>Ver post</Button>
    </PostContainer>
  )
}
