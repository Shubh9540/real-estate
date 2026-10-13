import React from 'react';
import rawData from '@/data/templates.json';
import { FourHomelessTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TestimonialGrid } from '@/components/sections/TestimonialGrid';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function TestimonialsPage() {
  const templateData: FourHomelessTemplateData = rawData;
  const sectionData = templateData?.categories?.RealEstate?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <TopBar data={sectionData.TopBar?.variants?.FourHomelessTopBar1} />
      <Header data={sectionData.Header?.variants?.FourHomelessHeader1} />
      <Breadcrumb data={commonData.testimonialsBreadcrumb} />
      <TestimonialGrid data={sectionData.TestimonialGrid?.variants?.FourHomelessTestimonialGrid1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
