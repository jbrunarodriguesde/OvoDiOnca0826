import { Sparkles, RefreshCw, ShieldCheck } from 'lucide-react';

export function QualityDeepDive() {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Gema Cor de Ouro',
      desc: 'A cor intensa e a densidade da gema refletem uma alimentação natural rica em vegetação verde e grãos, resultando em maior teor de betacaroteno, luteína e ômega-3.',
      highlight: 'Nutrição Máxima',
    },
    {
      icon: RefreshCw,
      title: 'Flexibilidade do Serviço',
      desc: 'O cliente pode pausar as entregas durante viagens, alterar o plano ou cancelar o serviço a qualquer momento sem qualquer burocracia, carência ou fidelidade forçada.',
      highlight: 'Sem Multas',
    },
    {
      icon: ShieldCheck,
      title: 'Garantia de Qualidade',
      desc: 'Em caso de eventual avaria ou ovo danificado no transporte, a reposição é feita prontamente sem custo adicional na entrega seguinte ou envio express.',
      highlight: '100% Garantido',
    },
  ];

  return (
    <section id="qualidade" className="py-20 px-6 bg-[#40312d] relative">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-['Aclonica'] text-3xl sm:text-4xl text-center text-[#f4eade] mb-12">
          Principais Benefícios da Assinatura
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#1c2826] p-7 rounded-2xl border border-[#f4eade]/10 shadow-lg flex flex-col justify-between hover:border-[#e67e22]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#e67e22]/15 text-[#e67e22] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#ffb783] bg-[#2b1e1a] px-2.5 py-1 rounded-full border border-[#f4eade]/10">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-xl text-[#ffb783] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-[#c3c8c6] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f4eade]/10 flex items-center gap-2 text-xs text-[#f4eade]/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e67e22]" />
                  <span>Padrão Fazenda Onça de Pitangui</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
