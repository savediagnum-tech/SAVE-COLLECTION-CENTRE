/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { DiagnosticTests } from './components/DiagnosticTests';
import { BookingForm } from './components/BookingForm';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { LocationContact } from './components/LocationContact';
import { PrescriptionUpload } from './components/PrescriptionUpload';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { TestPrepGuideModal } from './components/TestPrepGuideModal';
import { PolicyModals } from './components/PolicyModals';

export default function App() {
  const [selectedTestToBook, setSelectedTestToBook] = useState<string>('');
  const [isPrepGuideOpen, setIsPrepGuideOpen] = useState<boolean>(false);
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookTestClick = (testName?: string) => {
    if (testName) {
      setSelectedTestToBook(testName);
    }
    scrollToSection('book-test');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Navigation Header */}
      <Header
        onBookClick={() => handleBookTestClick()}
        onNavigate={scrollToSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Homepage Hero Section */}
        <Hero
          onBookClick={() => handleBookTestClick()}
          onServicesClick={() => scrollToSection('tests')}
        />

        {/* 2. About Us Section */}
        <AboutUs />

        {/* 3. Diagnostic Tests Section */}
        <DiagnosticTests
          onSelectTestToBook={(testName) => handleBookTestClick(testName)}
          onOpenPrepGuide={() => setIsPrepGuideOpen(true)}
        />

        {/* 4. Online Test Booking Section */}
        <BookingForm
          selectedTestFromCard={selectedTestToBook}
          onClearSelectedTest={() => setSelectedTestToBook('')}
        />

        {/* 5. Doctor Prescription Photo Assistant */}
        <PrescriptionUpload />

        {/* 6. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 7. How It Works Section */}
        <HowItWorks onBookClick={() => handleBookTestClick()} />

        {/* 8. Frequently Asked Questions (FAQ) Section */}
        <FAQSection />

        {/* 9. Location and Contact Section */}
        <LocationContact onBookClick={() => handleBookTestClick()} />
      </main>

      {/* 8. Website Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenPolicy={(type) => setPolicyType(type)}
      />

      {/* Mobile Sticky Action Bar (Android & iOS) */}
      <MobileStickyBar onBookClick={() => handleBookTestClick()} />

      {/* Test Preparation Guide Modal */}
      <TestPrepGuideModal
        isOpen={isPrepGuideOpen}
        onClose={() => setIsPrepGuideOpen(false)}
        onBookTest={() => {
          setIsPrepGuideOpen(false);
          handleBookTestClick();
        }}
      />

      {/* Privacy Policy & Terms and Conditions Modals */}
      <PolicyModals
        type={policyType}
        onClose={() => setPolicyType(null)}
      />
    </div>
  );
}
