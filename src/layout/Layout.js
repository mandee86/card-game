import React from 'react'

// styles
import { StyledLayout } from './Layout.styles'

// components
import Header from '../components/Header/Header'

const Layout = ({ children, headerChildren, classesMain }) => {

  return (
    <StyledLayout>
      <Header>
        {headerChildren && (
          headerChildren
        )}
      </Header>
      <div className={['main', classesMain].join(' ')}>
        { children }
      </div>
    </StyledLayout>
  )
}

export default Layout