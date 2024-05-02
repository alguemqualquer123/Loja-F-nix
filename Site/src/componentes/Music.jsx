import React, { useEffect, useState, useRef } from 'react';
import { Principaldiv,ArtistasDiv, MusicList, Controler, DivCloseNui, DivOpenNui } from '../css/Music.ts'
import musicImg from '../assets/music.png'
import unskipImg from '../assets/unskip.png'
import pauseImg from '../assets/pause.png'
import playImg from '../assets/play.png'
import skipImg from '../assets/skip.png'
import volumeImg from '../assets/volume.png'
import { sounds, Cmusics } from '../config.js';
import { user } from '../auth/getCookies.js';
import '../css/app.css';
import { couldStartTrivia } from 'typescript';
import { useLocation,useNavigate } from 'react-router-dom';
const Music = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname, search, hash } = location;
    const [CloseNui, SetCloseNui] = useState(true);
    const [showMusic, setshowMusic] = useState(false);
    const [paused, setPaused] = useState(false);
    const [currentMusic, setCurrentMusic] = useState(null);
    const audioRef = useRef(null);
    const [volume, setVolume] = useState(50);
    const [progress, setProgress] = useState(0);
    const [showVolume, SetshowVolume] = useState(false);
    const [Musics, setMusics] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const isLoggedOnce = useRef(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!audioRef.current) {
                setPaused(false);
                setProgress(0);
            }
        }, 0);
        return () => clearInterval(intervalId);
    }, [audioRef, setPaused, setProgress]);

    const Pausar = () => {
        if (audioRef.current) {
            setPaused(false)
            audioRef.current.pause();
        }
    }
    const stopMusic = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setProgress(0)
            setPaused(false)
            audioRef.current = null;
        }
    };
    const Play = () => {
        if (audioRef.current) {
            setPaused(true);
            audioRef.current.play();
        } else {
            if (currentMusic !== null) {
                const newAudio = new Audio(currentMusic);
                newAudio.addEventListener('canplaythrough', () => {
                    audioRef.current = newAudio;
                    setPaused(true);
                    newAudio.play();
                });
            }
        }
    };

    const setMusic = (Data, key) => {
        if (audioRef) {
            stopMusic()
            audioRef.current = null;
        }

        setCurrentMusic(Data.src);
        const newAudio = new Audio(Data.src);
        newAudio.addEventListener('canplaythrough', () => {
            audioRef.current = newAudio;
            setPaused(true);
            newAudio.play();
        });
    };

    useEffect(() => {
        if (!currentMusic || !audioRef.current) {
            return;
        }

        const handleEnded = () => {
            setCurrentMusic(null);
        };

        const handleTimeUpdate = () => {
            if (audioRef.current) {
                const currentTime = audioRef.current.currentTime;
                const duration = audioRef.current.duration;
                const progressPercentage = (currentTime / duration) * 100;
                setProgress(progressPercentage);
            }
        };

        audioRef.current.addEventListener('ended', handleEnded);
        audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('ended', handleEnded);
                audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, [audioRef.current, currentMusic]);
    const handleInputChange = (e) => {
        const newProgress = parseFloat(e.target.value);
        setProgress(newProgress);

        if (audioRef.current) {
            const duration = audioRef.current.duration;
            const newTime = (newProgress / 100) * duration;
            audioRef.current.currentTime = newTime;
        }
    };


    const handleInputChangeVolume = (e) => {
        const inputValue = parseFloat(e.target.value);

        if (!isNaN(inputValue) && audioRef.current) {
            const newVolume = inputValue;
            if (newVolume >= 0 && newVolume <= 1) {
                setVolume(newVolume);
                audioRef.current.volume = newVolume;
            }
        }
    };
    const Skip = () => {
    }
    const handleInputChange2 = (event) => {
        setSearchTerm(event.target.value);
    };

  
    return (
        CloseNui ? (
            <>
                <DivOpenNui className='OpenMusic' onClick={() => { SetCloseNui(!CloseNui) }}>
                    <img src={musicImg} alt={!CloseNui ? 'Open' : 'Close'} />
                </DivOpenNui>
            </>
        ) : (
            <Principaldiv>
                <DivCloseNui className='OpenMusic' onClick={() => { SetCloseNui(!CloseNui) }}>
                    <img src={musicImg} alt={!CloseNui ? 'Open' : 'Close'} />
                </DivCloseNui>
                <MusicList>
                    <div>
                        {Cmusics.map((music, key) => (
                            <div key={key} onClick={() => {
                                setMusic(music, key);
                            }}>
                                <img src={music.image_url} alt={music.name} />
                                <span>{music.name}</span>
                            </div>
                        ))}
                    </div>
                </MusicList>

                <Controler className='Controler'>
                    <input type="range" value={progress.toFixed(2)} onChange={handleInputChange} min="0" max={null} step="0.0001" className='MusicProgress' />
                    <img src={unskipImg} alt='unskip' onClick={() => { UnSkip(!paused) }} />
                    {paused ? (
                        <img src={pauseImg} alt='Pause' onClick={Pausar} />
                    ) : (
                        <img src={playImg} alt='Play' onClick={Play} />
                    )}
                    <img src={skipImg} alt='skip' onClick={Skip} />
                    <div className='flex relative float-left items-center justify-end '>
                        <img src={volumeImg} alt="volume" onClick={() => {
                            SetshowVolume(!showVolume)
                        }} />
                        {showVolume ? (
                            <input className="InputVol" type="range" value={volume} onChange={handleInputChangeVolume} min="0" max="1" step="0.1" />
                        ) : null}
                    </div>
                </Controler>
            </Principaldiv>
        )
    );

}



export default Music