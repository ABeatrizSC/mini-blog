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
    position: relative;
    text-align: center;

    & button {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%)
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