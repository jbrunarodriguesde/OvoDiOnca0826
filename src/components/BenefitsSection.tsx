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
    <section id="beneficios" className="py-20 px-6 bg-[#291d19] relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-['Aclonica'] text-3xl sm:text-4xl text-[#f4eade] mb-3">
            Com a assinatura, você garante:
          </h2>
          <p className="font-sans text-[#c3c8c6] text-base sm:text-lg max-w-xl mx-auto">
            Muito mais do que ovos — uma experiência completa de frescor, qualidade e comodidade.
          </p>
        </div>

        {/* 7-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className={`bg-[#2b1e1a] p-6 rounded-2xl border border-[#f4eade]/10 shadow-[0_10px_40px_rgba(28,40,38,0.25)] hover:border-[#e67e22]/50 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group ${
                  idx === 6 ? 'sm:col-span-2 lg:col-span-3 xl:col-span-1 border-[#e67e22]/30' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#e67e22]/10 border border-[#e67e22]/30 flex items-center justify-center text-[#e67e22] group-hover:bg-[#e67e22] group-hover:text-[#1c2826] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    {b.badge && (
                      <span className="text-[11px] font-bold bg-[#e67e22] text-[#1c2826] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {b.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-sans font-semibold text-lg text-[#f4eade] mb-2 leading-snug">
                    {b.title}
                  </h3>
                  <p className="font-sans text-sm text-[#c3c8c6] leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#f4eade]/5 flex items-center gap-1.5 text-xs text-[#ffb783]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e67e22]" />
                  <span>Garantia Ovo di Onça</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
