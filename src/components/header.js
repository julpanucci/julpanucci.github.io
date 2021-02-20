import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

import {title, navItem, header, activeNavItem, navList} from '../styles/header.module.scss'

const Header = () => {
    const {site} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)


    return (
        <header className={header}>
            <h1><Link className={title} to="">{site.siteMetadata.title}</Link></h1>
            <nav>
                <ul className={navList}>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem}  to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem}  to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem}  to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem}  to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;