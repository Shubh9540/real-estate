'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaClock, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaRegCommentDots, FaRegFileAlt, FaUser } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ContactSectionProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaClock': return <FaClock />;
    case 'FaEnvelope': return <FaEnvelope />;
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaXTwitter': return <FaXTwitter />;
    default: return null;
  }
};

export const ContactSection = ({ data }: ContactSectionProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="mx-auto mb-8 max-w-3xl px-4 text-center sm:px-6">
        <div className="mb-3 flex items-center justify-center gap-4"><span className="h-px w-8 bg-[#c49250]" /><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c49250] sm:text-sm">{data.intro.eyebrow}</p><span className="h-px w-8 bg-[#c49250]" /></div>
        <h1 className="text-3xl font-extrabold text-[#051024] sm:text-4xl lg:text-5xl">{data.intro.title} <span className="text-[#c49250]">{data.intro.titleHighlight}</span></h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#64748b] sm:text-base">{data.intro.description}</p>
      </div>

      <div className="relative overflow-hidden py-8 lg:py-12">
        <div className="absolute inset-y-0 left-0 hidden w-2/5 lg:block"><Image src={data.backgroundImage} alt={data.backgroundImageAlt} fill sizes="40vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#051024]/5 to-white/30" /></div>

        <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-xl shadow-[0_18px_50px_rgba(5,16,36,0.16)] lg:ml-auto lg:mr-8 lg:grid-cols-[1.45fr_0.9fr] xl:mr-12 2xl:mr-20">
          <div className="bg-[#071d38] p-5 text-white sm:p-8 lg:p-10">
            <div className="flex items-center gap-3"><span className="h-px w-8 bg-[#c49250]" /><p className="text-xs font-bold uppercase tracking-wide text-[#ddaf6a]">{data.form.eyebrow}</p></div>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{data.form.title} <span className="text-[#ddaf6a]">{data.form.titleHighlight}</span></h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base">{data.form.description}</p>

            <form className="mt-7 space-y-4" onChange={() => setSubmitted(false)} onSubmit={(event) => { event.preventDefault(); setSubmitted(true); event.currentTarget.reset(); }}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="relative block"><FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/55" /><input name="fullName" type="text" required placeholder={data.form.fullNamePlaceholder} className="w-full rounded-md border border-white/20 bg-white/5 py-4 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#c49250]" /></label>
                <label className="relative block"><FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/55" /><input name="email" type="email" required placeholder={data.form.emailPlaceholder} className="w-full rounded-md border border-white/20 bg-white/5 py-4 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#c49250]" /></label>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="relative block"><FaPhoneAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/55" /><input name="phone" type="tel" required placeholder={data.form.phonePlaceholder} className="w-full rounded-md border border-white/20 bg-white/5 py-4 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#c49250]" /></label>
                <label className="relative block"><FaRegFileAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/55" /><input name="subject" type="text" required placeholder={data.form.subjectPlaceholder} className="w-full rounded-md border border-white/20 bg-white/5 py-4 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#c49250]" /></label>
              </div>
              <label className="relative block"><FaRegCommentDots className="pointer-events-none absolute left-4 top-5 text-white/55" /><textarea name="message" required rows={6} placeholder={data.form.messagePlaceholder} className="w-full resize-none rounded-md border border-white/20 bg-white/5 py-4 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#c49250]" /></label>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#d9a03d] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#c49250] sm:w-auto"><span>{data.form.buttonText}</span><FaArrowRight className="text-xs" /></button>
              {submitted && <p role="status" className="rounded-md border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-emerald-200">{data.form.successMessage}</p>}
            </form>
          </div>

          <div className="bg-white p-5 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3"><span className="h-px w-8 bg-[#c49250]" /><p className="text-xs font-bold uppercase tracking-wide text-[#c49250]">{data.contactPanel.eyebrow}</p></div>
            <h2 className="mt-4 text-3xl font-extrabold text-[#051024] sm:text-4xl">{data.contactPanel.title1} <span className="text-[#c49250]">{data.contactPanel.titleHighlight}</span></h2>
            <p className="mt-3 text-sm leading-6 text-[#64748b]">{data.contactPanel.description}</p>

            <div className="mt-6 space-y-5">
              {data.contactPanel.items.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fdf1df] text-lg text-[#c8871d]">{renderIcon(item.icon)}</span>
                  <div className="min-w-0"><h3 className="font-extrabold text-[#051024]">{item.title}</h3>{item.url ? <Link href={item.url} className="mt-1 block text-sm leading-5 text-[#64748b] transition-colors hover:text-[#c49250]">{item.lines.map((line) => <span key={line.id} className="block">{line.text}</span>)}</Link> : <div className="mt-1 text-sm leading-5 text-[#64748b]">{item.lines.map((line) => <p key={line.id}>{line.text}</p>)}</div>}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-[#e5e7eb] pt-5">
              <h3 className="font-extrabold text-[#051024]">{data.contactPanel.socialTitle}</h3>
              <div className="mt-4 flex flex-wrap gap-3">{data.contactPanel.socialLinks.map((social) => <Link key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef1f5] text-[#051024] transition-colors hover:bg-[#c49250] hover:text-white">{renderIcon(social.icon)}</Link>)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-8 w-full overflow-hidden">
        <iframe src={data.location.mapUrl} title={data.location.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full border-0 sm:h-96" />
        <div className="mx-4 mb-4 rounded-lg bg-white p-4 shadow-xl sm:absolute sm:right-6 sm:top-5 sm:m-0 sm:w-80">
          <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fdf1df] text-[#c8871d]"><FaMapMarkerAlt /></span><div><p className="font-extrabold text-[#051024]">{data.location.title}</p><p className="mt-1 text-sm leading-5 text-[#64748b]">{data.location.description}</p></div></div>
          <a href={data.location.buttonUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#c49250]"><span>{data.location.buttonText}</span><FaArrowRight className="text-xs" /></a>
        </div>
      </div>
    </section>
  );
};
