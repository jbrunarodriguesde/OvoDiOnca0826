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
import { motion, AnimatePresence } from 'motion/react';

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
    }, 400);
  };

  const handleSelectTag = (bairroName: string) => {
    setSearchTerm(bairroName);
    handleVerify(bairroName);
  };

  return (
    <section id="validacao-entrega" className="py-20 px-6 bg-[#f9f5ef] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e67e22] uppercase tracking-wider mb-2 bg-[#f4eade] px-3.5 py-1 rounded-full border border-[#e67e22]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#e67e22]" />
            <span>Verificação Imediata de CEP / Bairro</span>
          </div>
          <h2 className="font-['Aclonica'] text-3xl sm:text-4xl text-[#1c2826] mb-2">
            Entregamos na sua região?
          </h2>
          <p className="text-sm sm:text-base text-[#536360]">
            Digite seu bairro e descubra se levamos ovos fresquinhos até você
          </p>
        </motion.div>

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
                className="w-full bg-white border border-[#1c2826]/15 rounded-2xl px-5 py-3.5 text-[#1c2826] placeholder:text-[#536360]/60 focus:outline-none focus:border-[#e67e22] focus:ring-2 focus:ring-[#e67e22]/20 transition-all text-base shadow-sm"
              />

              {/* Autocomplete Dropdown */}
              <AnimatePresence>
                {showDropdown && filteredList.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-full bg-white border border-[#1c2826]/10 rounded-2xl shadow-xl z-50 max-h-60 overflow-y-auto mt-1 divide-y divide-[#1c2826]/5"
                  >
                    {filteredList.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setSearchTerm(item.name);
                          setShowDropdown(false);
                          handleVerify(item.name);
                        }}
                        className="px-5 py-3 hover:bg-[#f4eade] cursor-pointer transition-colors text-sm flex items-center justify-between text-[#1c2826]"
                      >
                        <span className="font-medium">{item.name}</span>
                        <span className="text-xs text-[#536360] font-medium">{item.region}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleVerify()}
              disabled={loading}
              id="btn-verificar"
              className="bg-[#e67e22] hover:bg-[#d67214] text-[#1c2826] font-bold px-8 py-3.5 rounded-2xl transition-all shadow-[0_4px_16px_rgba(230,126,34,0.3)] flex items-center justify-center gap-2 whitespace-nowrap text-sm cursor-pointer disabled:opacity-75"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-[#1c2826]/30 border-t-[#1c2826] rounded-full animate-spin" />
              ) : (
                <>
                  <MapPin className="w-4 h-4" />
                  <span>Verificar meu bairro</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Dynamic Result Banner */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.25 }}
                className="mt-6"
              >
                {result.isServed ? (
                  <div className="p-6 rounded-3xl bg-white border-2 border-[#25d366]/40 text-[#1c2826] shadow-[0_10px_35px_rgba(37,211,102,0.1)]">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#25d366]/20 text-[#1e824c] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-bold text-[#1c2826] mb-1">
                          Sim! Entregamos no bairro <span className="text-[#e67e22]">{result.searched}</span>!
                        </h4>
                        <p className="text-xs text-[#536360] mb-3">
                          Região: <strong className="text-[#1c2826]">{result.data?.region}</strong>.
                        </p>

                        {result.data?.deliveryDays && (
                          <div className="flex items-center gap-2 text-xs bg-[#faf6f0] px-3.5 py-2 rounded-xl border border-[#1c2826]/8 w-fit mb-4 text-[#1c2826]">
                            <Calendar className="w-4 h-4 text-[#e67e22]" />
                            <span>
                              Dias habituais de entrega: <strong>{result.data.deliveryDays.join(' ou ')}</strong>
                            </span>
                          </div>
                        )}

                        <motion.a
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          href="#planos"
                          onClick={() => onSelectForPlan && onSelectForPlan(result.searched)}
                          className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#d67214] text-[#1c2826] text-xs font-bold px-4 py-2.5 rounded-xl shadow transition-all"
                        >
                          <span>Escolher meu plano para {result.searched}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 rounded-3xl bg-white border-2 border-[#ffb4ab] text-[#1c2826] shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#ffb4ab]/30 text-[#ba1a1a] flex items-center justify-center shrink-0">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#1c2826] mb-1">
                          Ainda não temos rota fixa cadastrada para "{result.searched}"
                        </h4>
                        <p className="text-xs text-[#536360] mb-4">
                          Mas expandimos rotas semanalmente e atendemos regiões vizinhas sob consulta no WhatsApp!
                        </p>
                        <motion.a
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          href={`https://wa.me/553125167561?text=Ol%C3%A1!%20Gostaria%20de%20saber%20se%20voc%C3%AAs%20podem%20entregar%20no%20meu%20bairro:%20${encodeURIComponent(
                            result.searched
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20ba59] text-[#1c2826] font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow"
                        >
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span>Consultar disponibilidade no WhatsApp</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Region Tags Grid */}
        <div>
          <h3 className="font-sans font-semibold text-xs text-[#1c2826] mb-4 text-center uppercase tracking-widest">
            Regiões e Bairros com Rota Ativa
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto" id="neighborhood-tags">
            {SERVED_NEIGHBORHOODS.map((b, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSelectTag(b.name)}
                className={`neighborhood-tag flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs transition-colors border cursor-pointer ${
                  searchTerm === b.name
                    ? 'bg-[#e67e22] text-[#1c2826] font-bold border-[#e67e22] shadow-sm'
                    : 'bg-white hover:bg-[#f4eade] border-[#1c2826]/10 text-[#1c2826] hover:border-[#e67e22]/50 font-medium'
                }`}
              >
                <MapPin className="w-3 h-3 text-[#e67e22]" />
                <span>{b.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

