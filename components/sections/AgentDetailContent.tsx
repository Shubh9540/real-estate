import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight,
  FaBriefcase,
  FaFacebookF,
  FaFileContract,
  FaHandshake,
  FaHome,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { AgentDetailContentProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaBriefcase': return <FaBriefcase />;
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaFileContract': return <FaFileContract />;
    case 'FaHandshake': return <FaHandshake />;
    case 'FaHome': return <FaHome />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaXTwitter': return <FaXTwitter />;
    default: return null;
  }
};

export const AgentDetailContent = ({ data }: AgentDetailContentProps) => {
  if (!data) return null;

  const { agent, ui } = data;

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#051024] sm:text-4xl lg:text-5xl">
            {ui.title1} <span className="text-[#c49250]">{ui.highlightedTitle}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[340px_minmax(0,1fr)]">
          <aside className="overflow-hidden rounded-lg border border-[#eee7dc] bg-white shadow-[0_8px_24px_rgba(5,16,36,0.07)]">
            <div className="relative h-[430px] w-full bg-[#fdfaf6]">
              <Image src={agent.image} alt={agent.imageAlt} fill priority sizes="(min-width: 1024px) 340px, 100vw" className="object-cover object-top" />
            </div>
            <div className="p-6 text-center">
              <h1 className="text-3xl font-extrabold text-[#051024]">{agent.name}</h1>
              <span className="mx-auto mt-3 block h-px w-10 bg-[#c49250]" />
              <p className="mt-3 text-sm font-bold uppercase tracking-wide text-[#c49250]">{agent.detail.practiceArea}</p>
              <div className="mt-5 flex items-center justify-center gap-3">
                {ui.socialLinks.map((social) => (
                  <Link key={social.id} href={social.url} aria-label={social.label} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#051024] text-white transition-colors duration-300 hover:bg-[#c49250]">
                    {renderIcon(social.icon)}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <p className="text-base leading-7 text-[#64748b] sm:text-lg">{agent.detail.about}</p>

            <div className="mt-5 grid grid-cols-1 border-y border-[#e5e7eb] md:grid-cols-2">
              <div className="flex items-start gap-4 py-4 md:border-r md:border-[#e5e7eb] md:pr-6">
                <span className="mt-1 text-2xl text-[#d98909]">{renderIcon('FaMapMarkerAlt')}</span>
                <div><p className="font-extrabold text-[#051024]">{ui.locationLabel}</p><p className="mt-1 text-[#64748b]">{agent.detail.address}</p></div>
              </div>
              <div className="flex items-start gap-4 border-t border-[#e5e7eb] py-4 md:border-t-0 md:pl-8">
                <span className="mt-1 text-2xl text-[#d98909]">{renderIcon('FaPhoneAlt')}</span>
                <div><p className="font-extrabold text-[#051024]">{ui.phoneLabel}</p><Link href={`tel:${agent.detail.phone}`} className="mt-1 block text-[#64748b] hover:text-[#c49250]">{agent.detail.phone}</Link></div>
              </div>
              <div className="flex items-start gap-4 border-t border-[#e5e7eb] py-4 md:col-span-2">
                <span className="mt-1 text-2xl text-[#d98909]">{renderIcon('FaBriefcase')}</span>
                <div><p className="font-extrabold text-[#051024]">{ui.practiceAreaLabel}</p><p className="mt-1 text-[#64748b]">{agent.detail.practiceArea}</p></div>
              </div>
            </div>

            <p className="mt-5 text-base leading-7 text-[#64748b] sm:text-lg">{agent.detail.experience}</p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {ui.services.map((service) => (
                <article key={service.id} className="rounded-lg border border-[#e5e7eb] bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fdf5e8] text-3xl text-[#d98909]">{renderIcon(service.icon)}</div>
                  <h3 className="mt-4 text-xl font-extrabold text-[#051024]">{service.title}</h3>
                  <span className="mx-auto mt-3 block h-px w-10 bg-[#c49250]" />
                  <p className="mt-3 text-sm leading-6 text-[#64748b]">{service.description}</p>
                  <Link href={service.url} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#d98909] transition-all duration-300 hover:gap-3">
                    <span>{service.linkText}</span><FaArrowRight className="text-xs" />
                  </Link>
                </article>
              ))}
            </div>

            <p className="mt-6 text-base leading-7 text-[#64748b] sm:text-lg">{agent.detail.closingText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
