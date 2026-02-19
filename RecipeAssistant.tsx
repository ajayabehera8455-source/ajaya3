
"use client";

import { useState } from "react";
import { generateMangoRecipe, type GenerateMangoRecipeOutput } from "@/ai/flows/generate-mango-recipe";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles, Loader2, Utensils, Clock, Users } from "lucide-react";

export function RecipeAssistant() {
  const [ingredients, setIngredients] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState<GenerateMangoRecipeOutput | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await generateMangoRecipe({
        ingredients: ingredients ? ingredients.split(",").map(i => i.trim()) : [],
        cuisinePreference: cuisine || "any style"
      });
      setRecipe(result);
    } catch (error) {
      console.error("Failed to generate recipe:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="recipes" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-accent font-bold text-sm mb-4">
              <Sparkles size={16} /> AI-Powered Chef
            </span>
            <h2 className="font-headline text-4xl md:text-5xl mb-6">Culinary Assistant</h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Tell us what's in your pantry or your favorite cuisine, and our AI chef will craft a bespoke recipe featuring MangoBliss mangos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-3xl border-primary/20 bg-background/50">
              <form onSubmit={handleGenerate} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-foreground">Ingredients on hand (optional)</label>
                  <Input 
                    placeholder="e.g. Chicken, Basil, Rice, Honey" 
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="bg-white border-muted focus:ring-primary rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-foreground">Cuisine Preference</label>
                  <Input 
                    placeholder="e.g. Thai, Italian, Mexican" 
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                    className="bg-white border-muted focus:ring-primary rounded-xl"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl py-6 text-lg font-bold transition-all shadow-lg"
                >
                  {loading ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Crafting Recipe...</>
                  ) : "Generate Recipe"}
                </Button>
              </form>
            </div>

            <div className="relative min-h-[400px]">
              {recipe ? (
                <div className="animate-in fade-in slide-in-from-right-10 duration-500">
                  <Card className="rounded-3xl border-none shadow-2xl bg-white overflow-hidden">
                    <div className="bg-primary p-6">
                      <CardHeader className="p-0">
                        <CardTitle className="font-headline text-3xl text-foreground mb-2">
                          {recipe.recipeName}
                        </CardTitle>
                        <p className="text-foreground/80 font-body text-sm italic">
                          {recipe.description}
                        </p>
                      </CardHeader>
                    </div>
                    <CardContent className="p-8">
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="flex flex-col items-center p-3 bg-muted rounded-2xl text-center">
                          <Clock className="w-5 h-5 mb-1 text-accent" />
                          <span className="text-[10px] uppercase font-bold text-muted-foreground">Prep</span>
                          <span className="text-sm font-bold">{recipe.prepTime}</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-muted rounded-2xl text-center">
                          <Utensils className="w-5 h-5 mb-1 text-accent" />
                          <span className="text-[10px] uppercase font-bold text-muted-foreground">Cook</span>
                          <span className="text-sm font-bold">{recipe.cookTime}</span>
                        </div>
                        <div className="flex flex-col items-center p-3 bg-muted rounded-2xl text-center">
                          <Users className="w-5 h-5 mb-1 text-accent" />
                          <span className="text-[10px] uppercase font-bold text-muted-foreground">Serves</span>
                          <span className="text-sm font-bold">{recipe.servings}</span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-accent uppercase tracking-wider text-xs mb-3">Ingredients</h4>
                          <ul className="grid grid-cols-1 gap-1 text-sm text-muted-foreground">
                            {recipe.ingredients.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-accent uppercase tracking-wider text-xs mb-3">Instructions</h4>
                          <ol className="space-y-3 text-sm text-muted-foreground">
                            {recipe.instructions.map((step, i) => (
                              <li key={i} className="flex gap-4">
                                <span className="font-bold text-primary">{i + 1}.</span>
                                <p>{step}</p>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="h-full border-4 border-dashed border-muted rounded-3xl flex flex-col items-center justify-center p-12 text-center text-muted-foreground bg-muted/20">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                    <Utensils className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-headline text-2xl mb-2 text-foreground">Ready to Cook?</h3>
                  <p>Input your preferences and watch the AI Chef create something magical with MangoBliss.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
