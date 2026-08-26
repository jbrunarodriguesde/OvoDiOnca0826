import { useState } from 'react';
import { Egg, Sparkles, ArrowRight, Check } from 'lucide-react';

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
    <section id="calculadora" className="py-16 px-6 bg-[#251915] border-y border-[#f4eade]/10 relative">
      <div className="max-w-[1000px] mx-auto bg-[#1c2826] p-6 sm:p-10 rounded-3xl border border-[#e67e22]/30 shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffb783] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#e67e22]" />
            <span>Simulador de Consumo Familiar</span>
          </div>
          <h3 className="font-['Aclonica'] text-2xl sm:text-3xl text-[#f4eade] mb-2">
            Descubra o ritmo ideal para a sua casa
          </h3>
          <p className="text-sm text-[#c3c8c6]">
            Ajuste os controles deslizantes para estimar sua demanda mensal e ver a recomendação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Sliders Container */}
          <div className="space-y-6 bg-[#2b1e1a] p-6 rounded-2xl border border-[#f4eade]/10">
            {/* Slider 1: People */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-[#f4eade]">
                  Pessoas que consomem na casa
                </label>
                <span className="text-base font-bold text-[#ffb783] bg-[#1c2826] px-3 py-0.5 rounded-lg border border-[#f4eade]/10">
                  {familyMembers} {familyMembers === 1 ? 'pessoa' : 'pessoas'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                value={familyMembers}
                onChange={(e) => setFamilyMembers(Number(e.target.value))}
                className="w-full h-2.5 bg-[#160b08] rounded-lg appearance-none cursor-pointer accent-[#e67e22]"
              />
              <div className="flex justify-between text-[11px] text-[#c3c8c6] mt-1">
                <span>1 pessoa</span>
                <span>4 pessoas</span>
                <span>8+ pessoas</span>
              </div>
            </div>

            {/* Slider 2: Eggs per person */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-[#f4eade]">
                  Ovos por pessoa por semana
                </label>
                <span className="text-base font-bold text-[#ffb783] bg-[#1c2826] px-3 py-0.5 rounded-lg border border-[#f4eade]/10">
                  ~{eggsPerPersonPerWeek} ovos/sem
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="21"
                value={eggsPerPersonPerWeek}
                onChange={(e) => setEggsPerPersonPerWeek(Number(e.target.value))}
                className="w-full h-2.5 bg-[#160b08] rounded-lg appearance-none cursor-pointer accent-[#e67e22]"
              />
              <div className="flex justify-between text-[11px] text-[#c3c8c6] mt-1">
                <span>2 (Leve)</span>
                <span>7 (1/dia)</span>
                <span>14 (Fitness)</span>
                <span>21 (Intenso)</span>
              </div>
            </div>

            {/* Metric Summary Bar */}
            <div className="p-3.5 bg-[#1c110d] rounded-xl border border-[#f4eade]/10 flex justify-around text-center text-xs">
              <div>
                <div className="text-[#c3c8c6]">Consumo semanal</div>
                <div className="text-base font-bold text-[#f4eade]">{totalEggsPerWeek} ovos</div>
              </div>
              <div className="border-r border-[#f4eade]/10" />
              <div>
                <div className="text-[#c3c8c6]">Consumo mensal</div>
                <div className="text-base font-bold text-[#ffb783]">{totalEggsPerMonth} ovos</div>
              </div>
            </div>
          </div>

          {/* Recommendation Output Card */}
          <div className="bg-[#40312d] p-6 rounded-2xl border border-[#e67e22]/40 shadow-xl flex flex-col justify-between h-full text-left">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider bg-[#e67e22] text-[#1c2826] px-3 py-1 rounded-full">
                  Plano Recomendado
                </span>
                <span className="text-xs text-[#ffb783] font-semibold">10% OFF no 1º mês</span>
              </div>

              <h4 className="font-['Aclonica'] text-2xl text-[#f4eade] mb-1">
                {recommendedPlanName}
              </h4>
              <div className="text-3xl font-bold text-[#ffb783] mb-4">
                {recommendedPrice} <span className="text-sm font-normal text-[#c3c8c6]">/mês</span>
              </div>

              {/* Egg-scale freshness indicator */}
              <div className="mb-4 bg-[#2b1e1a] p-3 rounded-xl border border-[#f4eade]/10">
                <div className="flex justify-between text-xs text-[#f4eade] mb-1.5 font-medium">
                  <span>Frescor Médio no Consumo</span>
                  <span className="text-[#e67e22] font-semibold">Max {freshnessDaysMax} dias da postura</span>
                </div>
                <div className="w-full bg-[#160b08] h-3 rounded-full overflow-hidden p-0.5 relative">
                  <div
                    className="bg-gradient-to-r from-[#25d366] via-[#e67e22] to-[#ffb783] h-full rounded-full transition-all duration-500"
                    style={{
                      width: recommendedPlanId === 'semanal' ? '95%' : recommendedPlanId === 'quinzenal' ? '75%' : '50%',
                    }}
                  />
                </div>
              </div>

              <ul className="space-y-2 text-xs text-[#c3c8c6] mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#25d366]" />
                  <span>Entrega programada no seu bairro</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#25d366]" />
                  <span>Substituição sem custo em caso de quebra</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#25d366]" />
                  <span>Sem fidelidade: cancele ou pause a qualquer hora</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectPlan(recommendedPlanId)}
              className="w-full py-3.5 bg-[#e67e22] hover:bg-[#d67214] text-[#1c2826] font-bold rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-sm"
            >
              <Egg className="w-4 h-4 fill-current" />
              <span>Assinar Este Plano Recomendado</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
