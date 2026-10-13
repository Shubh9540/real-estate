'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaChevronDown,
  FaEnvelope,
  FaHome,
  FaPhoneAlt,
  FaRegCommentDots,
  FaUser,
} from 'react-icons/fa';
import { BookVisitSectionProps } from '@/types/templates.types';

export const BookVisitSection = ({ data }: BookVisitSectionProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="mx-auto max-w-[1250px] px-4 md:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-[#fdfaf6] shadow-[0_14px_45px_rgba(5,16,36,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.15fr]">
            <div className="order-2 px-5 py-8 md:px-8 lg:order-1 lg:px-10 lg:py-10">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c49250]" />
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#c49250]">{data.eyebrow}</p>
              </div>

              <h1 className="text-2xl font-extrabold leading-tight text-[#051024] md:text-3xl lg:text-4xl">
                {data.title1} <span className="text-[#c49250]">{data.highlightedTitle}</span> {data.title2}
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#6b7280]">{data.description}</p>

              <form
                className="mt-6 space-y-3"
                onChange={() => setSubmitted(false)}
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                  event.currentTarget.reset();
                }}
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label className="relative block">
                    <span className="sr-only">{data.form.fullNamePlaceholder}</span>
                    <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#758198]" />
                    <input name="fullName" type="text" required placeholder={data.form.fullNamePlaceholder} className="w-full rounded-md border border-[#d8dde6] bg-white py-3 pl-11 pr-4 text-sm text-[#051024] outline-none transition placeholder:text-[#758198] focus:border-[#c49250] focus:ring-2 focus:ring-[#c49250]/15" />
                  </label>

                  <label className="relative block">
                    <span className="sr-only">{data.form.emailPlaceholder}</span>
                    <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#758198]" />
                    <input name="email" type="email" required placeholder={data.form.emailPlaceholder} className="w-full rounded-md border border-[#d8dde6] bg-white py-3 pl-11 pr-4 text-sm text-[#051024] outline-none transition placeholder:text-[#758198] focus:border-[#c49250] focus:ring-2 focus:ring-[#c49250]/15" />
                  </label>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label className="relative block">
                    <span className="sr-only">{data.form.phonePlaceholder}</span>
                    <FaPhoneAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#758198]" />
                    <input name="phone" type="tel" required placeholder={data.form.phonePlaceholder} className="w-full rounded-md border border-[#d8dde6] bg-white py-3 pl-11 pr-4 text-sm text-[#051024] outline-none transition placeholder:text-[#758198] focus:border-[#c49250] focus:ring-2 focus:ring-[#c49250]/15" />
                  </label>

                  <label className="relative block">
                    <span className="sr-only">{data.form.datePlaceholder}</span>
                    <FaCalendarAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#758198]" />
                    <input
                      name="preferredDate"
                      type="text"
                      required
                      placeholder={data.form.datePlaceholder}
                      onFocus={(event) => { event.currentTarget.type = 'date'; }}
                      onBlur={(event) => { if (!event.currentTarget.value) event.currentTarget.type = 'text'; }}
                      className="w-full rounded-md border border-[#d8dde6] bg-white py-3 pl-11 pr-4 text-sm text-[#051024] outline-none transition placeholder:text-[#758198] focus:border-[#c49250] focus:ring-2 focus:ring-[#c49250]/15"
                    />
                  </label>
                </div>

                <label className="relative block">
                  <span className="sr-only">{data.form.propertyPlaceholder}</span>
                  <FaHome className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#758198]" />
                  <select name="property" required defaultValue="" className="w-full appearance-none rounded-md border border-[#d8dde6] bg-white py-3 pl-11 pr-10 text-sm text-[#758198] outline-none transition focus:border-[#c49250] focus:ring-2 focus:ring-[#c49250]/15">
                    <option value="" disabled>{data.form.propertyPlaceholder}</option>
                    {data.form.properties.map((property) => (
                      <option key={property.id} value={property.value}>{property.label}</option>
                    ))}
                  </select>
                  <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#758198]" />
                </label>

                <label className="relative block">
                  <span className="sr-only">{data.form.messagePlaceholder}</span>
                  <FaRegCommentDots className="pointer-events-none absolute left-4 top-4 text-sm text-[#758198]" />
                  <textarea name="message" rows={3} placeholder={data.form.messagePlaceholder} className="w-full resize-none rounded-md border border-[#d8dde6] bg-white py-3 pl-11 pr-4 text-sm text-[#051024] outline-none transition placeholder:text-[#758198] focus:border-[#c49250] focus:ring-2 focus:ring-[#c49250]/15" />
                </label>

                <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-md bg-gradient-to-r from-[#c49250] to-[#ddaf6a] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(196,146,80,0.24)] transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#c49250] focus:ring-offset-2 sm:w-auto sm:min-w-[220px]">
                  {data.form.buttonText}
                  <FaArrowRight />
                </button>

                {submitted && (
                  <p role="status" className="rounded-md border border-[#cde4d5] bg-[#f0faf3] px-4 py-3 text-sm font-semibold text-[#23733f]">
                    {data.form.successMessage}
                  </p>
                )}
              </form>
            </div>

            <div className="relative order-1 min-h-[300px] sm:min-h-[380px] lg:order-2 lg:min-h-full">
              <Image src={data.image} alt={data.imageAlt} fill sizes="(max-width: 1023px) 100vw, 55vw" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
