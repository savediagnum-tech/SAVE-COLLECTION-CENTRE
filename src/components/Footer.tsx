import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  AlertTriangle,
  Heart,
  ChevronRight,
  ShieldCheck,
  Clock,
  Instagram,
  Youtube,
  Facebook,
} from 'lucide-react';
import { CENTRE_CONTACT } from '../utils/booking';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPolicy }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Branding & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/assets/aistudio/file_0000000099f0821188745b8cb9cde9a7_c872a8e2.jpg"
                alt="SAVE Collection Centre Logo"
                className="w-14 h-14 rounded-full object-contain shadow-lg ring-2 ring-teal-400/50 shrink-0 bg-white p-0.5"
              />
              <div>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="font-extrabold text-xl text-white tracking-tight">SAVE</span>
                  <span className="font-semibold text-teal-400 text-lg">Collection Centre</span>
                </div>
                <p className="text-[11px] text-teal-300 font-medium">जीवन रक्षा, सेवा और सुरक्षा</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Dedicated diagnostic sample collection services located at Parmandapur, Sajoi, Varanasi (UP – 221302). Providing hygienic, accessible, and community-focused pathology sample collections for your health evaluation.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-teal-400" />
              <span>Mon – Sat: 6:30 AM – 8:00 PM | Sun: 6:30 AM – 2:00 PM</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-teal-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-teal-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Home (मुख्य पृष्ठ)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-teal-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>About Us (हमारे बारे में)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tests')}
                  className="hover:text-teal-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Our Tests (जांच सूची)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('book-test')}
                  className="hover:text-teal-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Book a Test (ऑनलाइन बुकिंग)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('prescription')}
                  className="hover:text-teal-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Prescription Helper (पर्चा भेजें)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-teal-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Common Questions (FAQ)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('location')}
                  className="hover:text-teal-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-teal-500" />
                  <span>Contact Us (संपर्क करें)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Legal (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-teal-300">
              Centre Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Parmandapur, Sajoi, Varanasi, Uttar Pradesh – 221302 (Near JS Public School)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${CENTRE_CONTACT.phone}`} className="hover:text-teal-300 font-semibold">
                  +91 7071876466
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${CENTRE_CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-semibold"
                >
                  WhatsApp: +91 7071876466
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href={CENTRE_CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 font-semibold"
                >
                  Instagram: @savecollectioncentre
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={CENTRE_CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 font-semibold"
                >
                  Facebook: SAVE Collection Centre
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Youtube className="w-4 h-4 text-red-500 shrink-0" />
                <a
                  href={CENTRE_CONTACT.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-300 font-semibold"
                >
                  YouTube: @SaveCCentre
                </a>
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs">
              <button
                onClick={() => onOpenPolicy('privacy')}
                className="text-slate-400 hover:text-teal-300 underline underline-offset-4 cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-slate-700">•</span>
              <button
                onClick={() => onOpenPolicy('terms')}
                className="text-slate-400 hover:text-teal-300 underline underline-offset-4 cursor-pointer"
              >
                Terms and Conditions
              </button>
            </div>
          </div>

        </div>

        {/* Mandatory Medical Disclaimer Banner */}
        <div className="mt-8 p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 flex items-start gap-3.5">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white block font-bold mb-0.5">
              Medical & Diagnostic Interpretation Disclaimer:
            </strong>
            Diagnostic test results and clinical reports are intended for diagnostic assistance and should always be interpreted by a qualified registered healthcare professional. Treatment plans, medication adjustments, or medical decisions must never be made solely on the basis of laboratory test values without consulting your physician.
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-8 pt-6 border-t border-slate-800 text-center sm:flex sm:items-center sm:justify-between text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} SAVE Collection Centre. All rights reserved. Parmandapur, Sajoi, Varanasi – 221302.
          </p>
          <p className="mt-2 sm:mt-0">
            Dedicated Pathology Sample Collection • Varanasi, UP
          </p>
        </div>

      </div>
    </footer>
  );
};
