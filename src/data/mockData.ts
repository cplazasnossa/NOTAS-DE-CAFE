import { ScreenInfo, CoffeeLot, HarvestRecord, ExpenseRecord, CulturalActivity, PhytosanitaryAlert, FarmTask, FarmRepresentative, SubscriptionPlan } from '../types';

export const HERO_IMAGE_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1XACcZElquq7eChb7uFvDEY4o-MOsvqMLfRGvQiIjJ1yPq3LTorqAdJ99xP7vFF6M5ds8l7tUuRg3H_B_EuDzTLl_cARrJFwn8HJwxECxiZJnie6ZviZ4xquYosd-_0UsVnDOqGBjEKSQl9eVQoAWAQ5wCetqIQygwXfuw0dK_AIGhekFqcJWVU0bpW7egXQJ_DKbTNAjBVIWdmQmCvANHRE5KEA-AX8kBHv7HEkfXi6TNRicoDEIiwYkQ';
export const LOGO_LINEAL_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1V7E8CkJn9DWcoC_Y60kKdltpbAVJmbeDI5Jn0-5tQEzwG21y2VOXo8ZDu1E76U0wIdjhMvyuruHGkyFE3Jqj_Ih0WDRhXmVvvnlLDe-GpSFgeMpY0RRLOYUOr0Aymi1ozy3FzKWwD4oz7LRnEkWHa0LDC3Okm0xxOZHUJCOnZqCWOLIYERlNAAdfkTdvFlAzRbEpe12tbIwuOtwH0KjdIkn07hKzgeD2TSIZ4tcTjWBi9BMpLHlHPtr90';
export const LOGO_SILUETA_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1XvK2TKnD1GDThktPWzjp9kywOFBcyi8aDF1iJJsLR3MUZzBkC0ZL-p-m5wrNw-nggKysqFLzROoYVbH_0QDhQ9CpELut99arI8OL69xdYQsQK17HmODSQz4zF12CC_OYcxNQ5qjLrEMMhZ8vPYCyXoYOgGlARGZFx-WGO8pJju0XqtO8TS6LgbYL6KCUgsscCnD9IJp_jwa7_XuQPcfy3FlBB96DjXd9nKqtR7jOlUC7a4N3Tf9w5-';
export const LOGO_EMBLEMA_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1UPyfIITNdgoVQHmzdBQSB2WCXR-bBQnqVDdMeG3DyG6GfeVC6DvRbR_W_1UtgFjNxXmdC-ZSQH7fnYF6k2g7FsEOxPfpvevf2pIy8yf4578sBcoIBnthgUEM9u0mdK8Nx9mGDelHsEqmhsTOqFOolY-N8mrihBTWMTeEgFASELHRV-cBM-_eNu6Rya3l1dBxu_RKKMFaGGrBbHDHkR7NWZmm6sNB06wJogXH5ebDr0a8sqI_fDVkUDcw';

