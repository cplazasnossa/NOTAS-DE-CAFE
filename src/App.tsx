import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { MobileApp } from './components/MobileApp';

export default function App() {
  return (
    <LanguageProvider>
      <MobileApp />
    </LanguageProvider>
  );
}

