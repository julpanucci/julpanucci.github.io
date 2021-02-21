module.exports = {
    siteMetadata: {
        title: "Julian Panucci loves ducks.",
        author:"ducklover007"
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
}