export const SCREENS_DATA: ScreenInfo[] = [
  {
    id: 'SCREEN_2',
    number: 1,
    name: '1. Bienvenida · Inicio de Jornada',
    badge: 'Apertura',
    badgeType: 'apertura',
    status: '● Sincronizado',
    shell: 'Shell Blank',
    subtitle: 'El cuaderno digital de tu finca',
    title: '¡Buenos días, Don Carlos!',
    caption: 'Finca El Manantial · 1,750 msnm',
    description: 'Fotografía inmersiva del cuaderno artesanal y cerezas de café, estado del tiempo para recolección, apunte rápido matutino y botón de inicio de jornada.',
    metricIcon: '☀️',
    metricPrimary: '21°C · Favorable',
    metricSecondary: 'Óptimo para recolección',
    metricDate: '14 Oct',
    s1Label: 'Lotes',
    s1Val: '4 Act.',
    s2Label: 'Corte',
    s2Val: 'Geisha',
    s3Label: 'Tareas',
    s3Val: '3 Pend.',
    actionText: 'Iniciar Jornada en la Finca →',
    bgImg: HERO_IMAGE_URL
  },
  {
    id: 'SCREEN_21',
    number: 2,
    name: '2. Mi Finca (Panel Central)',
    badge: 'Dashboard',
    badgeType: 'dashboard',
    status: '● En Línea',
    shell: 'Shell Tab Bar',
    subtitle: 'Resumen Agronómico',
    title: 'Finca El Manantial',
    caption: 'Cosecha 2024 · Floración 85%',
    description: 'Resumen de cosecha del día, balance financiero acumulado, estado de floración y accesos directos al cuaderno de notas agronómicas.',
    metricIcon: '☕',
    metricPrimary: '142 Arrobas Hoy',
    metricSecondary: '+18% vs semana previa',
    metricDate: 'Hoy',
    s1Label: 'Recolección',
    s1Val: '1,775 kg',
    s2Label: 'Rendimiento',
    s2Val: '92.4%',
    s3Label: 'Jornales',
    s3Val: '12 pers.',
    actionText: 'Ver Métricas del Cafetal →',
    bgImg: HERO_IMAGE_URL
  },
  {
    id: 'SCREEN_19',
    number: 3,
    name: '3. Mis Lotes',
    badge: 'Catastro',
    badgeType: 'catastro',
    status: '● 4 Lotes',
    shell: 'Shell Tab Bar',
    subtitle: 'Trazabilidad de Terroir',
    title: 'Distribución de Lotes',
    caption: '18.5 Hectáreas Sembradas',
    description: 'Listado estratificado de lotes con variedades (Geisha, Bourbon, Castillo, Caturra), altitud, fecha de siembra y rendimiento por hectárea.',
    metricIcon: '🌱',
    metricPrimary: 'Lote La Loma',
    metricSecondary: 'Variedad Geisha Especial',
    metricDate: 'Lote 01',
    s1Label: 'Área',
    s1Val: '4.2 ha',
    s2Label: 'Altitud',
    s2Val: '1,820m',
    s3Label: 'Edad',
    s3Val: '3.5 años',
    actionText: 'Explorar Todos los Lotes →',
    bgImg: HERO_IMAGE_URL
  },
  {
    id: 'SCREEN_23',
    number: 4,
    name: '4. Ficha del Lote',
    badge: 'Detalle',
    badgeType: 'detalle',
    status: '● Lote Activo',
    shell: 'Shell Stack (Back)',
    subtitle: 'Historial Agronómico',
    title: 'Lote La Loma #1',
    caption: 'Curva Brix 24° · Estado Óptimo',
    description: 'Historial agronómico completo: curvas de maduración Brix, calendario fitosanitario, historial de podas y balance de gastos específico.',
    metricIcon: '📊',
    metricPrimary: 'Maduración 88%',
    metricSecondary: 'Recolección selectiva',
    metricDate: 'Oct 2024',
    s1Label: 'Variedad',
    s1Val: 'Geisha',
    s2Label: 'Densidad',
    s2Val: '5,200/ha',
    s3Label: 'Poda',
    s3Val: 'Tipo Roca',
    actionText: 'Abrir Cuaderno de Campo →',
    bgImg: HERO_IMAGE_URL
  },
  {
    id: 'SCREEN_13',
    number: 5,
    name: '5. Registrar Producción',
    badge: 'Cosecha',
    badgeType: 'cosecha',
    status: '● Offline Listo',
    shell: 'Formulario Stack',
    subtitle: 'Pesaje Rápido',
    title: 'Ingreso de Kilos / Arrobas',
    caption: 'Báscula y Jornaleros',
    description: 'Registro ágil de pesajes: arrobas/kilos recolectados, asignación por jornalero, lote de procedencia y control de cerezas maduras vs verdes.',
    metricIcon: '⚖️',
    metricPrimary: 'Báscula Conectada',
    metricSecondary: 'Modo Pesaje Continuo',
    metricDate: 'Lote 01',
    s1Label: 'Maduro',
    s1Val: '94%',
    s2Label: 'Pintón',
    s2Val: '4%',
    s3Label: 'Verde',
    s3Val: '2%',
    actionText: 'Confirmar y Guardar Pesaje →',
    bgImg: HERO_IMAGE_URL
  },
  {
    id: 'SCREEN_11',
    number: 6,
    name: '6. Registrar Costo',
    badge: 'Finanzas',
    badgeType: 'finanzas',
    status: '● Asiento Diario',
    shell: 'Formulario Stack',
    subtitle: 'Gestión Financiera',
    title: 'Gastos e Insumos',
    caption: 'Balance Operativo de Finca',
    description: 'Categorización de jornales de recolección, insumos (fertilizantes, enmiendas), transporte y mantenimiento de despulpadora o beneficiadero.',
    metricIcon: '💰',
    metricPrimary: '$480.000 COP',
    metricSecondary: '8 Jornales + Alimentación',
    metricDate: '14 Oct',
    s1Label: 'Jornales',
    s1Val: 'Recolec.',
    s2Label: 'Insumos',
    s2Val: 'Fertiliz.',
    s3Label: 'Estado',
    s3Val: 'Pagado',
    actionText: 'Asentar Nuevo Comprobante →',
    bgImg: HERO_IMAGE_URL
  },
  {
    id: 'SCREEN_17',
    number: 7,
    name: '7. Registrar Actividad',
    badge: 'Labores',
    badgeType: 'labores',
    status: '● Cuadrilla',
    shell: 'Formulario Stack',
    subtitle: 'Monitoreo de Labores',
    title: 'Plateo y Desyerbe',
    caption: 'Manejo Integrado de Cultivo',
    description: 'Monitoreo de tareas culturales: plateo, desyerbe, siembra de sombrío, manejo de tejidos (poda) y calibración de fumigadoras.',
    metricIcon: '🌿',
    metricPrimary: '3.8 Hectáreas',
    metricSecondary: 'Meta del ciclo completada',
    metricDate: 'Semana 41',
    s1Label: 'Operarios',
    s1Val: '6 pers.',
    s2Label: 'Avance',
    s2Val: '85%',
    s3Label: 'Herram.',
    s3Val: 'Machete',
    actionText: 'Registrar Fin de Labor →',
    bgImg: HERO_IMAGE_URL
  },
  {
    id: 'SCREEN_15',
    number: 8,
    name: '8. Registrar Observación',
    badge: 'Sanidad',
    badgeType: 'sanidad',
    status: '● Alerta Fito',
    shell: 'Formulario Stack',
    subtitle: 'Inspección Sanitaria',
    title: 'Incidencia de Broca / Roya',
    caption: 'Monitoreo de 30 ramas',
    description: 'Cuaderno fitosanitario de incidencias: broca del café, roya (Hemileia vastatrix), mancha de hierro y apuntes de microclima.',
    metricIcon: '🔬',
    metricPrimary: 'Incidencia 1.2%',
    metricSecondary: 'Nivel bajo · Sin fumigación',
    metricDate: 'Lote 02',
    s1Label: 'Roya',
    s1Val: 'Control',
    s2Label: 'Broca',
    s2Val: 'Trampas',
    s3Label: 'Riego',
    s3Val: 'Normal',
    actionText: 'Adjuntar Foto del Follaje →',
    bgImg: HERO_IMAGE_URL
  },
  {
    id: 'SCREEN_9',
    number: 9,
    name: '9. Registrar Pendiente',
    badge: 'Agenda',
    badgeType: 'agenda',
    status: '● 3 Críticos',
    shell: 'Formulario Stack',
    subtitle: 'Agenda del Mayordomo',
    title: 'Tareas y Recordatorios',
    caption: 'Programación para la semana',
    description: 'Gestión de tareas críticas con prioridades (alta, media, baja), asignación a colaboradores y recordatorios para compra de insumos.',
    metricIcon: '📝',
    metricPrimary: 'Calibrar Despulpadora',
    metricSecondary: 'Prioridad Alta para jueves',
    metricDate: 'Pendiente',
    s1Label: 'Insumos',
    s1Val: 'Comprar',
    s2Label: 'Personal',
    s2Val: 'Avisar',
    s3Label: 'Taller',
    s3Val: 'Revisión',
    actionText: 'Agregar Nueva Tarea →',
    bgImg: HERO_IMAGE_URL
  },
  {
    id: 'SCREEN_LOGIN',
    number: 10,
    name: '10. Ingreso & Suscripción de Pago',
    badge: 'Acceso',
    badgeType: 'acceso',
    status: '● Protección',
    shell: 'Auth & Checkout',
    subtitle: 'Control de Representantes',
    title: 'Ingreso & Suscripción Cafetera',
    caption: 'Finca El Manantial · Acceso Protegido',
    description: 'Pantalla de autenticación para representantes de la finca (Propietario, Mayordomo, Calidad, Capataz) con credenciales y gestión de membresía de pago por suscripción.',
    metricIcon: '🔐',
    metricPrimary: 'Acceso por Rol',
    metricSecondary: 'Plan Finca Activo',
    metricDate: 'Suscripción',
    s1Label: 'Perfiles',
    s1Val: '4 Repr.',
    s2Label: 'Plan',
    s2Val: 'Familiar',
    s3Label: 'Vigencia',
    s3Val: '28 días',
    actionText: 'Ingresar al Cuaderno →',
    bgImg: HERO_IMAGE_URL
  }
];

