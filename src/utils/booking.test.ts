import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateIndianMobile,
  validateBookingForm,
  generateWhatsAppBookingMessage,
  generateWhatsAppLink,
  getTestFastingRequirement,
  CENTRE_CONTACT,
  type BookingFormData,
} from './booking';

test('validateIndianMobile validates valid 10-digit Indian numbers', () => {
  assert.equal(validateIndianMobile('7071876466'), true);
  assert.equal(validateIndianMobile('9876543210'), true);
  assert.equal(validateIndianMobile('8123456789'), true);
  assert.equal(validateIndianMobile('+91 7071876466'), true);
});

test('validateIndianMobile rejects invalid numbers', () => {
  assert.equal(validateIndianMobile('1234567890'), false); // Starts with 1
  assert.equal(validateIndianMobile('5555555555'), false); // Starts with 5
  assert.equal(validateIndianMobile('707187646'), false);  // Only 9 digits
  assert.equal(validateIndianMobile('abc7071876'), false);
});

test('validateBookingForm flags empty or invalid inputs', () => {
  const invalidData: BookingFormData = {
    patientName: '',
    mobileNumber: '123',
    testName: '',
    preferredDate: '',
    preferredTime: '',
    collectionType: 'centre',
  };

  const result = validateBookingForm(invalidData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.patientName);
  assert.ok(result.errors.mobileNumber);
  assert.ok(result.errors.testName);
  assert.ok(result.errors.preferredDate);
  assert.ok(result.errors.preferredTime);
});

test('validateBookingForm requires address for home collection', () => {
  const homeData: BookingFormData = {
    patientName: 'Ramesh Sharma',
    mobileNumber: '9876543210',
    testName: 'Complete Blood Count (CBC)',
    preferredDate: '2026-10-28',
    preferredTime: '08:00 AM - 09:00 AM',
    collectionType: 'home',
    address: '',
  };

  const result = validateBookingForm(homeData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.address);
});

test('validateBookingForm succeeds for valid submission', () => {
  const validData: BookingFormData = {
    patientName: 'Ramesh Sharma',
    mobileNumber: '9876543210',
    testName: 'Complete Blood Count (CBC)',
    preferredDate: '2026-10-28',
    preferredTime: '08:00 AM - 09:00 AM',
    collectionType: 'centre',
  };

  const result = validateBookingForm(validData);
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('generateWhatsAppBookingMessage formats patient info and destination', () => {
  const data: BookingFormData = {
    patientName: 'Anjali Verma',
    mobileNumber: '7071876466',
    testName: 'Thyroid Profile (T3, T4, TSH)',
    preferredDate: '2026-10-29',
    preferredTime: '09:00 AM - 10:00 AM',
    collectionType: 'centre',
    notes: 'Doctor asked for fasting morning sample',
  };

  const message = generateWhatsAppBookingMessage(data);
  assert.ok(message.includes('SAVE Collection Centre'));
  assert.ok(message.includes('Anjali Verma'));
  assert.ok(message.includes('Thyroid Profile'));
  assert.ok(message.includes('Doctor asked for fasting'));

  const link = generateWhatsAppLink(data);
  assert.ok(link.startsWith('https://wa.me/917071876466?text='));
});

test('getTestFastingRequirement identifies fasting for lipid and blood sugar fasting', () => {
  assert.equal(getTestFastingRequirement('Lipid Profile').requiresFasting, true);
  assert.equal(getTestFastingRequirement('Blood Sugar — Fasting').requiresFasting, true);
  assert.equal(getTestFastingRequirement('CBC / Hemogram').requiresFasting, false);
});

test('CENTRE_CONTACT contains official social channels', () => {
  assert.equal(CENTRE_CONTACT.youtube, 'https://www.youtube.com/@SaveCCentre');
  assert.equal(CENTRE_CONTACT.instagram, 'https://www.instagram.com/savecollectioncentre');
  assert.equal(CENTRE_CONTACT.facebook, 'https://www.facebook.com/share/1Ke8rAF8E7/');
});
