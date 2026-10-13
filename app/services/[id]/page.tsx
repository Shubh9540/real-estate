import React from 'react';
import { notFound } from 'next/navigation';
import {
  FourHomelessTemplateData,
  PropertyServiceDetailPageData,
  PropertyServiceDetailRouteProps,
} from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { PropertyServiceDetailContent } from '@/components/sections/PropertyServiceDetailContent';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function ServiceDetailPage({ params }: PropertyServiceDetailRouteProps) {
  const resolvedParams = await params;
  const templateData: FourHomelessTemplateData = rawData;
  const sectionData = templateData?.categories?.RealEstate?.sections;
  const commonData = templateData?.common;
  const servicesData = sectionData?.PropertyServices?.variants?.FourHomelessPropertyServices1;
  const serviceBreadcrumb = commonData?.serviceDetailBreadcrumbs?.[resolvedParams.id];

  if (!sectionData || !commonData || !servicesData) return null;

  const serviceIndex = servicesData.services.findIndex(
    (serviceItem) => serviceItem.id === resolvedParams.id,
  );

  if (serviceIndex < 0) notFound();
  if (!serviceBreadcrumb) notFound();

  const detailData: PropertyServiceDetailPageData = {
    service: servicesData.services[serviceIndex],
    services: servicesData.services,
    detailSubtitle: servicesData.detailSubtitle,
    mainImage: servicesData.services[serviceIndex],
    secondaryImages: [
      servicesData.services[(serviceIndex + 1) % servicesData.services.length],
      servicesData.services[(serviceIndex + 2) % servicesData.services.length],
    ],
    sidebarImage: servicesData.services[(serviceIndex + 3) % servicesData.services.length],
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <TopBar data={sectionData.TopBar?.variants?.FourHomelessTopBar1} />
      <Header data={sectionData.Header?.variants?.FourHomelessHeader1} />
      <Breadcrumb data={serviceBreadcrumb} />
      <PropertyServiceDetailContent data={detailData} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
