import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = () => {
  const [isComplete, setIsComplete] = useState(false);

  const handleVideoProgress = (event) => {
    const currentTime = event.target.getCurrentTime();
    if (currentTime >= 15) {
      setIsComplete(true);
    }
  };

  const handleVideoEnd = () => {
    setIsComplete(true);
  };

  return (
    <div>
      <YouTube
        videoId="CH50zuS8DD0"
        onProgress={handleVideoProgress}
        onEnd={handleVideoEnd}
      />
      {isComplete ? (
        <button disabled>Completed</button>
      ) : (
        <button disabled>Watch for 15 seconds to complete</button>
      )}
    </div>
  );
};

export default VideoPlayer;
