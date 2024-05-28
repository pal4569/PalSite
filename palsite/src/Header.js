import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { Howl, Howler } from 'howler';
import song1 from './assets/songs/minecraft.mp3';
import song2 from './assets/songs/living_mice.mp3';
import song3 from './assets/songs/sweden.mp3';
import song4 from './assets/songs/wet_hands.mp3';
import soundUrl from './assets/mc3.wav'; 

const songs = [song1, song2, song3, song4];

export default function Header() {
  const [isPaused, setIsPaused] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [howlInstance, setHowlInstance] = useState(null);

  const randomIndex = Math.floor(Math.random() * songs.length);
    const newSong = songs[randomIndex];

    const sound = new Howl({
      src: [newSong],
      volume: 0,
      onend: () => playRandomSong()
    });

  const playClick = () => {
    const audio = new Audio(soundUrl);
    audio.play();
  }

  const playRandomSong = () => {
    if (howlInstance) {
      howlInstance.fade(1, 0, 1000);
      howlInstance.stop();
    }

    sound.play();
    sound.fade(0, 1, 1000); // Fade in the new song over 1 second
    setHowlInstance(sound);
    setCurrentSong(newSong);
  };

  const togglePlay = () => {
    if (isPaused) {
      howlInstance.fade(1, 0, 1000);
      howlInstance.pause();
    } else {
      if (!currentSong) {
        playRandomSong();
      } else {
        howlInstance.play();
        howlInstance.fade(0, 1, 1000); // Fade in when resuming
      }
    }
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    return () => {
      if (howlInstance) {
        howlInstance.stop();
      }
    };
  }, [howlInstance]);

  return (
    <header>
      <button className="logo" onClick={togglePlay}>
        <FontAwesomeIcon icon={!isPaused ? faVolumeMute : faMusic} />
      </button>
      <nav>
        <Link to="/" onClick={playClick}>Main</Link>
        <Link to="/contact" onClick={playClick}>Contact</Link>
        <Link to="/projects" onClick={playClick}>Projects</Link>
        <Link to="/blog" onClick={playClick}>Blog</Link>
        <Link to="/misc" onClick={playClick}>Misc</Link>
      </nav>
    </header>
  );
}
