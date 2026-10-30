import React from 'react';
import { notFound } from 'next/navigation';
import rawData from '@/data/templates.json';
import {
  TeamDetailPageData,
  TeamDetailRouteProps,
  FourHomelessTemplateData,
} from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TeamDetailContent } from '@/components/sections/TeamDetailContent';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function TeamDetailPage({ params }: TeamDetailRouteProps) {
  const resolvedParams = await params;
  const templateData: FourHomelessTemplateData = rawData;
  const sectionData = templateData?.categories?.RealEstate?.sections;
  const commonData = templateData?.common;
  const teamData = sectionData?.Team?.variants?.FourHomelessTeam1;

  if (!sectionData || !commonData || !teamData) return null;

  const member = [...teamData.team, ...teamData.additionalTeam].find(
    (item) => item.id === resolvedParams.id,
  );

  if (!member) notFound();

  const detailData: TeamDetailPageData = {
    member,
    ui: teamData.detailUI,
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <TopBar data={sectionData.TopBar?.variants?.FourHomelessTopBar1} />
      <Header data={sectionData.Header?.variants?.FourHomelessHeader1} />
      <Breadcrumb data={commonData.teamDetailBreadcrumb} />
      <TeamDetailContent data={detailData} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
