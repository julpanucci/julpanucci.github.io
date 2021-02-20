import { Link } from 'gatsby';
import React from 'react';
import Footer from '../components/footer'
import Header from "../components/header"
import Layout from '../components/layout';

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact</h1>
            <p>The best way to reach me is via <Link to="https://twitter.com/julp04">@julp04</Link> on Twitter!</p>
        </Layout>
    );
};

export default ContactPage;