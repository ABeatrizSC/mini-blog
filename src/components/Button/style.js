import styled from "styled-components";

export const StyledButton = styled.button`
    background-color:  ${props => props.theme.colors.primary};
    color: inherit;
    cursor: pointer;
    border: none;
    width: fit-content;
    padding: 10px 15px;
    border-radius: 7px;
    font-family:  ${props => props.theme.fontFamily.poppins};
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;

    &:hover {
        background-color: ${props => props.theme.colors.primaryHover};
    }
`;