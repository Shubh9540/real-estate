import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { HeroButtonData, HeroSectionProps } from '@/types/templates.types';

const renderButtonIcon = (button: HeroButtonData) => {
  switch (button.icon) {
    case 'FaArrowRight':
      return <FaArrowRight className="text-xs" />;
    default:
      return null;
  }
};

export const HeroSection = ({ data }: HeroSectionProps) => {
  if (!data) return null;

  return (
    <section className="relative flex min-h-[30rem] w-full items-center overflow-hidden bg-[#051024] lg:min-h-[30rem] xl:min-h-[32rem]">
      <img
        src={data.image}
        alt={data.imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#051024]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#051024]/95 via-[#051024]/55 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 lg:px-8 lg:py-12">
        <div className="max-w-xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-0.5 w-11 bg-[#c49250]" />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white sm:text-sm">
              {data.eyebrow}
            </p>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">{data.titleLine1}</span>
            <span className="block text-[#ddaf6a]">{data.highlightedTitle}</span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-white/85 sm:text-base">
            {data.description}
          </p>

          <Link
            href={data.primaryButton.url}
            className="mt-7 inline-flex w-full items-center justify-center gap-4 rounded-full bg-[#c49250] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(196,146,80,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ddaf6a] sm:w-auto"
          >
            {data.primaryButton.text}
            {renderButtonIcon(data.primaryButton)}
          </Link>
        </div>
      </div>
    </section>
  );
};
