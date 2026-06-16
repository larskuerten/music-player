import { createContext, useState } from "react";

export const MusicContext = createContext();

const songs = [
  {
    id: 1,
    title: "Breaching",
    artist: "EchoBR",
    url: "/songs/Breaching.wav",
    duration: "5:52",
  },
  {
    id: 2,
    title: "Forgotten Memories",
    artist: "EchoBR",
    url: "/songs/Forgotten Memories.wav",
    duration: "4:51",
  },
  {
    id: 3,
    title: "Glacier Blue",
    artist: "EchoBR",
    url: "/songs/Glacier Blue.wav",
    duration: "4:32",
  },
  {
    id: 4,
    title: "In Love",
    artist: "EchoBR",
    url: "/songs/In Love.wav",
    duration: "4:16",
  },
  {
    id: 5,
    title: "Keep You Away",
    artist: "EchoBR",
    url: "/songs/Keep You Away.wav",
    duration: "6:17",
  },
  {
    id: 6,
    title: "Lemon Balm",
    artist: "EchoBR",
    url: "/songs/Lemon Balm.wav",
    duration: "4:48",
  },
  {
    id: 7,
    title: "Momentary Bliss",
    artist: "EchoBR",
    url: "/songs/Momentary Bliss.wav",
    duration: "3:44",
  },
  {
    id: 8,
    title: "Nothing you really want",
    artist: "EchoBR",
    url: "/songs/Nothing you really want.wav",
    duration: "3:38",
  },
];

export const MusicProvider = ({ children }) => {
  const [allSongs, setAllSongs] = useState(songs);
  const [currentTrack, setCurrentTrack] = useState(songs[0]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const handlePlaySong = (song, index) => {
    setCurrentTrack(song);
    setCurrentTrackIndex(index);
    setIsPlaying(false);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => {
      const nextIndex = (prev + 1) % allSongs.length;
      setCurrentTrack(allSongs[nextIndex]);
      return nextIndex;
    });
    setIsPlaying(false);
  };
  const prevTrack = () => {
    setCurrentTrackIndex((prev) => {
      const nextIndex = prev === 0 ? allSongs.length - 1 : prev - 1;
      setCurrentTrack(allSongs[nextIndex]);
      return nextIndex;
    });
    setIsPlaying(false);
  };

  const formatTime = (time) => {
    if (isNaN(time) || time === undefined) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);
  return (
    <MusicContext.Provider
      value={{
        allSongs,
        handlePlaySong,
        currentTrackIndex,
        currentTrack,
        currentTime,
        setCurrentTime,
        currentTime,
        formatTime,
        duration,
        setDuration,
        nextTrack,
        prevTrack,
        play,
        pause,
        isPlaying,
        volume,
        setVolume,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
