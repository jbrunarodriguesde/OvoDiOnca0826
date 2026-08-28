import {
  PackageCheck,
  Leaf,
  Sun,
  MessageCircle,
  Truck,
  ShieldCheck,
  Tag,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: PackageCheck,
      title: 'Ovos frescos toda semana',
      desc: 'Colhidos com carinho e enviados direto da fazenda para a sua mesa.',
    },
    {
      icon: Leaf,
      title: 'Galinhas criadas soltas',
      desc: 'Bem-estar animal garantido, com pasto livre e alimentação 100% natural.',
    },
    {
      icon: Sun,
      title: 'Gema alaranjada e sabor de verdade',
      desc: 'Qualidade superior com alto teor de betacaroteno que dá gosto de ver (e comer!).',
    },
    {
      icon: MessageCircle,
      title: 'Atendimento acolhedor',
      desc: 'Estamos sempre por aqui para tirar dúvidas, reagendar ou ajustar seu plano.',
    },
    {
      icon: Truck,
      title: 'Entrega segura e pontual',
      desc: 'Combinamos tudo certinho pelo WhatsApp antes de cada ciclo de entrega.',
    },
    {
      icon: ShieldCheck,
      title: 'Liberdade total',
      desc: 'Cancele ou pause quando for viajar sem burocracia ou tempo mínimo de carência.',
    },
    {
      icon: Tag,
      title: '10% na 1ª mensalidade',
      desc: 'Desconto especial de boas-vindas para novos assinantes em todos os ritmos.',
      badge: 'Bônus',
    },
  ];

  return (
    <section id="beneficios" className="py-20 px-6 bg-[#f9f5ef] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e67e22] uppercase tracking-wider mb-2 bg-[#f4eade] px-3.5 py-1 rounded-full border border-[#e67e22]/20">
            <ShieldCheck className="w-3.5 h-3.5 text-[#e67e22]" />
            <span>Vantagens Exclusivas do Clube</span>
          </div>

          <h2 className="font-['Aclonica'] text-3xl sm:text-4xl text-[#1c2826] mb-3">
            Com a assinatura, você garante:
          </h2>
          <p className="font-sans text-[#536360] text-base sm:text-lg max-w-xl mx-auto">
            Muito mais do que ovos — uma experiência completa de frescor, qualidade e comodidade.
          </p>
        </motion.div>

        {/* 7-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.07, ease: 'easeOut' }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`bg-white p-6 rounded-2xl border border-[#1c2826]/10 shadow-[0_4px_20px_rgba(28,40,38,0.04)] hover:border-[#e67e22]/40 hover:shadow-[0_10px_30px_rgba(230,126,34,0.12)] transition-all duration-300 flex flex-col justify-between group cursor-default ${
                  idx === 6 ? 'sm:col-span-2 lg:col-span-3 xl:col-span-1 border-[#e67e22]/30 bg-[#fdfbf7]' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f4eade] border border-[#e67e22]/20 flex items-center justify-center text-[#1c2826] group-hover:scale-110 group-hover:bg-[#e67e22] transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    {b.badge && (
                      <span className="text-[11px] font-bold bg-[#e67e22] text-[#1c2826] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs animate-pulse">
                        {b.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-sans font-semibold text-lg text-[#1c2826] mb-2 leading-snug group-hover:text-[#e67e22] transition-colors">
                    {b.title}
                  </h3>
                  <p className="font-sans text-sm text-[#536360] leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1c2826]/8 flex items-center gap-1.5 text-xs text-[#e67e22]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e67e22] group-hover:scale-115 transition-transform" />
                  <span className="font-medium text-[#1c2826]">Garantia Ovo di Onça</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

