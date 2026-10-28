import React from 'react';
import { ProcessData } from '@/types/templates.types';
import { FiMessageSquare, FiCalendar, FiTool, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FiMessageSquare': return <FiMessageSquare />;
    case 'FiCalendar': return <FiCalendar />;
    case 'FiTool': return <FiTool />;
    case 'FiCheckCircle': return <FiCheckCircle />;
    default: return <FiCheckCircle />;
  }
};

export const Process = ({ data }: { data?: ProcessData }) => {
  if (!data) return null;

  return (
    <section
      id="process"
      className="w-full py-16 lg:py-12 relative overflow-hidden scroll-mt-20"
      style={{
        backgroundImage: `url('${data.bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Left Diagonal Overlay for Text */}
      <div className="absolute inset-0 z-0 opacity-95 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/90 to-[var(--color-primary)]/40 lg:to-transparent" />

      <div className="max-w-[1250px] mx-auto px-4 md:px-6 relative z-10 flex flex-col h-full justify-between">

        {/* Header Section */}
        <div className="mb-16 lg:mb-12 relative z-10 w-full lg:w-1/2">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-[var(--color-accent-light)]" />
            <h4 className="text-white font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
              {data.subtitle}
            </h4>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {data.title1}
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-accent-light)] leading-tight mt-1">
            {data.title2}
          </h2>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 xl:gap-x-10 gap-y-16 relative mt-4">

          {/* Dotted Line connecting the steps (visible on desktop) */}
          <div className="hidden lg:block absolute left-[8%] right-[8%] h-[2px] border-t-[2px] border-dashed border-white/40 z-0 top-[60%]" />

          {data.steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col z-10">

              {/* Icon Badge */}
              <div className="absolute left-1/2 -top-1 -translate-x-1/2 w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center shadow-xl z-20">
                <div className="w-[60px] h-[60px] rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white text-3xl">
                  {renderIcon(step.icon)}
                </div>
              </div>

              {/* Card Body */}
              <div className="bg-white rounded-2xl shadow-xl flex-grow text-center relative z-10 mt-9 pt-12 pb-6 px-4 sm:px-5 border border-[var(--color-border)]">
                <div className="text-4xl font-black text-[var(--color-accent-light)] mb-1 opacity-50">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[var(--color-text-light)] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow Icon between cards with proper left & right clearance */}
              {index < data.steps.length - 1 && (
                <div className="hidden lg:flex absolute top-[60%] -right-4 lg:-right-4 xl:-right-5 -translate-y-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-white items-center justify-center shadow-lg border border-[var(--color-border)] z-30">
                  <FiArrowRight className="text-[var(--color-accent)] text-sm" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
