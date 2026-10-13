import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaHandshake, FaHome, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';
import { AboutUsSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaHome':
      return <FaHome />;
    case 'FaHandshake':
      return <FaHandshake />;
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt />;
    case 'FaShieldAlt':
      return <FaShieldAlt />;
    default:
      return null;
  }
};

export const AboutUsSection = ({ data, hideButton = false }: AboutUsSectionProps) => {
  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 lg:py-12">
      <div className="absolute right-0 top-0 hidden h-2/3 w-[30%] bg-[#132848] lg:block" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-5">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-0.5 w-10 bg-[#c49250]" />
            <p className="text-sm font-semibold text-[#c49250]">{data.subtitle}</p>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#051024] sm:text-4xl lg:text-5xl">
            <span className="block">{data.titleLine1}</span>
            <span className="block">{data.titleLine2}</span>
            <span className="block text-[#c49250]">{data.highlightedTitle}</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#6b7280] sm:text-base">
            {data.description}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {data.features.map((feature) => (
              <div key={feature.id} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fdfaf6] text-xl text-[#c49250] ring-1 ring-[#e7ded1]">
                  {renderIcon(feature.icon)}
                </span>
                <span className="max-w-36 text-sm font-semibold leading-5 text-[#051024] sm:text-base">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>

          {!hideButton && (
            <Link
              href={data.button.url}
              className="mt-7 inline-flex w-full items-center justify-center gap-5 rounded-md bg-[#c49250] px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(196,146,80,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ddaf6a] sm:w-auto"
            >
              {data.button.text}
              <FaArrowRight className="text-sm" />
            </Link>
          )}
        </div>

        <div className="relative h-[28rem] w-full sm:h-[34rem] lg:col-span-7 lg:h-[36rem]">
          <span className="absolute left-[17%] top-0 h-[86%] w-[61%] rounded-md border border-[#c49250]/70" />
          <span className="absolute bottom-0 right-[7%] h-[45%] w-[42%] rounded-md border border-[#c49250]/70" />

          <div className="absolute right-[4%] top-5 h-[78%] w-[78%] overflow-hidden rounded-lg border-4 border-white bg-white shadow-xl">
            <img src={data.imageMain} alt={data.imageMainAlt} className="h-full w-full object-cover" />
          </div>

          <div className="absolute bottom-[8%] left-[2%] z-20 h-[42%] w-[34%] overflow-hidden rounded-lg border-4 border-white bg-white shadow-xl">
            <img src={data.imageSecondaryLeft} alt={data.imageSecondaryLeftAlt} className="h-full w-full object-cover" />
          </div>

          <div className="absolute bottom-[2%] right-0 z-20 h-[40%] w-[29%] overflow-hidden rounded-lg border-4 border-white bg-white shadow-xl">
            <img src={data.imageSecondaryRight} alt={data.imageSecondaryRightAlt} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
