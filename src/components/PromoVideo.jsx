export default function Video() {
  return (
    <div className='w-full overflow-hidden' style={{ marginTop: "7rem" }}>
      <video
        className='w-full h-auto object-cover'
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
      >
        <source
          src='//www.sergedenimes.com/cdn/shop/videos/c/vp/93170c1e79144e81b325ed9dbae4d7da/93170c1e79144e81b325ed9dbae4d7da.SD-480p-0.9Mbps-39770512.mp4?v=0'
          type='video/mp4'
        />
        Your browser doesn't support video.
      </video>
    </div>
  );
}
