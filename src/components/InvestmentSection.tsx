
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const investments = [
  {
    title: "Pequeno Porte",
    range: "De R$ 30 mil a R$ 150 mil",
    icon: "🏡"
  },
  {
    title: "Médio Porte",
    range: "De R$ 150 mil a R$ 400 mil",
    icon: "🏢"
  },
  {
    title: "Grande Porte",
    range: "Acima de R$ 400 mil",
    icon: "🏙️"
  }
];

const InvestmentSection: React.FC = () => {
  return (
    <section className="section">
      <h2 className="section-title">Investimento Modular</h2>
      
      <div className="card-grid">
        {investments.map((investment, index) => (
          <Card key={index} className="feature-card border-t-4 border-t-gov-blue">
            <CardHeader className="pb-2">
              <div className="text-4xl mb-4">{investment.icon}</div>
              <CardTitle className="text-2xl">{investment.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-medium">{investment.range}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <p className="text-center mt-10 text-lg italic">
        Implante módulos progressivamente, conforme necessidade e orçamento da prefeitura.
      </p>
    </section>
  );
};

export default InvestmentSection;
