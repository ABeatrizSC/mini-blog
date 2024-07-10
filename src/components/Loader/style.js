import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.loaderBackground};
`;

export const LoaderIcon = styled.img`
    position: fixed;
    right: 50%;
    top: 50%;
    transform: translate(50%);
    width: 40px;
`;