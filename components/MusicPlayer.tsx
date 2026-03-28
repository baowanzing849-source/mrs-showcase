'use client'

import { useEffect, useRef, useState } from 'react'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [volume, setVolume] = useState(0.35)
  const [isHydrated, setIsHydrated] = useState(false)

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
      setIsPlaying(false)
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

    const tryAutoPlay = async () => {
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

      window.removeEventListener('pointerdown', tryAutoPlay)
      window.removeEventListener('keydown', tryAutoPlay)
      window.removeEventListener('wheel', tryAutoPlay)
      window.removeEventListener('touchstart', tryAutoPlay)
      window.removeEventListener('scroll', tryAutoPlay)
    }

    window.addEventListener('pointerdown', tryAutoPlay, { passive: true })
    window.addEventListener('keydown', tryAutoPlay, { passive: true })
    window.addEventListener('wheel', tryAutoPlay, { passive: true })
    window.addEventListener('touchstart', tryAutoPlay, { passive: true })
    window.addEventListener('scroll', tryAutoPlay, { passive: true })

    return () => {
      window.removeEventListener('pointerdown', tryAutoPlay)
      window.removeEventListener('keydown', tryAutoPlay)
      window.removeEventListener('wheel', tryAutoPlay)
      window.removeEventListener('touchstart', tryAutoPlay)
      window.removeEventListener('scroll', tryAutoPlay)
    }
  }, [isHydrated])

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

      <div className={`music-float ${isExpanded ? 'is-open' : 'is-closed'}`}>
        {!isExpanded && (
          <button
            type="button"
            className={`music-float__icon ${isPlaying ? 'is-playing' : ''}`}
            onClick={() => setIsExpanded(true)}
            aria-label="Open music player"
          >
            ♫
          </button>
        )}

        {isExpanded && (
          <div className="music-float__panel">
            <button
              type="button"
              className="music-float__close"
              onClick={() => setIsExpanded(false)}
              aria-label="Close music player"
            >
              —
            </button>

            <div className="music-float__meta">
              <span className="music-float__eyebrow">Ambient Audio</span>
              <strong className="music-float__title">MR.S RADIO</strong>
            </div>

            <div className="music-float__controls">
              <button
                type="button"
                className={`music-float__play ${isPlaying ? 'is-playing' : ''}`}
                onClick={togglePlay}
              >
                {isPlaying ? 'ปิดเพลง' : 'เปิดเพลง'}
              </button>

              <div className="music-float__volume-wrap">
                <span className="music-float__volume-label">VOL</span>
                <input
                  className="music-float__volume"
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