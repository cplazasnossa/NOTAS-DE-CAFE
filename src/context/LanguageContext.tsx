import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

export interface Translations {
  // Navigation & General
  showcaseMode: string;
  simulatorMode: string;
  backToShowcase: string;
  mobileSimulatorTitle: string;
  online: string;
  offline: string;
  synchronized: string;
  offlineMode: string;
  guideBtn: string;
  guideTitle: string;
  close: string;
  next: string;
  prev: string;
  allScreens: string;
  screenOf: string; // e.g. "de 9"

  // Tab Bar
  tabHome: string;
  tabFarm: string;
  tabLots: string;
  tabRecord: string;
  tabAgenda: string;

  // Screen 1: Welcome
  welcomeTitle: string;
  welcomeSubtitle: string;
  welcomeCaption: string;
  welcomeStartWorkday: string;
  welcomeWeatherTitle: string;
  welcomeWeatherDesc: string;
  welcomeWeatherPill: string;
  welcomeQuickNoteTitle: string;
  welcomeQuickNotePlaceholder: string;
  welcomeSaveNote: string;
  welcomeNoteSaved: string;
  welcomeActiveLots: string;
  welcomeActiveCut: string;
  welcomePendingTasks: string;

  // Screen 2: Dashboard
  dashTitle: string;
  dashSubtitle: string;
  dashCaption: string;
  dashTodayHarvest: string;
  dashVsLastWeek: string;
  dashHarvestKg: string;
  dashYieldRate: string;
  dashDayLaborers: string;
  dashFinancialSummary: string;
  dashEstimatedIncome: string;
  dashAccumulatedCosts: string;
  dashOperatingMargin: string;
  dashActiveLotsSection: string;
  dashQuickActionsTitle: string;
  dashActionWeighScale: string;
  dashActionRecordCost: string;
  dashActionCulturalTask: string;
  dashActionSanitaryInspect: string;
  dashActionNewTask: string;

  // Screen 3: Lots Catalog
  lotsCatalogTitle: string;
  lotsCatalogSubtitle: string;
  lotsSearchPlaceholder: string;
  lotsFilterAll: string;
  lotsFilterHarvest: string;
  lotsFilterFlower: string;
  lotsFilterMaintenance: string;
  lotsArea: string;
  lotsTrees: string;
  lotsAltitude: string;
  lotsBrix: string;
  lotsFlowering: string;
  lotsHealth: string;
  lotsViewProfile: string;
  lotsNewLotBtn: string;

  // Screen 4: Lot Profile
  lotProfileTitle: string;
  lotProfileRipeningCurve: string;
  lotProfileAgronomicSpecs: string;
  lotProfileVariety: string;
  lotProfilePlantedYear: string;
  lotProfileSensoryNotes: string;
  lotProfileRecentRecords: string;

  // Screen 5: Harvest Scale
  harvestScaleTitle: string;
  harvestScaleSubtitle: string;
  harvestScalePicker: string;
  harvestScaleLot: string;
  harvestScaleGrossKg: string;
  harvestScaleNetArrobas: string;
  harvestScaleRipeQuality: string;
  harvestScaleSaveBtn: string;
  harvestScaleSuccessMsg: string;

  // Screen 6: Record Cost
  costTitle: string;
  costSubtitle: string;
  costCategory: string;
  costAmount: string;
  costDescription: string;
  costLotOptional: string;
  costSaveBtn: string;
  costSuccessMsg: string;

  // Screen 7: Cultural Activity
  activityTitle: string;
  activitySubtitle: string;
  activityType: string;
  activityLot: string;
  activityWorkers: string;
  activityProgress: string;
  activitySaveBtn: string;
  activitySuccessMsg: string;

  // Screen 8: Observation / Health
  healthTitle: string;
  healthSubtitle: string;
  healthPestType: string;
  healthIncidence: string;
  healthBranches: string;
  healthActionReq: string;
  healthSaveBtn: string;
  healthSuccessMsg: string;

  // Screen 9: Tasks / Agenda
  agendaTitle: string;
  agendaSubtitle: string;
  agendaNewTaskBtn: string;
  agendaPendingLabel: string;
  agendaCompletedLabel: string;
  agendaPriorityHigh: string;
  agendaPriorityMedium: string;
  agendaPriorityLow: string;

