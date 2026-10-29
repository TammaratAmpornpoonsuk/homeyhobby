"use client";

import Image from "next/image";

type GalleryImageProps = {
  images: string[];
};

export function GalleryImage({ images }: GalleryImageProps) {
  return (
    <>
      {images.map((src, index) => (
        <button
          key={src + index}
          type="button"
          className="hover:cursor-pointer"
          onClick={() => {
            console.log(`Gallery images ${index + 1}`);
          }}
        >
          <Image
            key={src}
            src={src}
            alt={`Gallery images ${index + 1}`}
            width={400}
            height={300}
            className="rounded-xl"
          />
        </button>
      ))}
    </>
  );
}
