import { Wallet, Truck, CreditCard, QrCode, Calendar, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface PaymentDeliveryProps {
  onOpenCoverageCheck?: () => void;
}

export function PaymentDeliverySection({ onOpenCoverageCheck }: PaymentDeliveryProps) {
  return (
    <section id="entrega" className="py-20 px-6 bg-[#fdfbf7] relative overflow-hidden">
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
            <span>Simplicidade & Segurança</span>
          </div>
          <h2 className="font-['Aclonica'] text-3xl sm:text-4xl text-[#1c2826] mb-3">
            Pagamento & Entrega
          </h2>
          <p className="text-sm sm:text-base text-[#536360] max-w-xl mx-auto">
            Processo 100% transparente pensado para a rotina da sua família em Belo Horizonte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Formas de Pagamento */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white p-8 rounded-3xl border border-[#1c2826]/10 shadow-[0_4px_25px_rgba(28,40,38,0.05)] flex flex-col justify-between hover:border-[#e67e22]/40 hover:shadow-[0_10px_30px_rgba(230,126,34,0.1)] transition-all group cursor-default"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1c2826]/8">
                <div className="w-12 h-12 rounded-2xl bg-[#f4eade] text-[#1c2826] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#e67e22] transition-all duration-300 shadow-xs">
                  <Wallet className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-['Aclonica'] text-2xl text-[#1c2826] group-hover:text-[#e67e22] transition-colors">
                    Formas de Pagamento
                  </h3>
                  <span className="text-xs text-[#e67e22] font-semibold">Cobrança Mensal Flexível</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#536360]">
                <div className="bg-[#faf6f0] p-4 rounded-2xl border border-[#1c2826]/8 hover:border-[#e67e22]/30 transition-colors">
                  <div className="flex items-center gap-2 text-[#1c2826] font-bold mb-1">
                    <QrCode className="w-4 h-4 text-[#1e824c]" />
                    <span>PIX com Notificação Automática</span>
                  </div>
                  <p className="text-xs text-[#536360] leading-relaxed">
                    Pagamento via chave ou QR Code enviado mensalmente direto no seu WhatsApp antes do início de cada ciclo.
                  </p>
                </div>

                <div className="bg-[#faf6f0] p-4 rounded-2xl border border-[#1c2826]/8 hover:border-[#e67e22]/30 transition-colors">
                  <div className="flex items-center gap-2 text-[#1c2826] font-bold mb-1">
                    <CreditCard className="w-4 h-4 text-[#e67e22]" />
                    <span>Cartão de Crédito Recorrente</span>
                  </div>
                  <p className="text-xs text-[#536360] leading-relaxed">
                    Link de assinatura segura sem consumir o limite total do cartão, cobrado automaticamente todo mês.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1c2826]/8 text-xs text-[#536360] flex items-center justify-between font-medium">
              <span>Sem fidelidade obrigatória</span>
              <span className="text-[#e67e22] font-bold">10% OFF no 1º mês</span>
            </div>
          </motion.div>

          {/* Card 2: Entrega Rápida e Segura */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white p-8 rounded-3xl border border-[#1c2826]/10 shadow-[0_4px_25px_rgba(28,40,38,0.05)] flex flex-col justify-between hover:border-[#e67e22]/40 hover:shadow-[0_10px_30px_rgba(230,126,34,0.1)] transition-all group cursor-default"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1c2826]/8">
                <div className="w-12 h-12 rounded-2xl bg-[#f4eade] text-[#1c2826] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#e67e22] transition-all duration-300 shadow-xs">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-['Aclonica'] text-2xl text-[#1c2826] group-hover:text-[#e67e22] transition-colors">
                    Entrega Rápida e Segura
                  </h3>
                  <span className="text-xs text-[#e67e22] font-semibold">Do Ninho à sua Porta</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#536360]">
                <div className="bg-[#faf6f0] p-4 rounded-2xl border border-[#1c2826]/8 hover:border-[#e67e22]/30 transition-colors">
                  <div className="flex items-center gap-2 text-[#1c2826] font-bold mb-1">
                    <Calendar className="w-4 h-4 text-[#e67e22]" />
                    <span>Frequência Programada</span>
                  </div>
                  <p className="text-xs text-[#536360] leading-relaxed">
                    Entregas semanais, quinzenais ou mensais, sempre com ovos colhidos na fazenda há no máximo 7 dias.
                  </p>
                </div>

                <div className="bg-[#faf6f0] p-4 rounded-2xl border border-[#1c2826]/8 hover:border-[#e67e22]/30 transition-colors">
                  <div className="flex items-center gap-2 text-[#1c2826] font-bold mb-1">
                    <MapPin className="w-4 h-4 text-[#1e824c]" />
                    <span>Região Atendida em BH</span>
                  </div>
                  <p className="text-xs text-[#536360] leading-relaxed">
                    Centro-Sul (dentro da Av. do Contorno), Savassi, Anchieta, Sion, Serra, São Lucas, Santa Efigênia, Cruzeiro, Mangabeiras, São Pedro, Cidade Jardim, Luxemburgo, São Bento, Santa Lúcia, Belvedere, Vila da Serra, Gutierrez, Estoril e Buritis.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1c2826]/8 flex items-center justify-between text-xs font-medium">
              <span className="text-[#536360]">Mora em outro bairro?</span>
              <a
                href="#validacao-entrega"
                className="text-[#e67e22] hover:text-[#d67214] font-bold flex items-center gap-1 underline underline-offset-2 transition-colors"
              >
                Consulte seu CEP ou Bairro
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

