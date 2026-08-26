import { PLANS } from '../data/mockData';
import { CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

interface PlansSectionProps {
  onSelectPlan: (planId: string) => void;
}

export function PlansSection({ onSelectPlan }: PlansSectionProps) {
  return (
    <section id="planos" className="py-24 px-6 bg-[#1c2826] relative">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffb783] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#e67e22]" />
            <span>Assinatura Flexível & Sem Fidelidade</span>
          </div>
          <h2 className="font-['Aclonica'] text-3xl sm:text-4xl text-[#f4eade] mb-3">
            Escolha seu ritmo.
          </h2>
          <p className="text-[#c3c8c6] text-sm sm:text-base max-w-lg mx-auto">
            Receba ovos de gema cor de ouro na frequência perfeita para você e sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 items-stretch">
          {PLANS.map((plan) => {
            const isHighlighted = plan.highlighted;

            if (isHighlighted) {
              // Semanal (Highlighted Card with Warm Cream Background)
              return (
                <div
                  key={plan.id}
                  className="bg-[#f4eade] p-7 lg:p-8 rounded-2xl shadow-[0_20px_50px_rgba(230,126,34,0.18)] flex flex-col justify-between hover:scale-[1.03] transition-all transform md:-translate-y-3 relative z-20 border-2 border-[#e67e22]"
                >
                  {/* Top Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e67e22] text-[#1c2826] font-bold text-xs px-4 py-1 rounded-full whitespace-nowrap shadow-md uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 fill-current" />
                    <span>{plan.badge || 'Mais escolhido'}</span>
                  </div>

                  <div>
                    <h3 className="font-['Aclonica'] text-2xl text-[#1c2826] text-center mt-2 mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-center text-[#1c2826]/70 mb-6 font-medium">
                      {plan.tagline}
                    </p>

                    <div className="text-center mb-6 pb-6 border-b border-[#1c2826]/15">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="font-['Aclonica'] text-4xl lg:text-5xl text-[#1c2826] tracking-tight">
                          R$ {plan.priceMonthly}
                        </span>
                        <span className="text-sm font-semibold text-[#1c2826]/70">/mês</span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#e67e22] bg-[#1c2826]/5 px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
                        R$ {(plan.priceMonthly / plan.eggsTotal).toFixed(2)} por ovo caipira de ouro
                      </span>
                    </div>

                    <ul className="flex flex-col gap-3 mb-8">
                      {plan.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center gap-2 text-sm text-[#1c2826] font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#e67e22] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className="bg-[#e67e22] hover:bg-[#d67214] text-[#1c2826] font-bold text-sm text-center py-3.5 px-6 rounded-xl hover:brightness-105 active:scale-95 transition-all w-full shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Assinar Semanal</span>
                  </button>
                </div>
              );
            }

            // Quinzenal & Mensal (Rustic Brown Cards)
            return (
              <div
                key={plan.id}
                className="bg-[#2b1e1a] border border-[#f4eade]/15 p-7 rounded-2xl shadow-[0_10px_40px_rgba(28,40,38,0.5)] flex flex-col justify-between hover:scale-[1.02] hover:border-[#e67e22]/40 transition-all"
              >
                <div>
                  <h3 className="font-['Aclonica'] text-2xl text-[#f4eade] text-center mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-center text-[#c3c8c6] mb-6">
                    {plan.tagline}
                  </p>

                  <div className="text-center mb-6 pb-6 border-b border-[#f4eade]/10">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-['Aclonica'] text-4xl text-[#ffb783]">
                        R$ {plan.priceMonthly}
                      </span>
                      <span className="text-sm text-[#c3c8c6]">/mês</span>
                    </div>
                    <span className="text-[11px] text-[#c3c8c6] mt-1.5 inline-block">
                      R$ {(plan.priceMonthly / plan.eggsTotal).toFixed(2)} por ovo
                    </span>
                  </div>

                  <ul className="flex flex-col gap-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-2 text-sm text-[#f4eade]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#e67e22] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectPlan(plan.id)}
                  className="border-2 border-[#f4eade] hover:border-[#e67e22] text-[#f4eade] hover:text-[#e67e22] hover:bg-[#f4eade]/5 font-semibold text-sm text-center py-3.5 px-6 rounded-xl transition-all w-full flex items-center justify-center gap-2"
                >
                  <span>Assinar {plan.name === 'QUINZENAL' ? 'Quinzenal' : 'Mensal'}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Reassurance Footer */}
        <div className="mt-12 text-center text-xs text-[#c3c8c6] flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#e67e22]" /> Sem taxa de adesão ou taxas ocultas
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#e67e22]" /> Pausa gratuita para férias e viagens
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#e67e22]" /> Pagamento facilitado no PIX ou Cartão
          </span>
        </div>
      </div>
    </section>
  );
}
