import { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Instagram,
  FileText,
  Egg,
  Heart,
  ShieldCheck,
  X,
} from 'lucide-react';

export function Footer() {
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <>
      <footer className="bg-[#1c2826] text-[#f4eade] pt-20 pb-12 px-6 relative z-10 border-t border-[#f4eade]/10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Identity Column */}
          <div className="flex flex-col gap-5">
            <a href="#inicio" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#e67e22] flex items-center justify-center text-[#1c2826] font-bold">
                <Egg className="w-5 h-5 fill-current" />
              </div>
              <span className="font-['Aclonica'] text-2xl text-[#f4eade]">
                Ovo di Onça
              </span>
            </a>

            <p className="text-sm text-[#c3c8c6] max-w-sm leading-relaxed">
              Ovos caipiras frescos direto da fazenda para sua mesa. Galinhas criadas soltas com alimentação 100% natural. Feitos com amor desde 2021.
            </p>

            <a
              href="https://wa.me/553125167561?text=Ol%C3%A1!%20Gostaria%20de%20assinar%20ovos%20caipiras%20com%20a%20Ovo%20di%20On%C3%A7a!"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#e67e22] hover:bg-[#d67214] text-[#1c2826] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl hover:scale-105 transition-all shadow-md w-fit"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Assinar no WhatsApp</span>
            </a>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-xs text-[#ffb783] uppercase tracking-widest">
              Contato & Localização
            </h3>
            <address className="not-italic flex flex-col gap-3 text-sm text-[#c3c8c6]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#e67e22] shrink-0" />
                <span>Onça de Pitangui - MG &bull; Entregas em BH</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e67e22] shrink-0" />
                <a href="tel:3125167561" className="hover:text-[#f4eade] transition-colors">
                  (31) 2516-7561
                </a>
              </div>

              <a
                href="https://wa.me/553125167561"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-[#f4eade] transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-[#e67e22] shrink-0" />
                <span className="group-hover:underline">WhatsApp Oficial</span>
              </a>

              <a
                href="mailto:ovodionca@gmail.com"
                className="flex items-center gap-2.5 hover:text-[#f4eade] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#e67e22] shrink-0" />
                <span className="group-hover:underline">ovodionca@gmail.com</span>
              </a>

              <a
                href="https://www.instagram.com/ovodionca"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-[#f4eade] transition-colors group"
              >
                <Instagram className="w-4 h-4 text-[#e67e22] shrink-0" />
                <span className="group-hover:underline">@ovodionca</span>
              </a>

              <button
                type="button"
                onClick={() => setShowTermsModal(true)}
                className="flex items-center gap-2.5 hover:text-[#f4eade] transition-colors text-left group"
              >
                <FileText className="w-4 h-4 text-[#e67e22] shrink-0" />
                <span className="group-hover:underline">Termos e Condições</span>
              </button>
            </address>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-xs text-[#ffb783] uppercase tracking-widest">
              Navegação Rápida
            </h3>
            <nav className="flex flex-col gap-2.5 text-sm text-[#c3c8c6]">
              <a href="#inicio" className="hover:text-[#f4eade] hover:underline">
                Início
              </a>
              <a href="#historia" className="hover:text-[#f4eade] hover:underline">
                Quem Somos
              </a>
              <a href="#qualidade" className="hover:text-[#f4eade] hover:underline">
                Qualidade & Gema de Ouro
              </a>
              <a href="#beneficios" className="hover:text-[#f4eade] hover:underline">
                Benefícios da Assinatura
              </a>
              <a href="#planos" className="hover:text-[#f4eade] hover:underline">
                Planos & Ritmos
              </a>
              <a href="#validacao-entrega" className="hover:text-[#f4eade] hover:underline">
                Validação de Entrega
              </a>
              <a href="#receitas" className="hover:text-[#f4eade] hover:underline">
                Receitas da Fazenda
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="max-w-[1200px] mx-auto mt-16 pt-6 border-t border-[#f4eade]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#c3c8c6]/70 gap-4">
          <p>© 2026 Ovo di Onça. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Produzido com respeito à natureza em Minas Gerais</span>
            <Heart className="w-3.5 h-3.5 text-[#e67e22] fill-current" />
          </div>
        </div>
      </footer>

      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#160b08]/85 backdrop-blur-md animate-in fade-in"
          onClick={() => setShowTermsModal(false)}
        >
          <div
            className="bg-[#1c2826] border border-[#f4eade]/20 w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto space-y-4 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#f4eade]/10 pb-4">
              <h4 className="font-['Aclonica'] text-xl text-[#f4eade]">
                Termos & Condições de Assinatura
              </h4>
              <button
                onClick={() => setShowTermsModal(false)}
                className="p-1.5 text-[#c3c8c6] hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#c3c8c6] leading-relaxed">
              <p>
                <strong>1. Sobre o Clube:</strong> O clube Ovo di Onça fornece ovos caipiras frescos colhidos na fazenda em Onça de Pitangui - MG com entrega periódica em Belo Horizonte e região metropolitana.
              </p>
              <p>
                <strong>2. Sem Fidelidade Obrigatória:</strong> As assinaturas não possuem fidelidade ou multa rescisória. O cliente pode pausar ou cancelar a qualquer momento antes do fechamento do ciclo seguinte.
              </p>
              <p>
                <strong>3. Garantia de Reposição:</strong> Em caso de qualquer ovo quebrado ou danificado durante o trajeto até o endereço informado, basta nos avisar pelo WhatsApp que a reposição será efetuada sem nenhum custo.
              </p>
              <p>
                <strong>4. Formas de Pagamento:</strong> O pagamento pode ser feito via PIX com cobrança mensal ou cartão de crédito recorrente.
              </p>
            </div>

            <div className="pt-4 border-t border-[#f4eade]/10 text-right">
              <button
                onClick={() => setShowTermsModal(false)}
                className="bg-[#e67e22] text-[#1c2826] font-bold px-5 py-2.5 rounded-xl text-xs"
              >
                Entendi e Concordo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
