import React from 'react';
import { notFound } from 'next/navigation';
import rawData from '@/data/templates.json';
import {
  AgentDetailPageData,
  AgentDetailRouteProps,
  FourHomelessTemplateData,
} from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AgentDetailContent } from '@/components/sections/AgentDetailContent';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default async function AgentDetailPage({ params }: AgentDetailRouteProps) {
  const resolvedParams = await params;
  const templateData: FourHomelessTemplateData = rawData;
  const sectionData = templateData?.categories?.RealEstate?.sections;
  const commonData = templateData?.common;
  const agentsData = sectionData?.Agents?.variants?.FourHomelessAgents1;

  if (!sectionData || !commonData || !agentsData) return null;

  const agent = [...agentsData.agents, ...agentsData.additionalAgents].find(
    (agentItem) => agentItem.id === resolvedParams.id,
  );

  if (!agent) notFound();

  const detailData: AgentDetailPageData = {
    agent,
    ui: agentsData.detailUI,
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <TopBar data={sectionData.TopBar?.variants?.FourHomelessTopBar1} />
      <Header data={sectionData.Header?.variants?.FourHomelessHeader1} />
      <Breadcrumb data={commonData.agentDetailBreadcrumb} />
      <AgentDetailContent data={detailData} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
