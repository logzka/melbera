/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `melbera`,
    siteUrl: `https://melbera-cigar.shop/`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-advanced-sitemap-v5',
      options: { exclude: ['/blog/*', '/404', '/404.html'] },
    },
    //   {
    //   resolve: 'gatsby-source-wordpress',
    //   options: {
    //     "url": ""
    //   }
    // },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        mode: 'defer',
        enableListener: true,
        preconnect: ['https://fonts.gstatic.com'],
        web: [
          {
            name: `Manrope`,
            file: `https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-svgr-loader',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 95,
          breakpoints: [640, 768, 1024, 1280, 1536],
          backgroundColor: `transparent`,
        },
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/favicon.svg',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'video',
        path: './src/video/',
      },
      __key: 'video',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'description',
        path: './src/description/',
      },
      __key: 'description',
    },
  ],
};
