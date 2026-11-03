import React from 'react';
import { X, AlertCircle, Droplets, Utensils, Clock, Pill, CheckCircle2 } from 'lucide-react';

interface TestPrepGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookTest: () => void;
}

export const TestPrepGuideModal: React.FC<TestPrepGuideModalProps> = ({
  isOpen,
  onClose,
  onBookTest,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="prep-guide-title"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10">
          <div>
            <h3 id="prep-guide-title" className="text-xl font-extrabold text-slate-900">
              Patient Test Preparation Guidelines
            </h3>
            <p className="text-xs text-teal-700 font-medium">
              SAVE Collection Centre • Essential Pre-Test Instructions
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close Guide Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 text-sm text-slate-700">
          
          <div className="p-4 bg-teal-50/80 rounded-2xl border border-teal-200/80 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <p className="text-xs text-teal-950 leading-relaxed">
              Correct sample preparation is essential for reliable diagnostic evaluations. Please read the guidelines below according to the test requested by your doctor.
            </p>
          </div>

          {/* Guideline 1: Fasting Tests */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <Utensils className="w-4 h-4 text-amber-600" />
              <span>1. Overnight Fasting Tests (Lipid Profile, Fasting Blood Sugar)</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-2">
              <li>Requires <strong>10 to 12 hours</strong> of strict overnight fasting.</li>
              <li>Plain drinking water is permitted and encouraged to stay hydrated.</li>
              <li>Do NOT drink tea, coffee, milk, juices, or chew gutkha/tobacco before giving the sample.</li>
              <li>Best sampled early morning between 7:00 AM – 9:00 AM at our centre.</li>
            </ul>
          </div>

          {/* Guideline 2: Post-Prandial (PPBS) */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <Clock className="w-4 h-4 text-sky-600" />
              <span>2. Post-Prandial Blood Sugar (PPBS)</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-2">
              <li>Sample must be drawn <strong>exactly 2 hours</strong> from the first bite of your meal.</li>
              <li>Do not snack or drink sugary beverages during the 2-hour waiting window.</li>
              <li>Reach the centre 10–15 minutes before your 2-hour completion time.</li>
            </ul>
          </div>

          {/* Guideline 3: Thyroid Profile (T3, T4, TSH) */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <Pill className="w-4 h-4 text-indigo-600" />
              <span>3. Thyroid Profile</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-2">
              <li>Morning sample is preferred.</li>
              <li>If you take daily thyroid medication (e.g. Thyronorm, Eltroxin), take your tablet <strong>after</strong> giving your blood sample, unless your physician specifically instructed otherwise.</li>
            </ul>
          </div>

          {/* Guideline 4: Urine Routine & Microscopy */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <Droplets className="w-4 h-4 text-teal-600" />
              <span>4. Urine Routine & Microscopy</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-2">
              <li>Early morning first void, <strong>clean-catch midstream urine</strong> is ideal.</li>
              <li>Discard the initial few milliliters of urine flow and collect the middle portion in the sterile container.</li>
              <li>Keep the sample container tightly sealed and deliver promptly.</li>
            </ul>
          </div>

          {/* Guideline 5: Non-Fasting Routine Tests */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>5. Routine Tests (CBC, ESR, HbA1c, Widal, Malaria)</span>
            </div>
            <p className="text-xs text-slate-600 pl-2">
              These tests do not require overnight fasting and can be collected comfortably throughout our working hours (6:30 AM – 8:00 PM).
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            Still have questions? Call +91 7071876466
          </p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookTest();
              }}
              className="flex-1 sm:flex-none px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors"
            >
              Book Test Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
