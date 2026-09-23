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
  screenOf: string;
  backToHome: string;
  backToFarm: string;
  backToLots: string;
  backToRecord: string;
  fieldModeAlert: string;
  savedLocal: string;

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
  welcomeTagline: string;
  welcomeHarvestStatus: string;
  welcomeOptimal: string;
  welcomeDate: string;
  welcomeWeek: string;
  welcomeLocalNote: string;

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
  dashGoalLabel: string;
  dashGoalStatus: string;
  dashFirstGrade: string;
  dashCrews: string;
  dashActiveLotName: string;
  dashLastWeighin: string;
  dashOpenScaleBtn: string;
  dashLotStatusTitle: string;
  dashLotStatusSubtitle: string;
  dashAddLotBtn: string;
  dashViewLotsBtn: string;
  dashHarvestingStatus: string;
  dashOptimalStatus: string;

  // Screen 3: Lots Catalog
  lotsCatalogTitle: string;
  lotsCatalogSubtitle: string;
  lotsSearchPlaceholder: string;
  lotsFilterAll: string;
  lotsFilterHarvest: string;
  lotsFilterFlower: string;
  lotsFilterMaintenance: string;
  lotsFilterOptimal: string;
  lotsArea: string;
  lotsTrees: string;
  lotsAltitude: string;
  lotsBrix: string;
  lotsFlowering: string;
  lotsHealth: string;
  lotsViewProfile: string;
  lotsNewLotBtn: string;
  lotCardAreaTrees: string;
  lotCardBrix: string;
  lotCardFlowering: string;
  lotCardWeighBtn: string;
  lotCardProfile: string;
  lotsEmptyTitle: string;
  lotsEmptyDesc: string;
  lotsResetFilters: string;
  lotsGoToProfile: string;

  // New Lot Modal
  newLotModalTitle: string;
  newLotModalSubtitle: string;
  newLotNameLabel: string;
  newLotNamePlaceholder: string;
  newLotVarietyLabel: string;
  newLotAreaLabel: string;
  newLotAltitudeLabel: string;
  newLotTreesLabel: string;
  newLotStatusLabel: string;
  newLotBrixLabel: string;
  newLotNotesLabel: string;
  newLotNotesPlaceholder: string;
  newLotSaveBtn: string;
  newLotSaving: string;
  newLotSaved: string;

  // Screen 4: Lot Profile
  lotProfileTitle: string;
  lotProfileRipeningCurve: string;
  lotProfileAgronomicSpecs: string;
  lotProfileVariety: string;
  lotProfilePlantedYear: string;
  lotProfileSensoryNotes: string;
  lotProfileRecentRecords: string;
  lotDetailTabBrix: string;
  lotDetailTabHealth: string;
  lotDetailTabActivities: string;
  lotDetailWeighAction: string;

  // Screen 5: Harvest Scale
  harvestScaleTitle: string;
  harvestScaleSubtitle: string;
  harvestScaleCategory: string;
  harvestScalePicker: string;
  harvestScaleLot: string;
  harvestScaleGrossKg: string;
  harvestScaleNetArrobas: string;
  harvestScaleRipeQuality: string;
  harvestScaleSaveBtn: string;
  harvestScaleSaving: string;
  harvestScaleSuccessMsg: string;
  harvestRipeLabel: string;
  harvestSemiRipeLabel: string;
  harvestGreenLabel: string;
  harvestRecentTitle: string;
  harvestQuickActions: string;

  // Screen 6: Record Cost
  costTitle: string;
  costSubtitle: string;
  costCategory: string;
  costAmount: string;
  costDescription: string;
  costLotOptional: string;
  costSaveBtn: string;
  costSaving: string;
  costSuccessMsg: string;
  costRecentTitle: string;
  costCategoryWages: string;
  costCategoryFertilizer: string;
  costCategoryTransport: string;
  costCategoryProcessing: string;
  costCategoryFuel: string;

  // Screen 7: Cultural Activity
  activityTitle: string;
  activitySubtitle: string;
  activityCategory: string;
  activityType: string;
  activityLot: string;
  activityWorkers: string;
  activityProgress: string;
  activityTools: string;
  activitySaveBtn: string;
  activitySaving: string;
  activitySuccessMsg: string;
  activityRecentTitle: string;

  // Screen 8: Observation / Health
  healthTitle: string;
  healthSubtitle: string;
  healthCategory: string;
  healthPestType: string;
  healthIncidence: string;
  healthBranches: string;
  healthSeverity: string;
  healthActionReq: string;
  healthSaveBtn: string;
  healthSaving: string;
  healthSuccessMsg: string;
  healthRecentTitle: string;
  healthSeverityLow: string;
  healthSeverityMed: string;
  healthSeverityHigh: string;

  // Screen 9: Tasks / Agenda
  agendaTitle: string;
  agendaSubtitle: string;
  agendaCategory: string;
  agendaNewTaskBtn: string;
  agendaTaskTitle: string;
  agendaTaskTitlePlaceholder: string;
  agendaPriorityLabel: string;
  agendaCategoryLabel: string;
  agendaAssigneeLabel: string;
  agendaDueLabel: string;
  agendaPendingLabel: string;
  agendaCompletedLabel: string;
  agendaPriorityHigh: string;
  agendaPriorityMedium: string;
  agendaPriorityLow: string;
  agendaCreateBtn: string;
  agendaCreating: string;
  agendaCreated: string;

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
  online: 'En Línea',
  offline: 'Sin Conexión',
  synchronized: 'Sincronizado',
  offlineMode: 'Modo Offline',
  guideBtn: 'Guía 9 Pantallas',
  guideTitle: 'Arquitectura de Navegación Móvil',
  close: 'Cerrar',
  next: 'Siguiente',
  prev: 'Anterior',
  allScreens: 'Ecosistema Completo de 9 Pantallas',
  screenOf: 'de 9',
  backToHome: 'Volver al Inicio',
  backToFarm: 'Volver a Mi Finca',
  backToLots: 'Volver a Lotes',
  backToRecord: 'Volver a Registro',
  fieldModeAlert: 'Modo Campo: Operando sin señal celular',
  savedLocal: 'Local OK',

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
  welcomeTagline: 'EL CUADERNO DIGITAL DE TU FINCA',
  welcomeHarvestStatus: 'Cosecha 2024 · Lote La Loma',
  welcomeOptimal: 'Óptimo',
  welcomeDate: '14 Octubre',
  welcomeWeek: 'Semana 41',
  welcomeLocalNote: 'Persistencia local automática · 100% libre de cobertura celular',

  dashTitle: 'Finca El Manantial',
  dashSubtitle: 'Panel central de control agronómico · Finca El Manantial',
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
  dashGoalLabel: 'Meta del día:',
  dashGoalStatus: '88.7% completado (Faltan 18 @)',
  dashFirstGrade: 'Cereza 1ª',
  dashCrews: '2 Cuadrillas',
  dashActiveLotName: 'La Loma #1',
  dashLastWeighin: 'Último pesaje:',
  dashOpenScaleBtn: 'Abrir Báscula de Pesaje Rápido en Campo',
  dashLotStatusTitle: 'Estado de los Lotes',
  dashLotStatusSubtitle: '18.5 Hectáreas bajo manejo agronómico',
  dashAddLotBtn: '+ Lote',
  dashViewLotsBtn: 'Ver Lotes',
  dashHarvestingStatus: 'En Cosecha',
  dashOptimalStatus: 'Óptimo',

  lotsCatalogTitle: 'Nombre de Lotes',
  lotsCatalogSubtitle: 'Manejo agronómico, variedades y maduración',
  lotsSearchPlaceholder: 'Buscar lote por nombre o variedad...',
  lotsFilterAll: 'Todos',
  lotsFilterHarvest: 'En Cosecha',
  lotsFilterFlower: 'Floración',
  lotsFilterMaintenance: 'Mantenimiento',
  lotsFilterOptimal: 'Óptimos',
  lotsArea: 'Área',
  lotsTrees: 'Árboles',
  lotsAltitude: 'Altitud',
  lotsBrix: '°Brix Promedio',
  lotsFlowering: 'Floración',
  lotsHealth: 'Sanidad',
  lotsViewProfile: 'Ver Ficha Completa →',
  lotsNewLotBtn: '+ Registrar Nuevo Lote',
  lotCardAreaTrees: 'Área & Árboles',
  lotCardBrix: 'Grados Brix',
  lotCardFlowering: 'Floración',
  lotCardWeighBtn: 'Pesar',
  lotCardProfile: 'Ficha',
  lotsEmptyTitle: 'No se encontraron lotes',
  lotsEmptyDesc: 'Intenta buscar con otro término de variedad o ajusta los filtros de estado.',
  lotsResetFilters: 'Restablecer filtros',
  lotsGoToProfile: 'Ir a Ficha del Lote',

  newLotModalTitle: 'Registrar Nuevo Lote',
  newLotModalSubtitle: 'Alta agronómica en el cuaderno de la finca',
  newLotNameLabel: 'Nombre del Lote *',
  newLotNamePlaceholder: 'Ej: Lote El Porvenir',
  newLotVarietyLabel: 'Variedad de Café',
  newLotAreaLabel: 'Área en Hectáreas *',
  newLotAltitudeLabel: 'Altitud (msnm)',
  newLotTreesLabel: 'Número Estimado de Árboles',
  newLotStatusLabel: 'Estado Fenológico Inicial',
  newLotBrixLabel: 'Grados °Brix Promedio',
  newLotNotesLabel: 'Notas u Observaciones Agronómicas',
  newLotNotesPlaceholder: 'Detalles del suelo, pendiente, sombrío o fecha estimada de siembra...',
  newLotSaveBtn: 'Guardar Lote en el Cuaderno',
  newLotSaving: 'Guardando lote agronómico...',
  newLotSaved: '¡Lote registrado con éxito!',

  lotProfileTitle: 'Ficha de Lote',
  lotProfileRipeningCurve: 'Curva de Maduración y Grados °Brix',
  lotProfileAgronomicSpecs: 'Especificaciones Agronómicas',
  lotProfileVariety: 'Variedad Botánica',
  lotProfilePlantedYear: 'Año de Siembra',
  lotProfileSensoryNotes: 'Notas Sensoriales en Taza',
  lotProfileRecentRecords: 'Historial Reciente del Cafetal',
  lotDetailTabBrix: 'Curva Brix & Cosecha',
  lotDetailTabHealth: 'Sanidad Vegetal',
  lotDetailTabActivities: 'Labores & Podas',
  lotDetailWeighAction: 'Registrar Pesaje para',

  harvestScaleTitle: 'Báscula de Cosecha',
  harvestScaleSubtitle: 'Control diario de pesaje en báscula de campo',
  harvestScaleCategory: 'Cosecha y Báscula',
  harvestScalePicker: 'Recolector / Jornalero',
  harvestScaleLot: 'Lote de Procedencia',
  harvestScaleGrossKg: 'Peso Báscula de Campo',
  harvestScaleNetArrobas: 'Arrobas Calculadas (@)',
  harvestScaleRipeQuality: 'Calidad del Grano Cosechado',
  harvestScaleSaveBtn: 'Confirmar y Guardar Pesaje',
  harvestScaleSaving: 'Guardando pesaje en báscula...',
  harvestScaleSuccessMsg: '¡Pesaje registrado con éxito!',
  harvestRipeLabel: 'Maduras',
  harvestSemiRipeLabel: 'Pintonas',
  harvestGreenLabel: 'Verdes',
  harvestRecentTitle: 'Últimos Pesajes de Hoy',
  harvestQuickActions: 'Accesos Rápidos de Campo',

  costTitle: 'Registro de Costos',
  costSubtitle: 'Control de egresos, jornales y compras de insumos',
  costCategory: 'Finanzas de Campo',
  costAmount: 'Monto en Pesos Colombianos (COP)',
  costDescription: 'Descripción del Gasto',
  costLotOptional: 'Lote Asociado (Opcional)',
  costSaveBtn: 'Confirmar y Guardar Costo',
  costSaving: 'Guardando registro contable...',
  costSuccessMsg: '¡Costo registrado con éxito!',
  costRecentTitle: 'Egresos Registrados Hoy',
  costCategoryWages: 'Jornales de Recolección',
  costCategoryFertilizer: 'Fertilizantes y Abonos',
  costCategoryTransport: 'Transporte y Flete',
  costCategoryProcessing: 'Beneficio y Secado',
  costCategoryFuel: 'Combustible y Mantenimiento',

  activityTitle: 'Labores Culturales',
  activitySubtitle: 'Registro de podas, desyerbe, fertilización y sombrío',
  activityCategory: 'Manejo del Cultivo',
  activityType: 'Tipo de Labor Agronómica',
  activityLot: 'Lote Intervenido',
  activityWorkers: 'Operarios Asignados',
  activityProgress: 'Porcentaje de Avance',
  activityTools: 'Herramientas e Insumos Utilizados',
  activitySaveBtn: 'Registrar Labor Agronómica',
  activitySaving: 'Guardando labor en cuaderno...',
  activitySuccessMsg: '¡Labor registrada con éxito!',
  activityRecentTitle: 'Labores Ejecutadas Recientemente',

  healthTitle: 'Sanidad & Plagas',
  healthSubtitle: 'Monitoreo fitosanitario y alertas tempranas',
  healthCategory: 'Fitosanidad',
  healthPestType: 'Plaga / Enfermedad Detectada',
  healthIncidence: 'Porcentaje de Incidencia',
  healthBranches: 'Ramas Evaluadas',
  healthSeverity: 'Nivel de Severidad',
  healthActionReq: 'Acción Inmediata Requerida',
  healthSaveBtn: 'Guardar Observación Fitosanitaria',
  healthSaving: 'Guardando alerta fitosanitaria...',
  healthSuccessMsg: '¡Alerta fitosanitaria registrada!',
  healthRecentTitle: 'Alertas Sanitarias Activas',
  healthSeverityLow: 'Baja',
  healthSeverityMed: 'Media',
  healthSeverityHigh: 'Alta',

  agendaTitle: 'Agenda de Tareas',
  agendaSubtitle: 'Plan de trabajo y pendientes del mayordomo',
  agendaCategory: 'Agenda de Finca',
  agendaNewTaskBtn: '+ Nueva Tarea',
  agendaTaskTitle: 'Descripción de la Tarea *',
  agendaTaskTitlePlaceholder: 'Ej: Revisión de mangueras de despulpadora',
  agendaPriorityLabel: 'Nivel de Prioridad',
  agendaCategoryLabel: 'Área / Categoría',
  agendaAssigneeLabel: 'Responsable Asignado',
  agendaDueLabel: 'Plazo de Entrega',
  agendaPendingLabel: 'Tareas Pendientes',
  agendaCompletedLabel: 'Tareas Completadas',
  agendaPriorityHigh: 'Alta Prioridad',
  agendaPriorityMedium: 'Media',
  agendaPriorityLow: 'Baja',
  agendaCreateBtn: 'Crear y Agendar Tarea',
  agendaCreating: 'Agendando tarea...',
  agendaCreated: '¡Tarea creada con éxito!',

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
  backToHome: 'Back to Home',
  backToFarm: 'Back to Farm',
  backToLots: 'Back to Lots',
  backToRecord: 'Back to Record',
  fieldModeAlert: 'Field Mode: Working offline without cell coverage',
  savedLocal: 'Local OK',

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
  welcomeTagline: 'THE DIGITAL NOTEBOOK FOR YOUR FARM',
  welcomeHarvestStatus: 'Harvest 2024 · La Loma Lot',
  welcomeOptimal: 'Optimal',
  welcomeDate: 'Oct 14',
  welcomeWeek: 'Week 41',
  welcomeLocalNote: 'Automatic local persistence · 100% cellular coverage-free',

  dashTitle: 'El Manantial Farm',
  dashSubtitle: 'Central agronomic control panel · El Manantial Farm',
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
  dashGoalLabel: 'Daily Goal:',
  dashGoalStatus: '88.7% completed (18 @ left)',
  dashFirstGrade: '1st Grade',
  dashCrews: '2 Crews',
  dashActiveLotName: 'La Loma #1',
  dashLastWeighin: 'Last weigh-in:',
  dashOpenScaleBtn: 'Open Rapid Field Harvest Scale',
  dashLotStatusTitle: 'Lot Status',
  dashLotStatusSubtitle: '18.5 Hectares under agronomic management',
  dashAddLotBtn: '+ Lot',
  dashViewLotsBtn: 'View Lots',
  dashHarvestingStatus: 'Harvesting',
  dashOptimalStatus: 'Optimal',

  lotsCatalogTitle: 'Lot Names',
  lotsCatalogSubtitle: 'Agronomic management, varieties, and maturity',
  lotsSearchPlaceholder: 'Search lot by name or variety...',
  lotsFilterAll: 'All',
  lotsFilterHarvest: 'Harvesting',
  lotsFilterFlower: 'Flowering',
  lotsFilterMaintenance: 'Maintenance',
  lotsFilterOptimal: 'Optimal',
  lotsArea: 'Area',
  lotsTrees: 'Trees',
  lotsAltitude: 'Altitude',
  lotsBrix: 'Average °Brix',
  lotsFlowering: 'Flowering',
  lotsHealth: 'Health',
  lotsViewProfile: 'View Full Profile →',
  lotsNewLotBtn: '+ Register New Lot',
  lotCardAreaTrees: 'Area & Trees',
  lotCardBrix: 'Brix Degrees',
  lotCardFlowering: 'Flowering',
  lotCardWeighBtn: 'Weigh',
  lotCardProfile: 'Profile',
  lotsEmptyTitle: 'No lots found',
  lotsEmptyDesc: 'Try searching with another variety term or adjust the status filters.',
  lotsResetFilters: 'Reset filters',
  lotsGoToProfile: 'Go to Lot Profile',

  newLotModalTitle: 'Register New Lot',
  newLotModalSubtitle: 'Agronomic setup in the farm notebook',
  newLotNameLabel: 'Lot Name *',
  newLotNamePlaceholder: 'E.g., El Porvenir Lot',
  newLotVarietyLabel: 'Coffee Variety',
  newLotAreaLabel: 'Area in Hectares *',
  newLotAltitudeLabel: 'Altitude (masl)',
  newLotTreesLabel: 'Estimated Number of Trees',
  newLotStatusLabel: 'Initial Phenological Status',
  newLotBrixLabel: 'Average °Brix Degrees',
  newLotNotesLabel: 'Agronomic Notes or Observations',
  newLotNotesPlaceholder: 'Soil details, slope, shade trees, or planting date...',
  newLotSaveBtn: 'Save Lot to Notebook',
  newLotSaving: 'Saving agronomic lot...',
  newLotSaved: 'Lot registered successfully!',

  lotProfileTitle: 'Lot Profile',
  lotProfileRipeningCurve: 'Ripening Curve & °Brix Degrees',
  lotProfileAgronomicSpecs: 'Agronomic Specifications',
  lotProfileVariety: 'Botanical Variety',
  lotProfilePlantedYear: 'Planted Year',
  lotProfileSensoryNotes: 'Cup Sensory Notes',
  lotProfileRecentRecords: 'Recent Field History',
  lotDetailTabBrix: 'Brix Curve & Harvest',
  lotDetailTabHealth: 'Plant Health',
  lotDetailTabActivities: 'Labor & Pruning',
  lotDetailWeighAction: 'Register Weigh-in for',

  harvestScaleTitle: 'Harvest Scale',
  harvestScaleSubtitle: 'Daily scale harvest weigh-in control',
  harvestScaleCategory: 'Harvest & Scale',
  harvestScalePicker: 'Coffee Picker / Day Laborer',
  harvestScaleLot: 'Source Lot',
  harvestScaleGrossKg: 'Field Scale Weight',
  harvestScaleNetArrobas: 'Calculated Arrobas (@)',
  harvestScaleRipeQuality: 'Harvested Cherry Quality',
  harvestScaleSaveBtn: 'Confirm & Save Weigh-in',
  harvestScaleSaving: 'Saving weight on scale...',
  harvestScaleSuccessMsg: 'Weight recorded successfully!',
  harvestRipeLabel: 'Ripe',
  harvestSemiRipeLabel: 'Semi-ripe',
  harvestGreenLabel: 'Green',
  harvestRecentTitle: "Today's Recent Weigh-ins",
  harvestQuickActions: 'Quick Field Actions',

  costTitle: 'Cost Registration',
  costSubtitle: 'Expense tracking, wages, and farm inputs',
  costCategory: 'Field Finances',
  costAmount: 'Amount in Colombian Pesos (COP)',
  costDescription: 'Expense Description',
  costLotOptional: 'Associated Lot (Optional)',
  costSaveBtn: 'Confirm & Save Expense',
  costSaving: 'Saving accounting record...',
  costSuccessMsg: 'Cost registered successfully!',
  costRecentTitle: 'Expenses Logged Today',
  costCategoryWages: 'Harvest Wages',
  costCategoryFertilizer: 'Fertilizers & Nutrients',
  costCategoryTransport: 'Transport & Freight',
  costCategoryProcessing: 'Processing & Drying',
  costCategoryFuel: 'Fuel & Maintenance',

  activityTitle: 'Agronomic Labor',
  activitySubtitle: 'Record of pruning, weeding, fertilizing and shade management',
  activityCategory: 'Crop Management',
  activityType: 'Type of Agronomic Labor',
  activityLot: 'Target Lot',
  activityWorkers: 'Assigned Workers',
  activityProgress: 'Progress Percentage',
  activityTools: 'Tools & Supplies Used',
  activitySaveBtn: 'Save Agronomic Labor',
  activitySaving: 'Saving labor in notebook...',
  activitySuccessMsg: 'Labor registered successfully!',
  activityRecentTitle: 'Recently Executed Labor',

  healthTitle: 'Plant Health & Pests',
  healthSubtitle: 'Phytosanitary monitoring and early alerts',
  healthCategory: 'Phytosanitary',
  healthPestType: 'Detected Pest / Disease',
  healthIncidence: 'Incidence Percentage',
  healthBranches: 'Sampled Branches',
  healthSeverity: 'Severity Level',
  healthActionReq: 'Immediate Action Required',
  healthSaveBtn: 'Save Phytosanitary Alert',
  healthSaving: 'Saving phytosanitary alert...',
  healthSuccessMsg: 'Phytosanitary alert registered!',
  healthRecentTitle: 'Active Sanitary Alerts',
  healthSeverityLow: 'Low',
  healthSeverityMed: 'Medium',
  healthSeverityHigh: 'High',

  agendaTitle: 'Daily Tasks Agenda',
  agendaSubtitle: 'Work plan and foreman pending tasks',
  agendaCategory: 'Farm Agenda',
  agendaNewTaskBtn: '+ New Task',
  agendaTaskTitle: 'Task Description *',
  agendaTaskTitlePlaceholder: 'E.g., Inspection of depulper hoses',
  agendaPriorityLabel: 'Priority Level',
  agendaCategoryLabel: 'Area / Category',
  agendaAssigneeLabel: 'Assigned Worker',
  agendaDueLabel: 'Due Time',
  agendaPendingLabel: 'Pending Tasks',
  agendaCompletedLabel: 'Completed Tasks',
  agendaPriorityHigh: 'High Priority',
  agendaPriorityMedium: 'Medium',
  agendaPriorityLow: 'Low',
  agendaCreateBtn: 'Create & Schedule Task',
  agendaCreating: 'Scheduling task...',
  agendaCreated: 'Task created successfully!',

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
