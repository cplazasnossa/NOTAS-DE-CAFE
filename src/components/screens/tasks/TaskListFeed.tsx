import React from 'react';
import { FarmTask } from '../../../types';
import { CalendarCheck, CheckSquare, Square } from 'lucide-react';
import { EmptyState } from '../../common/EmptyState';

interface Props {
  tasks: FarmTask[];
  onToggleTask: (id: string) => void;
}

export const TaskListFeed: React.FC<Props> = ({ tasks, onToggleTask }) => {
  const pendingCount = tasks.filter((t) => !t.completed).length;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs px-1">
        <span className="font-bold uppercase tracking-wider text-coffee-700">
          Pendientes Programados
        </span>
        <span className="text-[11px] font-bold text-coffee-600 bg-coffee-100 px-2 py-0.5 rounded-full">
          {pendingCount} por resolver
        </span>
      </div>

      {tasks.length === 0 ? (
        <EmptyState
          icon={CalendarCheck}
          title="Agenda al día"
          description="No hay tareas pendientes en este momento. Agrega un nuevo compromiso arriba cuando lo necesites."
        />
      ) : (
        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              onClick={() => onToggleTask(task.id)}
              className={`p-3 bg-white rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                task.completed
                  ? 'border-coffee-200 bg-coffee-50/50 opacity-70'
                  : 'border-coffee-200 shadow-xs hover:border-coffee-400'
              }`}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleTask(task.id);
                }}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center text-coffee-700 hover:text-coffee-950 cursor-pointer -ml-2"
                aria-label={task.completed ? 'Marcar como pendiente' : 'Marcar como completada'}
              >
                {task.completed ? (
                  <CheckSquare className="w-5 h-5 text-leaf-700" />
                ) : (
                  <Square className="w-5 h-5 text-coffee-400" />
                )}
              </button>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-xs font-bold ${
                      task.completed ? 'line-through text-coffee-400' : 'text-coffee-900'
                    }`}
                  >
                    {task.title}
                  </span>
                  <span
                    className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded shrink-0 ${
                      task.priority === 'Alta'
                        ? 'bg-rose-100 text-rose-800'
                        : task.priority === 'Media'
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-coffee-100 text-coffee-800'
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[11px] text-coffee-500 mt-1">
                  <span>Asignado: <strong className="text-coffee-700">{task.assignee}</strong></span>
                  <span>·</span>
                  <span>{task.dueDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
