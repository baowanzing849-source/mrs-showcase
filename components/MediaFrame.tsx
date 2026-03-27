import Image from 'next/image'

type Props = {
  src: string
  alt: string
  ratio?: 'landscape' | 'portrait' | 'square'
}

export function MediaFrame({ src, alt, ratio = 'landscape' }: Props) {
  return (
    <div className={`media-frame media-frame--${ratio}`}>
      <Image src={src} alt={alt} fill className="media-frame__img" sizes="(max-width: 768px) 100vw, 50vw" />
      <div className="media-frame__glow" />
    </div>
  )
}
