import React, { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackType?: 'hero' | 'logo-lineal' | 'logo-silueta' | 'logo-emblema';
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackType = 'hero'
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    if (fallbackType === 'logo-lineal') {
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor">
          <ellipse cx="50" cy="50" rx="36" ry="24" transform="rotate(-22 50 50)" stroke="#3D2314" strokeWidth="4.5" fill="#FAF6F0" />
          <path d="M28 42 C 45 42, 42 58, 72 58" stroke="#3D2314" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    }
    if (fallbackType === 'logo-silueta') {
      return (
        <svg viewBox="0 0 100 100" className={className} fill="#3D2314">
          <ellipse cx="50" cy="50" rx="38" ry="26" transform="rotate(-22 50 50)" />
          <path d="M26 40 C 46 40, 42 60, 74 60" stroke="#FCF9F3" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        </svg>
      );
    }
    if (fallbackType === 'logo-emblema') {
      return (
        <div className={`flex flex-col items-center justify-center p-2 rounded-xl border border-coffee-200 bg-parchment text-coffee-800 ${className}`}>
          <div className="w-9 h-9 rounded-full bg-coffee-800 flex items-center justify-center text-amber-100 text-sm font-serif font-bold">
            NC
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1 text-coffee-900">NOTAS DE CAFÉ</span>
          <span className="text-[8px] text-coffee-500">ORIGEN & TERROIR</span>
        </div>
      );
    }
    // Hero fallback: organic parchment gradient with subtle grain and coffee bean
    return (
      <div className={`relative bg-gradient-to-br from-coffee-800 via-coffee-900 to-coffee-950 flex items-center justify-center text-amber-100 ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(164,104,63,0.3)_0%,transparent_70%)]" />
        <div className="relative text-center p-6 space-y-2">
          <span className="text-3xl">☕</span>
          <p className="text-xs uppercase font-bold tracking-widest text-amber-200">Notas de Café</p>
          <p className="text-[11px] text-coffee-200">Cuaderno Digital de Campo</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
    />
  );
};

export const CoffeeBeanIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-5 h-5',
  color = 'currentColor'
}) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="12" rx="9" ry="6" transform="rotate(-25 12 12)" />
    <path d="M6 10c4 0 3 4 12 4" />
  </svg>
);
