import React from 'react';
import { FourHomelessTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { OurPropertiesSection } from '@/components/sections/OurPropertiesSection';
import { AgentsSection } from '@/components/sections/AgentsSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { PropertyBlogsSection } from '@/components/sections/PropertyBlogsSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: FourHomelessTemplateData = rawData;
  const sectionData = templateData?.categories?.RealEstate?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      {/* Header overlaps Hero via absolute positioning */}
      <div className="relative">
        <TopBar data={sectionData.TopBar?.variants?.FourHomelessTopBar1} />
        <Header data={sectionData.Header?.variants?.FourHomelessHeader1} />
        <HeroSection data={sectionData.Hero?.variants?.FourHomelessHero1} />
      </div>
      <AboutUsSection data={sectionData.AboutUs?.variants?.FourHomelessAboutUs1} />
      <ServicesSection data={sectionData.Services?.variants?.FourHomelessServices1} isSlider={true} />
      <WhyChooseUsSection data={sectionData.whyChooseUs?.variants?.FourHomelessWhyChooseUs1} />
      <OurPropertiesSection data={sectionData.OurProperties?.variants?.FourHomelessOurProperties1} />
      <AgentsSection data={sectionData.Agents?.variants?.FourHomelessAgents1} />
      <TestimonialSection data={sectionData.Testimonials?.variants?.FourHomelessTestimonials1} />
      <PropertyBlogsSection data={sectionData.PropertyBlogs?.variants?.FourHomelessPropertyBlogs1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
