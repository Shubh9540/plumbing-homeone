import React from 'react';
import { PlumbingTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Hero } from '@/components/sections/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { Cta } from '@/components/sections/Cta';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: PlumbingTemplateData = rawData;
  const sectionData = templateData?.categories?.Plumbing?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col scroll-smooth w-full overflow-x-hidden">
      <TopBar data={sectionData.TopBar?.variants?.PlumbingTopBar2} logoData={sectionData.Header?.variants?.PlumbingHeader2} />
      <Header data={sectionData.Header?.variants?.PlumbingHeader2} />
      <Hero data={sectionData.Hero?.variants?.PlumbingHero2} />
      <AboutUs data={sectionData.AboutUs?.variants?.PlumbingAboutUs2} />
      <Services data={sectionData.Services?.variants?.PlumbingServices2} />
      <Process data={sectionData.Process?.variants?.PlumbingProcess2} />
      <WhyChooseUs data={sectionData.whyChooseUs?.variants?.PlumbingWhyChooseUs2} />
      <Testimonials data={sectionData.Testimonials?.variants?.PlumbingTestimonials2} />
      <Cta data={sectionData.Cta?.variants?.PlumbingCta2} />
      <Contact data={sectionData.contact?.variants?.PlumbingContact2} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
