import styled from 'styled-components';
import { StyledButton } from '../Button/style';

export const Navbar = styled.nav`
    background-color: ${props => props.theme.colors.primary};
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding: 30px;
`;

export const Logo = styled.div`
    font-weight: 700;
    letter-spacing: 1px;
    
    & a {
        font-size: 25px!important;
        color: inherit;
    }
`;

export const NavList = styled.ul`
    display: flex;
    gap: 20px;
    align-items: center;
`;

export const NavItemList = styled.li`
    & a {
        color: ${props => props.theme.colors.text};
    }
`;

export const LogoutButton = styled(StyledButton)`
    background-color:  ${props => props.theme.colors.red};
    padding: 5px;
    text-transform: none;

    &:hover {
        background-color:  ${props => props.theme.colors.redHover};
    }
`;