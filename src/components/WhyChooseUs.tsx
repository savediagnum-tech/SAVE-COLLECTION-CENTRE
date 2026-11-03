import React from 'react';
import {
  MapPin,
  HeartHandshake,
  MessageSquareText,
  FileText,
  Sparkles,
  ShieldCheck,
  Check,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <MapPin className="w-6 h-6 text-teal-600" />,
      title: 'Convenient sample collection services',
      hindiTitle: 'सुविधाजनक सैंपल कलेक्शन सुविधा',
      description:
        'Walk in directly at our centre in Parmandapur, Sajoi (near JS Public School) or request home sample collection in the nearby area for seniors and patients with restricted mobility.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-sky-600" />,
      title: 'Friendly and professional assistance',
      hindiTitle: 'सहज एवं विनम्र व्यवहार',
      description:
        'Patient comfort is our top priority. Our phlebotomy staff ensures gentle vein puncture using single-use sterile vacutainers, putting children and anxious patients at ease.',
    },
    {
      icon: <MessageSquareText className="w-6 h-6 text-teal-600" />,
      title: 'Clear communication about available tests',
      hindiTitle: 'जांच एवं तैयारियों की स्पष्ट जानकारी',
      description:
        'We guide you clearly on necessary pre-test precautions—such as overnight fasting duration, medication pauses, or post-prandial timings—so tests are collected correctly the first time.',
    },
    {
      icon: <FileText className="w-6 h-6 text-emerald-600" />,
      title: 'Convenient report delivery options, where available',
      hindiTitle: 'रिपोर्ट प्राप्ति के सरल विकल्प',
      description:
        'Receive your pathology test reports promptly via WhatsApp PDF or email, or pick up clear printed copies at our collection centre once processing is complete.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-teal-600" />,
      title: 'Patient-focused service',
      hindiTitle: 'मरीज की संतुष्टि हमारी प्राथमिकता',
      description:
        'A clean, welcoming environment dedicated to your health needs. We listen attentively to your doctor’s prescription and treat every patient with dignity and care.',
    },
  ];

  return (
    <section id="why-choose" className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wide uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>Community Trust & Quality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Us?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Dedicated to providing respectful, reliable, and accessible diagnostic sample collection in Sajoi and Parmandapur.
          </p>
        </div>

        {/* 5 Points Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center mb-4">
                  {pt.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900">
                  {pt.title}
                </h3>
                <p className="text-xs font-semibold text-teal-700 mt-1 mb-2.5">
                  {pt.hindiTitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pt.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-teal-800 font-medium">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>At SAVE Collection Centre</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