export const INITIAL_LOTS: CoffeeLot[] = [
  {
    id: 'lot-1',
    name: 'Lote La Loma',
    variety: 'Geisha Especial',
    areaHa: 4.2,
    altitudeMsnm: 1820,
    treesCount: 21840,
    plantedYear: 2021,
    floweringPct: 88,
    brixAverage: 24.2,
    status: 'En Cosecha',
    lastActivity: 'Recolección Selectiva',
    healthRating: 98,
    notes: 'Microclima de niebla matutina. Poda tipo roca en 2023. Perfil de taza jazmín, bergamota y miel.'
  },
  {
    id: 'lot-2',
    name: 'Lote El Roble',
    variety: 'Bourbon Rosado',
    areaHa: 3.8,
    altitudeMsnm: 1750,
    treesCount: 19000,
    plantedYear: 2020,
    floweringPct: 82,
    brixAverage: 22.8,
    status: 'Óptimo',
    lastActivity: 'Plateo Manual',
    healthRating: 95,
    notes: 'Sombrío regulado con guamos y plátano. Maduración uniforme de cerezas rosadas.'
  },
  {
    id: 'lot-3',
    name: 'Lote La Cascada',
    variety: 'Castillo Tambo',
    areaHa: 5.5,
    altitudeMsnm: 1680,
    treesCount: 30250,
    plantedYear: 2019,
    floweringPct: 91,
    brixAverage: 21.4,
    status: 'En Cosecha',
    lastActivity: 'Pesaje del día',
    healthRating: 92,
    notes: 'Alta productividad y resistencia a roya. Cercanía a vertiente hídrica natural.'
  },
  {
    id: 'lot-4',
    name: 'Lote El Mirador',
    variety: 'Caturra Chiroso',
    areaHa: 5.0,
    altitudeMsnm: 1790,
    treesCount: 24000,
    plantedYear: 2022,
    floweringPct: 76,
    brixAverage: 23.0,
    status: 'Floración',
    lastActivity: 'Muestreo fitosanitario',
    healthRating: 96,
    notes: 'Pendiente del 32% con terrazas vivas de vetiver. Excelente acidez málica.'
  }
];

