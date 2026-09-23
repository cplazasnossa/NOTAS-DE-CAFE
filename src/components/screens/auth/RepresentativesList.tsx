import React, { useState } from 'react';
import { FarmRepresentative } from '../../../types';
import { Users, UserPlus, Shield, Key, Mail, CheckCircle2, ChevronRight } from 'lucide-react';
import { FeedbackButton } from '../../common/FeedbackButton';

interface Props {
  representatives: FarmRepresentative[];
  onSelectRep: (rep: FarmRepresentative) => void;
  onAddRepresentative: (rep: FarmRepresentative) => void;
}

export const RepresentativesList: React.FC<Props> = ({
  representatives,
  onSelectRep,
  onAddRepresentative
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('Asistente Técnico');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAddRep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newEmail.trim() || !newPassword.trim()) return;

    setIsAdding(true);
    setTimeout(() => {
      const initials = newName
        .split(' ')
        .map((w) => w[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

      const newRep: FarmRepresentative = {
        id: 'rep-' + Date.now(),
        name: newName.trim(),
        role: newRole,
        email: newEmail.trim(),
        passwordHint: newPassword.trim(),
        phone: '+57 300 000 0000',
        badge: 'Nuevo Representante',
        avatarColor: 'bg-coffee-700 text-amber-100',
        avatarInitials: initials || 'RF',
        permissions: ['Cuaderno de Campo', 'Consulta de Lotes', 'Registro de Labores'],
        planType: 'Plan Finca Familiar & Cuadrilla',
        planStatus: 'Activo',
        daysLeft: 30
      };

      onAddRepresentative(newRep);
      setIsAdding(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setShowAddForm(false);
        setNewName('');
        setNewEmail('');
        setNewPassword('');
      }, 1200);
    }, 450);
  };

  return (
    <div className="space-y-3.5">
      {/* Encabezado del Directorio */}
      <div className="flex items-center justify-between px-1">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-coffee-800 block">
            Directorio de Representantes
          </span>
          <p className="text-[11px] text-coffee-500">
            {representatives.length} miembros registrados con acceso
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowAddForm(!showAddForm)}
          className="text-xs font-bold text-coffee-900 bg-white px-3 py-1.5 rounded-xl border border-coffee-200 hover:bg-coffee-100 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
        >
          <UserPlus className="w-3.5 h-3.5 text-coffee-700" />
          <span>{showAddForm ? 'Cerrar' : '+ Representante'}</span>
        </button>
      </div>

      {/* Formulario de Alta de Representante */}
      {showAddForm && (
        <form
          onSubmit={handleAddRep}
          className="bg-white rounded-3xl p-4 border border-coffee-300 shadow-sm space-y-3 animate-fade-in"
        >
          <span className="text-xs font-bold text-coffee-950 block border-b border-coffee-100 pb-1.5">
            Registrar Representante de la Finca
          </span>

          <div>
            <label className="text-xs font-bold text-coffee-800 block mb-1">
              Nombre Completo
            </label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Ej: Sofía Aristizábal"
              className="w-full min-h-[44px] px-3 py-2 text-xs bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs font-bold text-coffee-800 block mb-1">
                Cargo / Rol
              </label>
              <select
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                className="w-full min-h-[44px] px-3 py-2 text-xs bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700"
              >
                <option value="Asistente Técnico">Asistente Técnico</option>
                <option value="Catador / Barista">Catador / Barista</option>
                <option value="Contador de Finca">Contador de Finca</option>
                <option value="Jefe de Cuadrilla">Jefe de Cuadrilla</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-coffee-800 block mb-1">
                Contraseña
              </label>
              <input
                type="text"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Clave acceso"
                className="w-full min-h-[44px] px-3 py-2 text-xs bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-coffee-800 block mb-1">
              Correo Institucional
            </label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="sofia@elmanantial.co"
              className="w-full min-h-[44px] px-3 py-2 text-xs bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700"
              required
            />
          </div>

          <FeedbackButton
            type="submit"
            isLoading={isAdding}
            isSuccess={isSuccess}
            loadingText="Guardando nuevo representante..."
            successText="¡Representante registrado con éxito!"
          >
            <span>Crear Usuario Representante</span>
          </FeedbackButton>
        </form>
      )}

      {/* Lista de Tarjetas de Representantes */}
      <div className="space-y-2">
        {representatives.map((rep) => (
          <div
            key={rep.id}
            className="p-3.5 bg-white rounded-2xl border border-coffee-200 shadow-xs flex items-center justify-between gap-3 hover:border-coffee-400 transition-all"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 ${rep.avatarColor}`}
              >
                {rep.avatarInitials}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold text-coffee-950 truncate">
                    {rep.name}
                  </h4>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-leaf-100 text-leaf-800 shrink-0">
                    {rep.planStatus}
                  </span>
                </div>
                <p className="text-[11px] text-coffee-600 font-medium truncate">
                  {rep.role}
                </p>
                <div className="flex items-center gap-2 text-[10px] text-coffee-500 mt-0.5 font-mono">
                  <span>{rep.email}</span>
                  <span>·</span>
                  <span>Clave: {rep.passwordHint}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectRep(rep)}
              className="px-3 py-1.5 bg-coffee-100 hover:bg-coffee-800 hover:text-white text-coffee-900 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer"
            >
              Usar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
