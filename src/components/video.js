import React, {useState} from "react"
import  '../styles/video.scss'
import sunset from "../images/sunset.png"



const Video = ({ videoSrcURL, videoTitle, ...props }) => {

    const [state, setState] = useState('image')

    const touch = () => {
        setState('video')
    }

    return (
        <div className="container">
            {state === 'image' && (
          <img onClick={touch} className="iframe" src={sunset} data-video={videoSrcURL}/>
      )
        }

        {state === 'video' && (
      <iframe
      className="iframe"
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
        />
      )
        }
          
        </div>
  )
}
export default Video
