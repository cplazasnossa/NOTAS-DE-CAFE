import React, { useState } from 'react';
import { FarmRepresentative } from '../../../types';
import { Lock, Mail, Eye, EyeOff, ShieldCheck, Check, ArrowRight, UserCheck } from 'lucide-react';
import { FeedbackButton } from '../../common/FeedbackButton';
import { FormAlert } from '../../common/FormAlert';

interface Props {
  representatives: FarmRepresentative[];
  activeRepresentative: FarmRepresentative;
  onSelectRepresentative: (rep: FarmRepresentative) => void;
  onLoginSuccess: (rep: FarmRepresentative) => void;
  onNavigateToPlans: () => void;
}

export const LoginForm: React.FC<Props> = ({
  representatives,
  activeRepresentative,
  onSelectRepresentative,
  onLoginSuccess,
  onNavigateToPlans
}) => {
  const [email, setEmail] = useState(activeRepresentative.email);
  const [password, setPassword] = useState(activeRepresentative.passwordHint);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync inputs when activeRepresentative changes from fast selector
  const handleSelectRep = (rep: FarmRepresentative) => {
    onSelectRepresentative(rep);
    setEmail(rep.email);
    setPassword(rep.passwordHint);
    setErrorMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setErrorMessage('Por favor ingresa usuario/correo y contraseña.');
      return;
    }

    if (activeRepresentative.planStatus === 'Pendiente de Pago') {
      setErrorMessage('La suscripción de este usuario está pendiente de pago. Por favor activa un plan primero.');
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onLoginSuccess(activeRepresentative);
      }, 700);
    }, 450);
  };

  return (
    <div className="space-y-4">
      {/* Selector rápido de representante */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs px-1">
          <span className="font-bold text-coffee-800 uppercase tracking-wider">
            Seleccionar Representante
          </span>
          <span className="text-[11px] text-coffee-500 font-medium">
            Acceso Rápido Demo
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {representatives.map((rep) => {
            const isSelected = activeRepresentative.id === rep.id;
            return (
              <button
                key={rep.id}
                type="button"
                onClick={() => handleSelectRep(rep)}
                className={`p-2.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-2.5 min-h-[52px] ${
                  isSelected
                    ? 'bg-white border-coffee-800 shadow-sm ring-2 ring-coffee-800/10'
                    : 'bg-white/70 border-coffee-200 hover:bg-white hover:border-coffee-400'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${rep.avatarColor}`}
                >
                  {rep.avatarInitials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-coffee-950 truncate block">
                      {rep.name.split(' ')[0]} {rep.name.split(' ')[1] || ''}
                    </span>
                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-leaf-700 shrink-0 ml-1" />
                    )}
                  </div>
                  <span className="text-[10px] text-coffee-600 truncate block">
                    {rep.role.split('&')[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Alerta de Error si aplica */}
      {errorMessage && (
        <FormAlert
          message={errorMessage}
          onDismiss={() => setErrorMessage(null)}
        />
      )}

      {/* Formulario de Credenciales */}
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-5 border border-coffee-200 shadow-sm space-y-3.5">
        <div className="flex items-center justify-between pb-2 border-b border-coffee-100">
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-coffee-800" />
            <span className="text-xs font-bold text-coffee-900">
              Credenciales de {activeRepresentative.name}
            </span>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-leaf-100 text-leaf-800">
            {activeRepresentative.planStatus} · {activeRepresentative.daysLeft}d
          </span>
        </div>

        {/* Input Usuario / Email */}
        <div>
          <label className="text-xs font-bold text-coffee-800 block mb-1">
            Usuario o Correo Institucional
          </label>
          <div className="relative">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@elmanantial.co"
              className="w-full min-h-[46px] pl-10 pr-3 text-xs sm:text-sm bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700"
            />
            <Mail className="w-4 h-4 text-coffee-500 absolute left-3 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Input Contraseña */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-xs font-bold text-coffee-800">
              Contraseña
            </label>
            <span className="text-[10px] text-coffee-500 font-mono">
              Clave demo: {activeRepresentative.passwordHint}
            </span>
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full min-h-[46px] pl-10 pr-10 text-xs sm:text-sm bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700"
            />
            <Lock className="w-4 h-4 text-coffee-500 absolute left-3 top-3.5 pointer-events-none" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-coffee-500 hover:text-coffee-900 absolute right-0 top-0 cursor-pointer"
              aria-label={showPassword ? 'Ocultar contraseña' : 'Ver contraseña'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Indicador de suscripción de pago */}
        <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/60 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
            <div>
              <span className="font-bold text-coffee-900 block leading-tight">
                {activeRepresentative.planType}
              </span>
              <span className="text-[10px] text-coffee-600">
                Membresía activa vinculada a la finca
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onNavigateToPlans}
            className="text-[11px] font-bold text-amber-900 underline hover:text-amber-950 cursor-pointer"
          >
            Ver Planes
          </button>
        </div>

        {/* Botón de Ingreso */}
        <FeedbackButton
          type="submit"
          isLoading={isSubmitting}
          isSuccess={isSuccess}
          loadingText="Validando credenciales y membresía..."
          successText="¡Sesión autorizada! Ingresando..."
        >
          <span>Ingresar como {activeRepresentative.name.split(' ')[0]}</span>
          <ArrowRight className="w-4 h-4 text-amber-200" />
        </FeedbackButton>
      </form>

      {/* Permisos del representante seleccionado */}
      <div className="p-3.5 bg-white rounded-2xl border border-coffee-200 space-y-1.5 text-xs">
        <span className="font-bold text-coffee-800 text-[11px] uppercase tracking-wider block">
          Permisos del Rol: {activeRepresentative.role}
        </span>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {activeRepresentative.permissions.map((perm) => (
            <span
              key={perm}
              className="text-[10px] font-semibold bg-parchment text-coffee-700 px-2 py-0.5 rounded-lg border border-coffee-200/80"
            >
              ✓ {perm}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
