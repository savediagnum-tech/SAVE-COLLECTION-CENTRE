import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  FlaskConical,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  Send,
  MessageCircle,
  Copy,
  ExternalLink,
  Info,
  Building2,
  Home,
  ShieldCheck,
} from 'lucide-react';
import {
  CENTRE_CONTACT,
  validateBookingForm,
  generateWhatsAppLink,
  generateWhatsAppBookingMessage,
  getTestFastingRequirement,
  type BookingFormData,
} from '../utils/booking';
import { DIAGNOSTIC_TESTS } from '../data/tests';

interface BookingFormProps {
  selectedTestFromCard?: string;
  onClearSelectedTest?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedTestFromCard,
  onClearSelectedTest,
}) => {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormData>({
    patientName: '',
    mobileNumber: '',
    testName: selectedTestFromCard || '',
    preferredDate: today,
    preferredTime: '06:30 AM – 08:00 AM (Early Fasting Slot)',
    collectionType: 'centre',
    address: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPrepared, setIsPrepared] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Sync test name if parent passed it
  useEffect(() => {
    if (selectedTestFromCard) {
      setFormData((prev) => ({ ...prev, testName: selectedTestFromCard }));
      setIsPrepared(false);
    }
  }, [selectedTestFromCard]);

  const fastingInfo = getTestFastingRequirement(formData.testName);

  const timeSlots = [
    '06:30 AM – 08:00 AM (Early Fasting Slot)',
    '08:00 AM – 10:00 AM (Morning Collection)',
    '10:00 AM – 01:00 PM (Mid-day Collection)',
    '01:00 PM – 04:00 PM (Afternoon Collection)',
    '04:00 PM – 06:30 PM (Evening Collection)',
    '06:30 PM – 08:00 PM (Late Evening Collection)',
  ];

  const handleInputChange = (
    field: keyof BookingFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear specific error on change
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
    if (isPrepared) setIsPrepared(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsPrepared(false);
      return;
    }

    setErrors({});
    setIsPrepared(true);

    // Smoothly scroll to the prepared confirmation card so the patient can tap WhatsApp directly without popup blockers
    setTimeout(() => {
      const card = document.getElementById('prepared-booking-card');
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleCopyMessage = () => {
    const text = generateWhatsAppBookingMessage(formData);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleReset = () => {
    setFormData({
      patientName: '',
      mobileNumber: '',
      testName: '',
      preferredDate: today,
      preferredTime: '07:30 AM – 09:00 AM (Fasting Slot)',
      collectionType: 'centre',
      address: '',
      notes: '',
    });
    setIsPrepared(false);
    if (onClearSelectedTest) onClearSelectedTest();
  };

  return (
    <section id="book-test" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wide uppercase">
            <Calendar className="w-3.5 h-3.5 text-teal-600" />
            <span>Schedule Diagnostic Collection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Online Test Booking
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Fill in the patient and test details below to prepare your booking request. You will confirm the slot directly with our Parmandapur centre via WhatsApp.
          </p>
        </div>

        {/* Booking Card */}
        <div className="mt-10 bg-slate-50 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm relative">
          
          {/* Important Honest Notice Banner */}
          <div className="mb-8 p-4 bg-teal-50/80 border border-teal-200/80 rounded-2xl flex items-start gap-3">
            <Info className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-teal-950 leading-relaxed">
              <span className="font-bold">Transparent Booking Process:</span> Submitting this form prepares your official appointment request. Because sample collection slots and fasting protocols require mutual agreement, your appointment is confirmed once verified directly with our staff on WhatsApp or phone (+91 7071876466).
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Row 1: Patient Name & Mobile Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Patient Name */}
              <div>
                <label htmlFor="patientName" className="block text-xs font-bold text-slate-800 mb-1.5">
                  Patient Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="patientName"
                    type="text"
                    value={formData.patientName}
                    onChange={(e) => handleInputChange('patientName', e.target.value)}
                    placeholder="e.g. Ramesh Kumar Sharma"
                    className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-white border text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 ${
                      errors.patientName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.patientName && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.patientName}</span>
                  </p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label htmlFor="mobileNumber" className="block text-xs font-bold text-slate-800 mb-1.5">
                  Mobile Number (WhatsApp) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="mobileNumber"
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                    placeholder="10-digit Indian mobile (e.g. 7071876466)"
                    maxLength={14}
                    className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-white border text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 ${
                      errors.mobileNumber ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.mobileNumber && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.mobileNumber}</span>
                  </p>
                )}
              </div>

            </div>

            {/* Row 2: Test Name selection */}
            <div>
              <label htmlFor="testName" className="block text-xs font-bold text-slate-800 mb-1.5">
                Diagnostic Test Required <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FlaskConical className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <select
                  id="testName"
                  value={formData.testName}
                  onChange={(e) => handleInputChange('testName', e.target.value)}
                  className={`w-full pl-10 pr-8 py-3 rounded-xl bg-white border text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500 ${
                    errors.testName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                  }`}
                >
                  <option value="">-- Select Diagnostic Test from List --</option>
                  {DIAGNOSTIC_TESTS.map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name} {t.fasting ? '(Overnight Fasting)' : ''}
                    </option>
                  ))}
                  <option value="Complete Health Checkup (CBC + Sugar + LFT + KFT + Lipid)">
                    Complete Routine Profile (CBC + Sugar + LFT + KFT + Lipid)
                  </option>
                  <option value="Multiple Tests / Doctor Prescription Upload">
                    Multiple Tests as per Doctor Prescription
                  </option>
                  <option value="Other Diagnostic Test (Specified in Message)">
                    Other Diagnostic Test (Specify below)
                  </option>
                </select>
              </div>
              {errors.testName && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.testName}</span>
                </p>
              )}

              {/* Fasting Notice when relevant test selected */}
              {formData.testName && (
                <div
                  className={`mt-2.5 p-3 rounded-xl text-xs flex items-start gap-2.5 ${
                    fastingInfo.requiresFasting
                      ? 'bg-amber-50 text-amber-900 border border-amber-200'
                      : 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                  }`}
                >
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Preparation note for {formData.testName}:</span>
                    <p className="mt-0.5">{fastingInfo.instructions}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Row 3: Date & Preferred Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className="block text-xs font-bold text-slate-800 mb-1.5">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="preferredDate"
                    type="date"
                    min={today}
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                    className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-white border text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500 ${
                      errors.preferredDate ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.preferredDate && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.preferredDate}</span>
                  </p>
                )}
              </div>

              {/* Preferred Time Slot */}
              <div>
                <label htmlFor="preferredTime" className="block text-xs font-bold text-slate-800 mb-1.5">
                  Preferred Time Slot <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    className="w-full pl-10 pr-8 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  >
                    {timeSlots.map((slot, idx) => (
                      <option key={idx} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

            </div>

            {/* Row 4: Collection Location Preference (Centre vs Home) */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-2">
                Sample Collection Preference
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleInputChange('collectionType', 'centre')}
                  className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                    formData.collectionType === 'centre'
                      ? 'bg-teal-50/80 border-teal-500 ring-2 ring-teal-500/20'
                      : 'bg-white border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <Building2
                    className={`w-5 h-5 shrink-0 mt-0.5 ${
                      formData.collectionType === 'centre' ? 'text-teal-700' : 'text-slate-400'
                    }`}
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Centre Visit (Recommended)
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Parmandapur, Sajoi (Near JS Public School)
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleInputChange('collectionType', 'home')}
                  className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                    formData.collectionType === 'home'
                      ? 'bg-teal-50/80 border-teal-500 ring-2 ring-teal-500/20'
                      : 'bg-white border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <Home
                    className={`w-5 h-5 shrink-0 mt-0.5 ${
                      formData.collectionType === 'home' ? 'text-teal-700' : 'text-slate-400'
                    }`}
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Home Sample Collection Inquiry
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Subject to phlebotomist availability in Parmandapur / Sajoi area
                    </span>
                  </div>
                </button>
              </div>

              {/* If Home collection chosen, address input */}
              {formData.collectionType === 'home' && (
                <div className="mt-3">
                  <label htmlFor="address" className="block text-xs font-bold text-slate-800 mb-1">
                    Your Address / Landmark in Parmandapur/Sajoi area <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="address"
                    type="text"
                    value={formData.address || ''}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="House / Street / Near landmark in Sajoi / Parmandapur"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500 ${
                      errors.address ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.address && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.address}</span>
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Row 5: Message or Additional Information */}
            <div>
              <label htmlFor="notes" className="block text-xs font-bold text-slate-800 mb-1.5">
                Message or Additional Information (Optional)
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <textarea
                  id="notes"
                  rows={3}
                  value={formData.notes || ''}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="Doctor's name, clinical symptoms, fasting status, or special queries..."
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-teal-600 via-teal-700 to-sky-700 hover:from-teal-700 hover:to-sky-800 shadow-md shadow-teal-700/20 hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer transform active:scale-99"
              >
                <Send className="w-5 h-5 text-teal-200" />
                <span>Prepare & Send Booking Request via WhatsApp</span>
              </button>
            </div>

          </form>

          {/* Prepared State / Confirmation Launch Card */}
          {isPrepared && (
            <div
              id="prepared-booking-card"
              className="mt-8 p-6 bg-white rounded-2xl border-2 border-emerald-400 shadow-lg space-y-4 animate-fadeIn"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">
                    Booking Request Prepared!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    Your request details have been drafted for <strong>SAVE Collection Centre</strong>. Please tap the WhatsApp button below to submit the message to our centre staff for schedule verification.
                  </p>
                </div>
              </div>

              {/* Message Preview Box */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 font-mono whitespace-pre-wrap leading-relaxed select-all">
                {generateWhatsAppBookingMessage(formData)}
              </div>

              {/* Two CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={generateWhatsAppLink(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Open WhatsApp to Confirm (+91 7071876466)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>{copied ? 'Copied Message!' : 'Copy Text'}</span>
                </button>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
                <span>Direct Contact: +91 7071876466</span>
                <button
                  onClick={handleReset}
                  className="text-teal-700 font-semibold hover:underline cursor-pointer"
                >
                  Book for Another Patient
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
