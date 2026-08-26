import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HistorySection } from './components/HistorySection';
import { BenefitsSection } from './components/BenefitsSection';
import { QualityDeepDive } from './components/QualityDeepDive';
import { ComparisonTable } from './components/ComparisonTable';
import { EggFreshnessCalculator } from './components/EggFreshnessCalculator';
import { PlansSection } from './components/PlansSection';
import { PaymentDeliverySection } from './components/PaymentDeliverySection';
import { NeighborhoodValidator } from './components/NeighborhoodValidator';
import { RecipesSection } from './components/RecipesSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { SubscriberPortalModal } from './components/SubscriberPortalModal';
import { ImagePreviewModal } from './components/ImagePreviewModal';
import { MessageCircle, Egg, Sparkles } from 'lucide-react';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState('semanal');
  const [prefilledNeighborhood, setPrefilledNeighborhood] = useState('');
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<{ url: string; title: string } | null>(null);
  const [toastNotification, setToastNotification] = useState<string | null>(null);

  const handleOpenCheckout = (planId?: string) => {
    if (planId) setSelectedPlanId(planId);
    setIsCheckoutOpen(true);
  };

  const handleSelectNeighborhoodForPlan = (neighborhoodName: string) => {
    setPrefilledNeighborhood(neighborhoodName);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutSuccess = (subData: any) => {
    setIsCheckoutOpen(false);
    setToastNotification(
      `Obrigado, ${subData.name}! Sua assinatura do plano ${subData.planName} foi registrada.`
    );
    setTimeout(() => setToastNotification(null), 5000);
  };

  return (
    <div className="min-h-screen bg-[#1c2826] text-[#f4eade] font-sans relative overflow-x-hidden selection:bg-[#e67e22] selection:text-[#1c2826]">
      {/* Tactile Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none noise-bg opacity-[0.035] z-50" />

      {/* Navigation */}
      <Navbar
        onOpenAccount={() => setIsAccountOpen(true)}
        onOpenCheckout={handleOpenCheckout}
      />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section with direct farm image */}
        <Hero
          onOpenCheckout={handleOpenCheckout}
          onOpenImagePreview={(url, title) => setPreviewImage({ url, title })}
        />

        {/* 2. Nossa História with Fred, Dudu & Onça de Pitangui */}
        <HistorySection
          onOpenCheckout={() => handleOpenCheckout('semanal')}
          onOpenImagePreview={(url, title) => setPreviewImage({ url, title })}
        />

        {/* 3. Benefícios / Garantias da Assinatura (7 Grid Cards) */}
        <BenefitsSection />

        {/* 4. Qualidade & Principais Benefícios (Gema de Ouro, Flexibilidade, Garantia) */}
        <QualityDeepDive />

        {/* 5. Comparativo: Ovo di Onça vs Supermercado */}
        <ComparisonTable />

        {/* 6. Egg-Scale: Interactive Consumption & Freshness Calculator */}
        <EggFreshnessCalculator onSelectPlan={handleOpenCheckout} />

        {/* 7. Planos de Assinatura (Quinzenal, Semanal [Highlight], Mensal) */}
        <PlansSection onSelectPlan={handleOpenCheckout} />

        {/* 8. Pagamento & Entrega */}
        <PaymentDeliverySection
          onOpenCoverageCheck={() => {
            const el = document.getElementById('validacao-entrega');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 9. Entregamos na sua região? (Live Neighborhood Validator) */}
        <NeighborhoodValidator onSelectForPlan={handleSelectNeighborhoodForPlan} />

        {/* 10. Receitas da Fazenda com Ovos Caipiras */}
        <RecipesSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/553125167561?text=Ol%C3%A1!%20Gostaria%20de%20assinar%20ovos%20caipiras%20com%20a%20Ovo%20di%20On%C3%A7a!"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25d366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group"
        aria-label="Fale conosco no WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold text-[#1c2826]">
          Fale Conosco
        </span>
      </a>

      {/* Toast Notification Banner */}
      {toastNotification && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#e67e22] text-[#1c2826] px-5 py-3.5 rounded-2xl shadow-2xl font-semibold text-xs sm:text-sm flex items-center gap-2.5 animate-in slide-in-from-bottom-5">
          <Sparkles className="w-4 h-4 fill-current" />
          <span>{toastNotification}</span>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <CheckoutModal
          initialPlanId={selectedPlanId}
          initialNeighborhood={prefilledNeighborhood}
          onClose={() => {
            setIsCheckoutOpen(false);
            setPrefilledNeighborhood('');
          }}
          onSuccess={handleCheckoutSuccess}
        />
      )}

      {/* Subscriber Account Portal Modal */}
      {isAccountOpen && (
        <SubscriberPortalModal onClose={() => setIsAccountOpen(false)} />
      )}

      {/* Image Preview Modal for direct high-res images */}
      {previewImage && (
        <ImagePreviewModal
          imageUrl={previewImage.url}
          title={previewImage.title}
          onClose={() => setPreviewImage(null)}
        />
      )}
    </div>
  );
}