  // Showcase Landing Page
  heroTag: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroCtaSimulator: string;
  heroCtaExplore: string;
  showcaseFeature1Title: string;
  showcaseFeature1Desc: string;
  showcaseFeature2Title: string;
  showcaseFeature2Desc: string;
  showcaseFeature3Title: string;
  showcaseFeature3Desc: string;
  showcaseFeature4Title: string;
  showcaseFeature4Desc: string;
  showcaseGridTitle: string;
  showcaseGridSubtitle: string;
  showcaseGridDesc: string;
  showcaseFooterText: string;
}

export const ES_TRANSLATIONS: Translations = {
  showcaseMode: 'Vista Showcase',
  simulatorMode: 'Simulador Móvil',
  backToShowcase: '← Volver al Showcase',
  mobileSimulatorTitle: 'Simulador 390px (Mobile First)',
  online: 'Online',
  offline: 'Offline',
  synchronized: 'Sincronizado',
  offlineMode: 'Modo Offline',
  guideBtn: 'Guía 9 Pantallas',
  guideTitle: 'Arquitectura de Navegación Móvil',
  close: 'Cerrar',
  next: 'Siguiente',
  prev: 'Anterior',
  allScreens: 'Ecosistema Completo de 9 Pantallas',
  screenOf: 'de 9',

  tabHome: 'Inicio',
  tabFarm: 'Finca',
  tabLots: 'Lotes',
  tabRecord: 'Registro',
  tabAgenda: 'Agenda',

  welcomeTitle: '¡Buenos días, Don Carlos!',
  welcomeSubtitle: 'El cuaderno digital de tu finca',
  welcomeCaption: 'Finca El Manantial · 1,750 msnm',
  welcomeStartWorkday: 'Iniciar Jornada en la Finca →',
  welcomeWeatherTitle: '21°C · Favorable para recolección',
  welcomeWeatherDesc: 'Condiciones óptimas en Lote La Loma y El Roble',
  welcomeWeatherPill: 'Soleado con brisa',
  welcomeQuickNoteTitle: 'Apunte Rápido de Apertura',
  welcomeQuickNotePlaceholder: 'Escribe una observación de inicio de jornada...',
  welcomeSaveNote: 'Guardar Apunte',
  welcomeNoteSaved: '¡Apunte guardado en el cuaderno!',
  welcomeActiveLots: '4 Activos',
  welcomeActiveCut: 'Corte Geisha',
  welcomePendingTasks: '3 Pendientes',

  dashTitle: 'Finca El Manantial',
  dashSubtitle: 'Resumen Agronómico',
  dashCaption: 'Cosecha 2024 · Floración 85%',
  dashTodayHarvest: '142 Arrobas Hoy',
  dashVsLastWeek: '+18% vs semana previa',
  dashHarvestKg: '1,775 kg',
  dashYieldRate: '92.4% Rendimiento',
  dashDayLaborers: '12 recolectores',
  dashFinancialSummary: 'Balance Financiero del Mes',
  dashEstimatedIncome: 'Ingresos Estimados',
  dashAccumulatedCosts: 'Costos Acumulados',
  dashOperatingMargin: 'Margen Operativo',
  dashActiveLotsSection: 'Lotes en Producción Activa',
  dashQuickActionsTitle: 'Accesos Rápidos de Campo',
  dashActionWeighScale: 'Báscula Cosecha',
  dashActionRecordCost: 'Registrar Costo',
  dashActionCulturalTask: 'Labor Cultural',
  dashActionSanitaryInspect: 'Sanidad Vegetal',
  dashActionNewTask: 'Nueva Tarea',

  lotsCatalogTitle: 'Mis Lotes (Catastro)',
  lotsCatalogSubtitle: '4 lotes georreferenciados en producción',
  lotsSearchPlaceholder: 'Buscar lote o variedad (ej: Geisha, Bourbon)...',
  lotsFilterAll: 'Todos',
  lotsFilterHarvest: 'En Cosecha',
  lotsFilterFlower: 'Floración',
  lotsFilterMaintenance: 'Mantenimiento',
  lotsArea: 'Área',
  lotsTrees: 'Árboles',
  lotsAltitude: 'Altitud',
  lotsBrix: '°Brix Promedio',
  lotsFlowering: 'Floración',
  lotsHealth: 'Sanidad',
  lotsViewProfile: 'Ver Ficha Completa →',
  lotsNewLotBtn: '+ Nuevo Lote',

  lotProfileTitle: 'Ficha del Lote',
  lotProfileRipeningCurve: 'Curva de Maduración y Grados °Brix',
  lotProfileAgronomicSpecs: 'Especificaciones Agronómicas',
  lotProfileVariety: 'Variedad Botánica',
  lotProfilePlantedYear: 'Año de Siembra',
  lotProfileSensoryNotes: 'Notas Sensoriales en Taza',
  lotProfileRecentRecords: 'Historial Reciente del Cafetal',

  harvestScaleTitle: 'Registrar Cosecha',
  harvestScaleSubtitle: 'Báscula de Pesaje Diario',
  harvestScalePicker: 'Recolector / Jornalero',
  harvestScaleLot: 'Lote de Recolección',
  harvestScaleGrossKg: 'Peso Bruto (Kg)',
  harvestScaleNetArrobas: 'Arrobas Calculadas (@)',
  harvestScaleRipeQuality: 'Selección de Grano (% Maduro)',
  harvestScaleSaveBtn: 'Guardar Pesaje en Báscula',
  harvestScaleSuccessMsg: '¡Pesaje registrado exitosamente!',

  costTitle: 'Registrar Costo',
  costSubtitle: 'Control Financiero de Campo',
  costCategory: 'Categoría del Gasto',
  costAmount: 'Monto en Pesos (COP)',
  costDescription: 'Descripción del Gasto',
  costLotOptional: 'Lote Asociado (Opcional)',
  costSaveBtn: 'Guardar Registro de Costo',
  costSuccessMsg: '¡Costo registrado con éxito!',

  activityTitle: 'Registrar Actividad Cultural',
  activitySubtitle: 'Manejo Agronómico del Cafetal',
  activityType: 'Labor Agronómica',
  activityLot: 'Lote Intervenido',
  activityWorkers: 'Número de Trabajadores',
  activityProgress: 'Progreso de la Labor',
  activitySaveBtn: 'Guardar Actividad Agronómica',
  activitySuccessMsg: '¡Actividad guardada en el cuaderno!',

  healthTitle: 'Registrar Observación Sanitaria',
  healthSubtitle: 'Monitoreo Fitosanitario & Plagas',
  healthPestType: 'Plaga o Enfermedad',
  healthIncidence: 'Porcentaje de Incidencia',
  healthBranches: 'Ramas Evaluadas',
  healthActionReq: 'Acción Correctiva Sugerida',
  healthSaveBtn: 'Guardar Inspección Sanitaria',
  healthSuccessMsg: '¡Alerta fitosanitaria registrada!',

  agendaTitle: 'Tareas y Recordatorios',
  agendaSubtitle: 'Agenda de Campo del Mayordomo',
  agendaNewTaskBtn: '+ Nueva Tarea',
  agendaPendingLabel: 'Pendientes',
  agendaCompletedLabel: 'Completadas',
  agendaPriorityHigh: 'Alta Prioridad',
  agendaPriorityMedium: 'Media',
  agendaPriorityLow: 'Baja',

  heroTag: 'PROTOTIPO INTERACTIVO · 9 PANTALLAS',
  heroHeadline: 'Notas de Café: El Cuaderno Inteligente de Campo',
  heroSubheadline: 'Diseñado para productores de café de especialidad. Registro táctil de cosecha en báscula, catastro agronómico de lotes y control financiero 100% offline.',
  heroCtaSimulator: 'Abrir Simulador Móvil (390px)',
  heroCtaExplore: 'Explorar las 9 Pantallas',
  showcaseFeature1Title: 'Báscula y Cosecha',
  showcaseFeature1Desc: 'Conversión automática de kilos a arrobas con control de maduración al instante.',
  showcaseFeature2Title: 'Catastro y °Brix',
  showcaseFeature2Desc: 'Monitoreo de curva de maduración y trazabilidad agronómica por lote.',
  showcaseFeature3Title: 'Costos y Jornales',
  showcaseFeature3Desc: 'Liquidación precisa de jornales y control de insumos directamente en el cafetal.',
  showcaseFeature4Title: '100% Sin Conexión',
  showcaseFeature4Desc: 'Funciona en zonas montañosas sin señal celular y sincroniza al volver al pueblo.',
  showcaseGridTitle: 'Ecosistema de Pantallas',
  showcaseGridSubtitle: 'Mapa Completo de Navegación',
  showcaseGridDesc: 'Explora cada una de las 9 pantallas diseñadas con botones ergonómicos de más de 48px y alto contraste para visibilidad bajo luz solar directa.',
  showcaseFooterText: 'Notas de Café · Cuaderno digital para caficultores de Colombia y el mundo.'
};

