import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Menu, X, Sparkles, Instagram, Youtube, Facebook } from 'lucide-react';
import { CENTRE_CONTACT } from '../utils/booking';

interface HeaderProps {
  onBookClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Notification / Information Strip */}
      <div className="bg-gradient-to-r from-teal-800 via-teal-700 to-sky-800 text-white text-xs md:text-sm py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-teal-300" />
              <span>Parmandapur, Sajoi, Varanasi (Near JS Public School)</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-teal-100">
              <Clock className="w-3.5 h-3.5 text-teal-300" />
              <span>Open: 6:30 AM – 8:00 PM (Sun: 6:30 AM – 2:00 PM)</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CENTRE_CONTACT.phone}`}
              className="flex items-center gap-1.5 font-semibold hover:text-teal-200 transition-colors"
              aria-label="Call SAVE Collection Centre"
            >
              <Phone className="w-3.5 h-3.5 text-teal-300" />
              <span>+91 7071876466</span>
            </a>
            <span className="text-teal-300/40">|</span>
            <a
              href={`https://wa.me/${CENTRE_CONTACT.whatsappNumber}?text=${encodeURIComponent('Namaste SAVE Collection Centre, I have an inquiry regarding test collection.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-300 hover:text-white font-medium transition-colors"
              aria-label="WhatsApp SAVE Collection Centre"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-300/20" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
            <span className="text-teal-300/40">|</span>
            <a
              href={CENTRE_CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-pink-200 hover:text-white font-medium transition-colors"
              aria-label="Follow SAVE Collection Centre on Instagram"
              title="Follow @savecollectioncentre on Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <span className="text-teal-300/40">|</span>
            <a
              href={CENTRE_CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sky-200 hover:text-white font-medium transition-colors"
              aria-label="Facebook SAVE Collection Centre"
              title="Connect on Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Facebook</span>
            </a>
            <span className="text-teal-300/40">|</span>
            <a
              href={CENTRE_CONTACT.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-red-300 hover:text-white font-medium transition-colors"
              aria-label="Subscribe to SAVE Collection Centre on YouTube"
              title="Subscribe to @SaveCCentre on YouTube"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span className="hidden md:inline">YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with official emblem */}
          <button
            onClick={() => handleNav('hero')}
            className="flex items-center gap-3.5 text-left focus:outline-hidden focus:ring-2 focus:ring-teal-500 rounded-xl p-1 group cursor-pointer"
            aria-label="SAVE Collection Centre Home"
          >
            {/* Official Diagnostic Centre Logo Image */}
            <img
              src="/assets/aistudio/file_0000000099f0821188745b8cb9cde9a7_c872a8e2.jpg"
              alt="SAVE Collection Centre Official Emblem Logo"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-contain shadow-md ring-2 ring-teal-700/40 group-hover:ring-teal-600 transition-all shrink-0 bg-white p-0.5"
            />
            <div>
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 font-sans">
                  SAVE
                </span>
                <span className="font-semibold text-base tracking-normal text-teal-700">
                  Collection Centre
                </span>
                <span className="hidden sm:inline-block text-xs font-semibold text-teal-800/80">
                  (सेव कलेक्शन सेण्टर)
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-tight">
                परमन्दापुर, सजोई, वाराणसी • जीवन रक्षा, सेवा और सुरक्षा
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <button
              onClick={() => handleNav('hero')}
              className="hover:text-teal-700 transition-colors cursor-pointer py-1"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('about')}
              className="hover:text-teal-700 transition-colors cursor-pointer py-1"
            >
              About Us
            </button>
            <button
              onClick={() => handleNav('tests')}
              className="hover:text-teal-700 transition-colors cursor-pointer py-1"
            >
              Diagnostic Tests
            </button>
            <button
              onClick={() => handleNav('prescription')}
              className="hover:text-teal-700 transition-colors cursor-pointer py-1 flex items-center gap-1"
            >
              <span>Prescription</span>
              <span className="text-[10px] bg-teal-100 text-teal-800 px-1.5 py-0.2 rounded-full font-bold">New</span>
            </button>
            <button
              onClick={() => handleNav('why-choose')}
              className="hover:text-teal-700 transition-colors cursor-pointer py-1"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNav('how-it-works')}
              className="hover:text-teal-700 transition-colors cursor-pointer py-1"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNav('faq')}
              className="hover:text-teal-700 transition-colors cursor-pointer py-1"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNav('location')}
              className="hover:text-teal-700 transition-colors cursor-pointer py-1"
            >
              Location & Contact
            </button>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${CENTRE_CONTACT.whatsappNumber}?text=${encodeURIComponent('Hello SAVE Collection Centre, I want to inquire about lab tests.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-lg border border-teal-200 transition-colors"
              aria-label="Direct WhatsApp Chat"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600/20" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-sky-700 hover:from-teal-700 hover:to-sky-800 rounded-lg shadow-sm shadow-teal-700/20 transition-all hover:shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-teal-200" />
              <span>Book a Test</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onBookClick}
              className="px-3 py-1.5 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-md"
            >
              Book Test
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-teal-700 hover:bg-slate-100 rounded-lg focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-200 pb-2 space-y-1 animate-fadeIn">
            <button
              onClick={() => handleNav('hero')}
              className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-teal-50 hover:text-teal-700 rounded-md"
            >
              Home (मुख्य पृष्ठ)
            </button>
            <button
              onClick={() => handleNav('about')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700 rounded-md"
            >
              About Us (हमारे बारे में)
            </button>
            <button
              onClick={() => handleNav('tests')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700 rounded-md"
            >
              Diagnostic Tests (जांच सूची)
            </button>
            <button
              onClick={() => handleNav('prescription')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700 rounded-md flex items-center justify-between"
            >
              <span>Doctor Prescription (पर्चा भेजें)</span>
              <span className="text-[10px] bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full font-bold">New</span>
            </button>
            <button
              onClick={() => handleNav('why-choose')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700 rounded-md"
            >
              Why Choose Us (हमें क्यों चुनें)
            </button>
            <button
              onClick={() => handleNav('how-it-works')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700 rounded-md"
            >
              How It Works (कार्यप्रणाली)
            </button>
            <button
              onClick={() => handleNav('faq')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700 rounded-md"
            >
              Common Questions (अक्सर पूछे जाने वाले सवाल)
            </button>
            <button
              onClick={() => handleNav('location')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700 rounded-md"
            >
              Location & Contact (पता व संपर्क)
            </button>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${CENTRE_CONTACT.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Call +91 7071876466</span>
              </a>
              <a
                href={`https://wa.me/${CENTRE_CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={CENTRE_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-lg"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow on Instagram (@savecollectioncentre)</span>
              </a>
              <a
                href={CENTRE_CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Connect on Facebook</span>
              </a>
              <a
                href={CENTRE_CONTACT.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                <Youtube className="w-4 h-4" />
                <span>Subscribe on YouTube (@SaveCCentre)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
