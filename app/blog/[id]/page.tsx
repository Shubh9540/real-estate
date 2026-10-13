import React from 'react';
import {
  FourHomelessTemplateData,
  PropertyBlogDetailPageData,
  PropertyBlogDetailRouteProps,
} from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { PropertyBlogDetailContent } from '@/components/sections/PropertyBlogDetailContent';
import { Footer } from '@/components/common/Footer';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function BlogDetailPage({ params }: PropertyBlogDetailRouteProps) {
  const resolvedParams = await params;
  const templateData: FourHomelessTemplateData = rawData;
  const sectionData = templateData?.categories?.RealEstate?.sections;
  const commonData = templateData?.common;
  const blogsData = sectionData?.PropertyBlogs?.variants?.FourHomelessPropertyBlogs1;
  const blogBreadcrumb = commonData?.blogDetailBreadcrumbs?.[resolvedParams.id];

  if (!sectionData || !commonData || !blogsData) return null;

  const post = blogsData.posts.find((blogPost) => blogPost.id === resolvedParams.id);

  if (!post || !blogBreadcrumb) notFound();

  const detailData: PropertyBlogDetailPageData = {
    post,
    data: blogsData,
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <TopBar data={sectionData.TopBar?.variants?.FourHomelessTopBar1} />
      <Header data={sectionData.Header?.variants?.FourHomelessHeader1} />
      <Breadcrumb data={blogBreadcrumb} />
      <PropertyBlogDetailContent data={detailData} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
