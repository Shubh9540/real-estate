'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { GallerySectionProps } from '@/types/templates.types';

export const GallerySection = ({ data }: GallerySectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null || !data?.images.length) return undefined;

    const showPrevious = () => {
      setActiveIndex((currentIndex) => {
        if (currentIndex === null) return null;
        return currentIndex === 0 ? data.images.length - 1 : currentIndex - 1;
      });
    };

    const showNext = () => {
      setActiveIndex((currentIndex) => {
        if (currentIndex === null) return null;
        return currentIndex === data.images.length - 1 ? 0 : currentIndex + 1;
      });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, data]);

  if (!data?.images.length) return null;

  const showPrevious = () => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) return null;
      return currentIndex === 0 ? data.images.length - 1 : currentIndex - 1;
    });
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) return null;
      return currentIndex === data.images.length - 1 ? 0 : currentIndex + 1;
    });
  };

  const activeImage = activeIndex === null ? null : data.images[activeIndex];

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#c49250]" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c49250] sm:text-sm">{data.subtitle}</p>
            <span className="h-px w-10 bg-[#c49250]" />
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#051024] sm:text-4xl lg:text-5xl">
            {data.title1} <span className="text-[#c49250]">{data.highlightedTitle}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#6b7280] sm:text-base">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.images.map((galleryImage, index) => (
            <button
              key={galleryImage.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${data.openImageLabel} ${index + 1}`}
              className="group relative aspect-[16/9] w-full overflow-hidden rounded-md bg-[#fdfaf6] shadow-[0_6px_20px_rgba(5,16,36,0.08)]"
            >
              <Image
                src={galleryImage.image}
                alt={galleryImage.imageAlt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-[#051024]/0 transition-colors duration-300 group-hover:bg-[#051024]/15" />
            </button>
          ))}
        </div>
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020814]/95 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={activeImage.imageAlt}>
          <button type="button" onClick={() => setActiveIndex(null)} aria-label={data.closeLabel} className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-[#051024] shadow-lg transition-colors duration-300 hover:bg-[#c49250] hover:text-white sm:right-8 sm:top-8">
            <FaTimes />
          </button>

          <button type="button" onClick={showPrevious} aria-label={data.previousLabel} className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#051024] shadow-lg transition-colors duration-300 hover:bg-[#c49250] hover:text-white sm:left-8 sm:h-12 sm:w-12">
            <FaChevronLeft />
          </button>

          <div className="relative h-full max-h-[82vh] w-full max-w-6xl">
            <Image src={activeImage.image} alt={activeImage.imageAlt} fill priority sizes="100vw" className="object-contain" />
          </div>

          <button type="button" onClick={showNext} aria-label={data.nextLabel} className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#051024] shadow-lg transition-colors duration-300 hover:bg-[#c49250] hover:text-white sm:right-8 sm:h-12 sm:w-12">
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};
