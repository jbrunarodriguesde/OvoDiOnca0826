import { useState, FormEvent } from 'react';
import {
  X,
  User,
  Calendar,
  Pause,
  Play,
  RotateCcw,
  Egg,
  CheckCircle2,
  Phone,
} from 'lucide-react';

interface SubscriberPortalModalProps {
  onClose: () => void;
}

export function SubscriberPortalModal({ onClose }: SubscriberPortalModalProps) {
  const [phoneInput, setPhoneInput] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (phoneInput.trim().length >= 8) {
      setLoggedIn(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#160b08]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#1c2826] border border-[#f4eade]/20 w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#251915] border-b border-[#f4eade]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#e67e22] text-[#1c2826] flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Aclonica'] text-xl text-[#f4eade]">
                Portal do Assinante
              </h3>
              <p className="text-xs text-[#ffb783]">
                Gerenciamento autônomo & comodidade
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#c3c8c6] hover:text-white rounded-lg hover:bg-[#40312d] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {toastMessage && (
            <div className="bg-[#25d366]/20 border border-[#25d366]/40 text-[#f4eade] p-3 rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-[#25d366] shrink-0" />
              <span>{toastMessage}</span>
            </div>
          )}

          {!loggedIn ? (
            /* Login Form */
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="text-center py-2">
                <div className="w-12 h-12 rounded-full bg-[#e67e22]/20 text-[#e67e22] flex items-center justify-center mx-auto mb-2">
                  <Egg className="w-6 h-6 fill-current" />
                </div>
                <h4 className="font-semibold text-base text-[#f4eade]">
                  Acesse sua Conta de Assinante
                </h4>
                <p className="text-xs text-[#c3c8c6]">
                  Digite o número de WhatsApp cadastrado na sua assinatura.
                </p>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#f4eade] block mb-1">
                  Seu WhatsApp com DDD
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#c3c8c6] absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="(31) 99999-8888"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    className="w-full bg-[#160b08] border border-[#f4eade]/20 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#f4eade] focus:outline-none focus:border-[#e67e22]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#e67e22] hover:bg-[#d67214] text-[#1c2826] font-bold rounded-xl text-sm transition-all shadow-md"
              >
                Entrar no Meu Painel
              </button>

              <div className="text-center pt-2">
                <span className="text-[11px] text-[#c3c8c6]">
                  Ainda não é assinante?{' '}
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-[#ffb783] underline hover:text-[#e67e22]"
                  >
                    Conheça os planos
                  </button>
                </span>
              </div>
            </form>
          ) : (
            /* Logged in Dashboard Controls */
            <div className="space-y-6">
              {/* Account Status Header */}
              <div className="bg-[#2b1e1a] p-5 rounded-2xl border border-[#f4eade]/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#f4eade]">
                      Assinatura Semanal (120 ovos/mês)
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                        isPaused
                          ? 'bg-[#ffb4ab]/20 text-[#ffb4ab]'
                          : 'bg-[#25d366]/20 text-[#25d366]'
                      }`}
                    >
                      {isPaused ? 'Pausada' : 'Ativa'}
                    </span>
                  </div>
                  <p className="text-xs text-[#c3c8c6] mt-1">
                    Bairro de entrega: <strong className="text-white">Savassi - BH</strong> &bull; Terça-feira
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#c3c8c6]">Próxima entrega:</span>
                  <div className="text-sm font-bold text-[#ffb783]">
                    {isPaused ? 'Pausado' : 'Terça-feira'}
                  </div>
                </div>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsPaused(!isPaused);
                    showToast(
                      isPaused
                        ? 'Assinatura reativada! Sua próxima entrega está confirmada.'
                        : 'Entregas pausadas temporariamente. Você não será cobrado no período.'
                    );
                  }}
                  className="p-4 rounded-xl bg-[#251915] border border-[#f4eade]/10 hover:border-[#e67e22] text-left transition-all flex items-start gap-3"
                >
                  {isPaused ? (
                    <Play className="w-5 h-5 text-[#25d366] shrink-0 mt-0.5" />
                  ) : (
                    <Pause className="w-5 h-5 text-[#ffb4ab] shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="text-xs font-bold text-[#f4eade]">
                      {isPaused ? 'Reativar Entregas' : 'Pausar para Férias'}
                    </div>
                    <div className="text-[10px] text-[#c3c8c6]">
                      {isPaused ? 'Voltar a receber ovos' : 'Suspender sem custos'}
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    showToast('Solicitação de reposição registrada! Enviaremos ovos extras na próxima entrega.')
                  }
                  className="p-4 rounded-xl bg-[#251915] border border-[#f4eade]/10 hover:border-[#e67e22] text-left transition-all flex items-start gap-3"
                >
                  <RotateCcw className="w-5 h-5 text-[#e67e22] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#f4eade]">
                      Garantia de Quebra
                    </div>
                    <div className="text-[10px] text-[#c3c8c6]">
                      Reposição grátis em 1 clique
                    </div>
                  </div>
                </button>
              </div>

              {/* Delivery History & Freshness Guarantee */}
              <div className="bg-[#160b08] p-4 rounded-xl border border-[#f4eade]/5 space-y-2 text-xs text-[#c3c8c6]">
                <div className="flex items-center justify-between text-[#f4eade] font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#e67e22]" /> Histórico Recente
                  </span>
                  <span className="text-[#25d366]">100% Pontual</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Última entrega realizada: 30 ovos frescos colhidos no ninho em Onça de Pitangui.
                </p>
              </div>

              <div className="flex justify-between items-center pt-2">
                <a
                  href="https://wa.me/553125167561?text=Ol%C3%A1!%20Sou%20assinante%20da%20Ovo%20di%20On%C3%A7a%20e%20gostaria%20de%20um%20suporte."
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#ffb783] hover:text-[#e67e22] underline"
                >
                  Falar com suporte no WhatsApp
                </a>

                <button
                  type="button"
                  onClick={() => setLoggedIn(false)}
                  className="text-xs text-[#c3c8c6] hover:text-white"
                >
                  Sair da Conta
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
