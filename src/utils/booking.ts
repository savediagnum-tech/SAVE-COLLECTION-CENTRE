export interface BookingFormData {
  patientName: string;
  mobileNumber: string;
  testName: string;
  preferredDate: string;
  preferredTime: string;
  collectionType: 'centre' | 'home';
  address?: string;
  notes?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const LOGO_PATH = '/assets/aistudio/file_0000000099f0821188745b8cb9cde9a7_c872a8e2.jpg';

export const CENTRE_CONTACT = {
  name: 'SAVE Collection Centre',
  phone: '+917071876466',
  displayPhone: '+91 7071876466',
  whatsappNumber: '917071876466',
  address: 'Parmandapur, Sajoi, Varanasi, Uttar Pradesh – 221302',
  landmark: 'Near JS Public School',
  city: 'Varanasi',
  pincode: '221302',
  timings: 'Monday – Saturday: 6:30 AM – 8:00 PM | Sunday: 6:30 AM – 2:00 PM',
  logo: LOGO_PATH,
  instagram: 'https://www.instagram.com/savecollectioncentre',
  instagramHandle: '@savecollectioncentre',
  youtube: 'https://www.youtube.com/@SaveCCentre',
  youtubeHandle: '@SaveCCentre',
  facebook: 'https://www.facebook.com/share/1Ke8rAF8E7/',
};

/**
 * Validates 10-digit Indian mobile number
 */
export function validateIndianMobile(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return /^[6-9]\d{9}$/.test(cleaned);
  }
  if (cleaned.length === 12 && cleaned.startsWith('91')) {
    return /^[6-9]\d{9}$/.test(cleaned.slice(2));
  }
  return false;
}

export function validateBookingForm(data: BookingFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.patientName || data.patientName.trim().length < 2) {
    errors.patientName = 'Please enter a valid patient name (minimum 2 characters)';
  }

  if (!data.mobileNumber || !validateIndianMobile(data.mobileNumber)) {
    errors.mobileNumber = 'Please enter a valid 10-digit Indian mobile number (starts with 6, 7, 8, or 9)';
  }

  if (!data.testName || data.testName.trim().length === 0) {
    errors.testName = 'Please select or specify at least one diagnostic test';
  }

  if (!data.preferredDate) {
    errors.preferredDate = 'Please select a preferred date for sample collection';
  }

  if (!data.preferredTime) {
    errors.preferredTime = 'Please select a preferred time slot';
  }

  if (data.collectionType === 'home' && (!data.address || data.address.trim().length < 5)) {
    errors.address = 'Please provide your full address / landmark in Parmandapur/Sajoi area for home visit';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Generates formatted WhatsApp message for booking request
 */
export function generateWhatsAppBookingMessage(data: BookingFormData): string {
  const dateFormatted = data.preferredDate;
  const collectionLabel = data.collectionType === 'home' ? 'Home Sample Collection' : 'Centre Visit (Parmandapur)';

  let message = `*NEW TEST BOOKING REQUEST*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Centre:* SAVE Collection Centre, Sajoi, Varanasi\n\n`;
  message += `👤 *Patient Name:* ${data.patientName.trim()}\n`;
  message += `📱 *Mobile Number:* ${data.mobileNumber.trim()}\n`;
  message += `🧪 *Test(s) Required:* ${data.testName.trim()}\n`;
  message += `📅 *Preferred Date:* ${dateFormatted}\n`;
  message += `⏰ *Preferred Time:* ${data.preferredTime}\n`;
  message += `📍 *Service Type:* ${collectionLabel}\n`;

  if (data.collectionType === 'home' && data.address) {
    message += `🏠 *Address / Landmark:* ${data.address.trim()}\n`;
  }

  if (data.notes && data.notes.trim()) {
    message += `📝 *Notes/Doctor Advice:* ${data.notes.trim()}\n`;
  }

  message += `\n_Please confirm test availability, sample collection schedule, and fasting requirements._`;

  return message;
}

/**
 * Generates direct WhatsApp URL
 */
export function generateWhatsAppLink(data: BookingFormData): string {
  const text = generateWhatsAppBookingMessage(data);
  return `https://wa.me/${CENTRE_CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Checks if a test requires fasting based on test name
 */
export function getTestFastingRequirement(testName: string): {
  requiresFasting: boolean;
  instructions: string;
} {
  const lower = testName.toLowerCase();

  if (
    lower.includes('fasting') ||
    lower.includes('lipid') ||
    lower.includes('blood sugar — fasting') ||
    lower.includes('cholesterol')
  ) {
    return {
      requiresFasting: true,
      instructions: '10–12 hours overnight fasting required. Water is permitted, but avoid tea, coffee, or food.',
    };
  }

  if (lower.includes('ppbs') || lower.includes('post prandial')) {
    return {
      requiresFasting: false,
      instructions: 'Sample must be collected exactly 2 hours after the start of a meal.',
    };
  }

  if (lower.includes('urine')) {
    return {
      requiresFasting: false,
      instructions: 'Early morning first midstream urine sample is recommended in a sterile container.',
    };
  }

  if (lower.includes('thyroid')) {
    return {
      requiresFasting: false,
      instructions: 'Morning sample is preferred before taking daily thyroid medication (unless advised otherwise by doctor).',
    };
  }

  return {
    requiresFasting: false,
    instructions: 'No special fasting required for this test. Maintain routine hydration.',
  };
}
