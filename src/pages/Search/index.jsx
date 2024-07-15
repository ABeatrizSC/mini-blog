import React from 'react'
import { useQuery } from '../../hooks/useQuery'
import { Button } from '../../components/Button';
import { ArrowLeft } from 'lucide-react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { Post } from '../../components/Post';
import { PostsContainer, NoPostsContainer } from '../../components/Post/style'
import { SearchResultHeader } from './style';

export function Search() {
    const query = useQuery();
    const search = query.get("q"); //"get" is a method from URLSearchParams

    //ao passar "search", o mesmo não será mais null e cairá na função de exibir somente os posts que contém a busca
    const {documents: posts } = useFetchDocuments("posts", search);

    return (
        <div>
            <SearchResultHeader>
                <Button navigationLink={"/"}>
                    <ArrowLeft />
                </Button>
                <h1>Exibindo posts com a tag "{search}"</h1>
            </SearchResultHeader>
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
        </div>
    )
}