export const INITIAL_HARVEST: HarvestRecord[] = [
  {
    id: 'h-1',
    collectorName: 'Jairo Ospina',
    lotId: 'lot-1',
    lotName: 'Lote La Loma',
    weightKg: 48.5,
    weightArrobas: 3.88,
    ripePct: 96,
    semiRipePct: 3,
    greenPct: 1,
    time: '11:45 AM'
  },
  {
    id: 'h-2',
    collectorName: 'María Esperanza Gómez',
    lotId: 'lot-1',
    lotName: 'Lote La Loma',
    weightKg: 52.0,
    weightArrobas: 4.16,
    ripePct: 94,
    semiRipePct: 5,
    greenPct: 1,
    time: '11:52 AM'
  },
  {
    id: 'h-3',
    collectorName: 'Wilson Cañas',
    lotId: 'lot-3',
    lotName: 'Lote La Cascada',
    weightKg: 61.2,
    weightArrobas: 4.90,
    ripePct: 91,
    semiRipePct: 6,
    greenPct: 3,
    time: '12:10 PM'
  },
  {
    id: 'h-4',
    collectorName: 'Pedro Ramírez',
    lotId: 'lot-1',
    lotName: 'Lote La Loma',
    weightKg: 44.0,
    weightArrobas: 3.52,
    ripePct: 95,
    semiRipePct: 4,
    greenPct: 1,
    time: '12:25 PM'
  }
];

