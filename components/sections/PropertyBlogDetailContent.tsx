import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaChevronRight, FaClock, FaQuoteLeft, FaUser } from 'react-icons/fa';
import { PropertyBlogDetailContentProps } from '@/types/templates.types';

export const PropertyBlogDetailContent = ({ data }: PropertyBlogDetailContentProps) => {
  if (!data) return null;

  const { post } = data;

  return (
    <section className="w-full bg-[#fdfaf6] py-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,0.9fr)] lg:px-8">
        <article className="rounded-lg bg-white p-5 shadow-[0_8px_24px_rgba(5,16,36,0.06)] sm:p-6">
          <span className="inline-flex rounded-md bg-[#d98909] px-4 py-2 text-xs font-bold text-white">{post.category}</span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#051024] sm:text-4xl">{post.title}</h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#64748b]">
            <span className="flex items-center gap-2"><FaUser className="text-[#c49250]" />{data.data.authorPrefix} {post.author.name}</span>
            <span className="flex items-center gap-2"><FaCalendarAlt className="text-[#c49250]" />{post.date}</span>
            <span className="flex items-center gap-2"><FaClock className="text-[#c49250]" />{post.detail.readTime}</span>
          </div>

          <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-lg bg-[#fdfaf6]">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 1024px) 67vw, 100vw" className="object-cover" />
          </div>

          <p className="mt-6 text-base leading-7 text-[#64748b]">{post.detail.introText}</p>
          {post.detail.sections.map((section) => (
            <div key={section.id} className="mt-6">
              <h2 className="text-xl font-extrabold text-[#051024] sm:text-2xl">{section.title}</h2>
              <p className="mt-2 text-base leading-7 text-[#64748b]">{section.text}</p>
            </div>
          ))}

          <blockquote className="mt-6 flex items-start gap-4 rounded-r-lg border-l-4 border-[#d98909] bg-[#fdf5e8] p-5 sm:p-6">
            <FaQuoteLeft className="mt-1 shrink-0 text-2xl text-[#d98909]" />
            <p className="text-base font-semibold italic leading-7 text-[#52627a] sm:text-lg">{post.detail.quote}</p>
          </blockquote>

          <p className="mt-6 text-base leading-7 text-[#64748b]">{post.detail.closingText}</p>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-6">
          <div className="rounded-lg bg-white p-5 shadow-[0_8px_24px_rgba(5,16,36,0.06)]">
            <h2 className="text-xl font-extrabold text-[#051024]">{data.data.categoriesTitle}</h2>
            <div className="mt-4 divide-y divide-[#eee7dc]">
              {data.data.categories.map((category) => (
                <Link key={category.id} href={category.url} className="flex items-center justify-between gap-4 py-4 text-sm text-[#64748b] transition-colors hover:text-[#c49250]">
                  <span className="flex items-center gap-3"><FaChevronRight className="text-xs text-[#051024]" />{category.label}</span>
                  <span>{category.count}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-white p-5 shadow-[0_8px_24px_rgba(5,16,36,0.06)]">
            <h2 className="text-xl font-extrabold text-[#051024]">{data.data.featuredListingsTitle}</h2>
            <div className="mt-4 space-y-5">
              {data.data.featuredListings.map((listing) => (
                <Link key={listing.id} href={listing.url} className="group flex gap-4">
                  <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-md bg-[#fdfaf6]"><Image src={listing.image} alt={listing.imageAlt} fill sizes="112px" className="object-cover transition-transform duration-300 group-hover:scale-105" /></div>
                  <div className="min-w-0"><h3 className="font-extrabold leading-5 text-[#051024] transition-colors group-hover:text-[#c49250]">{listing.title}</h3><p className="mt-2 font-bold text-[#e05a47]">{listing.price}</p><p className="mt-1 text-xs leading-5 text-[#64748b]">{listing.details}</p></div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
