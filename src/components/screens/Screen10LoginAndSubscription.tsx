import React, { useState } from 'react';
import { ScreenId, FarmRepresentative, SubscriptionPlan } from '../../types';
import { FARM_REPRESENTATIVES, SUBSCRIPTION_PLANS, LOGO_LINEAL_URL } from '../../data/mockData';
import { SafeImage } from '../BrandAssets';
import { Shield, Sparkles, Users, Lock, LogIn, ChevronRight, CheckCircle2 } from 'lucide-react';
import { LoginForm } from './auth/LoginForm';
import { SubscriptionPlansView } from './auth/SubscriptionPlansView';
import { RepresentativesList } from './auth/RepresentativesList';

interface Props {
  onNavigate: (screen: ScreenId) => void;
  activeRepresentative: FarmRepresentative;
  onUpdateActiveRepresentative: (rep: FarmRepresentative) => void;
  isAuthenticated?: boolean;
  onSetAuthenticated?: (auth: boolean) => void;
}

export const Screen10LoginAndSubscription: React.FC<Props> = ({
  onNavigate,
  activeRepresentative,
  onUpdateActiveRepresentative,
  isAuthenticated = false,
  onSetAuthenticated
}) => {
  const [activeTab, setActiveTab] = useState<'login' | 'plans' | 'representatives'>('login');
  const [representatives, setRepresentatives] = useState<FarmRepresentative[]>(FARM_REPRESENTATIVES);
  const [plans, setPlans] = useState<SubscriptionPlan[]>(SUBSCRIPTION_PLANS);

  const handleLoginSuccess = (rep: FarmRepresentative) => {
    onUpdateActiveRepresentative(rep);
    if (onSetAuthenticated) {
      onSetAuthenticated(true);
    }
    // Navigate directly to the farm home/welcome screen
    onNavigate('SCREEN_2');
  };

  const handlePlanActivated = (planName: string) => {
    const updated = representatives.map((r) => ({
      ...r,
      planType: planName,
      planStatus: 'Activo' as const,
      daysLeft: 30
    }));
    setRepresentatives(updated);
    onUpdateActiveRepresentative({
      ...activeRepresentative,
      planType: planName,
      planStatus: 'Activo',
      daysLeft: 30
    });
  };

  const handleSelectRepFromDirectory = (rep: FarmRepresentative) => {
    onUpdateActiveRepresentative(rep);
    setActiveTab('login');
  };

  const handleAddRepresentative = (newRep: FarmRepresentative) => {
    setRepresentatives([newRep, ...representatives]);
    onUpdateActiveRepresentative(newRep);
  };

  return (
    <div className="flex flex-col h-full bg-[#FAF6F0] text-coffee-900 pb-8 px-4 sm:px-5 pt-3 space-y-4 overflow-y-auto no-scrollbar">
      {/* 1. Header con Branding Artesanal */}
      <div className="bg-white rounded-3xl p-5 border border-coffee-200 shadow-sm text-center space-y-2">
        <div className="w-12 h-12 mx-auto rounded-2xl bg-parchment p-1.5 border border-coffee-200 shadow-xs flex items-center justify-center">
          <SafeImage
            src={LOGO_LINEAL_URL}
            alt="Notas de Café Logo"
            className="w-full h-full object-contain"
            fallbackType="logo-lineal"
          />
        </div>

        <div>
          <span className="text-[10px] font-black tracking-widest uppercase text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/80">
            CONTROL DE ACCESO & MEMBRESÍA
          </span>
          <h2 className="text-xl font-serif font-black text-coffee-950 mt-1 leading-tight">
            Finca El Manantial
          </h2>
          <p className="text-xs text-coffee-600 max-w-xs mx-auto">
            Ingreso con usuario y clave para cada representante de la finca con membresía de pago activa.
          </p>
        </div>

        {/* Estado actual de la sesión */}
        {isAuthenticated && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-leaf-50 border border-leaf-200 text-leaf-800 rounded-full text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-leaf-700" />
            <span>Sesión iniciada: {activeRepresentative.name}</span>
          </div>
        )}
      </div>

      {/* 2. Selector de Pestañas */}
      <div className="grid grid-cols-3 gap-1 bg-parchment p-1 rounded-2xl border border-coffee-200">
        <button
          type="button"
          onClick={() => setActiveTab('login')}
          className={`py-2 px-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'login'
              ? 'bg-coffee-800 text-white shadow-xs'
              : 'text-coffee-700 hover:text-coffee-950'
          }`}
        >
          <LogIn className="w-3.5 h-3.5" />
          <span className="truncate">Ingreso</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('plans')}
          className={`py-2 px-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'plans'
              ? 'bg-coffee-800 text-white shadow-xs'
              : 'text-coffee-700 hover:text-coffee-950'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span className="truncate">Planes Pago</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('representatives')}
          className={`py-2 px-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeTab === 'representatives'
              ? 'bg-coffee-800 text-white shadow-xs'
              : 'text-coffee-700 hover:text-coffee-950'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span className="truncate">Equipo ({representatives.length})</span>
        </button>
      </div>

      {/* 3. Contenido Dinámico de la Pestaña */}
      {activeTab === 'login' && (
        <LoginForm
          representatives={representatives}
          activeRepresentative={activeRepresentative}
          onSelectRepresentative={onUpdateActiveRepresentative}
          onLoginSuccess={handleLoginSuccess}
          onNavigateToPlans={() => setActiveTab('plans')}
        />
      )}

      {activeTab === 'plans' && (
        <SubscriptionPlansView
          plans={plans}
          activeRepresentative={activeRepresentative}
          onPlanActivated={handlePlanActivated}
          onBackToLogin={() => setActiveTab('login')}
        />
      )}

      {activeTab === 'representatives' && (
        <RepresentativesList
          representatives={representatives}
          onSelectRep={handleSelectRepFromDirectory}
          onAddRepresentative={handleAddRepresentative}
        />
      )}

      {/* 4. Enlace directo si ya está en sesión */}
      {isAuthenticated && (
        <div className="pt-2 border-t border-coffee-200">
          <button
            type="button"
            onClick={() => onNavigate('SCREEN_2')}
            className="w-full min-h-[46px] py-2.5 px-3 bg-white hover:bg-coffee-100 text-coffee-800 border border-coffee-300 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-98"
          >
            <span>Continuar al Cuaderno de la Finca</span>
            <ChevronRight className="w-4 h-4 text-coffee-600" />
          </button>
        </div>
      )}
    </div>
  );
};
