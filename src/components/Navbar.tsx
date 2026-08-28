import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, User, Egg, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenAccount: () => void;
  onOpenCheckout: (planId?: string) => void;
}

export function Navbar({ onOpenAccount, onOpenCheckout }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['inicio', 'historia', 'qualidade', 'beneficios', 'comparativo', 'planos', 'calculadora', 'entrega', 'validacao-entrega'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio', id: 'inicio' },
    { label: 'Quem Somos', href: '#historia', id: 'historia' },
    { label: 'Qualidade', href: '#qualidade', id: 'qualidade' },
    { label: 'Benefícios', href: '#beneficios', id: 'beneficios' },
    { label: 'Planos', href: '#planos', id: 'planos' },
    { label: 'Entrega', href: '#validacao-entrega', id: 'validacao-entrega' },
  ];

  return (
    <motion.nav
      id="navbar"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-[#1c2826]/8 shadow-[0_4px_20px_rgba(28,40,38,0.05)] ${
        scrolled
          ? 'bg-[#fdfbf7]/90 py-3 sm:py-3.5'
          : 'bg-[#fdfbf7]/80 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 group text-left"
          id="brand-logo"
        >
          <motion.div
            whileHover={{ scale: 1.08, rotate: 4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#e67e22] flex items-center justify-center text-[#1c2826] font-bold shadow-md"
          >
            <Egg className="w-5 h-5 fill-current" />
          </motion.div>
          <div>
            <span className="font-['Aclonica'] text-xl sm:text-2xl text-[#1c2826] tracking-tight block group-hover:text-[#e67e22] transition-colors">
              Ovo di Onça
            </span>
            <span className="text-[10px] text-[#e67e22] uppercase tracking-widest block font-semibold -mt-1 transition-colors">
              Clube de Fazenda
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 items-center font-sans text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`animated-link py-1 transition-colors duration-200 ${
                  isActive
                    ? 'text-[#e67e22] font-semibold animated-link-active'
                    : 'text-[#536360] hover:text-[#1c2826]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenAccount}
            className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#1c2826] border border-[#1c2826]/15 px-3.5 py-2 rounded-xl hover:border-[#e67e22] hover:text-[#e67e22] hover:bg-[#f4eade]/40 transition-all cursor-pointer bg-white/60"
            id="btn-login-account"
          >
            <User className="w-4 h-4" />
            <span>Acessar sua Conta</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            onClick={() => onOpenCheckout('semanal')}
            className="bg-[#e67e22] hover:bg-[#d67214] text-[#1c2826] font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-[0_4px_15px_rgba(230,126,34,0.25)] flex items-center gap-1.5 cursor-pointer"
            id="btn-nav-subscribe"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Assinar</span>
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={onOpenAccount}
            className="text-xs text-[#1c2826] border border-[#1c2826]/20 bg-white/70 px-2.5 py-1.5 rounded-lg flex items-center gap-1 active:bg-[#f4eade]"
          >
            <User className="w-3.5 h-3.5" />
            <span>Entrar</span>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#1c2826] p-2 hover:bg-[#f4eade] rounded-lg transition-colors"
            aria-label="Abrir menu de navegação"
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#fdfbf7]/95 backdrop-blur-md border-b border-[#1c2826]/10 px-6 py-6 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col gap-2.5 font-sans">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2.5 px-3.5 rounded-xl text-base transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#f4eade] text-[#1c2826] font-semibold border-l-2 border-[#e67e22]'
                      : 'text-[#536360] hover:bg-[#f4eade]/50 hover:text-[#1c2826]'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-[#1c2826]/10 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAccount();
                  }}
                  className="w-full text-center py-2.5 px-4 rounded-xl border border-[#1c2826]/15 bg-white text-[#1c2826] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#f4eade]/40 transition-colors"
                >
                  <User className="w-4 h-4" />
                  Acessar sua Conta de Assinante
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCheckout('semanal');
                  }}
                  className="w-full text-center py-2.5 px-4 rounded-xl bg-[#e67e22] text-[#1c2826] font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-98 transition-transform"
                >
                  <Sparkles className="w-4 h-4 fill-current" />
                  Assinar Plano Semanal
                </button>

                <a
                  href="https://wa.me/553125167561?text=Ol%C3%A1!%20Gostaria%20de%20assinar%20ovos%20caipiras%20com%20a%20Ovo%20di%20On%C3%A7a!"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center py-2 px-4 rounded-xl bg-[#25d366]/15 border border-[#25d366]/30 text-[#1c2826] text-xs font-medium flex items-center justify-center gap-2 mt-1"
                >
                  <MessageCircle className="w-4 h-4 text-[#25d366]" />
                  Falar no WhatsApp: (31) 2516-7561
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

