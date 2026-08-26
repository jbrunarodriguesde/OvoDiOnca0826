import { useState } from 'react';
import { RECIPES } from '../data/mockData';
import { Recipe } from '../types';
import { Clock, ChefHat, Users, Sparkles, Check, ChevronRight } from 'lucide-react';

export function RecipesSection() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>(RECIPES[0]);

  return (
    <section id="receitas" className="py-20 px-6 bg-[#251915] relative border-t border-[#f4eade]/10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ffb783] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#e67e22]" />
            <span>Da Fazenda para sua Cozinha</span>
          </div>
          <h2 className="font-['Aclonica'] text-3xl sm:text-4xl text-[#f4eade] mb-3">
            Receitas que Brilham com Ovos Caipiras
          </h2>
          <p className="text-sm sm:text-base text-[#c3c8c6] max-w-xl mx-auto">
            A densidade da gema e o frescor da clara transformam receitas simples em pratos memoráveis.
          </p>
        </div>

        {/* Recipe Tabs / Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {RECIPES.map((recipe) => (
            <button
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                selectedRecipe.id === recipe.id
                  ? 'bg-[#e67e22] text-[#1c2826] border-[#e67e22] shadow-lg scale-105'
                  : 'bg-[#2b1e1a] text-[#f4eade] border-[#f4eade]/15 hover:border-[#e67e22]/50'
              }`}
            >
              {recipe.title}
            </button>
          ))}
        </div>

        {/* Selected Recipe Detail Card */}
        <div className="bg-[#1c2826] p-6 sm:p-10 rounded-3xl border border-[#f4eade]/15 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Overview */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold text-[#e67e22] uppercase tracking-wider">
                  Dificuldade: {selectedRecipe.difficulty}
                </span>
                <h3 className="font-['Aclonica'] text-2xl sm:text-3xl text-[#f4eade] mt-1 mb-2">
                  {selectedRecipe.title}
                </h3>
                <p className="text-sm text-[#ffb783] italic mb-4">
                  "{selectedRecipe.subtitle}"
                </p>
                <p className="text-sm text-[#c3c8c6] leading-relaxed">
                  {selectedRecipe.description}
                </p>
              </div>

              {/* Meta tags */}
              <div className="flex items-center gap-4 text-xs text-[#f4eade] bg-[#2b1e1a] p-4 rounded-xl border border-[#f4eade]/10">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#e67e22]" />
                  <span>{selectedRecipe.prepTime}</span>
                </div>
                <div className="border-r border-[#f4eade]/10 h-4" />
                <div className="flex items-center gap-1.5">
                  <ChefHat className="w-4 h-4 text-[#e67e22]" />
                  <span>{selectedRecipe.difficulty}</span>
                </div>
                <div className="border-r border-[#f4eade]/10 h-4" />
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#e67e22]" />
                  <span>{selectedRecipe.servings}</span>
                </div>
              </div>

              {/* Secret Tip */}
              <div className="bg-[#e67e22]/15 border border-[#e67e22]/40 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-[#ffb783] mb-1">
                  <Sparkles className="w-4 h-4 text-[#e67e22]" />
                  <span>Dica do Produtor:</span>
                </div>
                <p className="text-xs text-[#f4eade]/90 leading-relaxed">
                  {selectedRecipe.eggTip}
                </p>
              </div>
            </div>

            {/* Right: Ingredients & Steps */}
            <div className="lg:col-span-7 bg-[#2b1e1a] p-6 rounded-2xl border border-[#f4eade]/10 space-y-6">
              {/* Ingredients */}
              <div>
                <h4 className="text-base font-bold text-[#f4eade] mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e67e22]" />
                  Ingredientes Selecionados
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#c3c8c6]">
                  {selectedRecipe.ingredients.map((ing, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 bg-[#1c110d] p-2.5 rounded-lg">
                      <Check className="w-3.5 h-3.5 text-[#25d366] shrink-0 mt-0.5" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h4 className="text-base font-bold text-[#f4eade] mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e67e22]" />
                  Modo de Preparo
                </h4>
                <ol className="space-y-2.5 text-xs text-[#c3c8c6]">
                  {selectedRecipe.instructions.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-3 bg-[#1c110d] p-3 rounded-lg">
                      <span className="w-5 h-5 rounded-full bg-[#e67e22] text-[#1c2826] font-bold flex items-center justify-center shrink-0 text-[11px]">
                        {sIdx + 1}
                      </span>
                      <span className="leading-relaxed text-[#f4eade]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
