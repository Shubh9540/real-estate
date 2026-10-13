import React from 'react';
import { notFound } from 'next/navigation';
import rawData from '@/data/templates.json';
import {
  FourHomelessTemplateData,
  PropertyDetailPageData,
  PropertyDetailRouteProps,
} from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { PropertyDetailContent } from '@/components/sections/PropertyDetailContent';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function PropertyDetailPage({ params }: PropertyDetailRouteProps) {
  const resolvedParams = await params;
  const templateData: FourHomelessTemplateData = rawData;
  const sectionData = templateData?.categories?.RealEstate?.sections;
  const commonData = templateData?.common;
  const propertiesData = sectionData?.OurProperties?.variants?.FourHomelessOurProperties1;

  if (!sectionData || !commonData || !propertiesData) return null;

  const propertyIndex = propertiesData.properties.findIndex(
    (property) => property.id === resolvedParams.id,
  );

  if (propertyIndex < 0) notFound();

  const property = propertiesData.properties[propertyIndex];
  const galleryImages = Array.from({ length: 4 }, (_, offset) => {
    const galleryProperty = propertiesData.properties[
      (propertyIndex + offset) % propertiesData.properties.length
    ];

    return {
      id: `${property.id}-gallery-${offset + 1}`,
      image: galleryProperty.image,
      imageAlt: galleryProperty.imageAlt,
    };
  });

  const detailData: PropertyDetailPageData = {
    property,
    ui: propertiesData.detailUI,
    galleryImages,
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <TopBar data={sectionData.TopBar?.variants?.FourHomelessTopBar1} />
      <Header data={sectionData.Header?.variants?.FourHomelessHeader1} />
      <Breadcrumb data={commonData.propertyDetailBreadcrumb} />
      <PropertyDetailContent data={detailData} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
