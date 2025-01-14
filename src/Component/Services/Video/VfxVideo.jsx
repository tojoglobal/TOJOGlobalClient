import React, { useRef, useEffect } from "react";
import CloudinaryVideo from "./CloudinaryVideo";

const VfxVideo = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const vfxSectionRef = useRef(null);

  useEffect(() => {
    const handleVideoPlayback = (entries) => {
      entries.forEach((entry) => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        if (entry.isIntersecting) {
          if (videoElement.paused) {
            videoElement.muted = false;
            videoElement.play().catch((error) => {
              console.error("Autoplay failed:", error);
            });
          }
        } else {
          if (!videoElement.paused) {
            videoElement.pause();
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "150px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      handleVideoPlayback,
      observerOptions
    );

    if (vfxSectionRef.current) {
      observer.observe(vfxSectionRef.current);
    }

    return () => {
      if (vfxSectionRef.current) {
        observer.unobserve(vfxSectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className="vfx_videoEdditing_video_box"
      id="vfxvideoSection"
      ref={vfxSectionRef}
    >
      <div id="videoItems">
        <CloudinaryVideo ref={videoRef} url={videoUrl} />
      </div>
    </div>
  );
};

export default VfxVideo;
