import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react';
import { CENTRE_CONTACT } from '../utils/booking';

interface FAQItem {
  question: string;
  hindiQuestion: string;
  answer: string;
  hindiAnswer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'How do I know if my test requires overnight fasting?',
    hindiQuestion: 'मुझे कैसे पता चलेगा कि मेरी जांच में खाली पेट (फास्टिंग) रहना ज़रूरी है?',
    answer:
      'Tests such as Blood Sugar (Fasting) and Lipid Profile require strictly 10 to 12 hours of overnight fasting (you can drink plain water). Tests like CBC, ESR, Thyroid (TSH), and Urine routine microscopy do NOT require fasting and can be collected throughout the day.',
    hindiAnswer:
      'ब्लड शुगर (फास्टिंग) और लिपिड प्रोफाइल जैसी जांचों के लिए 10 से 12 घंटे का खाली पेट रहना अनिवार्य होता है (सादा पानी पी सकते हैं)। जबकि सीबीसी (CBC), थायरॉयड (TSH), और यूरिन जांच के लिए खाली पेट रहना अनिवार्य नहीं है।',
  },
  {
    question: 'Is home sample collection available in Sajoi and Parmandapur?',
    hindiQuestion: 'क्या सजोई और परमन्दापुर में घर पर सैंपल कलेक्शन (Home Collection) उपलब्ध है?',
    answer:
      'Yes, our trained phlebotomist visits homes across Parmandapur, Sajoi, and nearby Varanasi areas by prior appointment. You can request home collection directly using the online booking form or via WhatsApp.',
    hindiAnswer:
      'हाँ, हमारे प्रशिक्षित टेक्नीशियन परमन्दापुर, सजोई और आसपास के क्षेत्रों में पूर्व सूचना पर घर आकर भी सुरक्षित ब्लड सैंपल एकत्र करते हैं। आप बुकिंग फॉर्म या WhatsApp के माध्यम से होम कलेक्शन चुन सकते हैं।',
  },
  {
    question: 'How and when will I receive my pathology test reports?',
    hindiQuestion: 'मुझे अपनी जांच रिपोर्ट कब और कैसे मिलेगी?',
    answer:
      'Most routine blood and urine test reports (CBC, Sugar, LFT, KFT, Lipid, ESR) are delivered the same day or within 24 hours. Digital PDF reports are delivered straight to your WhatsApp, and printed copies can be collected at our centre in Parmandapur.',
    hindiAnswer:
      'अधिकतर रूटीन टेस्ट (जैसे CBC, शुगर, LFT, KFT, लिपिड, यूरिन) की रिपोर्ट उसी दिन या 24 घंटे के अंदर सीधे आपके WhatsApp पर डिजिटल PDF रूप में भेज दी जाती है। आप चाहें तो सेंटर आकर प्रिंटेड कॉपी भी ले सकते हैं।',
  },
  {
    question: 'What are your centre timings on weekdays and Sundays?',
    hindiQuestion: 'कलेक्शन सेंटर खुलने का समय क्या है?',
    answer:
      'SAVE Collection Centre is open Monday through Saturday from 6:30 AM to 8:00 PM. On Sundays, we are open from 6:30 AM to 2:00 PM for morning fasting and urgent sample collection.',
    hindiAnswer:
      'हमारा केंद्र सोमवार से शनिवार सुबह 6:30 बजे से रात 8:00 बजे तक खुला रहता है। रविवार को सुबह 6:30 बजे से दोपहर 2:00 बजे तक फास्टिंग व आवश्यक सैंपलिंग सेवा उपलब्ध रहती है।',
  },
  {
    question: 'What hygiene and safety measures are followed during blood draw?',
    hindiQuestion: 'ब्लड सैंपल लेते समय सुरक्षा और स्वच्छता के क्या नियम हैं?',
    answer:
      'We strictly use 100% sterile, single-use disposable needles, vacuum-sealed vacutainer blood tubes (EDTA, Fluoride, Plain Serum), and surgical gloves. No needle is ever reused, ensuring total patient safety and cross-contamination prevention.',
    hindiAnswer:
      'हम हर मरीज के लिए 100% नई और सीलबंद डिस्पोजेबल सुई (Vacutainer Needles) तथा दस्तानों का उपयोग करते हैं। सुई का पुन: उपयोग कतई नहीं किया जाता, जिससे संक्रमण का कोई खतरा नहीं रहता।',
  },
  {
    question: 'Can I get a test done that is not listed on your menu?',
    hindiQuestion: 'अगर मेरी डॉक्टर द्वारा लिखी जांच वेबसाइट पर न मिले तो?',
    answer:
      'Yes! We collect samples for an extensive range of pathology and specialized diagnostic tests. Simply take a photo of your doctor’s prescription and send it to our WhatsApp (+91 7071876466), and our staff will guide you immediately.',
    hindiAnswer:
      'बिल्कुल! हम सैकड़ों विशिष्ट पैथोलॉजी जांचों के सैंपल एकत्र करते हैं। आप अपने डॉक्टर के पर्चे की फोटो हमारे WhatsApp (+91 7071876466) पर भेजकर सीधे टेस्ट की जानकारी व स्लॉट प्राप्त कर सकते हैं।',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Common Patient Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            अक्सर पूछे जाने वाले सवाल • Everything you need to know about sample collection, fasting, and reports.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-teal-500/50 bg-teal-50/30 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-0.5">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </h3>
                    <p className="text-xs text-teal-700 font-medium">
                      {faq.hindiQuestion}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-teal-700" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-teal-100/60 text-slate-700 text-xs sm:text-sm space-y-2 animate-fadeIn">
                    <p className="leading-relaxed">{faq.answer}</p>
                    <p className="leading-relaxed text-slate-600 font-medium text-xs bg-white p-3 rounded-xl border border-teal-100/80">
                      {faq.hindiAnswer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Have more questions about your test?</h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Call or message our centre technician directly at Parmandapur, Sajoi.
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`https://wa.me/${CENTRE_CONTACT.whatsappNumber}?text=${encodeURIComponent('Hello SAVE Collection Centre, I have a query about blood tests.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href={`tel:${CENTRE_CONTACT.phone}`}
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
