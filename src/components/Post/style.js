import styled from "styled-components";

export const PostsContainer = styled.section`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-top: 10px;
`;

export const NoPostsContainer = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const PostContainer = styled.div`
    max-width: 500px;
    min-width: 300px;
    height: auto;
    padding: 20px 25px;
    background-color: ${ props => props.theme.colors.blackBackground};
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 0px 4px rgba(0,0,0,0.26);
    -moz-box-shadow: 0px 0px 0px 4px rgba(0,0,0,0.26);
    box-shadow: 0px 0px 0px 4px rgba(0,0,0,0.26);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    align-items: center;
`;

export const PostAuthor = styled.span`
    text-transform: capitalize;
    font-weight: bold;
    font-size: 20px;
    align-self: start;
`;

export const TagsContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    font-size: 12px;
    margin-bottom: 20px;
    align-self: start;
`;

export const Tag = styled.div`
    text-transform: lowercase;
    background-color: ${ props => props.theme.colors.tagsBackground};
    padding: 5px 10px;
    border-radius: 15px;
`;

export const Text = styled.p`
    text-align: justify;
    align-self: start;
`;

export const Title = styled.h3`
    text-transform: uppercase;
`;

export const PostImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`;