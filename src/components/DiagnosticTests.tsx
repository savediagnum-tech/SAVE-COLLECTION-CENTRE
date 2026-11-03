import React, { useState, useMemo } from 'react';
import {
  Activity,
  Droplet,
  FlaskConical,
  HeartPulse,
  Dna,
  ShieldAlert,
  Search,
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  Info,
  Thermometer,
  Microscope,
  Sun,
  Layers,
  ChevronDown,
  ChevronUp,
  X,
  SlidersHorizontal,
} from 'lucide-react';
import { DIAGNOSTIC_TESTS, type DiagnosticTest } from '../data/tests';
import { filterDiagnosticTests, POPULAR_SEARCH_PRESETS } from '../utils/testSearch';

interface DiagnosticTestsProps {
  onSelectTestToBook: (testName: string) => void;
  onOpenPrepGuide: (testId?: string) => void;
}

export const DiagnosticTests: React.FC<DiagnosticTestsProps> = ({
  onSelectTestToBook,
  onOpenPrepGuide,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedTestId, setExpandedTestId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Tests (सभी जांच)' },
    { id: 'routine', label: 'CBC & Routine' },
    { id: 'diabetes', label: 'Sugar & Diabetes' },
    { id: 'organ', label: 'LFT, KFT & Lipid' },
    { id: 'thyroid', label: 'Thyroid Profile' },
    { id: 'infection', label: 'Fever & Infections' },
    { id: 'vitamins', label: 'Vitamins B12 & D' },
  ];

  const filteredTests = useMemo(() => {
    return filterDiagnosticTests(DIAGNOSTIC_TESTS, searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory]);

  const getTestIcon = (id: string) => {
    switch (id) {
      case 'cbc-hemogram':
        return <Activity className="w-5 h-5 text-teal-600" />;
      case 'esr':
        return <FlaskConical className="w-5 h-5 text-sky-600" />;
      case 'blood-sugar-fasting-ppbs-rbs':
      case 'hba1c':
        return <Droplet className="w-5 h-5 text-amber-600" />;
      case 'liver-function-test':
      case 'kidney-function-test':
        return <HeartPulse className="w-5 h-5 text-emerald-600" />;
      case 'thyroid-profile':
        return <Dna className="w-5 h-5 text-indigo-600" />;
      case 'lipid-profile':
        return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'urine-routine-microscopy':
        return <Microscope className="w-5 h-5 text-teal-600" />;
      case 'widal-test':
      case 'malaria-test':
        return <Thermometer className="w-5 h-5 text-orange-600" />;
      case 'vitamin-b12-and-d':
        return <Sun className="w-5 h-5 text-amber-500" />;
      default:
        return <Layers className="w-5 h-5 text-teal-600" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedTestId(expandedTestId === id ? null : id);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handlePresetClick = (preset: string) => {
    if (searchQuery.toLowerCase() === preset.toLowerCase()) {
      setSearchQuery('');
    } else {
      setSearchQuery(preset);
      setSelectedCategory('all');
    }
  };

  return (
    <section id="tests" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wide uppercase">
            <FlaskConical className="w-3.5 h-3.5 text-teal-600" />
            <span>Pathology Collection Menu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Diagnostic Tests
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Available medical diagnostic sample collections for clinical evaluation, monitoring, and wellness screening.
          </p>
        </div>

        {/* Enhanced Search & Filter Bar */}
        <div className="mt-8 max-w-4xl mx-auto space-y-4">
          
          {/* Main Search Input Box */}
          <div className="relative group">
            <label htmlFor="diagnostic-test-search" className="sr-only">
              Search diagnostic tests by name, Hindi name, or parameter
            </label>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none text-slate-400 group-focus-within:text-teal-600 transition-colors">
              <Search className="w-5 h-5" />
            </div>

            <input
              id="diagnostic-test-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tests by name (e.g. CBC, Sugar, Thyroid, LFT, Lipid, Fever, Urine, HbA1c)..."
              className="w-full pl-12 pr-28 sm:pr-32 py-4 bg-white rounded-2xl border-2 border-slate-200 text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-hidden focus:border-teal-600 focus:ring-4 focus:ring-teal-500/10 shadow-sm transition-all"
              autoComplete="off"
            />

            {/* Clear Button / Search Count Badge inside input */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                  aria-label="Clear search query"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Clear</span>
                </button>
              )}
              <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold bg-teal-50 text-teal-800 border border-teal-200">
                {filteredTests.length} {filteredTests.length === 1 ? 'test' : 'tests'}
              </span>
            </div>
          </div>

          {/* Quick Search Preset Chips */}
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-slate-500 font-medium shrink-0 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Quick Search:</span>
            </span>
            {POPULAR_SEARCH_PRESETS.map((preset) => {
              const isSelected = searchQuery.toLowerCase() === preset.toLowerCase();
              return (
                <button
                  key={preset}
                  type="button"
                  onClick={() => handlePresetClick(preset)}
                  className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-teal-700 text-white font-semibold shadow-xs'
                      : 'bg-white hover:bg-teal-50 text-slate-700 hover:text-teal-800 border border-slate-200 shadow-2xs'
                  }`}
                  aria-label={`Search for ${preset}`}
                >
                  {preset}
                </button>
              );
            })}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Active Search & Filter Status Bar */}
          {(searchQuery || selectedCategory !== 'all') && (
            <div className="bg-teal-50/80 rounded-xl p-3 border border-teal-200/80 flex items-center justify-between gap-3 text-xs text-teal-900">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold">
                  Found {filteredTests.length} {filteredTests.length === 1 ? 'test' : 'tests'}
                </span>
                {searchQuery && (
                  <span>
                    matching <strong className="text-teal-950 font-bold">"{searchQuery}"</strong>
                  </span>
                )}
                {selectedCategory !== 'all' && (
                  <span className="text-teal-700">
                    in category <em>{categories.find((c) => c.id === selectedCategory)?.label}</em>
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-teal-800 hover:text-teal-950 font-bold underline cursor-pointer shrink-0"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>

        {/* Tests Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => {
            const isExpanded = expandedTestId === test.id;
            return (
              <div
                key={test.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top Section */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Icon & Badges */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getTestIcon(test.id)}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {test.popular && (
                        <span className="text-[10px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Frequently Prescribed
                        </span>
                      )}
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          test.fasting
                            ? 'bg-amber-50 text-amber-800 border border-amber-200'
                            : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        }`}
                      >
                        {test.fasting ? 'Fasting Required' : 'No Fasting'}
                      </span>
                    </div>
                  </div>

                  {/* Title & Hindi Tag */}
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-teal-700 transition-colors">
                      {test.name}
                    </h3>
                    {test.hindiName && (
                      <p className="text-xs text-teal-700 font-medium mt-0.5">
                        {test.hindiName}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {test.description}
                  </p>

                  {/* Key Parameters / Details toggle */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleExpand(test.id)}
                      className="text-xs font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Key Parameters' : 'View Key Parameters & Sample Info'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 p-3 bg-slate-50 rounded-xl text-xs space-y-2 border border-slate-200/60 animate-fadeIn">
                        <div>
                          <span className="font-semibold text-slate-700">Sample Type: </span>
                          <span className="text-slate-600">{test.sampleType}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-slate-700">Preparation: </span>
                          <span className="text-slate-600">{test.fastingNote}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-slate-700">Includes: </span>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {test.keyParameters.map((param, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[11px] text-slate-700"
                              >
                                {param}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 sm:p-5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Report: {test.reportTurnaround}</span>
                  </div>

                  <button
                    onClick={() => onSelectTestToBook(test.name)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 rounded-xl shadow-xs transition-colors cursor-pointer"
                    aria-label={`Book ${test.name}`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Test</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search finds nothing */}
        {filteredTests.length === 0 && (
          <div className="mt-12 text-center py-12 bg-white rounded-3xl border border-dashed border-slate-300 p-8 max-w-lg mx-auto shadow-xs">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-3">
              <FlaskConical className="w-7 h-7" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-800">
              No tests found matching "{searchQuery}"
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
              Looking for a specialized or doctor-prescribed test? SAVE Collection Centre collects blood, urine, and pathology samples for an extensive catalog of diagnostic investigations upon request.
            </p>
            
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleClearSearch}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Clear Search & View All
              </button>
              <button
                type="button"
                onClick={() => onSelectTestToBook(`Doctor Prescription Test: ${searchQuery}`)}
                className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Book Custom Test "{searchQuery}"
              </button>
            </div>
          </div>
        )}

        {/* Notice on Test Fasting & Doctor Prescription */}
        <div className="mt-12 bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700">
              <span className="font-bold text-slate-900">Unsure about fasting or test requirements?</span>
              <p className="text-slate-500 mt-0.5">
                Certain tests (like Lipid Profile and Fasting Blood Sugar) strictly require 10–12 hours of overnight fasting. We are happy to clarify before you visit.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenPrepGuide()}
            className="shrink-0 px-4 py-2 rounded-xl border border-teal-300 text-teal-700 bg-teal-50/50 hover:bg-teal-100 font-semibold text-xs transition-colors cursor-pointer"
          >
            Read Fasting Guide
          </button>
        </div>

      </div>
    </section>
  );
};
