import { MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_IMAGE_URL } from '../data/mockData';

interface HeroProps {
  onOpenCheckout: (planId?: string) => void;
  onOpenImagePreview?: (url: string, title: string) => void;
}

export function Hero({ onOpenCheckout, onOpenImagePreview }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative pt-[115px] sm:pt-[130px] pb-20 sm:pb-24 px-6 min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-b from-[#fdfbf7] via-[#faf6f0] to-[#f4eade]/40"
    >
      {/* Sunlit Farm Atmosphere Background Details */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f39c12]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#e67e22]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-center">
        {/* Left Column Content with Staggered Fade-Up Sequence */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          {/* Farm Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#f4eade] border border-[#e67e22]/20 text-[#1c2826] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider w-fit shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#e67e22] fill-current" />
            <span>Colheita Fresca &bull; Onça de Pitangui - MG</span>
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="font-['Aclonica'] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.15] text-[#1c2826] tracking-tight max-w-2xl"
          >
            Ovos caipiras fresquinhos, com <span className="text-[#e67e22]">sabor de verdade</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="font-sans text-base sm:text-lg md:text-xl text-[#536360] max-w-xl leading-relaxed font-normal"
          >
            Galinhas criadas soltas, alimentação 100% natural, gema alaranjada como ouro. Assine e receba em BH e região toda semana.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              href="https://wa.me/553125167561?text=Ol%C3%A1!%20Gostaria%20de%20assinar%20ovos%20caipiras%20com%20a%20Ovo%20di%20On%C3%A7a!"
              target="_blank"
              rel="noreferrer"
              id="hero-whatsapp-btn"
              className="bg-[#e67e22] hover:bg-[#d67214] text-[#1c2826] font-bold text-sm sm:text-base text-center px-6 py-3.5 rounded-xl shadow-[0_8px_25px_rgba(230,126,34,0.3)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Assinar no WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              href="#planos"
              id="hero-plans-btn"
              className="border-2 border-[#1c2826]/20 bg-white/80 hover:bg-white text-[#1c2826] font-semibold text-sm sm:text-base text-center px-6 py-3.5 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#e67e22]" />
              <span>Ver Planos & Preços</span>
            </motion.a>
          </motion.div>

          {/* Micro Trust Proofs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#536360] border-t border-[#1c2826]/10"
          >
            <div className="flex items-center gap-1.5 hover:text-[#1c2826] transition-colors">
              <ShieldCheck className="w-4 h-4 text-[#e67e22]" />
              <span>Colhido há no máx. 7 dias</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-[#1c2826] transition-colors">
              <ShieldCheck className="w-4 h-4 text-[#e67e22]" />
              <span>Pausa ou cancelamento livre</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-[#1c2826] transition-colors">
              <ShieldCheck className="w-4 h-4 text-[#e67e22]" />
              <span>10% OFF no 1º mês</span>
            </div>
          </motion.div>
        </div>

        {/* Right Photo & Floating Card Component with Natural Sunlit Treatment */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="lg:col-span-5 flex flex-col gap-4 relative"
        >
          {/* Main Sunlit Egg Photograph */}
          <div className="relative rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(28,40,38,0.12)] border border-[#1c2826]/10 group bg-white p-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={HERO_IMAGE_URL}
                alt="Cesta rústica repleta de ovos caipiras frescos com iluminação matinal dourada na fazenda"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c2826]/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge on photo */}
              <div className="absolute bottom-3 left-3 bg-[#fdfbf7]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#1c2826]/10 text-xs font-semibold text-[#1c2826] flex items-center gap-2 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e67e22] animate-pulse" />
                <span>Gema cor de ouro de galinhas soltas</span>
              </div>
            </div>
          </div>

          {/* Floating Freshness Summary Card */}
          <motion.div
            whileHover={{ y: -3 }}
            className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-[#1c2826]/10 shadow-[0_10px_30px_rgba(28,40,38,0.06)] space-y-3"
          >
            <div className="flex items-center justify-between pb-2.5 border-b border-[#1c2826]/8">
              <span className="text-xs font-semibold text-[#e67e22] uppercase tracking-wider">
                Próxima Colheita & Entrega
              </span>
              <span className="text-xs bg-[#e67e22]/15 text-[#1c2826] px-2.5 py-0.5 rounded-full font-bold border border-[#e67e22]/30">
                Vagas Abertas
              </span>
            </div>

            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-[#1c2826]">
                <span className="text-[#536360]">Origem:</span>
                <strong className="font-medium">Onça de Pitangui - MG</strong>
              </div>
              <div className="flex justify-between items-center text-[#1c2826]">
                <span className="text-[#536360]">Garantia:</span>
                <span className="text-[#e67e22] font-bold">Reposição sem custo</span>
              </div>
              <div className="flex justify-between items-center text-[#1c2826]">
                <span className="text-[#536360]">Tempo do ninho à mesa:</span>
                <strong className="text-[#1c2826] font-semibold">Menos de 1 semana</strong>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenCheckout('semanal')}
              className="w-full mt-1 py-2.5 bg-[#f4eade] hover:bg-[#ebdccb] text-[#1c2826] rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs text-center flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Personalizar Minha Assinatura</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#e67e22] group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

