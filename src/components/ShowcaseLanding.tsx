import React, { useState } from 'react';
import { ScreenId, ScreenInfo } from '../types';
import { SCREENS_DATA } from '../data/mockData';
import { LandingHeader } from './landing/LandingHeader';
import { LandingHero } from './landing/LandingHero';
import { DesignPillars } from './landing/DesignPillars';
import { ScreensGrid } from './landing/ScreensGrid';
import { BrandIdentitySection } from './landing/BrandIdentitySection';
import { LandingFooter } from './landing/LandingFooter';

interface Props {
  onOpenScreenSimulator: (screenId: ScreenId) => void;
  onSwitchToFullApp: () => void;
}

export const ShowcaseLanding: React.FC<Props> = ({
  onOpenScreenSimulator,
  onSwitchToFullApp
}) => {
  const [mockupIndex, setMockupIndex] = useState(0);

  const handlePrev = () => {
    setMockupIndex((prev) => (prev - 1 + SCREENS_DATA.length) % SCREENS_DATA.length);
  };

  const handleNext = () => {
    setMockupIndex((prev) => (prev + 1) % SCREENS_DATA.length);
  };

  const handleSelectScreenCard = (screen: ScreenInfo) => {
    setMockupIndex(screen.number - 1);
    onOpenScreenSimulator(screen.id);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-coffee-900 selection:bg-coffee-200 selection:text-coffee-900">
      {/* 1. Announcement & Sticky Navigation Header */}
      <LandingHeader onSwitchToFullApp={onSwitchToFullApp} />

      {/* 2. Hero Section with Interactive Mockup Carousel */}
      <LandingHero
        mockupIndex={mockupIndex}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelectIndex={setMockupIndex}
        onOpenScreenSimulator={onOpenScreenSimulator}
      />

      {/* 3. Design Foundations & Pillars */}
      <DesignPillars />

      {/* 4. Interactive 9-Screen Ecosystem Grid */}
      <ScreensGrid onSelectScreenCard={handleSelectScreenCard} />

      {/* 5. Brand Identity, Color Tokens & Logo Variations */}
      <BrandIdentitySection />

      {/* 6. System Footer */}
      <LandingFooter />
    </div>
  );
};
