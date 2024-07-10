import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: ${props => props.theme.colors.primary};
    width: 100%;
    height: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
`;

export const Copyright = styled.p`
    & a {
        color: inherit;
    }
`;
