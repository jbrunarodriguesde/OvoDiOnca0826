import { useState, useMemo } from 'react';
import { SERVED_NEIGHBORHOODS } from '../data/mockData';
import {
  MapPin,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MessageCircle,
  Calendar,
  ArrowRight,
} from 'lucide-react';

interface NeighborhoodValidatorProps {
  onSelectForPlan?: (neighborhoodName: string) => void;
}

export function NeighborhoodValidator({ onSelectForPlan }: NeighborhoodValidatorProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    searched: string;
    isServed: boolean;
    data?: (typeof SERVED_NEIGHBORHOODS)[0];
  } | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const normalize = (str: string) =>
    str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();

  const filteredList = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const q = normalize(searchTerm);
    return SERVED_NEIGHBORHOODS.filter((n) => normalize(n.name).includes(q));
  }, [searchTerm]);

  const handleVerify = (customName?: string) => {
    const term = customName || searchTerm;
    if (!term.trim()) return;

    setLoading(true);
    setShowDropdown(false);

    setTimeout(() => {
      const q = normalize(term);
      const matched = SERVED_NEIGHBORHOODS.find((n) => normalize(n.name) === q || normalize(n.name).includes(q));

      if (matched) {
        setResult({
          searched: matched.name,
          isServed: true,
          data: matched,
        });
      } else {
        setResult({
          searched: term,
          isServed: false,
        });
      }
      setLoading(false);
    }, 450);
  };

  const handleSelectTag = (bairroName: string) => {
    setSearchTerm(bairroName);
    handleVerify(bairroName);
  };

  return (
    <section id="validacao-entrega" className="py-20 px-6 bg-[#291d19] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffb783] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#e67e22]" />
            <span>Verificação Imediata de CEP / Bairro</span>
          </div>
          <h2 className="font-['Aclonica'] text-3xl sm:text-4xl text-[#f4eade] mb-2">
            Entregamos na sua região?
          </h2>
          <p className="text-sm sm:text-base text-[#c3c8c6]">
            Digite seu bairro e descubra se levamos ovos fresquinhos até você
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex flex-col sm:flex-row gap-3 relative">
            <div className="relative flex-grow">
              <input
                type="text"
                id="bairro-input"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleVerify();
                }}
                placeholder="Ex: Savassi, Buritis, Santo Antônio, Funcionários…"
                className="w-full bg-[#160b08] border border-[#f4eade]/20 rounded-xl px-5 py-3.5 text-[#f4eade] placeholder:text-[#c3c8c6]/50 focus:outline-none focus:border-[#e67e22] transition-colors text-base shadow-inner"
              />

              {/* Autocomplete Dropdown */}
              {showDropdown && filteredList.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-[#352723] border border-[#f4eade]/15 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto mt-1 divide-y divide-[#f4eade]/10">
                  {filteredList.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setSearchTerm(item.name);
                        setShowDropdown(false);
                        handleVerify(item.name);
                      }}
                      className="px-5 py-3 hover:bg-[#e67e22] hover:text-[#1c2826] cursor-pointer transition-colors text-sm flex items-center justify-between text-[#f4eade]"
                    >
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs opacity-75">{item.region}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleVerify()}
              disabled={loading}
              id="btn-verificar"
              className="bg-[#e67e22] hover:bg-[#d67214] text-[#1c2826] font-bold px-8 py-3.5 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap text-sm cursor-pointer disabled:opacity-75"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-[#1c2826]/30 border-t-[#1c2826] rounded-full animate-spin" />
              ) : (
                <>
                  <MapPin className="w-4 h-4" />
                  <span>Verificar meu bairro</span>
                </>
              )}
            </button>
          </div>

          {/* Dynamic Result Banner */}
          {result && (
            <div className="mt-6 animate-in fade-in zoom-in-95 duration-200">
              {result.isServed ? (
                <div className="p-6 rounded-2xl bg-[#1c2826] border-2 border-[#25d366]/40 text-[#f4eade] shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#25d366]/20 text-[#25d366] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-[#f4eade] mb-1">
                        Sim! Entregamos no bairro <span className="text-[#ffb783]">{result.searched}</span>!
                      </h4>
                      <p className="text-xs text-[#c3c8c6] mb-3">
                        Região: <strong className="text-white">{result.data?.region}</strong>.
                      </p>

                      {result.data?.deliveryDays && (
                        <div className="flex items-center gap-2 text-xs bg-[#2b1e1a] px-3.5 py-2 rounded-lg border border-[#f4eade]/10 w-fit mb-4 text-[#ffb783]">
                          <Calendar className="w-4 h-4 text-[#e67e22]" />
                          <span>
                            Dias habituais de entrega: <strong>{result.data.deliveryDays.join(' ou ')}</strong>
                          </span>
                        </div>
                      )}

                      <a
                        href="#planos"
                        onClick={() => onSelectForPlan && onSelectForPlan(result.searched)}
                        className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#d67214] text-[#1c2826] text-xs font-bold px-4 py-2.5 rounded-lg shadow transition-all hover:scale-105"
                      >
                        <span>Escolher meu plano para {result.searched}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-[#1c2826] border-2 border-[#ffb4ab]/40 text-[#f4eade] shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ffb4ab]/20 text-[#ffb4ab] flex items-center justify-center shrink-0">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#f4eade] mb-1">
                        Ainda não temos rota fixa cadastrada para "{result.searched}"
                      </h4>
                      <p className="text-xs text-[#c3c8c6] mb-4">
                        Mas expandimos rotas semanalmente e atendemos regiões vizinhas sob consulta no WhatsApp!
                      </p>
                      <a
                        href={`https://wa.me/553125167561?text=Ol%C3%A1!%20Gostaria%20de%20saber%20se%20voc%C3%AAs%20podem%20entregar%20no%20meu%20bairro:%20${encodeURIComponent(
                          result.searched
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20ba59] text-[#1c2826] font-bold text-xs px-4 py-2.5 rounded-lg transition-all shadow"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Consultar disponibilidade no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Region Tags Grid */}
        <div>
          <h3 className="font-sans font-semibold text-xs text-[#ffb783] mb-4 text-center uppercase tracking-widest">
            Regiões e Bairros com Rota Ativa
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto" id="neighborhood-tags">
            {SERVED_NEIGHBORHOODS.map((b, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectTag(b.name)}
                className={`neighborhood-tag flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs transition-all border ${
                  searchTerm === b.name
                    ? 'bg-[#e67e22] text-[#1c2826] font-bold border-[#e67e22] shadow-md scale-105'
                    : 'bg-[#2b1e1a] hover:bg-[#40312d] border-[#f4eade]/10 text-[#f4eade] hover:border-[#e67e22]/50 hover:scale-105'
                }`}
              >
                <MapPin className="w-3 h-3 text-[#e67e22]" />
                <span>{b.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
