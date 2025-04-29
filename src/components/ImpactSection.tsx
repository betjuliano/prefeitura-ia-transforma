
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const impacts = [
  {
    title: "Economia",
    description: "Redução de até 30% nos custos operacionais com automação e digitalização.",
    icon: "💰"
  },
  {
    title: "Agilidade",
    description: "Atendimento 24h via WhatsApp, site e aplicativos sem aumento de equipe.",
    icon: "⚡"
  },
  {
    title: "Reconhecimento",
    description: "Modelo de inovação para captação de recursos e destaque regional.",
    icon: "🏆"
  }
];

const ImpactSection: React.FC = () => {
  return (
    <section className="section">
      <h2 className="section-title">Impactos Diretos para sua Prefeitura</h2>
      
      <div className="card-grid">
        {impacts.map((impact, index) => (
          <Card key={index} className="feature-card group hover:scale-105 transition-transform duration-300">
            <CardHeader className="pb-2">
              <div className="text-4xl mb-4">{impact.icon}</div>
              <CardTitle className="text-2xl">{impact.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">{impact.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
