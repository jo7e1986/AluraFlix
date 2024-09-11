/* eslint-disable react/prop-types */
function VideoCard({ video, color }) {
  return (
    <div
      className="w-full max-w-sm mx-auto border"
      style={{ borderColor: color }}
    >
      <iframe
        height="315"
        src={video.urlVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full"
      ></iframe>
    </div>
  );
}

export default VideoCard;
