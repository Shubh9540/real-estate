import React from 'react';
import { FourHomelessTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const templateData: FourHomelessTemplateData = rawData;
  const sectionData = templateData?.categories?.RealEstate?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.TopBar?.variants?.FourHomelessTopBar1} logoData={sectionData.Header?.variants?.FourHomelessHeader1} />
      <Header data={sectionData.Header?.variants?.FourHomelessHeader1} />
      <Breadcrumb data={commonData.contactBreadcrumb} />
      
      <ContactSection data={sectionData.contact?.variants?.FourHomelessContact1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
