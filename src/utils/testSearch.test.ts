import test from 'node:test';
import assert from 'node:assert/strict';
import { filterDiagnosticTests, POPULAR_SEARCH_PRESETS } from './testSearch';
import { DIAGNOSTIC_TESTS } from '../data/tests';

test('filterDiagnosticTests returns all tests when search query is empty', () => {
  const result = filterDiagnosticTests(DIAGNOSTIC_TESTS, '', 'all');
  assert.equal(result.length, DIAGNOSTIC_TESTS.length);
});

test('filterDiagnosticTests finds tests by name case-insensitively', () => {
  const cbc = filterDiagnosticTests(DIAGNOSTIC_TESTS, 'cbc', 'all');
  assert.ok(cbc.length > 0);
  assert.equal(cbc[0].id, 'cbc-hemogram');

  const thyroid = filterDiagnosticTests(DIAGNOSTIC_TESTS, 'tHyRoId', 'all');
  assert.ok(thyroid.length > 0);
  assert.equal(thyroid[0].id, 'thyroid-profile');
});

test('filterDiagnosticTests finds tests by Hindi name', () => {
  const result = filterDiagnosticTests(DIAGNOSTIC_TESTS, 'शुगर', 'all');
  assert.ok(result.length > 0);
  assert.ok(result.some((t) => t.id === 'blood-sugar-fasting-ppbs-rbs'));
});

test('filterDiagnosticTests finds tests by key parameters or symptoms', () => {
  // Hemoglobin is inside CBC
  const hbResult = filterDiagnosticTests(DIAGNOSTIC_TESTS, 'Hemoglobin', 'all');
  assert.ok(hbResult.some((t) => t.id === 'cbc-hemogram'));

  // Creatinine is inside KFT
  const creatinineResult = filterDiagnosticTests(DIAGNOSTIC_TESTS, 'Creatinine', 'all');
  assert.ok(creatinineResult.some((t) => t.id === 'kidney-function-test'));

  // SGPT is inside LFT
  const sgptResult = filterDiagnosticTests(DIAGNOSTIC_TESTS, 'SGPT', 'all');
  assert.ok(sgptResult.some((t) => t.id === 'liver-function-test'));
});

test('filterDiagnosticTests handles multi-token search terms', () => {
  const multi = filterDiagnosticTests(DIAGNOSTIC_TESTS, 'blood fasting', 'all');
  assert.ok(multi.length > 0);
  assert.ok(multi.some((t) => t.id === 'blood-sugar-fasting-ppbs-rbs'));
});

test('filterDiagnosticTests respects category filter combined with search query', () => {
  // Category diabetes with search 'sugar'
  const diabetes = filterDiagnosticTests(DIAGNOSTIC_TESTS, 'sugar', 'diabetes');
  assert.ok(diabetes.length > 0);
  assert.ok(diabetes.every((t) => t.category === 'diabetes'));

  // If category does not match, returns empty
  const mismatch = filterDiagnosticTests(DIAGNOSTIC_TESTS, 'thyroid', 'diabetes');
  assert.equal(mismatch.length, 0);
});

test('filterDiagnosticTests returns empty array for non-matching query', () => {
  const none = filterDiagnosticTests(DIAGNOSTIC_TESTS, 'nonexistentquery123xyz', 'all');
  assert.equal(none.length, 0);
});

test('POPULAR_SEARCH_PRESETS has valid suggestions', () => {
  assert.ok(Array.isArray(POPULAR_SEARCH_PRESETS));
  assert.ok(POPULAR_SEARCH_PRESETS.length >= 5);
  assert.ok(POPULAR_SEARCH_PRESETS.includes('CBC'));
});
