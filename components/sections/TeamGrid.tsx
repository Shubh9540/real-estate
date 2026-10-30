'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaHome, FaMapMarkerAlt, FaUserFriends } from 'react-icons/fa';
import { TeamGridProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaHome':
      return <FaHome />;
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt />;
    case 'FaUserFriends':
      return <FaUserFriends />;
    default:
      return null;
  }
};

export const TeamGrid = ({ data }: TeamGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const allTeam = useMemo(
    () => (data ? [...data.team, ...data.additionalTeam] : []),
    [data],
  );

  if (!data || !allTeam.length || !data.pagination.length) return null;

  const startIndex = (currentPage - 1) * data.itemsPerPage;
  const visibleTeam = allTeam.slice(startIndex, startIndex + data.itemsPerPage);

  return (
    <section className="w-full bg-[#fdfaf6] py-8 lg:py-12">
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
            {data.title1} <span className="text-[#c49250]">{data.highlightedTitle}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#6b7280] sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleTeam.map((member) => (
            <article key={member.id} className="group overflow-hidden rounded-lg border border-[#eee7dc] bg-white shadow-[0_8px_24px_rgba(5,16,36,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-64 overflow-hidden bg-[#fdfaf6]">
                <Image src={member.image} alt={member.imageAlt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#051024] shadow-md">
                  {member.category}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-extrabold leading-tight text-[#051024]">{member.name}</h3>
                <p className="mt-1 text-sm text-[#6b7280]">{member.role}</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-[#6b7280]">
                  <span className="text-[#c49250]">{renderIcon(member.locationIcon)}</span>
                  <span>{member.location}</span>
                </div>

                <div className="mt-4 grid grid-cols-3 divide-x divide-[#eee7dc] border-t border-[#eee7dc] pt-4">
                  {member.stats.map((stat) => (
                    <div key={stat.id} className="min-w-0 px-2 text-center first:pl-0 last:pr-0">
                      <div className="flex items-center justify-center gap-2 text-[#c49250]">
                        {renderIcon(stat.icon)}
                        <span className="text-base font-extrabold text-[#051024]">{stat.value}</span>
                      </div>
                      <p className="mt-1 text-[10px] font-semibold leading-4 text-[#6b7280]">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Link href={member.profileUrl} className="flex items-center justify-center rounded-md bg-[#c49250] px-3 py-3 text-center text-sm font-bold text-white transition-colors duration-300 hover:bg-[#051024]">
                    {data.profileText}
                  </Link>
                  <Link href={member.contactUrl} className="flex items-center justify-center gap-2 rounded-md border border-[#c49250] px-3 py-3 text-center text-sm font-bold text-[#c49250] transition-colors duration-300 hover:bg-[#c49250] hover:text-white">
                    <span>{data.contactText}</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <nav className="mt-8 flex items-center justify-center gap-3" aria-label={data.paginationLabel}>
          {data.pagination.map((pageItem) => (
            <button
              key={pageItem.id}
              type="button"
              onClick={() => setCurrentPage(pageItem.page)}
              aria-label={`${data.paginationLabel} ${pageItem.label}`}
              aria-current={currentPage === pageItem.page ? 'page' : undefined}
              className={currentPage === pageItem.page ? 'flex h-11 w-11 items-center justify-center rounded-md border border-[#c49250] bg-[#c49250] text-sm font-bold text-white transition-colors duration-300' : 'flex h-11 w-11 items-center justify-center rounded-md border border-[#e7ded1] bg-white text-sm font-bold text-[#051024] transition-colors duration-300 hover:border-[#c49250] hover:text-[#c49250]'}
            >
              {pageItem.label}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
};
