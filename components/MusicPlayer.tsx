'use client'

import { useEffect, useRef, useState } from 'react'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [volume, setVolume] = useState(0.35)
  const [isHydrated, setIsHydrated] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    setIsHydrated(true)

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

    if (savedPlaying === 'true') {
      setIsPlaying(true)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
  }, [volume])

  useEffect(() => {
    if (!isHydrated) return

    localStorage.setItem('mrs_music_expanded', String(isExpanded))
    localStorage.setItem('mrs_music_volume', String(volume))
  }, [isExpanded, volume, isHydrated])

  useEffect(() => {
    if (!isHydrated) return

    const tryAutoPlayAfterInteraction = async () => {
      if (hasInteracted) return

      setHasInteracted(true)

      const shouldPlay = localStorage.getItem('mrs_music_playing')
      if (shouldPlay !== 'true') return

      const audio = audioRef.current
      if (!audio) return

      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
    }

    window.addEventListener('pointerdown', tryAutoPlayAfterInteraction, { once: true })
    window.addEventListener('keydown', tryAutoPlayAfterInteraction, { once: true })
    window.addEventListener('scroll', tryAutoPlayAfterInteraction, { once: true })

    return () => {
      window.removeEventListener('pointerdown', tryAutoPlayAfterInteraction)
      window.removeEventListener('keydown', tryAutoPlayAfterInteraction)
      window.removeEventListener('scroll', tryAutoPlayAfterInteraction)
    }
  }, [hasInteracted, isHydrated])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      localStorage.setItem('mrs_music_playing', 'false')
      return
    }

    try {
      await audio.play()
      setIsPlaying(true)
      localStorage.setItem('mrs_music_playing', 'true')
    } catch (err) {
      console.error('Music play failed:', err)
      setIsPlaying(false)
    }
  }

  if (!isHydrated) return null

  return (
    <>
      <audio ref={audioRef} src="/audio/theme.mp3" loop preload="auto" />

      <div className={`music-dock ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}>
        <button
          type="button"
          className="music-dock__fab"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-label={isExpanded ? 'Hide music player' : 'Show music player'}
        >
          {isExpanded ? '—' : '♫'}
        </button>

        <div className="music-dock__panel">
          <div className="music-dock__top">
            <div className="music-dock__meta">
              <span className="music-dock__eyebrow">Ambient Audio</span>
              <strong className="music-dock__title">MR.S RADIO</strong>
            </div>

            <span className={`music-dock__status ${isPlaying ? 'is-on' : ''}`}>
              {isPlaying ? 'LIVE' : 'OFF'}
            </span>
          </div>

          <div className="music-dock__controls">
            <button
              type="button"
              className={`music-dock__play ${isPlaying ? 'is-playing' : ''}`}
              onClick={togglePlay}
            >
              {isPlaying ? 'ปิดเพลง' : 'เปิดเพลง'}
            </button>

            <div className="music-dock__volume-wrap">
              <span className="music-dock__volume-icon">VOL</span>
              <input
                className="music-dock__volume"
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
      </div>
    </>
  )
}