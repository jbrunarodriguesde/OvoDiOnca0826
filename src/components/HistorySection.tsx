import { Sparkles, Heart, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { BASKET_EGGS_IMAGE_URL } from '../data/mockData';

interface HistorySectionProps {
  onOpenCheckout: () => void;
  onOpenImagePreview?: (url: string, title: string) => void;
}

export function HistorySection({ onOpenImagePreview }: HistorySectionProps) {
  return (
    <section id="historia" className="py-20 px-6 bg-[#f9f5ef] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Story Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="order-2 md:order-1 flex flex-col items-start text-left"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e67e22] uppercase tracking-wider mb-2 bg-[#f4eade] px-3.5 py-1 rounded-full border border-[#e67e22]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#e67e22]" />
            <span>A inspiração por trás da Ovo di Onça</span>
          </div>

          <h2 className="font-['Aclonica'] text-3xl sm:text-4xl text-[#1c2826] mb-3">
            Nossa História
          </h2>

          <p className="font-sans text-[#536360] mb-4 leading-relaxed text-base">
            A Ovo di Onça nasceu em 2021 de um sonho de Fred, que aos 13 anos quis construir algo com as próprias mãos. Tudo começou com galinhas no quintal, mas a visão foi além. Olhando para o curral da fazenda, surgiu a pergunta: <em className="text-[#1c2826] font-medium">"E se outras famílias também pudessem ter ovos frescos e de alta qualidade?"</em> O irmão Dudu topou na hora, e os pais abraçaram a ideia.
          </p>

          <p className="font-sans text-[#536360] mb-6 leading-relaxed text-base">
            O nome veio fácil: Onça de Pitangui, cidade da família, berço de histórias de mineração de ouro. E a gema alaranjada e intensa dos ovos? É ouro mesmo — símbolo da qualidade que sempre quiseram entregar. Hoje seguimos com o mesmo propósito: cuidar com responsabilidade, atender com respeito e espalhar o sentimento bom de saber de onde vem o que se coloca à mesa.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              href="#planos"
              className="inline-flex items-center gap-2 border-2 border-[#1c2826]/20 bg-white hover:bg-[#f4eade]/50 text-[#1c2826] font-semibold px-6 py-3 rounded-xl transition-all cursor-pointer shadow-xs"
            >
              <span>Conheça os planos</span>
            </motion.a>

            <div className="flex items-center gap-2 text-xs text-[#e67e22] font-medium group">
              <Heart className="w-4 h-4 text-[#e67e22] fill-current group-hover:scale-125 transition-transform" />
              <span>Feito em família desde 2021</span>
            </div>
          </div>
        </motion.div>

        {/* Farm Photography Container with Light Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="order-1 md:order-2 relative group"
        >
          <div className="relative overflow-hidden rounded-3xl border border-[#1c2826]/10 bg-white p-2 shadow-[0_15px_40px_rgba(28,40,38,0.08)]">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={BASKET_EGGS_IMAGE_URL}
                alt="Cesta rústica com ovos caipiras frescos da fazenda Ovo di Onça"
                className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              {/* Overlay tag */}
              <div className="absolute bottom-3 left-3 bg-[#fdfbf7]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#1c2826]/10 text-xs font-semibold text-[#1c2826] flex items-center gap-2 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#e67e22] animate-pulse" />
                <span>Gemas cor de ouro de Onça de Pitangui</span>
              </div>

              {onOpenImagePreview && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => onOpenImagePreview(BASKET_EGGS_IMAGE_URL, 'Ovos Caipiras Ovo di Onça na Fazenda')}
                  className="absolute top-3 right-3 p-2.5 bg-[#fdfbf7]/90 hover:bg-[#e67e22] text-[#1c2826] rounded-xl backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
                  title="Ampliar imagem"
                >
                  <Eye className="w-4 h-4" />
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

