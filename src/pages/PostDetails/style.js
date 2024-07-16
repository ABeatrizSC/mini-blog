import styled from "styled-components";
import { TagsContainer } from "../../components/Post/style";

export const PostDetailsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 30px;
    padding: 0 10px;
`;

export const PostDetailsHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 70px;
    gap: 15px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
    }

    & h1 {
        flex: 1;
        width: 100%;
        text-align: center;
    }
`;

export const PostDetailsImage = styled.img`
    max-width: 600px;
    width: 100%;
    align-self: center;
`;

export const TagsContainerDetails = styled(TagsContainer)`
    align-self: center;
    font-size: inherit;
`;