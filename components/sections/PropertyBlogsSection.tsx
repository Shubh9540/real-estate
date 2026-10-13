import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { PropertyBlogsSectionProps } from '@/types/templates.types';

export const PropertyBlogsSection = ({ data }: PropertyBlogsSectionProps) => {
  if (!data?.posts.length) return null;

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mb-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-[#c49250]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c49250] sm:text-sm">{data.subtitle}</p>
              <span className="h-px w-8 bg-[#c49250]" />
            </div>
            <h2 className="text-3xl font-extrabold leading-tight text-[#051024] sm:text-4xl lg:text-5xl">
              {data.title1} <span className="text-[#c49250]">{data.highlightedTitle}</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#6b7280] sm:text-base">{data.description}</p>
          </div>
          <Link href={data.viewAllUrl} className="mx-auto mt-5 flex w-fit items-center gap-3 rounded-md border border-[#c49250] px-6 py-3 text-sm font-bold text-[#c49250] transition-colors duration-300 hover:bg-[#c49250] hover:text-white lg:absolute lg:bottom-0 lg:right-0 lg:mt-0">
            <span>{data.viewAllText}</span><FaArrowRight className="text-xs" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.posts.slice(0, 3).map((post) => {
            const [dateDay, dateMonth, dateYear] = post.date.split(' ');

            return (
              <article key={post.id} className="group flex h-full flex-col overflow-hidden rounded-md border border-[#eee7dc] bg-white shadow-[0_8px_24px_rgba(5,16,36,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#c49250] px-4 py-2 text-xs font-bold text-white shadow-md">{post.category}</span>
                  <div className="absolute bottom-0 right-3 flex min-w-16 flex-col items-center rounded-t-md bg-white px-3 py-2 text-[#051024] shadow-lg">
                    <span className="text-xl font-extrabold leading-none">{dateDay}</span>
                    <span className="mt-1 text-xs font-bold uppercase text-[#6b7280]">{dateMonth}</span>
                    <span className="text-xs font-semibold text-[#6b7280]">{dateYear}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <Link href={post.url}><h3 className="text-xl font-extrabold leading-tight text-[#051024] transition-colors duration-300 group-hover:text-[#c49250]">{post.title}</h3></Link>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#6b7280]">{post.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#eee7dc] pt-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-[#eee7dc]"><Image src={post.author.image} alt={post.author.imageAlt} fill sizes="44px" className="object-cover object-top" /></div>
                      <div className="min-w-0"><p className="truncate text-sm font-bold text-[#051024]"><span className="font-normal text-[#6b7280]">{data.authorPrefix} </span>{post.author.name}</p><p className="truncate text-xs text-[#6b7280]">{post.author.role}</p></div>
                    </div>
                    <Link href={post.url} className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#c49250] transition-all duration-300 hover:gap-3"><span>{data.readMoreText}</span><FaArrowRight className="text-xs" /></Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
