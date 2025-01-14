import React from "react";

const CloudinaryVideo = React.forwardRef(({ url, ...props }, ref) => {
  return (
    <video
      ref={ref}
      {...props}
      autoPlay
      muted
      loop
      playsInline
      className="videoItems"
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
});

export default CloudinaryVideo;
