import React from 'react';
import { Wifi, WifiOff, Battery } from 'lucide-react';

interface Props {
  isOffline: boolean;
}

export const PhoneStatusBar: React.FC<Props> = ({ isOffline }) => {
  return (
    <div className="h-10 w-full bg-[#FAF6F0] px-6 flex items-center justify-between text-xs font-semibold text-coffee-900 shrink-0 z-30 select-none">
      <span className="text-[11px] font-bold">10:42</span>
      
      {/* Dynamic Island / Speaker Pill */}
      <div className="w-20 h-4 bg-coffee-950 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-coffee-900 mr-2" />
      </div>

      <div className="flex items-center gap-1.5 text-[11px]">
        {isOffline ? (
          <WifiOff className="w-3.5 h-3.5 text-amber-700" />
        ) : (
          <Wifi className="w-3.5 h-3.5 text-leaf-700" />
        )}
        <span className="font-bold text-[10px]">4G</span>
        <Battery className="w-4 h-4 text-coffee-800" />
      </div>
    </div>
  );
};
