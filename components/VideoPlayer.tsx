function VideoPlayer({ id }: { id: string }) {
  return (
    <video
      src={`/api/videos?videoId=${id}`}
      width="100%"
      height="auto - 50px"
      controls
      autoPlay
      id="video-player"
    />
  );
}

export default VideoPlayer;
