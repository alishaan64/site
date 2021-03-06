import React from 'react'
import PropTypes from 'prop-types'

import Footer from '../components/Footer'
import { GlobalStyles } from '../components/Theme'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
