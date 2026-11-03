import { DiagnosticTest } from '../data/tests';

/**
 * Filter diagnostic tests by search query string and optional category filter
 */
export function filterDiagnosticTests(
  tests: DiagnosticTest[],
  searchQuery: string,
  selectedCategory: string = 'all'
): DiagnosticTest[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const queryTokens = normalizedQuery ? normalizedQuery.split(/\s+/).filter(Boolean) : [];

  return tests.filter((test) => {
    // 1. Category Matching
    const matchesCategory =
      selectedCategory === 'all' ||
      test.category === selectedCategory ||
      (selectedCategory === 'routine' &&
        (test.id === 'cbc-hemogram' || test.id === 'esr' || test.id === 'urine-routine-microscopy'));

    if (!matchesCategory) {
      return false;
    }

    // 2. Search Query Matching
    if (queryTokens.length === 0) {
      return true;
    }

    // Aggregate searchable text
    const searchableFields = [
      test.name,
      test.hindiName || '',
      test.description,
      test.sampleType,
      ...(test.keyParameters || []),
    ]
      .join(' ')
      .toLowerCase();

    // Every token in query should be found in the searchable fields
    return queryTokens.every((token) => searchableFields.includes(token));
  });
}

/**
 * Quick search suggestion chips for popular diagnostic queries
 */
export const POPULAR_SEARCH_PRESETS = [
  'CBC',
  'Blood Sugar',
  'Thyroid (TSH)',
  'Lipid Profile',
  'LFT (Liver)',
  'KFT (Kidney)',
  'HbA1c',
  'Urine Routine',
  'Vitamin D & B12',
  'Widal / Typhoid',
];
