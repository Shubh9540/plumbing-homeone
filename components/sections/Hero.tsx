import React from 'react';
import { HeroData } from '@/types/templates.types';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export const Hero = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section id="home" className="relative isolate flex min-h-[480px] w-full items-center overflow-hidden bg-[var(--color-primary)] md:min-h-[520px] lg:min-h-[560px] scroll-mt-20">
      <img src={data.image1} alt="" aria-hidden="true" className="absolute inset-0 z-0 h-full w-full object-cover object-[center_top] md:object-[68%_top]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/95 via-45% to-[var(--color-primary)]/20" />
      <div className="absolute -left-32 -top-24 z-10 h-[650px] w-80 rotate-[28deg] border-r-[40px] border-white/[0.04] bg-white/[0.025]" />

      <div className="relative z-20 mx-auto w-full max-w-[1250px] px-5 py-12 sm:px-8 lg:py-16">
        <div className="w-full max-w-[570px]">
          <div className="mb-5 flex items-center gap-4">
            <h2 className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/80 sm:text-xs">{data.subtitle}</h2>
            <div className="h-px w-10 shrink-0 bg-[var(--color-accent-light)] sm:w-12" />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[60px]">
            <span className="block">{data.title1}</span>
            <span className="block text-[var(--color-accent-light)]">{data.title2}</span>
            <span className="block">{data.title3}</span>
          </h1>
          <p className="max-w-[510px] text-sm leading-relaxed text-slate-200 sm:text-base">{data.description}</p>
          {data.button && (
            <Link href={data.button.url} className="mt-6 inline-flex items-center gap-4 rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-light)] sm:mt-7 sm:px-7 sm:py-3.5 shadow-md">
              {data.button.text}
              <FaArrowRight className="text-sm" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
