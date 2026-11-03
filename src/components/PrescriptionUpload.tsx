import React, { useState, useRef } from 'react';
import {
  FileText,
  Upload,
  MessageCircle,
  Phone,
  Camera,
  CheckCircle2,
  X,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  Clock,
} from 'lucide-react';
import { CENTRE_CONTACT } from '../utils/booking';

export const PrescriptionUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [patientNote, setPatientNote] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getWhatsAppPrescriptionLink = () => {
    const baseText = `Namaste SAVE Collection Centre,\nI would like to inquire about tests from my doctor's prescription slip.\n\n${
      patientNote ? `Patient Note: ${patientNote}\n\n` : ''
    }I am sending the prescription photo here on WhatsApp. Please let me know the required tests, fasting guidelines, and collection slot availability at Parmandapur/Sajoi.`;
    return `https://wa.me/${CENTRE_CONTACT.whatsappNumber}?text=${encodeURIComponent(baseText)}`;
  };

  return (
    <section id="prescription" className="py-14 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Explanation & Benefits */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold tracking-wide uppercase">
              <Camera className="w-3.5 h-3.5" />
              <span>Doctor's Prescription Assistance</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Have a Doctor’s Prescription? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-sky-300">
                डॉक्टर का पर्चा यहाँ भेजें
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Medical prescriptions can have complex handwriting or specialized test names. Simply click a photo of your prescription slip and share it directly with our certified lab staff on WhatsApp.
            </p>

            {/* Quick 3-step checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 backdrop-blur-xs">
                <div className="text-teal-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Step 1</span>
                </div>
                <p className="text-xs text-slate-200 font-medium">Click a clear photo of the prescription</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 backdrop-blur-xs">
                <div className="text-teal-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Step 2</span>
                </div>
                <p className="text-xs text-slate-200 font-medium">Send directly to our WhatsApp (+91 7071876466)</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 backdrop-blur-xs">
                <div className="text-teal-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Step 3</span>
                </div>
                <p className="text-xs text-slate-200 font-medium">Get test guidance & sample timing confirmation</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>100% Patient Privacy Guaranteed</span>
              </span>
              <span>•</span>
              <span>Prompt response during operating hours</span>
            </div>
          </div>

          {/* Right Column: Interactive Upload & Launch Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/15 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-teal-300" />
                  <span className="font-bold text-sm text-white">Prescription Helper</span>
                </div>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full font-semibold">
                  Fast Response
                </span>
              </div>

              {/* Upload or Drop Area */}
              {!previewUrl ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-teal-300/40 hover:border-teal-300 rounded-2xl p-6 text-center cursor-pointer bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    id="prescription-file-input"
                  />
                  <div className="w-12 h-12 mx-auto rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center group-hover:scale-110 transition-transform mb-3">
                    <Upload className="w-6 h-6" />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    Tap to upload or take photo of prescription
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Supports JPG, PNG, or PDF images
                  </p>
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/40 p-2">
                  <img
                    src={previewUrl}
                    alt="Prescription preview"
                    className="max-h-48 w-full object-contain rounded-xl"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors cursor-pointer"
                    title="Remove image"
                    aria-label="Remove prescription image"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="mt-2 text-center text-xs text-teal-300 font-semibold truncate px-2">
                    {selectedFile?.name}
                  </div>
                </div>
              )}

              {/* Optional note */}
              <div>
                <label htmlFor="prescription-note" className="block text-xs font-semibold text-slate-300 mb-1">
                  Add note for our lab technician (Optional)
                </label>
                <input
                  id="prescription-note"
                  type="text"
                  value={patientNote}
                  onChange={(e) => setPatientNote(e.target.value)}
                  placeholder="e.g. Fasting sample needed, home visit in Sajoi..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-400"
                />
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-1">
                <a
                  href={getWhatsAppPrescriptionLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950/20" />
                  <span>Send on WhatsApp (+91 7071876466)</span>
                </a>

                <a
                  href={`tel:${CENTRE_CONTACT.phone}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-300" />
                  <span>Call Us for Prescription Assistance</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
