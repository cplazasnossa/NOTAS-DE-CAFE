import React, { useState } from 'react';
import { SubscriptionPlan, FarmRepresentative } from '../../../types';
import { Check, ShieldCheck, CreditCard, Sparkles, Building2, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { formatCurrency } from '../../../utils/formatters';

interface Props {
  plans: SubscriptionPlan[];
  activeRepresentative: FarmRepresentative;
  onPlanActivated: (planName: string) => void;
  onBackToLogin: () => void;
}

type PaymentMethod = 'pse' | 'card' | 'nequi' | 'fnc';

export const SubscriptionPlansView: React.FC<Props> = ({
  plans,
  activeRepresentative,
  onPlanActivated,
  onBackToLogin
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('plan-family');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('pse');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentReceipt, setPaymentReceipt] = useState<{
    reference: string;
    date: string;
    amount: number;
    planName: string;
  } | null>(null);

  const selectedPlan = plans.find((p) => p.id === selectedPlanId) || plans[1];

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentReceipt({
        reference: 'FNC-' + Math.floor(100000 + Math.random() * 900000),
        date: 'Hoy, 23 Sep 2026',
        amount: selectedPlan.priceCop,
        planName: selectedPlan.name
      });
      onPlanActivated(selectedPlan.name);
    }, 1200);
  };

  return (
    <div className="space-y-4">
      {/* Encabezado de la suscripción */}
      <div className="bg-white rounded-3xl p-4 border border-coffee-200 text-center space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold">
          <Sparkles className="w-3.5 h-3.5 text-amber-800" />
          <span>Suscripción Cafetera de Acceso</span>
        </div>
        <h3 className="text-base font-serif font-extrabold text-coffee-950">
          Elige el plan para tu finca
        </h3>
        <p className="text-xs text-coffee-600 max-w-xs mx-auto">
          Acceso para cada representante con sincronización automática y cuaderno de campo offline.
        </p>
      </div>

      {paymentReceipt ? (
        /* Recibo de Confirmación de Pago */
        <div className="bg-white rounded-3xl p-5 border border-leaf-300 shadow-md text-center space-y-4 animate-fade-in">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-leaf-100 text-leaf-800 flex items-center justify-center border border-leaf-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-leaf-700 block">
              ¡Pago Exitoso & Acceso Activado!
            </span>
            <h4 className="text-lg font-bold text-coffee-950">
              {paymentReceipt.planName}
            </h4>
            <p className="text-xs text-coffee-600">
              Habilitado para <strong className="text-coffee-900">{activeRepresentative.name}</strong> y los representantes de Finca El Manantial.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-parchment border border-coffee-200 text-xs space-y-1.5 text-left font-mono">
            <div className="flex justify-between">
              <span className="text-coffee-600">Ref. Transacción:</span>
              <span className="font-bold text-coffee-900">{paymentReceipt.reference}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-coffee-600">Monto Cancelado:</span>
              <span className="font-bold text-coffee-900">{formatCurrency(paymentReceipt.amount)} COP</span>
            </div>
            <div className="flex justify-between">
              <span className="text-coffee-600">Fecha de Activación:</span>
              <span className="text-coffee-900">{paymentReceipt.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-coffee-600">Vigencia:</span>
              <span className="text-leaf-700 font-bold">30 Días de Cobertura Total</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onBackToLogin}
            className="w-full min-h-[48px] py-2.5 px-4 bg-coffee-800 hover:bg-coffee-900 text-white rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-98"
          >
            <span>Continuar al Ingreso con Credenciales</span>
            <ArrowRight className="w-4 h-4 text-amber-200" />
          </button>
        </div>
      ) : (
        <>
          {/* Tarjetas de Planes */}
          <div className="space-y-2.5">
            {plans.map((plan) => {
              const isSelected = plan.id === selectedPlanId;
              return (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`p-4 rounded-3xl border transition-all cursor-pointer relative ${
                    isSelected
                      ? 'bg-white border-coffee-900 shadow-md ring-2 ring-coffee-900/10'
                      : 'bg-white/80 border-coffee-200 hover:border-coffee-400'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-2.5 right-4 bg-amber-800 text-white text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                      Más Elegido por Cafeteros
                    </span>
                  )}

                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xs font-extrabold text-coffee-950">
                        {plan.name}
                      </h4>
                      <p className="text-[11px] text-coffee-600 mt-0.5">
                        {plan.description}
                      </p>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <span className="text-base font-extrabold font-serif text-coffee-950 block">
                        {formatCurrency(plan.priceCop)}
                      </span>
                      <span className="text-[10px] text-coffee-500">
                        COP / {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-2.5 space-y-1 border-t border-coffee-100 pt-2 text-[11px] text-coffee-700">
                    {plan.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-leaf-700 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Métodos de Pago Locales */}
          <div className="bg-white rounded-3xl p-4 border border-coffee-200 space-y-3">
            <span className="text-xs font-bold text-coffee-800 uppercase tracking-wider block">
              Método de Pago para Colombia
            </span>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPaymentMethod('pse')}
                className={`p-2.5 rounded-2xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
                  paymentMethod === 'pse'
                    ? 'bg-coffee-900 text-white border-coffee-900'
                    : 'bg-parchment text-coffee-800 border-coffee-200 hover:bg-coffee-100'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span className="truncate">PSE / Banco</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('nequi')}
                className={`p-2.5 rounded-2xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
                  paymentMethod === 'nequi'
                    ? 'bg-coffee-900 text-white border-coffee-900'
                    : 'bg-parchment text-coffee-800 border-coffee-200 hover:bg-coffee-100'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span className="truncate">Nequi / Daviplata</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-2.5 rounded-2xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
                  paymentMethod === 'card'
                    ? 'bg-coffee-900 text-white border-coffee-900'
                    : 'bg-parchment text-coffee-800 border-coffee-200 hover:bg-coffee-100'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                <span className="truncate">Tarjeta Débito/Crédito</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('fnc')}
                className={`p-2.5 rounded-2xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
                  paymentMethod === 'fnc'
                    ? 'bg-coffee-900 text-white border-coffee-900'
                    : 'bg-parchment text-coffee-800 border-coffee-200 hover:bg-coffee-100'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span className="truncate">Comité Cafetero</span>
              </button>
            </div>

            {/* Resumen y Botón de Pago */}
            <div className="pt-2 border-t border-coffee-100 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-coffee-600">Total a pagar:</span>
                <span className="font-extrabold font-serif text-base text-coffee-950">
                  {formatCurrency(selectedPlan.priceCop)} COP
                </span>
              </div>

              <button
                type="button"
                onClick={handlePay}
                disabled={isProcessing}
                className="w-full min-h-[48px] py-2.5 px-4 bg-coffee-800 hover:bg-coffee-900 text-white rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-98 disabled:opacity-60"
              >
                {isProcessing ? (
                  <span>Procesando pago seguro...</span>
                ) : (
                  <>
                    <span>Pagar y Activar {selectedPlan.name.split(' ')[1] || 'Plan'}</span>
                    <ArrowRight className="w-4 h-4 text-amber-200" />
                  </>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
