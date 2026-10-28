import React from 'react';
import { WhyChooseUsData } from '@/types/templates.types';
import { FiUsers, FiShield, FiThumbsUp, FiClock, FiSettings, FiStar, FiTool, FiDollarSign } from 'react-icons/fi';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FiUsers': return <FiUsers />;
    case 'FiShield': return <FiShield />;
    case 'FiThumbsUp': return <FiThumbsUp />;
    case 'FiClock': return <FiClock />;
    case 'FiSettings': return <FiSettings />;
    case 'FiStar': return <FiStar />;
    case 'FiTool': return <FiTool />;
    case 'FiDollarSign': return <FiDollarSign />;
    default: return <FiStar />;
  }
};

export const WhyChooseUs = ({ data }: { data?: WhyChooseUsData }) => {
  if (!data) return null;

  return (
    <section id="why-choose-us" className="w-full py-8 lg:py-12 bg-[var(--color-bg-alt)] relative overflow-hidden scroll-mt-20">

      {/* Background SVG Waves (Subtle) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path d="M-100,400 C300,100 800,800 1500,400 L1500,800 L-100,800 Z" fill="var(--color-border)" opacity="0.3" />
          <path d="M-100,600 C400,200 900,900 1500,500 L1500,800 L-100,800 Z" fill="var(--color-border)" opacity="0.2" />
        </svg>
      </div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">

        {/* Header Content - Centered */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-light)]"></span>
            {data.subtitle}
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-light)]"></span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-primary)] leading-tight mb-4">
            {data.title1} <span className="text-[var(--color-accent)]">{data.title2}</span>
          </h2>

          <p className="text-[var(--color-text-light)] text-sm md:text-base leading-relaxed">
            {data.description}
          </p>

          <div className="w-12 h-1 bg-[var(--color-accent)] rounded-full mt-6"></div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.features.map(feat => (
            <div
              key={feat.id}
              className="bg-white rounded-[24px] border border-[var(--color-border)] shadow-sm p-6 md:p-8 flex items-start gap-5 hover:shadow-md transition-shadow"
            >
              {/* Large Icon Wrapper */}
              <div className="w-20 h-20 rounded-full bg-[var(--color-bg-alt)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                <div className="w-[60px] h-[60px] rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white text-2xl shadow-inner">
                  {renderIcon(feat.icon)}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 mt-1">
                <h3 className="text-[var(--color-primary)] font-bold text-lg leading-tight mb-2">
                  {feat.title}
                </h3>
                <p className="text-[var(--color-text-light)] text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
