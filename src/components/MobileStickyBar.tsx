import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CENTRE_CONTACT } from '../utils/booking';

interface MobileStickyBarProps {
  onBookClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 sm:hidden shadow-lg shadow-slate-900/10">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Now */}
        <a
          href={`tel:${CENTRE_CONTACT.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 active:bg-slate-200 text-slate-800 text-center transition-colors"
          aria-label="Call Centre Directly"
        >
          <Phone className="w-4 h-4 text-teal-700 mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${CENTRE_CONTACT.whatsappNumber}?text=${encodeURIComponent('Namaste SAVE Collection Centre, I want to book a test at Parmandapur.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 active:bg-emerald-100 border border-emerald-200 text-emerald-800 text-center transition-colors"
          aria-label="WhatsApp SAVE Collection Centre"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600/20 mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">WhatsApp</span>
        </a>

        {/* Book Test */}
        <button
          onClick={onBookClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-teal-600 to-sky-700 active:from-teal-700 active:to-sky-800 text-white text-center shadow-xs transition-colors cursor-pointer"
          aria-label="Book Diagnostic Test"
        >
          <Calendar className="w-4 h-4 text-teal-200 mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">Book Test</span>
        </button>
      </div>
    </div>
  );
};
