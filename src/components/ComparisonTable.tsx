import { COMPARISON_ROWS } from '../data/mockData';
import { Check, X, ShieldAlert, Sparkles, Egg } from 'lucide-react';
import { motion } from 'motion/react';

export function ComparisonTable() {
  return (
    <section id="comparativo" className="py-20 px-6 bg-[#fdfbf7] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e67e22] uppercase tracking-wider mb-2 bg-[#f4eade] px-3.5 py-1 rounded-full border border-[#e67e22]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#e67e22]" />
            <span>Transparência da Fazenda à Mesa</span>
          </div>
          <h2 className="font-['Aclonica'] text-3xl sm:text-4xl text-[#1c2826] mb-3">
            Ovo di Onça vs Supermercado
          </h2>
          <p className="font-sans text-[#536360] text-base sm:text-lg max-w-2xl mx-auto">
            A escolha pela Ovo di Onça em relação ao supermercado se fundamenta no frescor absoluto, na qualidade nutricional, no bem-estar animal e na conveniência do atendimento direto da fazenda.
          </p>
        </motion.div>

        {/* Comparison Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="overflow-x-auto rounded-3xl border border-[#1c2826]/10 shadow-[0_10px_35px_rgba(28,40,38,0.06)] bg-white p-1"
        >
          <table className="w-full text-left border-collapse min-w-[680px]">
            <thead>
              <tr className="border-b border-[#1c2826]/10 bg-[#faf6f0]">
                <th className="p-4 sm:p-5 font-semibold text-sm sm:text-base text-[#1c2826] w-1/4 rounded-tl-2xl">
                  Critério
                </th>
                <th className="p-4 sm:p-5 font-bold text-sm sm:text-base text-[#1c2826] bg-[#f4eade]/60 border-x border-[#e67e22]/30 w-2/5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#e67e22] text-[#1c2826] flex items-center justify-center shadow-xs">
                      <Egg className="w-4 h-4 fill-current" />
                    </div>
                    <span className="font-bold text-[#1c2826]">Ovo di Onça (Clube)</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 font-medium text-sm sm:text-base text-[#536360] w-1/3 rounded-tr-2xl">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-[#7c8785]" />
                    <span>Ovos de Supermercado</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-sm divide-y divide-[#1c2826]/8">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[#faf6f0]/50 transition-colors duration-150"
                >
                  <td className="p-4 sm:p-5 font-semibold text-[#1c2826] flex items-center gap-2">
                    <span>{row.criterio}</span>
                  </td>
                  <td className="p-4 sm:p-5 bg-[#f4eade]/30 border-x border-[#e67e22]/20 text-[#1c2826] font-medium">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#25d366]/15 text-[#1e824c] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{row.ovoDiOnca}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-[#6c7a78]">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#ffb4ab]/30 text-[#ba1a1a] flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{row.supermercado}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

