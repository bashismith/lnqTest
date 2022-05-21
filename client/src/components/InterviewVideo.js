import React from 'react';

const InterviewVideo = () => {
  return (
    <div className="modal">
      <div className="content">
      <iframe width="600" height="400" src="https://vimeo.com/event/2140910/embed/049a160997" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      {/* <iframe src="https://vimeo.com/event/2140878/embed" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe> */}
      </div>
    </div>
  )
}

export default InterviewVideo;