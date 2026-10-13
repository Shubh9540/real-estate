import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import { AgentsSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt />;
    default:
      return null;
  }
};

export const AgentsSection = ({ data }: AgentsSectionProps) => {
  if (!data) return null;

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mb-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#c49250]" />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c49250] sm:text-sm">
                {data.subtitle}
              </p>
              <span className="h-px w-10 bg-[#c49250]" />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#051024] sm:text-4xl lg:text-5xl">
              {data.title1} <span className="text-[#c49250]">{data.highlightedTitle}</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#6b7280] sm:text-base">
              {data.description}
            </p>
          </div>

          <Link
            href={data.viewAllUrl}
            className="mt-5 flex items-center justify-center gap-3 text-sm font-bold text-[#c49250] transition-all duration-300 hover:gap-4 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0"
          >
            <span>{data.viewAllText}</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.agents.map((agent) => (
            <article
              key={agent.id}
              className="group overflow-hidden rounded-lg border border-[#eee7dc] bg-white shadow-[0_8px_24px_rgba(5,16,36,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-[#fdfaf6]">
                <Image
                  src={agent.image}
                  alt={agent.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#c49250] px-4 py-2 text-xs font-bold text-white shadow-md">
                  {agent.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-extrabold leading-tight text-[#051024]">{agent.name}</h3>
                <p className="mt-1 text-sm text-[#6b7280]">{agent.role}</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-[#6b7280]">
                  <span className="text-[#c49250]">{renderIcon(agent.locationIcon)}</span>
                  <span>{agent.location}</span>
                </div>

                <div className="mt-4 grid grid-cols-3 divide-x divide-[#eee7dc] border-t border-[#eee7dc] pt-4">
                  {agent.stats.map((stat) => (
                    <div key={stat.id} className="px-2 text-center first:pl-0 last:pr-0">
                      <p className="text-base font-extrabold text-[#051024]">{stat.value}</p>
                      <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#6b7280]">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Link
                    href={agent.profileUrl}
                    className="flex items-center justify-center rounded-md bg-[#c49250] px-3 py-3 text-center text-sm font-bold text-white transition-colors duration-300 hover:bg-[#051024]"
                  >
                    {data.profileText}
                  </Link>
                  <Link
                    href={agent.contactUrl}
                    className="flex items-center justify-center rounded-md border border-[#c49250] px-3 py-3 text-center text-sm font-bold text-[#c49250] transition-colors duration-300 hover:bg-[#c49250] hover:text-white"
                  >
                    {data.contactText}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
