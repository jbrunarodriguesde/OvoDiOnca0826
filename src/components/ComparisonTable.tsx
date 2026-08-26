import { COMPARISON_ROWS } from '../data/mockData';
import { Check, X, ShieldAlert, Sparkles, Egg } from 'lucide-react';

export function ComparisonTable() {
  return (
    <section id="comparativo" className="py-20 px-6 bg-[#291d19] relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffb783] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#e67e22]" />
            <span>Transparência da Fazenda à Mesa</span>
          </div>
          <h2 className="font-['Aclonica'] text-3xl sm:text-4xl text-[#f4eade] mb-3">
            Ovo di Onça vs Supermercado
          </h2>
          <p className="font-sans text-[#c3c8c6] text-base sm:text-lg max-w-2xl mx-auto">
            A escolha pela Ovo di Onça em relação ao supermercado se fundamenta no frescor absoluto, na qualidade nutricional, no bem-estar animal e na conveniência do atendimento direto da fazenda.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-[#f4eade]/15 shadow-2xl bg-[#251915]">
          <table className="w-full text-left border-collapse min-w-[680px]">
            <thead>
              <tr className="border-b border-[#f4eade]/20 bg-[#1c110d]">
                <th className="p-4 sm:p-5 font-semibold text-sm sm:text-base text-[#f4eade] w-1/4">
                  Critério
                </th>
                <th className="p-4 sm:p-5 font-bold text-sm sm:text-base text-[#ffb783] bg-[#1c2826]/90 border-x border-[#e67e22]/30 w-2/5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#e67e22] text-[#1c2826] flex items-center justify-center">
                      <Egg className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span>Ovo di Onça (Clube)</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 font-medium text-sm sm:text-base text-[#c3c8c6] w-1/3">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-[#c3c8c6]" />
                    <span>Ovos de Supermercado</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-sm divide-y divide-[#f4eade]/10">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[#2b1e1a]/50 transition-colors"
                >
                  <td className="p-4 sm:p-5 font-semibold text-[#f4eade] flex items-center gap-2">
                    <span>{row.criterio}</span>
                  </td>
                  <td className="p-4 sm:p-5 bg-[#1c2826]/60 border-x border-[#e67e22]/20 text-[#f4eade] font-medium">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#25d366]/20 text-[#25d366] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{row.ovoDiOnca}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-[#c3c8c6]">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#ffb4ab]/20 text-[#ffb4ab] flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{row.supermercado}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
