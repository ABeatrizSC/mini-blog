import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Logo, NavList, NavItemList } from './style'

export function Nav() {
  return (
    <Navbar>
      <Logo>
        <NavLink to="/">
          BLOG
        </NavLink>
      </Logo>
      <NavList>
        <NavItemList>
          <NavLink to="/">
            Home
          </NavLink>
        </NavItemList>
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
      </NavList>
    </Navbar>
  )
}