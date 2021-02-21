import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import Header from "../components/header"
import Layout from '../components/layout';

const BlogPage = ({data}) => {
    const {allMarkdownRemark} = data;
    const {edges} = allMarkdownRemark;
    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {
                    edges.map( (edge) => {
                        return (
                            <li>
                                <h2><Link to={`${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link></h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </li>
                        )
                    })
                }
            </ol>
        </Layout>
    );
};

export default BlogPage;

export const query = graphql`
        query {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(posts)/"  }}) {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
`