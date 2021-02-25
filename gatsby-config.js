require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Rishab in Cloud`,
    siteTitleAlt: 'Rishab Kumar',
    siteHeadline: `Rishab Kumar's blog site`,
    siteUrl: `https://blog.rishabkumar.ga`,
    siteLanguage: `en`,
    author: `@rishabk7`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Talks`,
            slug: `/talks`,
          },
        ],
        externalLinks: [
          {
            name: `Portfolio`,
            url: `https://rishabkumar.com`,
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/rishabk7`,
          },
          {
            name: `Github`,
            url: `https://github.com/rishabkumar7`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-enhanced-emoji-cursor`,
      // These are the default options.
      options: {
        emoji: [`☁`],
        fontSize: `80px`,
        lifeSpan: 125,
        interval: 200,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rishab's blog`,
        short_name: `minimal-blog`,
        description: `My Cloud journey and great tutorials for AWS and Linux`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-twitter`,
  ],
}
