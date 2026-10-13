'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from 'react-icons/fa';
import { TestimonialsSectionProps } from '@/types/templates.types';

export const TestimonialSection = ({ data }: TestimonialsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!data?.testimonials.length) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % data.testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [data]);

  if (!data?.testimonials.length) return null;

  const total = data.testimonials.length;
  const visibleTestimonials = [
    data.testimonials[(activeIndex - 1 + total) % total],
    data.testimonials[activeIndex],
    data.testimonials[(activeIndex + 1) % total],
  ];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#fdfaf6] py-8 lg:py-12">
      <Image
        src={data.backgroundImage}
        alt={data.backgroundImageAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-white/85" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[#c49250]" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#c49250] sm:text-sm">{data.subtitle}</span>
            <span className="h-px w-8 bg-[#c49250]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#051024] sm:text-4xl lg:text-5xl">
            {data.title1}{' '}
            <span className="text-[#c49250]">{data.title2}</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#6b7280] sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl py-5 md:py-8">
          <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-3 md:gap-0">
            {visibleTestimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.id}-${activeIndex}`}
                className={`${index !== 1 ? 'hidden md:flex' : 'flex'} relative h-80 flex-col items-center rounded-xl border px-6 pb-7 pt-16 text-center shadow-[0_10px_30px_rgba(5,16,36,0.10)] transition-all duration-700 ease-in-out ${index === 1 ? 'z-10 border-[#c49250]/30 bg-[#051024] text-white md:scale-110' : 'border-[#eee7dc] bg-white/95 text-[#6b7280] md:opacity-75'}`}
              >
                <div className={`absolute -top-10 h-20 w-20 overflow-hidden rounded-full border-4 shadow-md ${index === 1 ? 'border-white bg-[#fdfaf6]' : 'border-[#eee7dc] bg-white'}`}>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </div>

                <span className={`absolute left-1/2 top-7 ml-7 flex h-8 w-8 items-center justify-center rounded-full text-sm shadow-md ${index === 1 ? 'bg-white text-[#c49250]' : 'bg-[#c49250] text-white'}`}>
                  <FaQuoteRight />
                </span>

                <h3 className={`text-lg font-extrabold ${index === 1 ? 'text-white' : 'text-[#051024]'}`}>
                  {testimonial.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#c49250]">{testimonial.location}</p>

                <span className={`my-5 h-px w-10 ${index === 1 ? 'bg-[#c49250]' : 'bg-[#ded6cb]'}`} />

                <p className={`text-sm leading-6 sm:text-base ${index === 1 ? 'text-[#e5e7eb]' : 'text-[#6b7280]'}`}>
                  {testimonial.quote}
                </p>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={showPrevious}
            aria-label={data.previousLabel}
            className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#eee7dc] bg-white text-[#c49250] shadow-lg transition-colors duration-300 hover:bg-[#051024] hover:text-white md:-left-2"
          >
            <FaArrowLeft />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label={data.nextLabel}
            className="absolute right-2 top-1/2 z-20 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#eee7dc] bg-white text-[#c49250] shadow-lg transition-colors duration-300 hover:bg-[#051024] hover:text-white md:-right-2"
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-3 md:mt-6">
          {data.testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${data.slideLabel} ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-7 bg-[#c49250]' : 'w-2.5 bg-[#cbd1d9]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
