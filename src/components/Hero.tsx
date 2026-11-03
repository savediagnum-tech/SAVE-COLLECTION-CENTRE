import React from 'react';
import { Calendar, MessageCircle, ArrowRight, ShieldCheck, HeartPulse, Sparkles, Droplets, CheckCircle2 } from 'lucide-react';
import { CENTRE_CONTACT } from '../utils/booking';

interface HeroProps {
  onBookClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onServicesClick }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-teal-50/30 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      {/* Background medical patterns & soft ambient orbs */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f766e 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Local Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Serving Parmandapur, Sajoi & Surrounding Varanasi</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Your Health, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-sky-700">
                  Our Priority
                </span>
              </h1>

              {/* Hindi Tagline */}
              <p className="text-xl sm:text-2xl font-bold text-teal-800 font-sans tracking-wide">
                “आपकी सेहत, हमारी प्राथमिकता”
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Reliable Diagnostic Test Collection Services at{' '}
              <strong className="text-slate-900 font-semibold">SAVE Collection Centre</strong>.
              Convenient, hygienic sample collection for blood sugar, CBC, thyroid, lipid profile, and essential medical pathology tests right in your neighborhood.
            </p>

            {/* The 3 User-Requested Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              {/* Button 1: Book a Test */}
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 rounded-xl shadow-md shadow-teal-700/20 hover:shadow-lg transition-all transform active:scale-98 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-teal-200" />
                <span>Book a Test</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              {/* Button 2: Contact on WhatsApp */}
              <a
                href={`https://wa.me/${CENTRE_CONTACT.whatsappNumber}?text=${encodeURIComponent('Namaste SAVE Collection Centre, I want to book a diagnostic test.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-emerald-500/80 hover:border-emerald-600 rounded-xl shadow-xs transition-all transform active:scale-98"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600/20" />
                <span>Contact on WhatsApp</span>
              </a>

              {/* Button 3: View Our Services */}
              <button
                onClick={onServicesClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-xl transition-colors cursor-pointer"
              >
                <span>View Our Services</span>
              </button>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 bg-white/80 p-2.5 rounded-lg border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Hygienic Sampling</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 bg-white/80 p-2.5 rounded-lg border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Digital WhatsApp Reports</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 bg-white/80 p-2.5 rounded-lg border border-slate-200/80 shadow-2xs col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Doctor Prescription Support</span>
              </div>
            </div>

          </div>

          {/* Right Column: Lab Technician & Diagnostic Illustration Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Lab Technician / Diagnostics Illustration */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-teal-900/5 border border-slate-200/90 overflow-hidden">
                
                {/* Centre branding header in card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/aistudio/file_0000000099f0821188745b8cb9cde9a7_c872a8e2.jpg"
                      alt="SAVE Collection Centre Official Emblem"
                      className="w-11 h-11 rounded-full object-contain ring-2 ring-teal-500/40 shadow-xs shrink-0 bg-white"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">SAVE Collection Centre</p>
                      <p className="text-[11px] text-teal-700 font-semibold">“जीवन रक्षा, सेवा और सुरक्षा”</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200 shrink-0">
                    Parmandapur, Sajoi
                  </span>
                </div>

                {/* Official Signboard Logo Showcase */}
                <div className="py-6 flex flex-col items-center justify-center text-center">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-sky-500 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition duration-300 pointer-events-none" />
                    <img
                      src="/assets/aistudio/file_0000000099f0821188745b8cb9cde9a7_c872a8e2.jpg"
                      alt="SAVE Collection Centre Official Signboard Logo"
                      className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full object-contain shadow-2xl border-4 border-white ring-4 ring-teal-600/30 transition-transform duration-300 group-hover:scale-102 bg-white p-1"
                    />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-teal-800 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md border border-teal-500 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                      <span>प्रमाणित केंद्र (Official Signboard)</span>
                    </div>
                  </div>

                  <div className="mt-6 text-center space-y-0.5">
                    <h3 className="font-black text-slate-900 text-lg sm:text-xl tracking-tight">
                      सेव कलेक्शन सेण्टर
                    </h3>
                    <p className="text-xs font-bold text-teal-800 tracking-wider">
                      SAVE COLLECTION CENTRE
                    </p>
                    <p className="text-xs text-slate-500 font-medium pt-0.5">
                      परमन्दापुर • सजोई • वाराणसी • जीवन रक्षा, सेवा और सुरक्षा
                    </p>
                  </div>
                </div>


                {/* Live Info Banner inside card */}
                <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-600/10 text-teal-700 flex items-center justify-center shrink-0">
                      <Droplets className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">
                        Hygienic Vacutainer Sampling
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Single-use sterile needles & safety protocols
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-teal-700 bg-teal-100/70 px-2.5 py-1 rounded-md shrink-0">
                    Safe & Gentle
                  </span>
                </div>
              </div>

              {/* Floating Badge: Fast Reports */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-lg shadow-slate-900/10 border border-slate-100 flex items-center gap-3 animate-bounce-subtle">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Prompt Report Delivery</p>
                  <p className="text-[11px] text-slate-500">Directly on your WhatsApp & print</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
