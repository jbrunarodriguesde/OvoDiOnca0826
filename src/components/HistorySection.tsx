import { Sparkles, Heart, Eye } from 'lucide-react';
import { BASKET_EGGS_IMAGE_URL } from '../data/mockData';

interface HistorySectionProps {
  onOpenCheckout: () => void;
  onOpenImagePreview?: (url: string, title: string) => void;
}

export function HistorySection({ onOpenCheckout, onOpenImagePreview }: HistorySectionProps) {
  return (
    <section id="historia" className="py-20 px-6 bg-[#40312d] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Story Text */}
        <div className="order-2 md:order-1 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffb783] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#e67e22]" />
            <span>A inspiração por trás da Ovo di Onça</span>
          </div>

          <h2 className="font-['Aclonica'] text-3xl sm:text-4xl text-[#f4eade] mb-3">
            Nossa História
          </h2>

          <p className="font-sans text-[#c3c8c6] mb-4 leading-relaxed text-base">
            A Ovo di Onça nasceu em 2021 de um sonho de Fred, que aos 13 anos quis construir algo com as próprias mãos. Tudo começou com galinhas no quintal, mas a visão foi além. Olhando para o curral da fazenda, surgiu a pergunta: <em className="text-[#f4eade]">"E se outras famílias também pudessem ter ovos frescos e de alta qualidade?"</em> O irmão Dudu topou na hora, e os pais abraçaram a ideia.
          </p>

          <p className="font-sans text-[#c3c8c6] mb-6 leading-relaxed text-base">
            O nome veio fácil: Onça de Pitangui, cidade da família, berço de histórias de mineração de ouro. E a gema alaranjada e intensa dos ovos? É ouro mesmo — símbolo da qualidade que sempre quiseram entregar. Hoje seguimos com o mesmo propósito: cuidar com responsabilidade, atender com respeito e espalhar o sentimento bom de saber de onde vem o que se coloca à mesa.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#planos"
              className="inline-flex items-center gap-2 border-2 border-[#f4eade] text-[#f4eade] hover:bg-[#f4eade]/10 font-semibold px-6 py-3 rounded-xl transition-all"
            >
              <span>Conheça os planos</span>
            </a>

            <div className="flex items-center gap-2 text-xs text-[#ffb783]">
              <Heart className="w-4 h-4 text-[#e67e22] fill-current" />
              <span>Feito em família desde 2021</span>
            </div>
          </div>
        </div>

        {/* Farm Photography Container with Direct Link */}
        <div className="order-1 md:order-2 relative group">
          <div className="relative overflow-hidden rounded-2xl border border-[#f4eade]/15 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <img
              src={BASKET_EGGS_IMAGE_URL}
              alt="Cesta rústica com ovos caipiras frescos da fazenda Ovo di Onça"
              className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            {/* Overlay tag */}
            <div className="absolute bottom-3 left-3 bg-[#1c110d]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#f4eade]/10 text-xs text-[#f4eade] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e67e22]" />
              <span>Gemas cor de ouro de Onça de Pitangui</span>
            </div>

            {onOpenImagePreview && (
              <button
                onClick={() => onOpenImagePreview(BASKET_EGGS_IMAGE_URL, 'Ovos Caipiras Ovo di Onça na Fazenda')}
                className="absolute top-3 right-3 p-2 bg-[#1c110d]/70 hover:bg-[#e67e22] text-[#f4eade] hover:text-[#1c2826] rounded-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                title="Ampliar imagem"
              >
                <Eye className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
