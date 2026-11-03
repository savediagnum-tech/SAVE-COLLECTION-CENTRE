import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { CENTRE_CONTACT } from '../utils/booking';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModals: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-teal-600" />
            ) : (
              <FileText className="w-5 h-5 text-sky-600" />
            )}
            <h3 id="policy-modal-title" className="text-lg font-bold text-slate-900">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Effective Date:</strong> October 2026
              </p>
              <p>
                At <strong>SAVE Collection Centre</strong> (located at Parmandapur, Sajoi, Varanasi, Uttar Pradesh – 221302), patient confidentiality and data privacy are paramount. This policy outlines how patient information is handled:
              </p>
              <h4 className="font-bold text-slate-900 text-sm mt-3">1. Information We Collect</h4>
              <p>
                When you request a test booking or contact our centre, we collect minimal necessary details including your name, mobile contact number, preferred test date and time, and physician test advice.
              </p>
              <h4 className="font-bold text-slate-900 text-sm mt-3">2. Use of Information</h4>
              <p>
                Your details are utilized solely for scheduling your sample collection, contacting you regarding sample readiness or fasting guidelines, and securely dispatching your clinical laboratory test reports to your designated WhatsApp number or email address.
              </p>
              <h4 className="font-bold text-slate-900 text-sm mt-3">3. Medical Confidentiality & Protection</h4>
              <p>
                We never sell, rent, or trade patient personal or clinical diagnostic data to advertisers or unauthorized third parties. Access to your specimen records is restricted exclusively to authorized phlebotomy and coordination personnel.
              </p>
              <h4 className="font-bold text-slate-900 text-sm mt-3">4. Contact for Privacy Inquiries</h4>
              <p>
                For any questions regarding your personal information, reach out to us directly at +91 7071876466 or visit our centre near JS Public School, Parmandapur, Sajoi.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Effective Date:</strong> October 2026
              </p>
              <p>
                Please review these Terms and Conditions governing sample collection services provided by <strong>SAVE Collection Centre</strong>, Parmandapur, Sajoi, Varanasi.
              </p>
              <h4 className="font-bold text-slate-900 text-sm mt-3">1. Service Scope</h4>
              <p>
                SAVE Collection Centre is an authorized diagnostic specimen collection facility. We collect biological samples (blood, urine, etc.) and coordinate testing with reference pathology laboratories.
              </p>
              <h4 className="font-bold text-slate-900 text-sm mt-3">2. Appointment Verification</h4>
              <p>
                Submitting an online booking request through this website prepares your request details. An appointment is officially confirmed only upon communication and verification by our staff via WhatsApp or telephone (+91 7071876466).
              </p>
              <h4 className="font-bold text-slate-900 text-sm mt-3">3. Patient Preparation Compliance</h4>
              <p>
                Patients are responsible for observing indicated preparation instructions (e.g. overnight fasting for fasting glucose and lipid profile). Non-adherence to instructions may require rescheduling to avoid misleading test results.
              </p>
              <h4 className="font-bold text-slate-900 text-sm mt-3">4. Medical Disclaimer</h4>
              <p className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 font-medium">
                Diagnostic reports are clinical aids and must always be interpreted in conjunction with clinical symptoms by a qualified registered medical practitioner. Self-medication or altering doctor-prescribed therapies based on diagnostic numbers alone is strictly discouraged.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition-colors"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
