import React from 'react';
import './MusicSetUp.css';

export const MusicSetUp = () => {
  const songsData = [
    { title: "Style", artist: "E daires", duration: "2:03" },
    { title: "All Too Well", artist: "Taylor Swift", duration: "5:29" },
    { title: "Stay", artist: "The Kid LAROI", duration: "2:21" },
  ];

  return (
    <div className="container-e1-p1">
      <div className="cntr-e1-p1-elem1">
        <div className="p1-elem1-part1">
          <div className="elem1-part1-e1">
            <img
              className="spotify"
              src="https://imgs.search.brave.com/KdJP5_0BqVVKam-YlEH9TIX016MCoY6YBKQwenZUxXU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVzcG5nLmNvbS9pbWctcG5nL3Nwb3RpZnktbG9nby1wbmctb3Blbi0yMDAwLnBuZw"
              alt=""
            />
            <div className="img-text">
              <img
                src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d175370f7014a0b8b53704cb"
                alt=""
              />
              <div className="textcntr">
                <h2>
                  Zenoye Play <div className="text-line"></div>
                </h2>
                <h4>
                  Paresh Srichandan <div className="text-line"></div>
                </h4>
                <div className="plus-icon">
                  <i className="ri-add-circle-line"></i>
                  <h3>Save On Spotify</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="elem1-part1-e2">
            <h4>PREVIEW</h4>
            <div className="music-btn">
              <i className="ri-skip-back-fill"></i>
              <i className="ri-skip-forward-fill"></i>
              <i className="ri-more-line"></i>
            </div>
            <i className="ri-play-circle-fill"></i>
          </div>
        </div>
        <div className="p1-elem1-part2">
          {songsData.map((song, index) => (
            <div key={index} className="song-card">
              <h2>{index + 1}</h2>
              <h1>
                {song.title} <br />
                <span>{song.artist}</span>
              </h1>
              <div className="song-time">{song.duration}</div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};
