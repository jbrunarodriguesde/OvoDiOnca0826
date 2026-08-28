import { useState } from 'react';
import { PLANS, SERVED_NEIGHBORHOODS } from '../data/mockData';
import { Plan } from '../types';
import {
  X,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  QrCode,
  CreditCard,
  MapPin,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Egg,
} from 'lucide-react';

interface CheckoutModalProps {
  initialPlanId?: string;
  initialNeighborhood?: string;
  onClose: () => void;
  onSuccess: (subData: any) => void;
}

export function CheckoutModal({
  initialPlanId = 'semanal',
  initialNeighborhood = '',
  onClose,
  onSuccess,
}: CheckoutModalProps) {
  const [selectedPlanId, setSelectedPlanId] = useState(initialPlanId);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    neighborhood: initialNeighborhood || 'Savassi',
    street: '',
    number: '',
    complement: '',
    paymentMethod: 'pix' as 'pix' | 'card',
    deliveryDay: 'Terça-feira',
    notes: '',
  });
  const [confirmed, setConfirmed] = useState(false);

  const selectedPlan: Plan =
    PLANS.find((p) => p.id === selectedPlanId) || PLANS[1];

  const firstMonthDiscount = selectedPlan.priceMonthly * 0.1;
  const firstMonthTotal = selectedPlan.priceMonthly - firstMonthDiscount;

  const handleFinish = (viaWhatsApp = false) => {
    const sub = {
      id: 'sub_' + Math.random().toString(36).substring(2, 9),
      name: formData.name || 'Assinante Ovo di Onça',
      phone: formData.phone || '(31) 99999-0000',
      planId: selectedPlan.id,
      planName: selectedPlan.name,
      priceMonthly: selectedPlan.priceMonthly,
      neighborhood: formData.neighborhood,
      address: `${formData.street}, ${formData.number} ${formData.complement}`,
      paymentMethod: formData.paymentMethod,
      deliveryDay: formData.deliveryDay,
      date: new Date().toLocaleDateString('pt-BR'),
    };

    if (viaWhatsApp) {
      const msg = `Olá Ovo di Onça! 🥚 Gostaria de confirmar minha assinatura no clube:%0A%0A*Plano:* ${selectedPlan.name} (R$ ${selectedPlan.priceMonthly}/mês)%0A*Nome:* ${formData.name}%0A*WhatsApp:* ${formData.phone}%0A*Bairro:* ${formData.neighborhood}%0A*Endereço:* ${formData.street}, ${formData.number} ${formData.complement}%0A*Dia preferido:* ${formData.deliveryDay}%0A*Pagamento:* ${formData.paymentMethod === 'pix' ? 'PIX (10% OFF no 1º mês)' : 'Cartão de Crédito'}`;
      window.open(`https://wa.me/553125167561?text=${msg}`, '_blank');
    }

    setConfirmed(true);
    setTimeout(() => {
      onSuccess(sub);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1c2826]/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-white border border-[#1c2826]/10 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#faf6f0] border-b border-[#1c2826]/8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#e67e22] text-[#1c2826] flex items-center justify-center font-bold shadow-xs">
              <Egg className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="font-['Aclonica'] text-xl text-[#1c2826]">
                Assinatura Ovo di Onça
              </h3>
              <p className="text-xs text-[#e67e22] font-semibold">
                Passo {step} de 2: {step === 1 ? 'Seu Plano & Frequência' : 'Dados de Entrega & Pagamento'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#536360] hover:text-[#1c2826] rounded-xl hover:bg-[#f4eade] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-grow space-y-6">
          {confirmed ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#25d366]/20 text-[#1e824c] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-['Aclonica'] text-2xl text-[#1c2826]">
                Assinatura Registrada com Sucesso!
              </h4>
              <p className="text-sm text-[#536360] max-w-md mx-auto">
                Seja bem-vindo(a) à família Ovo di Onça. Entraremos em contato pelo WhatsApp para combinar o primeiro ciclo de colheita e entrega!
              </p>
            </div>
          ) : step === 1 ? (
            /* Step 1: Plan Picker */
            <div className="space-y-6">
              <label className="text-sm font-semibold text-[#1c2826] block">
                Selecione o ritmo de assinatura desejado:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PLANS.map((plan) => {
                  const isSelected = selectedPlanId === plan.id;
                  return (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={`p-4 rounded-2xl cursor-pointer border-2 transition-all relative flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#faf6f0] border-[#e67e22] shadow-md scale-102'
                          : 'bg-white border-[#1c2826]/10 hover:border-[#e67e22]/40'
                      }`}
                    >
                      {plan.badge && (
                        <span className="absolute -top-2.5 right-3 text-[10px] font-bold bg-[#e67e22] text-[#1c2826] px-2 py-0.5 rounded-full uppercase shadow-xs">
                          {plan.badge}
                        </span>
                      )}

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-bold text-sm text-[#1c2826]">
                            {plan.name}
                          </h5>
                          {isSelected && (
                            <CheckCircle2 className="w-4 h-4 text-[#e67e22]" />
                          )}
                        </div>
                        <p className="text-[11px] text-[#536360] mb-3">
                          {plan.deliveriesPerMonth}x ao mês &bull; {plan.eggsTotal} ovos
                        </p>
                        <div className="text-lg font-bold text-[#1c2826]">
                          R$ {plan.priceMonthly} <span className="text-[10px] font-normal text-[#536360]">/mês</span>
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-[#1c2826]/8 text-[11px] text-[#536360] font-medium">
                        {plan.id === 'semanal' ? 'Frete Grátis' : '30 ovos/entrega'}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Discount Callout */}
              <div className="bg-[#f4eade] border border-[#e67e22]/30 p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#e67e22]" />
                  <div>
                    <div className="text-xs font-bold text-[#1c2826] uppercase">
                      Desconto de Boas-Vindas Ativado
                    </div>
                    <div className="text-xs text-[#536360]">
                      10% OFF na primeira mensalidade do plano {selectedPlan.name}.
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs line-through text-[#536360]">
                    R$ {selectedPlan.priceMonthly}
                  </span>
                  <div className="text-base font-bold text-[#1e824c]">
                    R$ {firstMonthTotal.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Step 2: Customer Address & Payment Details */
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#1c2826] block mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Maria Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#faf6f0] border border-[#1c2826]/12 rounded-xl px-4 py-2.5 text-sm text-[#1c2826] focus:outline-none focus:border-[#e67e22]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1c2826] block mb-1">
                    WhatsApp para Avisos de Entrega *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (31) 99999-8888"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#faf6f0] border border-[#1c2826]/12 rounded-xl px-4 py-2.5 text-sm text-[#1c2826] focus:outline-none focus:border-[#e67e22]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <label className="text-xs font-semibold text-[#1c2826] block mb-1">
                    Bairro em BH *
                  </label>
                  <select
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                    className="w-full bg-[#faf6f0] border border-[#1c2826]/12 rounded-xl px-3 py-2.5 text-sm text-[#1c2826] focus:outline-none focus:border-[#e67e22]"
                  >
                    {SERVED_NEIGHBORHOODS.map((n, idx) => (
                      <option key={idx} value={n.name}>
                        {n.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-[#1c2826] block mb-1">
                    Rua / Avenida e Número *
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Rua Tomé de Souza, 800"
                    value={formData.street}
                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                    className="w-full bg-[#faf6f0] border border-[#1c2826]/12 rounded-xl px-4 py-2.5 text-sm text-[#1c2826] focus:outline-none focus:border-[#e67e22]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#1c2826] block mb-1">
                    Complemento (Apto, Bloco, Casa)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Apto 402, Bloco B"
                    value={formData.complement}
                    onChange={(e) => setFormData({ ...formData, complement: e.target.value })}
                    className="w-full bg-[#faf6f0] border border-[#1c2826]/12 rounded-xl px-4 py-2.5 text-sm text-[#1c2826] focus:outline-none focus:border-[#e67e22]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1c2826] block mb-1">
                    Dia Preferido de Entrega
                  </label>
                  <select
                    value={formData.deliveryDay}
                    onChange={(e) => setFormData({ ...formData, deliveryDay: e.target.value })}
                    className="w-full bg-[#faf6f0] border border-[#1c2826]/12 rounded-xl px-3 py-2.5 text-sm text-[#1c2826] focus:outline-none focus:border-[#e67e22]"
                  >
                    <option value="Terça-feira">Terça-feira (Manhã/Tarde)</option>
                    <option value="Quarta-feira">Quarta-feira (Manhã/Tarde)</option>
                    <option value="Quinta-feira">Quinta-feira (Manhã/Tarde)</option>
                    <option value="Sexta-feira">Sexta-feira (Manhã/Tarde)</option>
                  </select>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="text-xs font-semibold text-[#1c2826] block mb-2">
                  Forma de Pagamento Preferida:
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'pix' })}
                    className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all text-left ${
                      formData.paymentMethod === 'pix'
                        ? 'bg-[#faf6f0] border-[#25d366] text-[#1c2826] shadow-xs'
                        : 'bg-white border-[#1c2826]/10 text-[#536360]'
                    }`}
                  >
                    <QrCode className="w-5 h-5 text-[#1e824c]" />
                    <div>
                      <div className="text-xs font-bold text-[#1c2826]">PIX Mensal</div>
                      <div className="text-[10px] text-[#536360]">Chave via WhatsApp</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all text-left ${
                      formData.paymentMethod === 'card'
                        ? 'bg-[#faf6f0] border-[#e67e22] text-[#1c2826] shadow-xs'
                        : 'bg-white border-[#1c2826]/10 text-[#536360]'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-[#e67e22]" />
                    <div>
                      <div className="text-xs font-bold text-[#1c2826]">Cartão Recorrente</div>
                      <div className="text-[10px] text-[#536360]">Cobrança sem travar limite</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        {!confirmed && (
          <div className="p-6 bg-[#faf6f0] border-t border-[#1c2826]/8 flex items-center justify-between gap-4">
            {step === 2 ? (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-semibold text-[#536360] hover:text-[#1c2826] px-4 py-2"
              >
                &larr; Voltar ao Plano
              </button>
            ) : (
              <div className="text-xs text-[#536360] flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#e67e22]" />
                <span>Pausa ou cancelamento a qualquer momento</span>
              </div>
            )}

            {step === 1 ? (
              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-[#e67e22] hover:bg-[#d67214] text-[#1c2826] font-bold px-6 py-3 rounded-xl transition-all flex items-center gap-2 text-sm shadow-[0_4px_14px_rgba(230,126,34,0.3)] cursor-pointer"
              >
                <span>Avançar para Endereço</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleFinish(true)}
                  className="bg-[#25d366] hover:bg-[#20ba59] text-[#1c2826] font-bold px-5 py-3 rounded-xl transition-all flex items-center gap-2 text-sm shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Concluir pelo WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleFinish(false)}
                  className="bg-[#e67e22] hover:bg-[#d67214] text-[#1c2826] font-bold px-5 py-3 rounded-xl transition-all text-sm shadow-md cursor-pointer"
                >
                  <span>Confirmar Online</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
