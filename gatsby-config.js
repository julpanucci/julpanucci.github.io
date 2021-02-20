module.exports = {
    siteMetadata: {
        title: "Julian Panucci loves ducks.",
        author:"Duck Lover 69"
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-transformer-remark',
    ],
    pathPrefix: "/my-site",
}