import React from 'react';
import {
  Search,
  MessageCircle,
  Syringe,
  FileCheck2,
  ArrowRight,
  Info,
  Calendar,
} from 'lucide-react';

interface HowItWorksProps {
  onBookClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onBookClick }) => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Test',
      hindiTitle: 'जांच का चयन करें',
      description:
        'Select the required test from our diagnostic test catalog or bring your doctor’s prescription slip.',
      icon: <Search className="w-5 h-5 text-teal-600" />,
    },
    {
      number: '02',
      title: 'Contact Our Centre',
      hindiTitle: 'हमारे केंद्र से संपर्क करें',
      description:
        'Book your appointment online or reach us directly via WhatsApp/Call at +91 7071876466 to confirm timings.',
      icon: <MessageCircle className="w-5 h-5 text-sky-600" />,
    },
    {
      number: '03',
      title: 'Sample Collection',
      hindiTitle: 'सैंपल कलेक्शन',
      description:
        'Visit our clean centre in Parmandapur, Sajoi (or arrange home visit) for gentle sample collection with sterile supplies.',
      icon: <Syringe className="w-5 h-5 text-teal-600" />,
    },
    {
      number: '04',
      title: 'Receive Your Report',
      hindiTitle: 'रिपोर्ट प्राप्त करें',
      description:
        'Get your digital report directly delivered on WhatsApp/email, or collect a neat printed copy from our centre.',
      icon: <FileCheck2 className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wide uppercase">
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A seamless, stress-free experience from test selection to receiving your final report.
          </p>
        </div>

        {/* 4-Step Flow */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/90 relative flex flex-col justify-between group hover:bg-white hover:shadow-md transition-all"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300 font-mono group-hover:text-teal-600 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-bold text-base text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-teal-700 mt-0.5 mb-2">
                  {step.hindiTitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Requirement Note: Preparation requirements and report timelines vary by test */}
        <div className="mt-12 bg-sky-50/70 border border-sky-200 rounded-2xl p-5 flex items-start gap-3.5 max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-slate-900 block font-semibold mb-0.5">
              Please Note Regarding Test Preparations & Timelines:
            </strong>
            Preparation requirements (such as 10–12 hours overnight fasting for Lipid and Glucose tests, or midstream morning urine sample) and report turnaround timelines vary depending on the specific test and clinical laboratory processing protocols. Our staff will inform you of the exact guidelines when you book.
          </div>
        </div>

        {/* Quick CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-sm transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Ready to Book a Test? Get Started</span>
          </button>
        </div>

      </div>
    </section>
  );
};
