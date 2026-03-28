'use client'

import { useEffect, useRef, useState } from 'react'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(true)
  const [volume, setVolume] = useState(0.35)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = volume
  }, [volume])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    try {
      await audio.play()
      setIsPlaying(true)
    } catch (err) {
      console.error('Autoplay blocked:', err)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/theme.mp3" loop preload="auto" />

      <div className={`music-player ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}>
        <button
          className="music-player__toggle"
          onClick={() => setIsExpanded((p) => !p)}
        >
          {isExpanded ? '—' : '♫'}
        </button>

        {isExpanded && (
          <div className="music-player__body">
            <h4 style={{ margin: 0 }}>🎧 MR.S RADIO</h4>

            <button className="music-player__btn" onClick={togglePlay}>
              {isPlaying ? 'ปิดเพลง' : 'เปิดเพลง'}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
            />
          </div>
        )}
      </div>
    </>
  )
}