export const EN_TRANSLATIONS: Translations = {
  showcaseMode: 'Showcase View',
  simulatorMode: 'Mobile Simulator',
  backToShowcase: '← Back to Showcase',
  mobileSimulatorTitle: '390px Simulator (Mobile First)',
  online: 'Online',
  offline: 'Offline',
  synchronized: 'Synchronized',
  offlineMode: 'Offline Mode',
  guideBtn: '9-Screen Guide',
  guideTitle: 'Mobile Navigation Architecture',
  close: 'Close',
  next: 'Next',
  prev: 'Previous',
  allScreens: 'Complete 9-Screen Ecosystem',
  screenOf: 'of 9',

  tabHome: 'Home',
  tabFarm: 'Farm',
  tabLots: 'Lots',
  tabRecord: 'Record',
  tabAgenda: 'Tasks',

  welcomeTitle: 'Good morning, Don Carlos!',
  welcomeSubtitle: 'The digital notebook for your farm',
  welcomeCaption: 'El Manantial Farm · 1,750 masl',
  welcomeStartWorkday: 'Start Workday on the Farm →',
  welcomeWeatherTitle: '21°C · Favorable for harvest',
  welcomeWeatherDesc: 'Optimal conditions in La Loma and El Roble Lots',
  welcomeWeatherPill: 'Sunny with breeze',
  welcomeQuickNoteTitle: 'Quick Opening Note',
  welcomeQuickNotePlaceholder: 'Write a quick morning observation...',
  welcomeSaveNote: 'Save Note',
  welcomeNoteSaved: 'Note saved in the field notebook!',
  welcomeActiveLots: '4 Active',
  welcomeActiveCut: 'Geisha Harvest',
  welcomePendingTasks: '3 Pending',

  dashTitle: 'El Manantial Farm',
  dashSubtitle: 'Agronomic Summary',
  dashCaption: 'Harvest 2024 · 85% Flowering',
  dashTodayHarvest: '142 Arrobas Today',
  dashVsLastWeek: '+18% vs previous week',
  dashHarvestKg: '1,775 kg',
  dashYieldRate: '92.4% Yield',
  dashDayLaborers: '12 pickers',
  dashFinancialSummary: 'Monthly Financial Balance',
  dashEstimatedIncome: 'Estimated Income',
  dashAccumulatedCosts: 'Accumulated Costs',
  dashOperatingMargin: 'Operating Margin',
  dashActiveLotsSection: 'Lots in Active Production',
  dashQuickActionsTitle: 'Quick Field Actions',
  dashActionWeighScale: 'Harvest Scale',
  dashActionRecordCost: 'Record Cost',
  dashActionCulturalTask: 'Cultural Task',
  dashActionSanitaryInspect: 'Crop Health',
  dashActionNewTask: 'New Task',

  lotsCatalogTitle: 'My Lots (Cadastre)',
  lotsCatalogSubtitle: '4 georeferenced lots in production',
  lotsSearchPlaceholder: 'Search lot or variety (e.g., Geisha, Bourbon)...',
  lotsFilterAll: 'All',
  lotsFilterHarvest: 'Harvesting',
  lotsFilterFlower: 'Flowering',
  lotsFilterMaintenance: 'Maintenance',
  lotsArea: 'Area',
  lotsTrees: 'Trees',
  lotsAltitude: 'Altitude',
  lotsBrix: 'Average °Brix',
  lotsFlowering: 'Flowering',
  lotsHealth: 'Health',
  lotsViewProfile: 'View Full Profile →',
  lotsNewLotBtn: '+ New Lot',

  lotProfileTitle: 'Lot Profile',
  lotProfileRipeningCurve: 'Ripening Curve & °Brix Degrees',
  lotProfileAgronomicSpecs: 'Agronomic Specifications',
  lotProfileVariety: 'Botanical Variety',
  lotProfilePlantedYear: 'Planted Year',
  lotProfileSensoryNotes: 'Cup Sensory Notes',
  lotProfileRecentRecords: 'Recent Field History',

  harvestScaleTitle: 'Record Harvest',
  harvestScaleSubtitle: 'Daily Weighing Scale',
  harvestScalePicker: 'Coffee Picker / Worker',
  harvestScaleLot: 'Harvest Lot',
  harvestScaleGrossKg: 'Gross Weight (Kg)',
  harvestScaleNetArrobas: 'Calculated Arrobas (@)',
  harvestScaleRipeQuality: 'Bean Quality (% Ripe)',
  harvestScaleSaveBtn: 'Save Weight on Scale',
  harvestScaleSuccessMsg: 'Weight recorded successfully!',

  costTitle: 'Record Cost',
  costSubtitle: 'Field Expense Management',
  costCategory: 'Expense Category',
  costAmount: 'Amount in Pesos (COP)',
  costDescription: 'Expense Description',
  costLotOptional: 'Associated Lot (Optional)',
  costSaveBtn: 'Save Cost Entry',
  costSuccessMsg: 'Cost recorded successfully!',

  activityTitle: 'Record Cultural Activity',
  activitySubtitle: 'Agronomic Field Operations',
  activityType: 'Agronomic Task',
  activityLot: 'Intervened Lot',
  activityWorkers: 'Assigned Workers',
  activityProgress: 'Task Progress',
  activitySaveBtn: 'Save Agronomic Activity',
  activitySuccessMsg: 'Activity saved in notebook!',

  healthTitle: 'Record Sanitary Inspection',
  healthSubtitle: 'Crop Health & Pest Monitoring',
  healthPestType: 'Pest or Disease',
  healthIncidence: 'Incidence Percentage',
  healthBranches: 'Sampled Branches',
  healthActionReq: 'Recommended Action',
  healthSaveBtn: 'Save Sanitary Inspection',
  healthSuccessMsg: 'Crop health alert recorded!',

  agendaTitle: 'Tasks & Reminders',
  agendaSubtitle: "Foreman's Field Agenda",
  agendaNewTaskBtn: '+ New Task',
  agendaPendingLabel: 'Pending',
  agendaCompletedLabel: 'Completed',
  agendaPriorityHigh: 'High Priority',
  agendaPriorityMedium: 'Medium',
  agendaPriorityLow: 'Low',

  heroTag: 'INTERACTIVE PROTOTYPE · 9 SCREENS',
  heroHeadline: 'Notas de Café: The Smart Field Notebook',
  heroSubheadline: 'Built for specialty coffee growers. Tactile harvest scale weighing, agronomic cadastre of lots, and financial tracking 100% offline.',
  heroCtaSimulator: 'Open Mobile Simulator (390px)',
  heroCtaExplore: 'Explore the 9 Screens',
  showcaseFeature1Title: 'Scale & Harvest',
  showcaseFeature1Desc: 'Instant kg-to-arroba conversion with bean ripeness scoring in the field.',
  showcaseFeature2Title: 'Cadastre & °Brix',
  showcaseFeature2Desc: 'Flowering curve tracking and complete botanical traceability per lot.',
  showcaseFeature3Title: 'Costs & Labor',
  showcaseFeature3Desc: 'Accurate wages calculation and input supplies logged right at the crop.',
  showcaseFeature4Title: '100% Offline',
  showcaseFeature4Desc: 'Operates in remote mountains without cell coverage and syncs upon return.',
  showcaseGridTitle: 'Screens Ecosystem',
  showcaseGridSubtitle: 'Complete Navigation Map',
  showcaseGridDesc: 'Explore each of the 9 screens designed with 48px+ touch targets and high-contrast styling for outdoor sunlight visibility.',
  showcaseFooterText: 'Notas de Café · Digital field notebook for coffee growers worldwide.'
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('notas_cafe_lang');
      if (saved === 'en' || saved === 'es') return saved;
    }
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('notas_cafe_lang', lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const t = language === 'es' ? ES_TRANSLATIONS : EN_TRANSLATIONS;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
