import { Sparkles, RefreshCw, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

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
    <section id="qualidade" className="py-20 px-6 bg-[#fdfbf7] relative overflow-hidden">
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
            <span>Padrão Fazenda Premium</span>
          </div>

          <h2 className="font-['Aclonica'] text-3xl sm:text-4xl text-[#1c2826] mb-3">
            Principais Benefícios da Assinatura
          </h2>
          <p className="font-sans text-[#536360] text-sm sm:text-base max-w-xl mx-auto">
            O rigor artesanal que transforma o café da manhã da sua família em um ritual de bem-estar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white p-7 rounded-2xl border border-[#1c2826]/10 shadow-[0_4px_20px_rgba(28,40,38,0.05)] flex flex-col justify-between hover:border-[#e67e22]/40 hover:shadow-[0_10px_30px_rgba(230,126,34,0.12)] transition-all group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#f4eade] text-[#1c2826] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#e67e22] group-hover:text-[#1c2826] transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#1c2826] bg-[#f9f5ef] px-3 py-1 rounded-full border border-[#1c2826]/10">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-xl text-[#1c2826] mb-3 group-hover:text-[#e67e22] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-[#536360] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1c2826]/8 flex items-center gap-2 text-xs text-[#536360]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e67e22]" />
                  <span>Padrão Fazenda Onça de Pitangui</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

