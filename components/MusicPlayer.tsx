'use client'

import { useEffect, useRef, useState } from 'react'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [isExpanded, setIsExpanded] = useState(true)
  const [volume, setVolume] = useState(0.35)

  useEffect(() => {
    const savedMuted = localStorage.getItem('mrs_music_muted')
    const savedExpanded = localStorage.getItem('mrs_music_expanded')
    const savedVolume = localStorage.getItem('mrs_music_volume')
    const savedPlaying = localStorage.getItem('mrs_music_playing')

    if (savedExpanded !== null) {
      setIsExpanded(savedExpanded === 'true')
    }

    if (savedVolume !== null) {
      const parsed = Number(savedVolume)
      if (!Number.isNaN(parsed)) {
        setVolume(parsed)
      }
    }

    const audio = audioRef.current
    if (!audio) return

    audio.volume = savedVolume ? Number(savedVolume) : 0.35

    if (savedMuted === 'true') {
      audio.pause()
      setIsPlaying(false)
      setIsReady(true)
      return
    }

    if (savedPlaying === 'true') {
      audio
        .play()
        .then(() => {
          setIsPlaying(true)
          setIsReady(true)
        })
        .catch(() => {
          setIsPlaying(false)
          setIsReady(true)
        })
    } else {
      setIsReady(true)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
    localStorage.setItem('mrs_music_volume', String(volume))
  }, [volume])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      localStorage.setItem('mrs_music_playing', 'false')
      localStorage.setItem('mrs_music_muted', 'true')
      return
    }

    try {
      await audio.play()
      setIsPlaying(true)
      localStorage.setItem('mrs_music_playing', 'true')
      localStorage.setItem('mrs_music_muted', 'false')
    } catch {
      setIsPlaying(false)
    }
  }

  const toggleExpand = () => {
    const next = !isExpanded
    setIsExpanded(next)
    localStorage.setItem('mrs_music_expanded', String(next))
  }

  if (!isReady) return null

  return (
    <>
      <audio ref={audioRef} src="/audio/theme.mp3" loop preload="auto" />

      <div className={`music-player ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}>
        <button
          type="button"
          className="music-player__toggle"
          onClick={toggleExpand}
          aria-label={isExpanded ? 'Hide music panel' : 'Show music panel'}
        >
          {isExpanded ? '—' : '♫'}
        </button>

        {isExpanded && (
          <div className="music-player__body">
            <div className="music-player__meta">
              <p className="music-player__eyebrow">Ambient Audio</p>
              <h4 className="music-player__title">Server Theme</h4>
            </div>

            <div className="music-player__controls">
              <button
                type="button"
                className={`music-player__btn ${isPlaying ? 'is-playing' : ''}`}
                onClick={togglePlay}
              >
                {isPlaying ? 'ปิดเพลง' : 'เปิดเพลง'}
              </button>

              <div className="music-player__volume-wrap">
                <span className="music-player__volume-label">Vol</span>
                <input
                  className="music-player__volume"
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}