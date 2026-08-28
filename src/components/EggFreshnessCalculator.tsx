import { useState } from 'react';
import { Egg, Sparkles, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface EggCalculatorProps {
  onSelectPlan: (planId: string) => void;
}

export function EggFreshnessCalculator({ onSelectPlan }: EggCalculatorProps) {
  const [familyMembers, setFamilyMembers] = useState(3);
  const [eggsPerPersonPerWeek, setEggsPerPersonPerWeek] = useState(7);

  const totalEggsPerWeek = familyMembers * eggsPerPersonPerWeek;
  const totalEggsPerMonth = totalEggsPerWeek * 4;

  let recommendedPlanId = 'quinzenal';
  let recommendedPlanName = 'Quinzenal (60 ovos/mês)';
  let recommendedPrice = 'R$ 82';

  if (totalEggsPerMonth <= 35) {
    recommendedPlanId = 'mensal';
    recommendedPlanName = 'Mensal (30 ovos/mês)';
    recommendedPrice = 'R$ 41';
  } else if (totalEggsPerMonth > 80) {
    recommendedPlanId = 'semanal';
    recommendedPlanName = 'Semanal (120 ovos/mês)';
    recommendedPrice = 'R$ 164';
  }

  // Calculate freshness rating based on delivery cadence
  const freshnessDaysMax = recommendedPlanId === 'semanal' ? 7 : recommendedPlanId === 'quinzenal' ? 14 : 25;

  return (
    <section id="calculadora" className="py-16 px-6 bg-[#fdfbf7] border-y border-[#1c2826]/8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-[1000px] mx-auto bg-white p-6 sm:p-10 rounded-3xl border border-[#1c2826]/10 shadow-[0_10px_40px_rgba(28,40,38,0.06)]"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e67e22] uppercase tracking-wider mb-2 bg-[#f4eade] px-3.5 py-1 rounded-full border border-[#e67e22]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#e67e22]" />
            <span>Simulador de Consumo Familiar</span>
          </div>
          <h3 className="font-['Aclonica'] text-2xl sm:text-3xl text-[#1c2826] mb-2">
            Descubra o ritmo ideal para a sua casa
          </h3>
          <p className="text-sm text-[#536360]">
            Ajuste os controles deslizantes para estimar sua demanda mensal e ver a recomendação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Sliders Container */}
          <div className="space-y-6 bg-[#faf6f0] p-6 rounded-2xl border border-[#1c2826]/8 flex flex-col justify-between">
            {/* Slider 1: People */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-[#1c2826]">
                  Pessoas que consomem na casa
                </label>
                <span className="text-sm font-bold text-[#1c2826] bg-white px-3 py-0.5 rounded-lg border border-[#1c2826]/10 shadow-xs">
                  {familyMembers} {familyMembers === 1 ? 'pessoa' : 'pessoas'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                value={familyMembers}
                onChange={(e) => setFamilyMembers(Number(e.target.value))}
                className="w-full h-2.5 bg-[#ebdccb] rounded-lg appearance-none cursor-pointer accent-[#e67e22]"
              />
              <div className="flex justify-between text-[11px] text-[#536360] mt-1 font-medium">
                <span>1 pessoa</span>
                <span>4 pessoas</span>
                <span>8+ pessoas</span>
              </div>
            </div>

            {/* Slider 2: Eggs per person */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-[#1c2826]">
                  Ovos por pessoa por semana
                </label>
                <span className="text-sm font-bold text-[#1c2826] bg-white px-3 py-0.5 rounded-lg border border-[#1c2826]/10 shadow-xs">
                  ~{eggsPerPersonPerWeek} ovos/sem
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="21"
                value={eggsPerPersonPerWeek}
                onChange={(e) => setEggsPerPersonPerWeek(Number(e.target.value))}
                className="w-full h-2.5 bg-[#ebdccb] rounded-lg appearance-none cursor-pointer accent-[#e67e22]"
              />
              <div className="flex justify-between text-[11px] text-[#536360] mt-1 font-medium">
                <span>2 (Leve)</span>
                <span>7 (1/dia)</span>
                <span>14 (Fitness)</span>
                <span>21 (Intenso)</span>
              </div>
            </div>

            {/* Metric Summary Bar */}
            <div className="p-3.5 bg-white rounded-xl border border-[#1c2826]/10 flex justify-around text-center text-xs shadow-xs">
              <div>
                <div className="text-[#536360]">Consumo semanal</div>
                <div className="text-base font-bold text-[#1c2826]">{totalEggsPerWeek} ovos</div>
              </div>
              <div className="border-r border-[#1c2826]/10" />
              <div>
                <div className="text-[#536360]">Consumo mensal</div>
                <div className="text-base font-bold text-[#e67e22]">{totalEggsPerMonth} ovos</div>
              </div>
            </div>
          </div>

          {/* Recommendation Output Card */}
          <div className="bg-[#f4eade]/60 p-6 rounded-2xl border border-[#e67e22]/30 shadow-sm flex flex-col justify-between h-full text-left">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider bg-[#e67e22] text-[#1c2826] px-3 py-1 rounded-full shadow-xs">
                  Plano Recomendado
                </span>
                <span className="text-xs text-[#1c2826] font-bold">10% OFF no 1º mês</span>
              </div>

              <h4 className="font-['Aclonica'] text-2xl text-[#1c2826] mb-1">
                {recommendedPlanName}
              </h4>
              <div className="text-3xl font-bold text-[#1c2826] mb-4">
                {recommendedPrice} <span className="text-sm font-normal text-[#536360]">/mês</span>
              </div>

              {/* Egg-scale freshness indicator */}
              <div className="mb-4 bg-white p-3 rounded-xl border border-[#1c2826]/8 shadow-xs">
                <div className="flex justify-between text-xs text-[#1c2826] mb-1.5 font-medium">
                  <span>Frescor Médio no Consumo</span>
                  <span className="text-[#e67e22] font-bold">Max {freshnessDaysMax} dias da postura</span>
                </div>
                <div className="w-full bg-[#f4eade] h-3 rounded-full overflow-hidden p-0.5 relative">
                  <div
                    className="bg-gradient-to-r from-[#25d366] via-[#e67e22] to-[#ffb783] h-full rounded-full transition-all duration-500"
                    style={{
                      width: recommendedPlanId === 'semanal' ? '95%' : recommendedPlanId === 'quinzenal' ? '75%' : '50%',
                    }}
                  />
                </div>
              </div>

              <ul className="space-y-2 text-xs text-[#536360] mb-6 font-medium">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1e824c]" />
                  <span className="text-[#1c2826]">Entrega programada no seu bairro</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1e824c]" />
                  <span className="text-[#1c2826]">Substituição sem custo em caso de quebra</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1e824c]" />
                  <span className="text-[#1c2826]">Sem fidelidade: cancele ou pause a qualquer hora</span>
                </li>
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelectPlan(recommendedPlanId)}
              className="w-full py-3.5 bg-[#e67e22] hover:bg-[#d67214] text-[#1c2826] font-bold rounded-xl shadow-[0_6px_20px_rgba(230,126,34,0.3)] transition-all flex items-center justify-center gap-2 text-sm cursor-pointer group"
            >
              <Egg className="w-4 h-4 fill-current" />
              <span>Assinar Este Plano Recomendado</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

