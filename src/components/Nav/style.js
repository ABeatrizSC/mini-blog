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
    z-index: 2;
    position: relative;
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

    @media screen and (max-width: 768px) {
        display: none;
    }
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

export const NavListMobile = styled.ul`
    display: none;
    align-items: center;
    gap: 10px;

    & li {
        display: flex;
    }

    @media screen and (max-width: 768px) {
        display: flex;
    }
`;

export const MenuMobile = styled.div`
    position: absolute;
    background-color: ${props => props.theme.colors.componentBackground};
    width: 100%;
    height: 165px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
    padding: 30px 25px;
    transition: all 350ms ease-in-out; 
    z-index: 1;
`;

export const OpenMenuButton = styled(StyledButton)``;