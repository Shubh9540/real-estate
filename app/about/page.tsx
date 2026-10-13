import React from 'react';
import { FourHomelessTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import rawData from '@/data/templates.json';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { AgentsSection } from '@/components/sections/AgentsSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: FourHomelessTemplateData = rawData;
  const sectionData = templateData?.categories?.RealEstate?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <div className="relative">
        <TopBar data={sectionData.TopBar?.variants?.FourHomelessTopBar1} />
        <Header data={sectionData.Header?.variants?.FourHomelessHeader1} />
        <Breadcrumb data={commonData.aboutBreadcrumb} />
      </div>
      <AboutUsSection data={sectionData.AboutUs?.variants?.FourHomelessAboutUs1} hideButton={true} />
      <WhyChooseUsSection data={sectionData.whyChooseUs?.variants?.FourHomelessAboutWhyChooseUs1} />
      <AgentsSection data={sectionData.Agents?.variants?.FourHomelessAgents1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
