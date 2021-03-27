import * as React from "react"
import Welcome from 'components/Welcome'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Welcome />
    </Layout>
  )
}

export default IndexPage
