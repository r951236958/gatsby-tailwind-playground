import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Title from '../Title'
import ViewPort from '../ViewPort'

const Layout = ({ children, title }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
//   useEffect(() => {
//     Prism.highlightAll()
//   }, [])

  return (
    <>
        <ViewPort />
      <div className="text-gray-900 bg-white dark:bg-dark-500 dark:text-white">
       <main>
          <div className="w-full max-w-screen-lg p-4 mx-auto md:p-6">
            <Title>{title}</Title>
            {children}
          </div>
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
