'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderProps } from '@/types/templates.types';
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';

export const Header = ({ data }: HeaderProps) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!data) return null;

  const navLinks = [...(data.navLinksLeft || []), ...(data.navLinksRight || [])];

  return (
    <header className="relative z-50 w-full border-b border-[#e7ded1] bg-white shadow-[0_4px_18px_rgba(5,16,36,0.06)]">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:h-24 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <img src={data.logo} alt={data.logoAlt} className="h-11 w-auto object-contain sm:h-12 lg:h-16" />
        </Link>

        <nav className="hidden h-full flex-1 items-center justify-center gap-5 lg:flex xl:gap-8">
          {navLinks.map((link) => {
            const isActive = link.url === '/' ? pathname === '/' : pathname.startsWith(link.url);

            return (
              <Link
                key={link.id}
                href={link.url}
                className={`relative flex h-full items-center gap-2 text-sm font-semibold transition-colors xl:text-base ${isActive ? 'text-[#c49250]' : 'text-[#051024] hover:text-[#c49250]'}`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <FaChevronDown className="text-xs" />}
                {isActive && <span className="absolute inset-x-0 bottom-3 h-0.5 bg-[#c49250] lg:bottom-4" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 lg:gap-6">
          {data.contactButton && (
            <div className="hidden items-center gap-6 lg:flex">
              <span className="h-12 w-px bg-[#d9dde3]" />
              <Link href={data.contactButton.url} className="flex min-w-44 items-center justify-center rounded-full bg-[#c49250] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(196,146,80,0.3)] transition-colors hover:bg-[#ddaf6a] xl:min-w-48 xl:text-base">
                {data.contactButton.text}
              </Link>
            </div>
          )}

          <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex h-10 w-10 items-center justify-center rounded-md text-2xl text-[#051024] transition-colors hover:bg-[#fdfaf6] lg:hidden">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full flex flex-col border-t border-[#e7ded1] bg-white p-4 shadow-xl lg:hidden">
          {navLinks.map((link) => {
            const isActive = link.url === '/' ? pathname === '/' : pathname.startsWith(link.url);

            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between border-b border-[#e7ded1] px-4 py-4 text-sm font-semibold transition-colors ${isActive ? 'text-[#c49250]' : 'text-[#051024] hover:text-[#c49250]'}`}
              >
                <span>{link.label}</span>
                {link.hasDropdown && <FaChevronDown className="text-xs" />}
              </Link>
            );
          })}
          {data.contactButton && (
            <Link href={data.contactButton.url} onClick={() => setMobileMenuOpen(false)} className="mx-4 mt-6 flex items-center justify-center rounded-full bg-[#c49250] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(196,146,80,0.25)] transition-colors hover:bg-[#ddaf6a]">
              {data.contactButton.text}
            </Link>
          )}
        </div>
      )}
    </header>
  );
};
