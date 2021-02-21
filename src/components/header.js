import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

import {title, navItem, header, activeNavItem, navList} from '../styles/header.module.scss'
import duck from "../images/duck.jpg";

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

    const imageStyle = {
        borderRadius: "50%", 
        width: "50px",
        borderColor: "black",
    }

    const containerStyle = {
          display: "flex",
          margin: 0,
    }


    return (
        <header className={header}>
            <div style={containerStyle}>
                <h1><Link className={title} to="">{site.siteMetadata.title}</Link></h1>
                <img style={imageStyle}  src={duck}></img>
            </div>
            <nav>
                <ul className={navList}>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem}  to="/">Home</Link>
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