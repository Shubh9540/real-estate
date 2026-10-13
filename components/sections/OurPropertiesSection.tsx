'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowLeft,
  FaArrowRight,
  FaBed,
  FaBuilding,
  FaHome,
  FaMapMarkerAlt,
  FaRegSquare,
} from 'react-icons/fa';
import { OurPropertiesSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaHome':
      return <FaHome />;
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt />;
    case 'FaBed':
      return <FaBed />;
    case 'FaRegSquare':
      return <FaRegSquare />;
    case 'FaBuilding':
      return <FaBuilding />;
    default:
      return null;
  }
};

export const OurPropertiesSection = ({ data }: OurPropertiesSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!data?.properties.length) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % data.properties.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [data]);

  if (!data?.properties.length) return null;

  const total = data.properties.length;
  const visibleProperties = [0, 1, 2].map(
    (offset) => data.properties[(activeIndex + offset) % total],
  );

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#fdfaf6] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[#c49250]" />
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c49250] sm:text-sm">
              {data.subtitle}
            </p>
            <span className="h-px w-8 bg-[#c49250]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#051024] sm:text-4xl lg:text-5xl">
            {data.title1} <span className="text-[#c49250]">{data.title2}</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#6b7280] sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleProperties.map((property, index) => (
              <article
                key={`${property.id}-${activeIndex}`}
                className={`group overflow-hidden rounded-md border border-[#eee7dc] bg-white shadow-[0_8px_24px_rgba(5,16,36,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${index === 1 ? 'hidden md:block' : ''} ${index === 2 ? 'hidden lg:block' : ''}`}
              >
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <Image
                    src={property.image}
                    alt={property.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#051024] shadow-md sm:text-sm">
                    <span className="text-[#c49250]">{renderIcon(property.propertyCountIcon)}</span>
                    <span>{property.propertyCount}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-sm text-[#6b7280]">
                    <span className="text-[#c49250]">{renderIcon(property.locationIcon)}</span>
                    <span>{property.location}</span>
                  </div>

                  <h3 className="mt-2 text-xl font-extrabold text-[#051024]">{property.title}</h3>

                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-[#eee7dc] pb-5">
                    {property.features.map((feature) => (
                      <div key={feature.id} className="flex items-center gap-2 text-sm text-[#6b7280]">
                        <span className="text-base text-[#051024]">{renderIcon(feature.icon)}</span>
                        <span>{feature.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={property.url}
                    className="mt-5 inline-flex items-center gap-3 text-sm font-bold text-[#c49250] transition-all duration-300 hover:gap-4"
                  >
                    <span>{data.viewText}</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={showPrevious}
            aria-label={data.previousLabel}
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#eee7dc] bg-white text-[#c49250] shadow-lg transition-colors duration-300 hover:bg-[#051024] hover:text-white sm:left-0 lg:-left-10"
          >
            <FaArrowLeft />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label={data.nextLabel}
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#eee7dc] bg-white text-[#c49250] shadow-lg transition-colors duration-300 hover:bg-[#051024] hover:text-white sm:right-0 lg:-right-10"
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {data.properties.map((property, index) => (
            <button
              key={property.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${data.slideLabel} ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-7 bg-[#c49250]' : 'w-2.5 bg-[#ded6cb]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
