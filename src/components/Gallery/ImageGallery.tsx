import Image, { ImageProps } from 'next/image'

interface ImageGalleryProps extends ImageProps {}

export function ImageGallery({ src, alt }: ImageGalleryProps) {
  return (
    <div className="group relative h-max w-full overflow-hidden rounded-xl bg-gray-200">
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        className="h-auto w-full object-cover transition-all group-hover:opacity-75"
      />
    </div>
  )
}
