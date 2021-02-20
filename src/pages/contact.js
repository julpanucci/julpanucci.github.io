import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact</h1>
            <p>The best way to reach me is via <Link to="https://www.linkedin.com/in/jpanucci/">LinkedIn</Link></p>
        </Layout>
    );
};

export default ContactPage;