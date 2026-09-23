import React, { useState } from 'react';
import { ScreenId, FarmTask } from '../../types';
import { INITIAL_TASKS } from '../../data/mockData';
import { ChevronDown, CalendarCheck, Home } from 'lucide-react';
import { ScreenHeader } from '../common/ScreenHeader';
import { FeedbackButton } from '../common/FeedbackButton';
import { FormAlert } from '../common/FormAlert';
import { ScreenFooterNav } from '../common/ScreenFooterNav';
import { TaskListFeed } from './tasks/TaskListFeed';
import { useAsyncFormSubmit } from '../../hooks/useAsyncFormSubmit';

interface Props {
  onNavigate: (screen: ScreenId) => void;
  onAddTask?: (task: FarmTask) => void;
}

const PRIORITIES: FarmTask['priority'][] = ['Alta', 'Media', 'Baja'];

export const Screen9RegisterTask: React.FC<Props> = ({ onNavigate, onAddTask }) => {
  const [tasks, setTasks] = useState<FarmTask[]>(INITIAL_TASKS);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<FarmTask['priority']>('Alta');
  const [category, setCategory] = useState<FarmTask['category']>('Taller');
  const [assignee, setAssignee] = useState('Don Carlos');
  const [dueDate, setDueDate] = useState('Hoy · 4:00 PM');

  const { isSaving, isSuccess, errorMessage, clearError, executeSubmit } = useAsyncFormSubmit();

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();

    executeSubmit(
      () => {
        if (!title.trim()) {
          return 'Por favor escribe la descripción de la tarea (ej: Revisión de mangueras de despulpadora).';
        }
        return null;
      },
      () => {
        const newTask: FarmTask = {
          id: 'task-' + Date.now(),
          title: title.trim(),
          priority,
          category,
          assignee,
          dueDate,
          completed: false
        };

        setTasks((prev) => [newTask, ...prev]);
        if (onAddTask) onAddTask(newTask);
        setTitle('');
      }
    );
  };

  return (
    <div className="flex flex-col h-full bg-[#FAF6F0] text-coffee-900 pb-8 px-4 sm:px-5 pt-3 space-y-4 overflow-y-auto no-scrollbar">
      {/* 1. Encabezado */}
      <ScreenHeader
        title="Agenda"
        subtitle="Tareas programadas, cuadrillas y pendientes de la finca"
        category="Plan de Trabajo"
        showBack={true}
        onBack={() => onNavigate('SCREEN_15')}
        backLabel="Volver a Sanidad"
        icon={<CalendarCheck className="w-5 h-5 text-coffee-800" />}
      />

      {/* 2. Error Feedback */}
      {errorMessage && (
        <FormAlert
          message={errorMessage}
          onDismiss={clearError}
        />
      )}

      {/* 3. Formulario de Creación de Tarea */}
      <form onSubmit={handleCreateTask} className="bg-white rounded-3xl p-5 border border-coffee-200 shadow-sm space-y-4">
        <div>
          <label className="text-xs font-bold text-coffee-800 block mb-1">
            Descripción de la Tarea
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ej: Calibrar zaranda de despulpadora..."
            className="w-full min-h-[46px] px-3.5 py-2.5 text-xs sm:text-sm bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700"
          />
        </div>

        {/* Prioridad y Responsable */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-bold text-coffee-800 block mb-1">
              Prioridad
            </label>
            <div className="grid grid-cols-3 gap-1">
              {PRIORITIES.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPriority(p)}
                  className={`min-h-[44px] py-1.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                    priority === p
                      ? p === 'Alta'
                        ? 'bg-rose-700 text-white border-rose-700 shadow-xs'
                        : p === 'Media'
                        ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                        : 'bg-coffee-800 text-white border-coffee-800 shadow-xs'
                      : 'bg-parchment text-coffee-700 border-coffee-200 hover:bg-coffee-100'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-coffee-800 block mb-1">
              Responsable
            </label>
            <div className="relative">
              <select
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                className="w-full min-h-[44px] px-3 py-2 text-xs sm:text-sm bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700 appearance-none cursor-pointer"
              >
                <option value="Don Carlos">Don Carlos (Mayordomo)</option>
                <option value="Jairo Ospina">Jairo Ospina (Cuadrilla 1)</option>
                <option value="Wilson Cañas">Wilson Cañas (Beneficiadero)</option>
                <option value="María Gómez">María Gómez (Secado)</option>
              </select>
              <ChevronDown className="w-4 h-4 text-coffee-500 absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Fecha y Categoría */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-bold text-coffee-800 block mb-1">
              Plazo de Ejecución
            </label>
            <input
              type="text"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              placeholder="Ej: Hoy · 5:00 PM"
              className="w-full min-h-[44px] px-3 py-2 text-xs sm:text-sm bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-coffee-800 block mb-1">
              Área de Trabajo
            </label>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as FarmTask['category'])}
                className="w-full min-h-[44px] px-3 py-2 text-xs sm:text-sm bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700 appearance-none cursor-pointer"
              >
                <option value="Taller">Taller y Maquinaria</option>
                <option value="Beneficio">Beneficiadero</option>
                <option value="Campo">Campo y Cafetal</option>
                <option value="Secado">Patio y Secado</option>
              </select>
              <ChevronDown className="w-4 h-4 text-coffee-500 absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Submit */}
        <FeedbackButton
          type="submit"
          isLoading={isSaving}
          isSuccess={isSuccess}
          loadingText="Guardando pendiente en agenda..."
          successText="¡Pendiente añadido a la agenda!"
        >
          <span>Agendar Nuevo Pendiente</span>
        </FeedbackButton>
      </form>

      {/* 4. Lista de Tareas */}
      <TaskListFeed tasks={tasks} onToggleTask={toggleTask} />

      {/* 5. Navegación Inferior */}
      <ScreenFooterNav
        onBack={() => onNavigate('SCREEN_15')}
        backLabel="Atrás"
        onNext={() => onNavigate('SCREEN_21')}
        nextLabel="Volver a Mi Finca"
        nextIcon={<Home className="w-4 h-4 text-amber-200" />}
      />
    </div>
  );
};
