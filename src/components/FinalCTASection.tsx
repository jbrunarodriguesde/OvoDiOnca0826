import { MessageCircle, ArrowRight, Sparkles, ShieldCheck, Egg } from 'lucide-react';
import { motion } from 'motion/react';

interface FinalCTASectionProps {
  onOpenCheckout: (planId?: string) => void;
}

export function FinalCTASection({ onOpenCheckout }: FinalCTASectionProps) {
  return (
    <section className="py-20 px-6 bg-[#1c2826] text-[#f4eade] relative overflow-hidden">
      {/* Subtle organic light accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#e67e22]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#e67e22]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#f4eade]/10 border border-[#f4eade]/15 text-[#f4eade] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
            <Egg className="w-4 h-4 text-[#e67e22] fill-current" />
            <span>Direto da Fazenda em Onça de Pitangui</span>
          </div>

          <h2 className="font-['Aclonica'] text-3xl sm:text-4xl md:text-5xl text-[#f4eade] mb-6 leading-tight max-w-2xl mx-auto">
            Comece hoje a receber ovos de gema cor de ouro na sua mesa
          </h2>

          <p className="font-sans text-[#c3c8c6] text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Frescor absoluto, criação livre e alimentação 100% natural. Receba em Belo Horizonte e região com 10% de desconto no 1º mês.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              href="https://wa.me/553125167561?text=Ol%C3%A1!%20Gostaria%20de%20assinar%20o%20clube%20de%20ovos%20da%20Ovo%20di%20On%C3%A7a!"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-[#e67e22] hover:bg-[#d67214] text-[#1c2826] font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-[0_8px_25px_rgba(230,126,34,0.35)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Assinar no WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              onClick={() => onOpenCheckout('semanal')}
              className="w-full sm:w-auto border-2 border-[#f4eade] text-[#f4eade] hover:bg-[#f4eade]/10 font-semibold text-sm sm:text-base px-8 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#e67e22]" />
              <span>Escolher Plano Online</span>
            </motion.button>
          </div>

          <div className="mt-10 pt-6 border-t border-[#f4eade]/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#c3c8c6]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#e67e22]" /> Sem taxa de adesão ou fidelidade
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#e67e22]" /> Ovos colhidos há no máx. 7 dias
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#e67e22]" /> Reposição imediata em caso de avaria
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
