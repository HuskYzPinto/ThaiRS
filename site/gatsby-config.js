module.exports = {
  siteMetadata: {
    siteUrl: "https://rune.in.th",
    title: "Thai RuneScape Community",
    description: "ชุมชนคนไทยใน RuneScape"
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      }
    }
  ],
};
