export type Language = 'es' | 'en';

export type ScreenId =
  | 'SCREEN_2'   // 1. Bienvenida · Inicio de Jornada
  | 'SCREEN_21'  // 2. Mi Finca (Panel Central)
  | 'SCREEN_19'  // 3. Mis Lotes (Catastro)
  | 'SCREEN_23'  // 4. Ficha del Lote
  | 'SCREEN_13'  // 5. Registrar Producción
  | 'SCREEN_11'  // 6. Registrar Costo
  | 'SCREEN_17'  // 7. Registrar Actividad
  | 'SCREEN_15'  // 8. Registrar Observación
  | 'SCREEN_9';  // 9. Registrar Pendiente

export interface ScreenInfo {
  id: ScreenId;
  number: number;
  name: string;
  badge: string;
  badgeType: 'apertura' | 'dashboard' | 'catastro' | 'detalle' | 'cosecha' | 'finanzas' | 'labores' | 'sanidad' | 'agenda';
  shell: string;
  subtitle: string;
  title: string;
  caption: string;
  description: string;
  metricIcon: string;
  metricPrimary: string;
  metricSecondary: string;
  metricDate: string;
  s1Label: string;
  s1Val: string;
  s2Label: string;
  s2Val: string;
  s3Label: string;
  s3Val: string;
  actionText: string;
  bgImg: string;
  status?: string;
}

export interface CoffeeLot {
  id: string;
  name: string;
  variety: string;
  areaHa: number;
  altitudeMsnm: number;
  treesCount: number;
  plantedYear: number;
  floweringPct: number;
  brixAverage: number;
  status: 'Óptimo' | 'En Cosecha' | 'Floración' | 'Mantenimiento';
  lastActivity: string;
  healthRating: number; // 0-100
  notes: string;
}

export interface HarvestRecord {
  id: string;
  collectorName: string;
  lotId: string;
  lotName: string;
  weightKg: number;
  weightArrobas: number;
  ripePct: number;
  semiRipePct: number;
  greenPct: number;
  time: string;
}

export interface ExpenseRecord {
  id: string;
  category: 'Jornales' | 'Fertilizantes' | 'Transporte' | 'Beneficio' | 'Combustible' | 'Herramientas';
  description: string;
  amountCop: number;
  date: string;
  lotName?: string;
  status: 'Pagado' | 'Pendiente';
}

export interface CulturalActivity {
  id: string;
  type: 'Plateo y Desyerbe' | 'Poda y Manejo Tejidos' | 'Fertilización' | 'Siembra Sombrío' | 'Mantenimiento Riego';
  lotName: string;
  workers: number;
  progressPct: number;
  date: string;
  tools: string;
}

export interface PhytosanitaryAlert {
  id: string;
  pestName: 'Broca del Café' | 'Roya (Hemileia vastatrix)' | 'Mancha de Hierro' | 'Ojo de Gallo';
  lotName: string;
  incidencePct: number;
  branchesSampled: number;
  severity: 'Baja' | 'Media' | 'Crítica';
  date: string;
  actionRequired: string;
}

export interface FarmTask {
  id: string;
  title: string;
  priority: 'Alta' | 'Media' | 'Baja';
  category: 'Insumos' | 'Personal' | 'Taller' | 'Cosecha';
  assignee: string;
  dueDate: string;
  completed: boolean;
}
