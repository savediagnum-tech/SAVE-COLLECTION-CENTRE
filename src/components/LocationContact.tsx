import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  School,
  Share2,
  Copy,
  Check,
  Calendar,
  Building,
  Instagram,
  Youtube,
  Facebook,
} from 'lucide-react';
import { CENTRE_CONTACT } from '../utils/booking';

interface LocationContactProps {
  onBookClick: () => void;
}

export const LocationContact: React.FC<LocationContactProps> = ({ onBookClick }) => {
  const [addressCopied, setAddressCopied] = useState(false);

  const copyAddress = () => {
    const fullText = `${CENTRE_CONTACT.name}\n${CENTRE_CONTACT.address}\nLandmark: ${CENTRE_CONTACT.landmark}\nPhone: ${CENTRE_CONTACT.displayPhone}`;
    navigator.clipboard.writeText(fullText).then(() => {
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2500);
    });
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Parmandapur, Sajoi, Varanasi, Uttar Pradesh 221302')}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Parmandapur, Sajoi, Varanasi, Uttar Pradesh 221302')}`;

  return (
    <section id="location" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wide uppercase">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>Visit Our Centre</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Location and Contact
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Conveniently located in Parmandapur, Sajoi, Varanasi. Visit us or reach out directly for assistance.
          </p>
        </div>

        {/* Two-Column Grid: Left Contact Info, Right Interactive Map */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Centre Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Primary Details Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-6">
              
              {/* Centre Identity with Official Logo */}
              <div className="border-b border-slate-100 pb-5 flex items-center gap-3.5">
                <img
                  src="/assets/aistudio/file_0000000099f0821188745b8cb9cde9a7_c872a8e2.jpg"
                  alt="SAVE Collection Centre Official Logo"
                  className="w-16 h-16 sm:w-18 sm:h-18 rounded-full object-contain ring-2 ring-teal-600/40 shadow-sm shrink-0 bg-white p-0.5"
                />
                <div>
                  <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider block">
                    Diagnostic Sample Collection Centre
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                    SAVE Collection Centre
                  </h3>
                  <p className="text-xs text-slate-500">
                    Parmandapur, Sajoi • जीवन रक्षा, सेवा और सुरक्षा
                  </p>
                </div>
              </div>

              {/* Exact Address */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 border border-teal-200/60 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Centre Address</h4>
                    <p className="text-slate-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      Parmandapur, Sajoi, Varanasi, Uttar Pradesh – 221302, India
                    </p>
                  </div>
                </div>

                {/* Landmark */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 border border-sky-200/60 flex items-center justify-center shrink-0">
                    <School className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Prominent Landmark</h4>
                    <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                      Near JS Public School, Parmandapur, Sajoi
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Phone / WhatsApp</h4>
                    <a
                      href={`tel:${CENTRE_CONTACT.phone}`}
                      className="text-teal-700 hover:text-teal-800 font-bold text-base block mt-0.5"
                    >
                      +91 7071876466
                    </a>
                    <span className="text-[11px] text-slate-500">
                      Call for inquiries, booking, or home collection
                    </span>
                  </div>
                </div>

                {/* Full Daily Timings Schedule */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 border border-teal-200/60 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-sm">Centre Working Hours</h4>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Daily Service</span>
                      </span>
                    </div>

                    {/* Schedule List */}
                    <div className="mt-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs space-y-1.5">
                      <div className="flex justify-between items-center py-0.5 border-b border-slate-200/50">
                        <span className="font-semibold text-slate-700">Monday</span>
                        <span className="text-slate-900 font-bold">6:30 AM – 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5 border-b border-slate-200/50">
                        <span className="font-semibold text-slate-700">Tuesday</span>
                        <span className="text-slate-900 font-bold">6:30 AM – 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5 border-b border-slate-200/50">
                        <span className="font-semibold text-slate-700">Wednesday</span>
                        <span className="text-slate-900 font-bold">6:30 AM – 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5 border-b border-slate-200/50">
                        <span className="font-semibold text-slate-700">Thursday</span>
                        <span className="text-slate-900 font-bold">6:30 AM – 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5 border-b border-slate-200/50">
                        <span className="font-semibold text-slate-700">Friday</span>
                        <span className="text-slate-900 font-bold">6:30 AM – 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5 border-b border-slate-200/50">
                        <span className="font-semibold text-slate-700">Saturday</span>
                        <span className="text-slate-900 font-bold">6:30 AM – 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5 text-teal-800 bg-teal-50/80 px-2 rounded-lg font-semibold">
                        <span>Sunday (Fasting Special)</span>
                        <span className="font-bold">6:30 AM – 2:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Copy Address & Get Directions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <button
                  type="button"
                  onClick={copyAddress}
                  className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {addressCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Direct Quick Communication Cards (WhatsApp, Facebook, Instagram & YouTube) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {/* WhatsApp Card */}
              <div className="bg-gradient-to-br from-teal-700 to-sky-800 text-white rounded-2xl p-3 shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-[10px] text-teal-200 font-semibold uppercase">WhatsApp</p>
                  <p className="text-[11px] font-bold text-white mt-0.5 leading-tight">Prescription</p>
                </div>
                <a
                  href={`https://wa.me/${CENTRE_CONTACT.whatsappNumber}?text=${encodeURIComponent('Hello SAVE Collection Centre, I need assistance with lab tests at Parmandapur.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 py-1 px-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat</span>
                </a>
              </div>

              {/* Facebook Card */}
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white rounded-2xl p-3 shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-[10px] text-blue-200 font-semibold uppercase">Facebook</p>
                  <p className="text-[11px] font-bold text-white mt-0.5 leading-tight">Centre Page</p>
                </div>
                <a
                  href={CENTRE_CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 py-1 px-2 rounded-xl bg-white hover:bg-slate-100 text-blue-700 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors shadow-xs"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Connect</span>
                </a>
              </div>

              {/* Instagram Card */}
              <div className="bg-gradient-to-br from-pink-600 via-rose-600 to-purple-700 text-white rounded-2xl p-3 shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-[10px] text-pink-200 font-semibold uppercase">Instagram</p>
                  <p className="text-[11px] font-bold text-white mt-0.5 leading-tight">@savecollection</p>
                </div>
                <a
                  href={CENTRE_CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 py-1 px-2 rounded-xl bg-white hover:bg-slate-100 text-pink-700 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors shadow-xs"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Follow</span>
                </a>
              </div>

              {/* YouTube Card */}
              <div className="bg-gradient-to-br from-red-600 to-rose-700 text-white rounded-2xl p-3 shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-[10px] text-red-200 font-semibold uppercase">YouTube</p>
                  <p className="text-[11px] font-bold text-white mt-0.5 leading-tight">@SaveCCentre</p>
                </div>
                <a
                  href={CENTRE_CONTACT.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 py-1 px-2 rounded-xl bg-white hover:bg-slate-100 text-red-600 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors shadow-xs"
                >
                  <Youtube className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive View & Location Visual */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-sm flex-1 flex flex-col justify-between">
              
              {/* Map Title Bar */}
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-slate-800">
                    Parmandapur, Sajoi, Varanasi, UP – 221302 (Near JS Public School)
                  </span>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>

              {/* Verified Google Maps iframe */}
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                <iframe
                  title="SAVE Collection Centre Location - Parmandapur Sajoi Varanasi"
                  src="https://maps.google.com/maps?q=Parmandapur%20Sajoi%20Varanasi%20Uttar%20Pradesh%20221302&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Overlaid location badge */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-200/90 shadow-md text-xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-600" />
                    <span>SAVE Collection Centre</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Parmandapur, Sajoi • Near JS Public School
                  </div>
                </div>
              </div>

              {/* Map footnote */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                <span>Direct navigation available on Google Maps for Android and iOS.</span>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-teal-700 hover:underline flex items-center gap-1"
                >
                  <span>Start Turn-by-Turn GPS Navigation</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
