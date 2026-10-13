import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PropertyServiceDetailContentProps } from '@/types/templates.types';

export const PropertyServiceDetailContent = ({ data }: PropertyServiceDetailContentProps) => {
  if (!data || data.secondaryImages.length < 2) return null;

  const { service } = data;

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] lg:px-8">
        <article>
          <div className="relative aspect-[16/8] overflow-hidden rounded-lg bg-[#fdfaf6]">
            <Image src={data.mainImage.image} alt={data.mainImage.imageAlt} fill priority sizes="(min-width: 1024px) 67vw, 100vw" className="object-cover" />
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#c49250]" />
            <p className="text-xs font-bold uppercase tracking-wide text-[#c49250] sm:text-sm">{data.detailSubtitle}</p>
            <span className="h-px w-8 bg-[#c49250]" />
          </div>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[#051024] sm:text-4xl lg:text-5xl">
            {service.detail.title1} <span className="text-[#d98909]">{service.detail.highlightedTitle}</span>
          </h1>
          <p className="mt-4 text-base leading-7 text-[#64748b] sm:text-lg">{service.detail.introduction}</p>

          <h2 className="mt-5 text-xl font-extrabold text-[#051024] sm:text-2xl">{service.detail.overviewTitle}</h2>
          <p className="mt-2 text-base leading-7 text-[#64748b] sm:text-lg">{service.detail.overviewText}</p>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {data.secondaryImages.map((imageItem) => (
              <div key={imageItem.id} className="relative aspect-[16/9] overflow-hidden rounded-lg bg-[#fdfaf6]">
                <Image src={imageItem.image} alt={imageItem.imageAlt} fill sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            {service.detail.closingText.map((paragraph) => (
              <p key={paragraph.id} className="text-base leading-7 text-[#64748b] sm:text-lg">{paragraph.text}</p>
            ))}
          </div>
        </article>

        <aside className="space-y-6">
          <nav className="space-y-2">
            {data.services.map((serviceItem) => (
              <Link
                key={serviceItem.id}
                href={serviceItem.url}
                aria-current={serviceItem.id === service.id ? 'page' : undefined}
                className={serviceItem.id === service.id ? 'block rounded-md bg-[#051f3f] px-5 py-4 font-bold text-white transition-colors duration-300' : 'block rounded-md bg-[#f4f7fa] px-5 py-4 font-semibold text-[#051024] transition-colors duration-300 hover:bg-[#c49250] hover:text-white'}
              >
                {serviceItem.title} {serviceItem.highlightedTitle}
              </Link>
            ))}
          </nav>

          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#fdfaf6]">
            <Image src={data.sidebarImage.image} alt={data.sidebarImage.imageAlt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
          </div>
        </aside>
      </div>
    </section>
  );
};
