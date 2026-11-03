import React from 'react';
import { ShieldCheck, HeartHandshake, MapPin, Sparkles, Building2, UserCheck, Syringe } from 'lucide-react';
import { CENTRE_CONTACT } from '../utils/booking';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wide uppercase">
            <Building2 className="w-3.5 h-3.5 text-teal-600" />
            <span>About Our Centre</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dedicated Diagnostic Sample Collection in Parmandapur, Sajoi
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Providing accessible, courteous, and professional medical sample collection services to the local community in Varanasi.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Descriptive narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-base">
            <p>
              Welcome to <strong className="text-slate-900 font-semibold">SAVE Collection Centre</strong>.
              We are a dedicated medical diagnostic sample collection centre established to serve individuals and families in{' '}
              <span className="text-teal-800 font-medium">Parmandapur, Sajoi, Varanasi (UP – 221302)</span>, located conveniently near{' '}
              <span className="text-slate-900 font-medium">JS Public School</span>.
            </p>

            <p>
              Our primary role is to bridge the gap between patients and quality pathology diagnostics. We focus on gentle, hygienic, and precise sample collection—including blood, serum, and urine samples—ensuring all specimens are collected under aseptic conditions using strictly single-use, sterile supplies.
            </p>

            <p>
              Samples collected at our centre are properly preserved in climate-appropriate vacutainers and promptly dispatched to established reference diagnostic laboratories for automated clinical testing. We ensure that your test reports reach you smoothly—digitally via WhatsApp or available for physical pickup at our centre.
            </p>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mb-2.5">
                  <Syringe className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Gentle & Sterile Sampling</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Single-use disposable needles and vacutainers for patient safety and comfort.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mb-2.5">
                  <UserCheck className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Community-Centric Care</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Friendly assistance with doctor prescriptions, fasting instructions, and patient queries.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 text-xs text-teal-900 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block text-teal-950">Transparency First</strong>
                SAVE Collection Centre operates strictly as an authentic diagnostic sample collection facility. We coordinate specimen collection and report distribution, partnering with established reference clinical labs for testing.
              </div>
            </div>
          </div>

          {/* Right Column: Location & Centre Info Snapshot */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl p-7 shadow-xl shadow-slate-900/10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-3">
                <div className="flex items-center gap-3.5">
                  <img
                    src="/assets/aistudio/file_0000000099f0821188745b8cb9cde9a7_c872a8e2.jpg"
                    alt="SAVE Collection Centre Official Logo"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-contain border-3 border-teal-400 shadow-xl shrink-0 bg-white p-1"
                  />
                  <div>
                    <span className="text-xs font-semibold text-teal-300 uppercase tracking-wider block">
                      Official Centre Emblem
                    </span>
                    <h3 className="text-xl font-bold text-white">SAVE Collection Centre</h3>
                    <p className="text-xs text-teal-200 font-medium">
                      “जीवन रक्षा, सेवा और सुरक्षा”
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-300">
                  Diagnostic Sample Collection Services • Parmandapur, Sajoi, Varanasi
                </p>
              </div>

              <div className="space-y-4 text-sm divide-y divide-white/10">
                <div className="flex items-start gap-3 pt-2">
                  <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p className="text-slate-300 text-xs mt-0.5">
                      Parmandapur, Sajoi, Varanasi, Uttar Pradesh – 221302
                    </p>
                    <p className="text-teal-300 text-xs font-medium mt-0.5">
                      Landmark: Near JS Public School
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <HeartHandshake className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Patient Assistance</p>
                    <p className="text-slate-300 text-xs mt-0.5">
                      Direct WhatsApp & phone assistance: +91 7071876466
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <Sparkles className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Operating Timings</p>
                    <p className="text-slate-300 text-xs mt-0.5">
                      Mon – Sat: 6:30 AM – 8:00 PM
                    </p>
                    <p className="text-slate-400 text-xs">
                      Sunday: 6:30 AM – 2:00 PM (Ideal for morning fasting samples)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${CENTRE_CONTACT.whatsappNumber}?text=${encodeURIComponent('Hello SAVE Collection Centre, I would like to visit the centre for tests.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-colors"
                >
                  <span>Connect with Our Centre</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