export const INITIAL_EXPENSES: ExpenseRecord[] = [
  {
    id: 'exp-1',
    category: 'Jornales',
    description: 'Pago jornada recolección 12 recolectores Lote La Loma',
    amountCop: 480000,
    date: '14 Oct 2024',
    lotName: 'Lote La Loma',
    status: 'Pagado'
  },
  {
    id: 'exp-2',
    category: 'Fertilizantes',
    description: '4 bultos Sulfato de Potasio y enmienda orgánica para Lote El Roble',
    amountCop: 620000,
    date: '13 Oct 2024',
    lotName: 'Lote El Roble',
    status: 'Pagado'
  },
  {
    id: 'exp-3',
    category: 'Transporte',
    description: 'Flete campero 20 bultos café cereza a beneficiadero central',
    amountCop: 140000,
    date: '12 Oct 2024',
    status: 'Pagado'
  },
  {
    id: 'exp-4',
    category: 'Beneficio',
    description: 'Mantenimiento preventivo camisas despulpadora Penagos #3',
    amountCop: 210000,
    date: '10 Oct 2024',
    status: 'Pagado'
  }
];

export const INITIAL_ACTIVITIES: CulturalActivity[] = [
  {
    id: 'act-1',
    type: 'Plateo y Desyerbe',
    lotName: 'Lote La Loma',
    workers: 6,
    progressPct: 85,
    date: '14 Oct 2024',
    tools: 'Machete y guadaña'
  },
  {
    id: 'act-2',
    type: 'Poda y Manejo Tejidos',
    lotName: 'Lote El Mirador',
    workers: 4,
    progressPct: 100,
    date: '11 Oct 2024',
    tools: 'Tijeras Felco #2'
  },
  {
    id: 'act-3',
    type: 'Siembra Sombrío',
    lotName: 'Lote El Roble',
    workers: 3,
    progressPct: 60,
    date: '08 Oct 2024',
    tools: 'Palines y abono orgánico'
  }
];

export const INITIAL_ALERTS: PhytosanitaryAlert[] = [
  {
    id: 'al-1',
    pestName: 'Broca del Café',
    lotName: 'Lote El Roble',
    incidencePct: 1.2,
    branchesSampled: 30,
    severity: 'Baja',
    date: '13 Oct 2024',
    actionRequired: 'Instalar 4 trampas con atrayente de alcohol en el lindero este.'
  },
  {
    id: 'al-2',
    pestName: 'Roya (Hemileia vastatrix)',
    lotName: 'Lote La Loma',
    incidencePct: 0.8,
    branchesSampled: 30,
    severity: 'Baja',
    date: '12 Oct 2024',
    actionRequired: 'Control preventivo biológico con extracto de ajo y ají.'
  },
  {
    id: 'al-3',
    pestName: 'Mancha de Hierro',
    lotName: 'Lote El Mirador',
    incidencePct: 2.1,
    branchesSampled: 30,
    severity: 'Media',
    date: '10 Oct 2024',
    actionRequired: 'Reforzar nutrición foliar con nitrógeno orgánico.'
  }
];

export const INITIAL_TASKS: FarmTask[] = [
  {
    id: 'task-1',
    title: 'Calibrar despulpadora Penagos antes de la molienda de las 4 PM',
    priority: 'Alta',
    category: 'Taller',
    assignee: 'Don Carlos & Mayordomo José',
    dueDate: 'Hoy · 4:00 PM',
    completed: false
  },
  {
    id: 'task-2',
    title: 'Comprar 8 bultos de compost biofermentado en la cooperativa',
    priority: 'Media',
    category: 'Insumos',
    assignee: 'Mayordomo José',
    dueDate: 'Jueves 17 Oct',
    completed: false
  },
  {
    id: 'task-3',
    title: 'Avisar cuadrilla de 14 recolectores para el pase fino en Lote La Loma',
    priority: 'Alta',
    category: 'Personal',
    assignee: 'Don Carlos',
    dueDate: 'Viernes 18 Oct',
    completed: false
  },
  {
    id: 'task-4',
    title: 'Revisar medidor de humedad en camas de secado tipo marquesina',
    priority: 'Media',
    category: 'Cosecha',
    assignee: 'Wilson Cañas',
    dueDate: 'Hoy · 2:00 PM',
    completed: true
  }
];

