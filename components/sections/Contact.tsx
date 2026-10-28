import React from 'react';
import { ContactData } from '@/types/templates.types';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaHeadset, FaFileAlt } from 'react-icons/fa';

const renderIcon = (iconName: string, className: string = '') => {
  switch (iconName) {
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt className={className} />;
    case 'FaPhoneAlt': return <FaPhoneAlt className={className} />;
    case 'FaEnvelope': return <FaEnvelope className={className} />;
    case 'FaClock': return <FaClock className={className} />;
    case 'FaHeadset': return <FaHeadset className={className} />;
    case 'FaFileAlt': return <FaFileAlt className={className} />;
    default: return null;
  }
};

export const Contact = ({ data }: { data?: ContactData }) => {
  if (!data) return null;

  return (
    <section id="contact" className="w-full py-8 lg:py-12 bg-white relative scroll-mt-20">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        
        {/* Left Column */}
        <div className="flex flex-col lg:col-span-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 w-max shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-light)]"></span>
            {data.subtitle}
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[var(--color-primary)] leading-[1.1] mb-6">
            {data.title1} <span className="text-[var(--color-accent)]">{data.title2}</span>
          </h2>

          <p className="text-[var(--color-text-light)] text-sm md:text-base mb-10 leading-relaxed max-w-lg">
            {data.description}
          </p>

          {/* Form */}
          <div className="bg-[var(--color-bg-alt)] rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm">
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8">{data.form?.title || 'Send Us a Message'}</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input type="text" placeholder="Your Name *" className="w-full px-5 py-3.5 bg-white border border-[var(--color-border)] rounded-xl text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors" required />
                </div>
                <div>
                  <input type="email" placeholder="Your Email *" className="w-full px-5 py-3.5 bg-white border border-[var(--color-border)] rounded-xl text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors" required />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number *" className="w-full px-5 py-3.5 bg-white border border-[var(--color-border)] rounded-xl text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors" required />
                </div>
                <div>
                  <input type="text" placeholder="Subject *" className="w-full px-5 py-3.5 bg-white border border-[var(--color-border)] rounded-xl text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors" required />
                </div>
              </div>
              <div>
                <textarea placeholder="Your Message *" rows={5} className="w-full px-5 py-3.5 bg-white border border-[var(--color-border)] rounded-xl text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none" required></textarea>
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white font-bold py-4 px-8 rounded-xl transition-colors text-sm w-full md:w-auto shadow-md">
                {data.form?.buttonText || 'Send Message'} <span className="text-lg">→</span>
              </button>
            </form>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 lg:col-span-7">
          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address */}
            <div className="bg-[var(--color-bg-alt)] rounded-2xl p-6 border border-[var(--color-border)] flex flex-col items-center md:items-start text-center md:text-left shadow-sm">
              <div className="w-16 h-16 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] text-3xl mb-5 shadow-sm">
                <FaMapMarkerAlt />
              </div>
              <h4 className="text-[15px] font-bold text-[var(--color-primary)] mb-2">{data.contactInfo.addressTitle}</h4>
              <p className="text-xs text-[var(--color-text-light)] leading-relaxed">{data.contactInfo.address}</p>
            </div>
            {/* Phone */}
            <div className="bg-[var(--color-bg-alt)] rounded-2xl p-6 border border-[var(--color-border)] flex flex-col items-center md:items-start text-center md:text-left shadow-sm">
              <div className="w-16 h-16 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] text-3xl mb-5 shadow-sm">
                <FaPhoneAlt />
              </div>
              <h4 className="text-[15px] font-bold text-[var(--color-primary)] mb-2">{data.contactInfo.phoneTitle}</h4>
              <p className="text-xs text-[var(--color-text-light)]">{data.contactInfo.phone}</p>
            </div>
            {/* Email */}
            <div className="bg-[var(--color-bg-alt)] rounded-2xl p-6 border border-[var(--color-border)] flex flex-col items-center md:items-start text-center md:text-left shadow-sm">
              <div className="w-16 h-16 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] text-3xl mb-5 shadow-sm">
                <FaEnvelope />
              </div>
              <h4 className="text-[15px] font-bold text-[var(--color-primary)] mb-2">{data.contactInfo.emailTitle}</h4>
              <p className="text-xs text-[var(--color-text-light)]">{data.contactInfo.email}</p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[280px] rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm">
            <iframe 
              src={data.mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Bottom Info Box */}
          <div className="bg-[var(--color-bg-alt)] rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">
              {data.infoBoxes?.map((box, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center md:items-start gap-4 ${index !== 0 ? 'pt-6 md:pt-0 md:pl-6' : ''}`}>
                  <div className="w-14 h-14 shrink-0 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] text-2xl shadow-sm">
                    {renderIcon(box.icon)}
                  </div>
                  <div className="text-center md:text-left">
                    <h5 className="font-bold text-[var(--color-primary)] text-xs mb-1">{box.title}</h5>
                    <p className="text-[11px] text-[var(--color-text-light)]">{box.desc1}</p>
                    <p className="text-[11px] text-[var(--color-text-light)]">{box.desc2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
