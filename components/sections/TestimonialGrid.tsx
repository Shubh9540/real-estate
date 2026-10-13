import React from 'react';
import Image from 'next/image';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import { TestimonialGridProps } from '@/types/templates.types';

export const TestimonialGrid = ({ data }: TestimonialGridProps) => {
  if (!data) return null;

  return (
    <section className="w-full bg-[#f8faff] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-0.5 w-8 bg-[#8bbcff]" />
            <span className="text-sm font-bold text-[#0b6cf0]">{data.subtitle}</span>
            <span className="h-0.5 w-8 bg-[#8bbcff]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-[#061a3a] sm:text-4xl lg:text-5xl">
            {data.title1} <span className="text-[#0b6cf0]">{data.title2}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#64748b] sm:text-base">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {data.testimonials.map((testimonial) => (
            <article key={testimonial.id} className="flex min-h-56 flex-col rounded-md border border-[#dfe8f5] bg-white shadow-sm">
              <div className="flex flex-1 flex-col px-5 pb-4 pt-5 sm:px-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex gap-1 text-[#ff9d00]">
                    {Array.from({ length: testimonial.rating }, (_, starIndex) => (
                      <FaStar key={`${testimonial.id}-star-${starIndex}`} className="text-sm" />
                    ))}
                  </div>
                  <div className="flex h-10 w-11 items-center justify-center rounded-md bg-[#edf4ff] text-xl text-[#0b6cf0]">
                    <FaQuoteRight />
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-[#596f96]">{testimonial.quote}</p>
              </div>

              <div className="relative border-t border-[#8bbcff] px-5 py-4 sm:px-6">
                <span className="absolute -top-2 left-4/5 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-[#8bbcff] bg-white" />
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-[#8bbcff] bg-[#edf4ff]">
                    <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="48px" className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#061a3a] sm:text-base">{testimonial.name}</h3>
                    <p className="mt-0.5 text-xs text-[#64748b] sm:text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
