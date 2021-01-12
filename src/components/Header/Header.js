import React from 'react'

// router
import { Link } from "@reach/router"

// styles
import { StyledHeader } from './Header.styles'

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <Link to="/" className="logo">
        <img src="/img/splendex-logo.svg" alt="Splendex logo" />
      </Link>
      {children}
    </StyledHeader>
  )
}

export default Header