export const FARM_REPRESENTATIVES: FarmRepresentative[] = [
  {
    id: 'rep-1',
    name: 'Don Carlos Plazas',
    role: 'Propietario & Administrador',
    email: 'carlos@elmanantial.co',
    passwordHint: 'cafetal2024',
    phone: '+57 312 458 9201',
    badge: 'Administrador Principal',
    avatarColor: 'bg-coffee-800 text-amber-200',
    avatarInitials: 'CP',
    permissions: ['Control Total', 'Finanzas & Costos', 'Catastro de Lotes', 'Liquidación', 'Configuración'],
    planType: 'Plan Finca Familiar & Cuadrilla',
    planStatus: 'Activo',
    daysLeft: 28
  },
  {
    id: 'rep-2',
    name: 'Wilson Cañas',
    role: 'Mayordomo & Jefe de Beneficiadero',
    email: 'wilson@elmanantial.co',
    passwordHint: 'mayordomo123',
    phone: '+57 314 782 1190',
    badge: 'Operaciones de Campo',
    avatarColor: 'bg-leaf-800 text-leaf-100',
    avatarInitials: 'WC',
    permissions: ['Pesaje en Báscula', 'Control de Tolvas', 'Secado en Marquesinas', 'Cuadrillas'],
    planType: 'Plan Finca Familiar & Cuadrilla',
    planStatus: 'Activo',
    daysLeft: 28
  },
  {
    id: 'rep-3',
    name: 'María Gómez',
    role: 'Supervisora de Calidad y Cosecha',
    email: 'maria@elmanantial.co',
    passwordHint: 'calidad2024',
    phone: '+57 320 663 4402',
    badge: 'Calidad & Taza',
    avatarColor: 'bg-amber-700 text-white',
    avatarInitials: 'MG',
    permissions: ['Muestreos °Brix', 'Monitoreo Fitosanitario', 'Inspección de Cereza', 'Registro de Rendimiento'],
    planType: 'Plan Finca Familiar & Cuadrilla',
    planStatus: 'Activo',
    daysLeft: 28
  },
  {
    id: 'rep-4',
    name: 'Jairo Ospina',
    role: 'Capataz de Cuadrilla y Labores',
    email: 'jairo@elmanantial.co',
    passwordHint: 'campo123',
    phone: '+57 311 905 3318',
    badge: 'Labores Agronómicas',
    avatarColor: 'bg-rose-900 text-rose-100',
    avatarInitials: 'JO',
    permissions: ['Labores Agronómicas', 'Plateo y Podas', 'Fertilización', 'Agenda de Jornaleros'],
    planType: 'Plan Finca Familiar & Cuadrilla',
    planStatus: 'Activo',
    daysLeft: 28
  }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'plan-basic',
    name: 'Plan Cafetero Individual',
    priceCop: 35000,
    period: 'mes',
    description: 'Para productores independientes que gestionan su propio cuaderno de campo.',
    maxRepresentatives: 1,
    features: [
      '1 Representante de finca',
      'Cuaderno de campo 100% offline',
      'Registro diario de báscula y arrobas',
      'Catastro de hasta 3 lotes',
      'Sincronización automática al conectar'
    ]
  },
  {
    id: 'plan-family',
    name: 'Plan Finca Familiar & Cuadrilla',
    priceCop: 79000,
    period: 'mes',
    popular: true,
    description: 'El más elegido por fincas cafeteras con mayordomo, supervisor y cuadrillas.',
    maxRepresentatives: 5,
    features: [
      'Hasta 5 representantes con usuarios y claves',
      'Perfiles: Propietario, Mayordomo, Calidad y Capataz',
      'Lotes ilimitados con curvas °Brix y floración',
      'Control de costos y jornales por cuadrilla',
      'Alertas de broca/roya con registro fotográfico',
      'Soporte prioritario por WhatsApp'
    ]
  },
  {
    id: 'plan-coop',
    name: 'Plan Cooperativa / Exportador',
    priceCop: 180000,
    period: 'mes',
    description: 'Para fincas de especialidad y asociaciones con exportación directa.',
    maxRepresentatives: 15,
    features: [
      'Representantes ilimitados con roles personalizados',
      'Trazabilidad lote por lote con QR de exportación',
      'Módulo de microlotes y perfiles de catación SCA',
      'Reportes para certificación Rainforest & Fairtrade',
      'Exportación en Excel y PDF contable'
    ]
  }
];
