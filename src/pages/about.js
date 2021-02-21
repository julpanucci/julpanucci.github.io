import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Video from "../components/video";
import Columns from 'react-columns';


const VideoGrid = ({videos}) => {
    console.log(videos)


    const videoFrames = videos.map(video => {
        return (
            <div className="column">
                <Video videoSrcURL={video.frontmatter.url}/>
            </div>
        )
    });

    return(
        <div className="row">
            {videoFrames}
        </div>
    )
}

const AboutPage = ({data}) => {
    const {allMarkdownRemark} = data
    const {nodes} = allMarkdownRemark;

    
    return (
        <Layout>
            <h1>About Me</h1>
            <p> I love sports, running, and being outside. </p>
        <VideoGrid videos={nodes}/>
            <p> <Link to="/contact">Want to work with me? Reach out</Link></p>
        </Layout>
    );
};

export default AboutPage;

export const query = graphql ` 
{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(videos)/"  }}) {
    nodes {
      frontmatter{
        title
        url
      }
    }
  }
}`