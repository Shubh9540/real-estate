import React from 'react';
import { FaHandshake, FaHeadset, FaHome, FaHandHoldingUsd } from 'react-icons/fa';
import { WhyChooseUsSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaHome':
      return <FaHome />;
    case 'FaHandshake':
      return <FaHandshake />;
    case 'FaHandHoldingUsd':
      return <FaHandHoldingUsd />;
    case 'FaHeadset':
      return <FaHeadset />;
    default:
      return null;
  }
};

export const WhyChooseUsSection = ({ data }: WhyChooseUsSectionProps) => {
  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch lg:min-h-[24rem] lg:grid-cols-12">
          <div className="relative z-10 flex flex-col justify-center py-2 lg:col-span-5 lg:py-10">
            <div className="mb-4 flex items-center gap-4">
              <span className="h-0.5 w-10 bg-[#c49250]" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c49250] sm:text-sm">
                {data.subtitle}
              </p>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#051024] sm:text-4xl lg:text-5xl">
              <span className="block">{data.title1}</span>
              <span className="block text-[#c49250]">{data.title2}</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6b7280] sm:text-base">
              {data.description}
            </p>
          </div>

          <div className="relative mt-7 h-72 overflow-hidden lg:col-span-7 lg:mt-0 lg:h-auto lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
            <img src={data.imageMain} alt={data.imageAlt} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="relative z-20 mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:-mt-20 lg:grid-cols-4 lg:gap-5">
          {data.features.map((feature) => (
            <article key={feature.id} className="flex h-full flex-col rounded-lg border border-[#eee7dc] bg-white p-6 shadow-[0_10px_28px_rgba(5,16,36,0.08)]">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#e7ded1] border-l-[#c49250] border-t-[#c49250] bg-[#fdfaf6] text-2xl text-[#051024]">
                {renderIcon(feature.icon)}
              </span>
              <h3 className="mt-4 text-lg font-extrabold leading-6 text-[#051024]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6b7280]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
