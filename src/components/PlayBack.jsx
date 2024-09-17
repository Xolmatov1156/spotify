import React from 'react';
import SpotifyWebPlayer from 'react-spotify-web-playback';

function PlayBack({ play, playing, setPlaying, accessToken }) {
  return (
    <SpotifyWebPlayer
      play={playing}
      token={accessToken}
      uris={play ? [play] : []}
      callback={(e) => {
        if (!e.isPlaying) {
          setPlaying(false);
        }
      }}
      styles={{
        activeColor: '#fff',
        bgColor: '#333',
        color: '#fff',
        loaderColor: '#fff',
        sliderColor: '#1cb954',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
      }}
    />
  );
}

export default PlayBack;
