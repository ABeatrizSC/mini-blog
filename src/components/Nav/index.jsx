import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Logo, NavList, NavItemList, LogoutButton } from './style'
import { useAuthValue } from '../../context/AuthContext';
import { useAuthentication } from '../../hooks/useAuthentication';
import { Button } from '../Button';

export function Nav() {
  const {user} = useAuthValue();
  const { logout } = useAuthentication();

  return (
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
    </Navbar>
  )
}