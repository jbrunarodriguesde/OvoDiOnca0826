import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { HERO_IMAGE_URL } from '../data/mockData';

interface HeroProps {
  onOpenCheckout: (planId?: string) => void;
  onOpenImagePreview?: (url: string, title: string) => void;
}

export function Hero({ onOpenCheckout, onOpenImagePreview }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative pt-[115px] sm:pt-[130px] pb-20 sm:pb-24 px-6 min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* Background Image Layer with Direct Link */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={HERO_IMAGE_URL}
          alt="Cesta rústica repleta de ovos caipiras frescos com iluminação matinal dourada na fazenda"
          className="w-full h-full object-cover object-center lg:object-right transition-transform duration-1000 scale-105"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Soft Multi-Stop Gradient Overlays for High Contrast Readability */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1c2826] via-[#1c2826]/90 sm:via-[#1c2826]/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-[#1c110d]/40 backdrop-blur-[0.5px] z-10" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-8 flex flex-col gap-6 text-left">
          {/* Farm Origin Badge */}
          <div className="inline-flex items-center gap-2 bg-[#2b1e1a]/90 border border-[#e67e22]/40 px-3.5 py-1.5 rounded-full w-fit shadow-md backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e67e22] animate-pulse" />
            <span className="text-xs font-semibold text-[#ffb783] tracking-wide uppercase flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#e67e22]" /> Onça de Pitangui &bull; Direto da Fazenda para BH
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-['Aclonica'] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.15] text-[#f4eade] tracking-tight text-shadow-sm max-w-2xl">
            Ovos caipiras fresquinhos, com <span className="text-[#ffb783]">sabor de verdade</span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#f4eade]/90 max-w-xl leading-relaxed font-normal">
            Galinhas criadas soltas, alimentação 100% natural, gema alaranjada como ouro. Assine e receba em BH e região toda semana.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://wa.me/553125167561?text=Ol%C3%A1!%20Gostaria%20de%20assinar%20ovos%20caipiras%20com%20a%20Ovo%20di%20On%C3%A7a!"
              target="_blank"
              rel="noreferrer"
              id="hero-whatsapp-btn"
              className="bg-[#e67e22] hover:bg-[#d67214] text-[#1c2826] font-semibold text-sm sm:text-base text-center px-6 py-3.5 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_8px_30px_rgba(230,126,34,0.3)] flex items-center justify-center gap-2.5 group"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Assinar no WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#planos"
              id="hero-plans-btn"
              className="border-2 border-[#f4eade] text-[#f4eade] hover:bg-[#f4eade]/10 font-semibold text-sm sm:text-base text-center px-6 py-3.5 rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#ffb783]" />
              <span>Ver Planos & Preços</span>
            </a>
          </div>

          {/* Micro Trust Proofs */}
          <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#c3c8c6] border-t border-[#f4eade]/15">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#e67e22]" />
              <span>Colhido há no máx. 7 dias</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#e67e22]" />
              <span>Pausa ou cancelamento livre</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#e67e22]" />
              <span>10% OFF no 1º mês</span>
            </div>
          </div>
        </div>

        {/* Right Floating Card on Larger screens */}
        <div className="lg:col-span-4 hidden lg:block">
          <div className="bg-[#2b1e1a]/85 backdrop-blur-md p-6 rounded-2xl border border-[#f4eade]/15 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#f4eade]/10">
              <span className="text-xs font-semibold text-[#ffb783] uppercase tracking-wider">
                Próxima Colheita & Entrega
              </span>
              <span className="text-xs bg-[#e67e22]/20 text-[#ffb783] px-2 py-0.5 rounded-full font-medium">
                Vagas Abertas
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center text-[#f4eade]">
                <span className="text-[#c3c8c6]">Origem:</span>
                <strong className="font-medium">Onça de Pitangui - MG</strong>
              </div>
              <div className="flex justify-between items-center text-[#f4eade]">
                <span className="text-[#c3c8c6]">Garantia:</span>
                <span className="text-[#e67e22] font-semibold">Reposição sem custo</span>
              </div>
              <div className="flex justify-between items-center text-[#f4eade]">
                <span className="text-[#c3c8c6]">Tempo do ninho à mesa:</span>
                <strong className="text-white">Menos de 1 semana</strong>
              </div>
            </div>

            <button
              onClick={() => onOpenCheckout('semanal')}
              className="w-full mt-2 py-3 bg-[#f4eade] hover:bg-white text-[#1c2826] rounded-xl font-semibold text-sm transition-all shadow-md text-center flex items-center justify-center gap-2"
            >
              <span>Personalizar Minha Assinatura</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
