import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/mockData';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-[#fdfbf7] relative overflow-hidden">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e67e22] uppercase tracking-wider mb-2 bg-[#f4eade] px-3.5 py-1 rounded-full border border-[#e67e22]/20">
            <HelpCircle className="w-3.5 h-3.5 text-[#e67e22]" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-['Aclonica'] text-3xl sm:text-4xl text-[#1c2826] mb-3">
            Perguntas Frequentes
          </h2>
          <p className="font-sans text-[#536360] text-sm sm:text-base max-w-xl mx-auto">
            Tudo o que você precisa saber sobre o Clube de Ovos Caipiras da Ovo di Onça.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="divide-y divide-[#1c2826]/10 border-t border-b border-[#1c2826]/10">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="py-5 sm:py-6"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-sans font-semibold text-base sm:text-lg transition-colors duration-200 ${
                      isOpen
                        ? 'text-[#e67e22]'
                        : 'text-[#1c2826] group-hover:text-[#e67e22]'
                    }`}
                  >
                    {item.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#e67e22]/15 text-[#e67e22]'
                        : 'bg-[#f4eade] text-[#1c2826] group-hover:bg-[#e67e22]/10 group-hover:text-[#e67e22]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-sm sm:text-base text-[#536360] leading-relaxed pr-6">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* WhatsApp direct help */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 p-5 rounded-2xl bg-[#f9f5ef] border border-[#1c2826]/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#25d366]/20 text-[#25d366] flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#1c2826]">
                Ainda tem alguma dúvida sobre seu bairro ou entrega?
              </p>
              <p className="text-xs text-[#536360]">
                Nossa família está à disposição para te atender pelo WhatsApp.
              </p>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://wa.me/553125167561?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20a%20assinatura%20da%20Ovo%20di%20On%C3%A7a."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20ba59] text-[#1c2826] font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar no WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
