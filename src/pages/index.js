import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"

const HomePage = () => {
    return (
        <Layout>
            <h1>Hello.</h1>
            <h2>I'm Julian, an iOS developer living in beautiful Austin, TX</h2>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default HomePage;

