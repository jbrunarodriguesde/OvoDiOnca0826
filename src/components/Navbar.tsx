import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, User, Egg, Sparkles } from 'lucide-react';

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

      const sections = ['inicio', 'historia', 'qualidade', 'beneficios', 'comparativo', 'planos', 'calculadora', 'entrega', 'validacao-entrega', 'receitas'];
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
    { label: 'Receitas', href: '#receitas', id: 'receitas' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1c110d]/95 backdrop-blur-md shadow-xl border-b border-[#f4eade]/10 py-3'
          : 'bg-[#1c110d]/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2 group text-left"
          id="brand-logo"
        >
          <div className="w-9 h-9 rounded-full bg-[#e67e22] flex items-center justify-center text-[#1c2826] font-bold shadow-md group-hover:scale-105 transition-transform">
            <Egg className="w-5 h-5 fill-current" />
          </div>
          <div>
            <span className="font-['Aclonica'] text-xl sm:text-2xl text-[#f5ddd7] tracking-tight block">
              Ovo di Onça
            </span>
            <span className="text-[10px] text-[#ffb783] uppercase tracking-widest block font-medium -mt-1">
              Clube de Fazenda
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 items-center font-sans text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-all duration-200 relative py-1 hover:text-[#f5ddd7] ${
                activeSection === link.id
                  ? 'text-[#e67e22] font-semibold'
                  : 'text-[#c3c8c6]'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e67e22] rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenAccount}
            className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#f4eade] border border-[#f4eade]/20 px-3.5 py-2 rounded-lg hover:border-[#e67e22] hover:text-[#e67e22] hover:bg-[#f4eade]/5 transition-all"
            id="btn-login-account"
          >
            <User className="w-4 h-4" />
            <span>Acessar sua Conta</span>
          </button>

          <button
            onClick={() => onOpenCheckout('semanal')}
            className="bg-[#e67e22] hover:bg-[#d67214] text-[#1c2826] font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-lg hover:scale-105 active:scale-95 transition-all shadow-[0_4px_20px_rgba(230,126,34,0.25)] flex items-center gap-1.5"
            id="btn-nav-subscribe"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Assinar</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenAccount}
            className="text-xs text-[#ffb783] border border-[#ffb783]/30 px-2.5 py-1.5 rounded-lg flex items-center gap-1"
          >
            <User className="w-3.5 h-3.5" />
            <span>Entrar</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#f5ddd7] p-2 hover:bg-[#2b1e1a] rounded-lg transition-colors"
            aria-label="Abrir menu de navegação"
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1c110d]/98 border-b border-[#f4eade]/15 px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-3 font-sans">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-base ${
                  activeSection === link.id
                    ? 'bg-[#e67e22]/15 text-[#ffb783] font-semibold'
                    : 'text-[#c3c8c6] hover:bg-[#2b1e1a] hover:text-[#f5ddd7]'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-[#f4eade]/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAccount();
                }}
                className="w-full text-center py-2.5 px-4 rounded-lg border border-[#f4eade]/20 text-[#f4eade] text-sm font-medium flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" />
                Acessar sua Conta de Assinante
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckout('semanal');
                }}
                className="w-full text-center py-2.5 px-4 rounded-lg bg-[#e67e22] text-[#1c2826] font-semibold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Assinar Plano Semanal
              </button>

              <a
                href="https://wa.me/553125167561?text=Ol%C3%A1!%20Gostaria%20de%20assinar%20ovos%20caipiras%20com%20a%20Ovo%20di%20On%C3%A7a!"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-2 px-4 rounded-lg bg-[#25d366]/15 border border-[#25d366]/30 text-[#25d366] text-xs font-medium flex items-center justify-center gap-2 mt-1"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp: (31) 2516-7561
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
