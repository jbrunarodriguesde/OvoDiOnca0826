import { Wallet, Truck, CreditCard, QrCode, Calendar, MapPin, Sparkles } from 'lucide-react';

interface PaymentDeliveryProps {
  onOpenCoverageCheck?: () => void;
}

export function PaymentDeliverySection({ onOpenCoverageCheck }: PaymentDeliveryProps) {
  return (
    <section id="entrega" className="py-20 px-6 bg-[#40312d] relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffb783] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#e67e22]" />
            <span>Simplicidade & Segurança</span>
          </div>
          <h2 className="font-['Aclonica'] text-3xl sm:text-4xl text-[#f4eade] mb-3">
            Pagamento & Entrega
          </h2>
          <p className="text-sm sm:text-base text-[#c3c8c6] max-w-xl mx-auto">
            Processo 100% transparente pensado para a rotina da sua família em Belo Horizonte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Formas de Pagamento */}
          <div className="bg-[#2b1e1a] p-8 rounded-2xl border border-[#f4eade]/15 shadow-xl flex flex-col justify-between hover:border-[#e67e22]/30 transition-all">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f4eade]/10">
                <div className="w-12 h-12 rounded-xl bg-[#e67e22]/15 text-[#e67e22] flex items-center justify-center">
                  <Wallet className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-['Aclonica'] text-2xl text-[#f4eade]">
                    Formas de Pagamento
                  </h3>
                  <span className="text-xs text-[#ffb783]">Cobrança Mensal Flexível</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#c3c8c6]">
                <div className="bg-[#1c110d] p-4 rounded-xl border border-[#f4eade]/5">
                  <div className="flex items-center gap-2 text-[#f4eade] font-semibold mb-1">
                    <QrCode className="w-4 h-4 text-[#25d366]" />
                    <span>PIX com Notificação Automática</span>
                  </div>
                  <p className="text-xs text-[#c3c8c6] leading-relaxed">
                    Pagamento via chave ou QR Code enviado mensalmente direto no seu WhatsApp antes do início de cada ciclo.
                  </p>
                </div>

                <div className="bg-[#1c110d] p-4 rounded-xl border border-[#f4eade]/5">
                  <div className="flex items-center gap-2 text-[#f4eade] font-semibold mb-1">
                    <CreditCard className="w-4 h-4 text-[#ffb783]" />
                    <span>Cartão de Crédito Recorrente</span>
                  </div>
                  <p className="text-xs text-[#c3c8c6] leading-relaxed">
                    Link de assinatura segura sem consumir o limite total do cartão, cobrado automaticamente todo mês.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#f4eade]/10 text-xs text-[#c3c8c6] flex items-center justify-between">
              <span>Sem fidelidade obrigatória</span>
              <span className="text-[#e67e22] font-medium">10% OFF no 1º mês</span>
            </div>
          </div>

          {/* Card 2: Entrega Rápida e Segura */}
          <div className="bg-[#2b1e1a] p-8 rounded-2xl border border-[#f4eade]/15 shadow-xl flex flex-col justify-between hover:border-[#e67e22]/30 transition-all">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f4eade]/10">
                <div className="w-12 h-12 rounded-xl bg-[#e67e22]/15 text-[#e67e22] flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-['Aclonica'] text-2xl text-[#f4eade]">
                    Entrega Rápida e Segura
                  </h3>
                  <span className="text-xs text-[#ffb783]">Do Ninho à sua Porta</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#c3c8c6]">
                <div className="bg-[#1c110d] p-4 rounded-xl border border-[#f4eade]/5">
                  <div className="flex items-center gap-2 text-[#f4eade] font-semibold mb-1">
                    <Calendar className="w-4 h-4 text-[#e67e22]" />
                    <span>Frequência Programada</span>
                  </div>
                  <p className="text-xs text-[#c3c8c6] leading-relaxed">
                    Entregas semanais, quinzenais ou mensais, sempre com ovos colhidos na fazenda há no máximo 7 dias.
                  </p>
                </div>

                <div className="bg-[#1c110d] p-4 rounded-xl border border-[#f4eade]/5">
                  <div className="flex items-center gap-2 text-[#f4eade] font-semibold mb-1">
                    <MapPin className="w-4 h-4 text-[#ffb783]" />
                    <span>Região Atendida em BH</span>
                  </div>
                  <p className="text-xs text-[#c3c8c6] leading-relaxed">
                    Centro-Sul (dentro da Av. do Contorno), Savassi, Anchieta, Sion, Serra, São Lucas, Santa Efigênia, Cruzeiro, Mangabeiras, São Pedro, Cidade Jardim, Luxemburgo, São Bento, Santa Lúcia, Belvedere, Vila da Serra, Gutierrez, Estoril e Buritis.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#f4eade]/10 flex items-center justify-between text-xs">
              <span className="text-[#c3c8c6]">Mora em outro bairro?</span>
              <a
                href="#validacao-entrega"
                className="text-[#ffb783] hover:text-[#e67e22] font-semibold flex items-center gap-1 underline underline-offset-2"
              >
                Consulte seu CEP ou Bairro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
