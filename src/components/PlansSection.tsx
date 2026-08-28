import { PLANS } from '../data/mockData';
import { CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface PlansSectionProps {
  onSelectPlan: (planId: string) => void;
}

export function PlansSection({ onSelectPlan }: PlansSectionProps) {
  return (
    <section id="planos" className="py-24 px-6 bg-[#f9f5ef] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e67e22] uppercase tracking-wider mb-2 bg-[#f4eade] px-3.5 py-1 rounded-full border border-[#e67e22]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#e67e22]" />
            <span>Assinatura Flexível & Sem Fidelidade</span>
          </div>
          <h2 className="font-['Aclonica'] text-3xl sm:text-4xl text-[#1c2826] mb-3">
            Escolha seu ritmo.
          </h2>
          <p className="text-[#536360] text-sm sm:text-base max-w-lg mx-auto">
            Receba ovos de gema cor de ouro na frequência perfeita para você e sua família.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 items-stretch">
          {PLANS.map((plan, idx) => {
            const isHighlighted = plan.highlighted;

            if (isHighlighted) {
              // Semanal (Highlighted Card with White Background, Warm Amber Border & Elevation)
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white p-7 lg:p-8 rounded-3xl shadow-[0_15px_45px_rgba(230,126,34,0.15)] flex flex-col justify-between md:-translate-y-3 relative z-20 border-2 border-[#e67e22] cursor-default group"
                >
                  {/* Top Badge */}
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e67e22] text-[#1c2826] font-bold text-xs px-4 py-1 rounded-full whitespace-nowrap shadow-md uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>{plan.badge || 'Mais escolhido'}</span>
                  </motion.div>

                  <div>
                    <h3 className="font-['Aclonica'] text-2xl text-[#1c2826] text-center mt-2 mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-center text-[#536360] mb-6 font-medium">
                      {plan.tagline}
                    </p>

                    <div className="text-center mb-6 pb-6 border-b border-[#1c2826]/10">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="font-['Aclonica'] text-4xl lg:text-5xl text-[#1c2826] tracking-tight">
                          R$ {plan.priceMonthly}
                        </span>
                        <span className="text-sm font-semibold text-[#536360]">/mês</span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#e67e22] bg-[#f4eade] px-3 py-1 rounded-full mt-2 inline-block border border-[#e67e22]/20">
                        R$ {(plan.priceMonthly / plan.eggsTotal).toFixed(2)} por ovo caipira de ouro
                      </span>
                    </div>

                    <ul className="flex flex-col gap-3 mb-8">
                      {plan.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center gap-2.5 text-sm text-[#1c2826] font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#e67e22] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onSelectPlan(plan.id)}
                    className="bg-[#e67e22] hover:bg-[#d67214] text-[#1c2826] font-bold text-sm text-center py-3.5 px-6 rounded-xl transition-all w-full shadow-[0_6px_20px_rgba(230,126,34,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Assinar Semanal</span>
                  </motion.button>
                </motion.div>
              );
            }

            // Quinzenal & Mensal (White Cards with Soft Warm Borders)
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white border border-[#1c2826]/12 p-7 rounded-3xl shadow-[0_4px_25px_rgba(28,40,38,0.05)] flex flex-col justify-between hover:border-[#e67e22]/40 hover:shadow-[0_8px_30px_rgba(28,40,38,0.08)] transition-all cursor-default"
              >
                <div>
                  <h3 className="font-['Aclonica'] text-2xl text-[#1c2826] text-center mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-center text-[#536360] mb-6">
                    {plan.tagline}
                  </p>

                  <div className="text-center mb-6 pb-6 border-b border-[#1c2826]/10">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-['Aclonica'] text-4xl text-[#1c2826]">
                        R$ {plan.priceMonthly}
                      </span>
                      <span className="text-sm text-[#536360]">/mês</span>
                    </div>
                    <span className="text-[11px] text-[#536360] bg-[#f9f5ef] px-2.5 py-0.5 rounded-full mt-2 inline-block border border-[#1c2826]/8 font-medium">
                      R$ {(plan.priceMonthly / plan.eggsTotal).toFixed(2)} por ovo
                    </span>
                  </div>

                  <ul className="flex flex-col gap-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-2.5 text-sm text-[#1c2826]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#e67e22] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onSelectPlan(plan.id)}
                  className="border-2 border-[#1c2826]/20 bg-[#faf6f0] hover:bg-[#f4eade] hover:border-[#e67e22] text-[#1c2826] font-bold text-sm text-center py-3.5 px-6 rounded-xl transition-all w-full flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Assinar {plan.name === 'QUINZENAL' ? 'Quinzenal' : 'Mensal'}</span>
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center text-xs text-[#536360] flex flex-wrap items-center justify-center gap-6 font-medium"
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#e67e22]" /> Sem taxa de adesão ou taxas ocultas
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#e67e22]" /> Pausa gratuita para férias e viagens
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#e67e22]" /> Pagamento facilitado no PIX ou Cartão
          </span>
        </motion.div>
      </div>
    </section>
  );
}

