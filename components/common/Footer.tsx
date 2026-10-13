import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FooterProps } from '@/types/templates.types';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF':
      return <FaFacebookF />;
    case 'FaXTwitter':
      return <FaXTwitter />;
    case 'FaLinkedinIn':
      return <FaLinkedinIn />;
    case 'FaInstagram':
      return <FaInstagram />;
    case 'FaYoutube':
      return <FaYoutube />;
    default:
      return null;
  }
};

const renderContactIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt />;
    case 'FaPhoneAlt':
      return <FaPhoneAlt />;
    case 'FaEnvelope':
      return <FaEnvelope />;
    default:
      return null;
  }
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  return (
    <footer className="relative w-full overflow-hidden bg-[#051024] text-white">
      <div className="absolute inset-y-0 right-0 w-full lg:w-3/5">
        <Image
          src={data.backgroundImage}
          alt={data.backgroundImageAlt}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-right opacity-60"
        />
      </div>
      <div className="absolute inset-0 bg-[#051024]/70 lg:bg-gradient-to-r lg:from-[#051024] lg:via-[#051024]/90 lg:to-[#051024]/50" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:px-8 lg:py-12">
        <div className="lg:pr-10">
          <Link href={data.logoUrl} className="inline-block" aria-label={data.logoAlt}>
            <Image
              src={data.logo}
              alt={data.logoAlt}
              width={320}
              height={100}
              className="h-auto w-56 brightness-0 invert"
            />
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-7 text-white/80">
            {data.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {data.socialLinks.map((social) => (
              <Link
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c49250] text-sm text-white transition-colors duration-300 hover:bg-[#c49250]"
              >
                {renderSocialIcon(social.icon)}
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:border-l lg:border-[#2d5a7c]/60 lg:px-10">
          <h2 className="text-xl font-bold">{data.quickLinksTitle}</h2>
          <span className="mt-3 block h-0.5 w-10 bg-[#c49250]" />
          <ul className="mt-6 space-y-4">
            {data.quickLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.url} className="flex items-center justify-between gap-4 text-sm text-white/80 transition-colors hover:text-[#ddaf6a]">
                  <span>{link.label}</span>
                  <FaArrowRight className="shrink-0 text-xs text-[#c49250]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:border-l lg:border-[#2d5a7c]/60 lg:px-10">
          <h2 className="text-xl font-bold">{data.contactTitle}</h2>
          <span className="mt-3 block h-0.5 w-10 bg-[#c49250]" />
          <ul className="mt-6 space-y-5">
            {data.contactItems.map((item) => (
              <li key={item.id} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c49250] text-base text-[#ddaf6a]">
                  {renderContactIcon(item.icon)}
                </span>
                <div className="pt-0.5">
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  {item.url ? (
                    <Link href={item.url} className="mt-1 block text-sm leading-5 text-white/75 transition-colors hover:text-[#ddaf6a]">
                      {item.value}
                    </Link>
                  ) : (
                    <p className="mt-1 text-sm leading-5 text-white/75">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:border-l lg:border-[#2d5a7c]/60 lg:pl-10">
          <h2 className="text-xl font-bold">{data.companyTitle}</h2>
          <span className="mt-3 block h-0.5 w-10 bg-[#c49250]" />
          <ul className="mt-6 space-y-4">
            {data.companyLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.url} className="flex items-center justify-between gap-4 text-sm text-white/80 transition-colors hover:text-[#ddaf6a]">
                  <span>{link.label}</span>
                  <FaArrowRight className="shrink-0 text-xs text-[#c49250]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t-2 border-[#c49250]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-4 px-4 py-6 text-center sm:px-6 lg:px-8">
          <span className="hidden h-px w-10 bg-[#c49250] sm:block" />
          <p className="text-xs text-white/80 sm:text-sm">{data.copyrightText}</p>
          <span className="hidden h-px w-10 bg-[#c49250] sm:block" />
        </div>
      </div>
    </footer>
  );
};
