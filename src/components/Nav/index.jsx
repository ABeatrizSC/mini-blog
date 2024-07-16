import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Logo, NavList, NavItemList, LogoutButton, NavListMobile, MenuMobile, OpenMenuButton } from './style'
import { useAuthValue } from '../../context/AuthContext';
import { useAuthentication } from '../../hooks/useAuthentication';
import { Menu } from 'lucide-react';

export function Nav() {
  const {user} = useAuthValue();
  const { logout } = useAuthentication();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <>
      <Navbar>
        <Logo>
          <NavLink to="/">
            BLOG
          </NavLink>
        </Logo>
        <NavList>
          {user &&
            <>
              <NavItemList>
                <NavLink to="/">
                  Home
                </NavLink>
              </NavItemList>
              <NavItemList>
                <NavLink to="/posts/create">
                  Criar post
                </NavLink>
              </NavItemList>
              <NavItemList>
                <NavLink to="/dashboard">
                  Dashboard
                </NavLink>
              </NavItemList>
              <NavItemList>
                <LogoutButton onClick={logout}>
                  Sair
                </LogoutButton>
              </NavItemList>
            </>
          }
          {!user &&
            <>
              <NavItemList>
                <NavLink to="/login">
                  Login
                </NavLink>
              </NavItemList>
              <NavItemList>
                <NavLink to="/register">
                  Registrar
                </NavLink>
              </NavItemList>
            </>        
          }
        </NavList>
        <NavListMobile>
          <NavItemList>
            <OpenMenuButton onClick={toggleMenu}>
              <Menu />
            </OpenMenuButton>
          </NavItemList>
          <NavItemList onClick={toggleMenu}>
            <LogoutButton onClick={logout}>
              Sair
            </LogoutButton>
          </NavItemList>
        </NavListMobile>
      </Navbar>
      <MenuMobile style={{ top: isMenuOpened ? '60px' : '-100%' }}>
        <NavItemList onClick={toggleMenu}>
          <NavLink to="/">
            Home
          </NavLink>
        </NavItemList>
        <NavItemList onClick={toggleMenu}>
          <NavLink to="/posts/create">
            Criar post
          </NavLink>
        </NavItemList>
        <NavItemList onClick={toggleMenu}>
          <NavLink to="/dashboard">
            Dashboard
          </NavLink>
        </NavItemList>
      </MenuMobile>
    </>
  )
}