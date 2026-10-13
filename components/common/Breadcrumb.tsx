import React from 'react';
import Link from 'next/link';
import { BreadcrumbProps } from '@/types/templates.types';

export const Breadcrumb = ({ data }: BreadcrumbProps) => {
  if (!data) return null;

  return (
    <section
      className="relative flex min-h-56 w-full items-center overflow-hidden bg-[#051024] bg-cover bg-center py-8 md:min-h-72"
      style={data.bgImage ? { backgroundImage: `url('${data.bgImage}')` } : undefined}
    >
      {data.bgImage && <div className="absolute inset-0 bg-[#051024]/60" />}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-left sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-white/90 md:text-base">
          {data.paths.map((path, index) => (
            <React.Fragment key={path.id}>
              {path.url ? (
                <Link href={path.url} className="transition-colors hover:text-[#ddaf6a]">
                  {path.label}
                </Link>
              ) : (
                <span>{path.label}</span>
              )}
              {index < data.paths.length - 1 && (
                <span className="text-[#ddaf6a]">/</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {data.title}
        </h1>
      </div>
    </section>
  );
};
