import styled from 'styled-components';

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
    `;

export const NavItemList = styled.li`
    & a {
        color: ${props => props.theme.colors.text};
    }
`;