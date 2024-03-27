import React from 'react'

export default function Video() {
  return (
    <>
        <video controls>
            <source src='./video/video.mp4' type='video/mp4'/>
        </video>
    </>
  )
}
