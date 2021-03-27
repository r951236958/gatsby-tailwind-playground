const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Gatsby With Tailwindcss',
    description: `Gatsby starter styled with Tailwind`,
    author: `nick`,
  },
  plugins: [
      {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, `src`),
        pages: path.join(__dirname, `src/pages`),
        components: path.join(__dirname, `src/components`),
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // useResolveUrlLoader: true,
        sassOptions: {
          javascriptEnabled: true,
        },
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-use-dark-mode`,
  ],
}
