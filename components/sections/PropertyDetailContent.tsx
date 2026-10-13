'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight,
  FaBath,
  FaBed,
  FaBuilding,
  FaCalendarAlt,
  FaCamera,
  FaCar,
  FaChair,
  FaCommentDots,
  FaCouch,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaTimes,
  FaUtensils,
} from 'react-icons/fa';
import { PropertyDetailContentProps } from '@/types/templates.types';

const renderFactIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaCouch':
      return <FaCouch />;
    case 'FaBed':
      return <FaBed />;
    case 'FaBath':
      return <FaBath />;
    case 'FaUtensils':
      return <FaUtensils />;
    case 'FaChair':
      return <FaChair />;
    case 'FaBuilding':
      return <FaBuilding />;
    case 'FaCar':
      return <FaCar />;
    case 'FaShieldAlt':
      return <FaShieldAlt />;
    default:
      return null;
  }
};

export const PropertyDetailContent = ({ data }: PropertyDetailContentProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!isGalleryOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsGalleryOpen(false);
      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((current) => (current - 1 + 4) % 4);
      }
      if (event.key === 'ArrowRight') {
        setActiveImageIndex((current) => (current + 1) % 4);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isGalleryOpen]);

  if (!data || data.galleryImages.length < 4) return null;

  const { property, ui, galleryImages } = data;

  const specificationItems = [
    { id: 'detail-property-id', label: ui.detailLabels.propertyId, value: property.id },
    { id: 'detail-location', label: ui.detailLabels.location, value: property.location },
    { id: 'detail-property-type', label: ui.detailLabels.propertyType, value: property.detail.propertyType },
    { id: 'detail-total-area', label: ui.detailLabels.totalArea, value: property.detail.totalArea },
    { id: 'detail-floor', label: ui.detailLabels.floor, value: property.detail.floor },
    { id: 'detail-bedrooms', label: ui.detailLabels.bedrooms, value: property.detail.bedrooms },
    { id: 'detail-bathrooms', label: ui.detailLabels.bathrooms, value: property.detail.bathrooms },
    { id: 'detail-balcony', label: ui.detailLabels.balcony, value: property.detail.balcony },
    { id: 'detail-parking', label: ui.detailLabels.parking, value: property.detail.parking },
    { id: 'detail-year-built', label: ui.detailLabels.yearBuilt, value: property.detail.yearBuilt },
    { id: 'detail-status', label: ui.detailLabels.status, value: property.detail.status },
  ];

  const factItems = [
    { id: 'fact-living-room', label: ui.factLabels.livingRoom, value: property.detail.livingRoom },
    { id: 'fact-bedrooms', label: ui.factLabels.bedrooms, value: property.detail.bedrooms },
    { id: 'fact-bathrooms', label: ui.factLabels.bathrooms, value: property.detail.bathrooms },
    { id: 'fact-kitchen', label: ui.factLabels.kitchen, value: property.detail.kitchen },
    { id: 'fact-dining-area', label: ui.factLabels.diningArea, value: property.detail.diningArea },
    { id: 'fact-balcony', label: ui.factLabels.balcony, value: property.detail.balcony },
    { id: 'fact-parking', label: ui.factLabels.parking, value: property.detail.parking },
    { id: 'fact-security', label: ui.factLabels.security, value: property.detail.security },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  };

  const openGallery = () => {
    setActiveImageIndex(0);
    setIsGalleryOpen(true);
  };

  const showPreviousImage = () => {
    setActiveImageIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNextImage = () => {
    setActiveImageIndex((current) => (current + 1) % galleryImages.length);
  };

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="property-gallery" className="grid gap-1 overflow-hidden rounded-lg bg-[#fdfaf6] lg:grid-cols-5">
          <div className="relative h-72 overflow-hidden sm:h-96 lg:col-span-3 lg:h-full lg:min-h-[30rem]">
            <Image
              src={galleryImages[0].image}
              alt={galleryImages[0].imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-[#c49250] px-4 py-2 text-xs font-bold text-white shadow-md sm:text-sm">
              {property.detail.status}
            </span>
          </div>

          <div className="grid gap-1 lg:col-span-2 lg:grid-rows-2">
            <div className="relative h-56 overflow-hidden lg:h-auto">
              <Image
                src={galleryImages[1].image}
                alt={galleryImages[1].imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="relative h-44 overflow-hidden lg:h-auto">
                <Image
                  src={galleryImages[2].image}
                  alt={galleryImages[2].imageAlt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-44 overflow-hidden lg:h-auto">
                <Image
                  src={galleryImages[3].image}
                  alt={galleryImages[3].imageAlt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={openGallery}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-md bg-[#051024]/85 px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-[#c49250]"
                >
                  <FaCamera />
                  <span>{ui.viewAllPhotosText}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-5 border-b border-[#eee7dc] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#6b7280] sm:text-sm">
                  <span className="rounded-md bg-[#c49250] px-3 py-2 text-white">{ui.featuredLabel}</span>
                  <span className="rounded-md bg-[#fdfaf6] px-3 py-2 text-[#c49250]">{property.detail.category}</span>
                  <span className="inline-flex items-center gap-2">
                    <FaCalendarAlt className="text-[#c49250]" />
                    {property.detail.publishedDate}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FaCommentDots className="text-[#c49250]" />
                    {property.detail.comments}
                  </span>
                </div>

                <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#051024] sm:text-4xl">
                  {property.title}
                </h1>
                <p className="mt-3 flex items-center gap-2 text-sm text-[#6b7280] sm:text-base">
                  <FaMapMarkerAlt className="text-[#c49250]" />
                  <span>{property.location}</span>
                </p>
              </div>

              <div className="shrink-0 sm:text-right">
                <p className="text-2xl font-extrabold text-[#c49250] sm:text-3xl">{property.detail.price}</p>
                <Link
                  href={ui.scheduleButtonUrl}
                  className="mt-4 inline-flex items-center gap-3 rounded-md bg-[#c49250] px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#051024]"
                >
                  <span>{ui.scheduleButtonText}</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            <div className="mt-7">
              <h2 className="text-2xl font-extrabold text-[#051024]">{ui.descriptionTitle}</h2>
              <span className="mt-3 block h-0.5 w-12 bg-[#c49250]" />
              <p className="mt-5 text-sm leading-7 text-[#6b7280] sm:text-base">{property.detail.description}</p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-extrabold text-[#051024]">{ui.detailsTitle}</h2>
              <span className="mt-3 block h-0.5 w-12 bg-[#c49250]" />
              <div className="mt-5 grid grid-cols-1 gap-x-8 rounded-lg bg-[#fdfaf6] p-5 sm:grid-cols-2 sm:p-6">
                {specificationItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-2 gap-4 border-b border-[#e7ded1] py-3 text-sm last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0">
                    <span className="font-medium text-[#6b7280]">{item.label}</span>
                    <span className="font-bold text-[#051024]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-extrabold text-[#051024]">{ui.factsTitle}</h2>
              <span className="mt-3 block h-0.5 w-12 bg-[#c49250]" />
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {factItems.map((fact) => (
                  <div key={fact.id} className="flex items-center gap-4 rounded-lg bg-[#fdfaf6] p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center text-2xl text-[#c49250]">
                      {renderFactIcon(fact.label.icon)}
                    </span>
                    <div>
                      <h3 className="text-sm font-extrabold text-[#051024]">{fact.label.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-[#6b7280]">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <form onSubmit={handleSubmit} className="rounded-lg bg-[#fdfaf6] p-5 shadow-[0_8px_24px_rgba(5,16,36,0.07)] sm:p-6 lg:sticky lg:top-6">
              <h2 className="text-xl font-extrabold text-[#051024]">{ui.form.title}</h2>
              <span className="mt-3 block h-0.5 w-12 bg-[#c49250]" />

              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={ui.form.namePlaceholder}
                  className="w-full rounded-md border border-[#e7ded1] bg-white px-4 py-3 text-sm text-[#051024] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#c49250]"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={ui.form.emailPlaceholder}
                  className="w-full rounded-md border border-[#e7ded1] bg-white px-4 py-3 text-sm text-[#051024] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#c49250]"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder={ui.form.phonePlaceholder}
                  className="w-full rounded-md border border-[#e7ded1] bg-white px-4 py-3 text-sm text-[#051024] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#c49250]"
                />
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder={ui.form.messagePlaceholder}
                  className="w-full resize-none rounded-md border border-[#e7ded1] bg-white px-4 py-3 text-sm text-[#051024] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#c49250]"
                />
              </div>

              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-3 rounded-md bg-[#c49250] px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#051024]"
              >
                <span>{ui.form.buttonText}</span>
                <FaArrowRight className="text-xs" />
              </button>

              {submitted && (
                <p className="mt-4 rounded-md bg-white px-4 py-3 text-sm font-medium leading-6 text-[#051024]">
                  {ui.form.successMessage}
                </p>
              )}
            </form>
          </aside>
        </div>
      </div>

      {isGalleryOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#051024]/95 p-4 sm:p-8">
          <div className="relative h-full w-full max-w-6xl">
            <Image
              src={galleryImages[activeImageIndex].image}
              alt={galleryImages[activeImageIndex].imageAlt}
              fill
              sizes="100vw"
              className="object-contain"
            />

            <button
              type="button"
              onClick={() => setIsGalleryOpen(false)}
              aria-label={ui.closeGalleryLabel}
              className="absolute right-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg text-[#051024] shadow-lg transition-colors hover:bg-[#c49250] hover:text-white"
            >
              <FaTimes />
            </button>

            <button
              type="button"
              onClick={showPreviousImage}
              aria-label={ui.previousPhotoLabel}
              className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#c49250] shadow-lg transition-colors hover:bg-[#c49250] hover:text-white"
            >
              <FaArrowRight className="rotate-180" />
            </button>

            <button
              type="button"
              onClick={showNextImage}
              aria-label={ui.nextPhotoLabel}
              className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#c49250] shadow-lg transition-colors hover:bg-[#c49250] hover:text-white"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
