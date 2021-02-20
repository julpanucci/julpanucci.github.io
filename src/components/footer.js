import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

const Footer = () => {
    const {site} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer>
            <p> Created by {site.siteMetadata.author}, © 2021</p>
        </footer>
    );
};

export default Footer;