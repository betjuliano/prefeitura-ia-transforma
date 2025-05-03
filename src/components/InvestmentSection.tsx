
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Info } from 'lucide-react';

const investments = [
  {
    title: "Pequeno Porte",
    description: "Soluções customizadas para municípios de pequeno porte com foco em automação básica e atendimento digital.",
    icon: "🏡"
  },
  {
    title: "Médio Porte",
    description: "Implementações mais abrangentes com múltiplos módulos integrados para gestão eficiente e atendimento inteligente.",
    icon: "🏢"
  },
  {
    title: "Grande Porte",
    description: "Ecossistema completo de IA com soluções avançadas de análise de dados, monitoramento e automação em larga escala.",
    icon: "🏙️"
  }
];

const InvestmentSection: React.FC = () => {
  return (
    <section id="investment" className="section py-20 bg-gradient-to-b from-white to-gov-lightBlue/20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gov-blue mb-6 text-center">
          Investimento <span className="text-transparent bg-clip-text bg-gradient-to-r from-gov-blue to-blue-500">Modular</span>
        </h2>
        
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Desenvolvemos soluções personalizadas ao tamanho do seu município e às suas necessidades específicas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {investments.map((investment, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2 bg-gradient-to-br from-white to-gov-lightBlue/20 border-b border-b-gov-blue/10">
                <div className="text-4xl mb-4">{investment.icon}</div>
                <CardTitle className="text-2xl">{investment.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700">{investment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 p-6 bg-gov-blue/5 border border-gov-blue/20 rounded-xl">
          <div className="flex items-start gap-4">
            <div className="bg-gov-blue/10 p-3 rounded-full">
              <Info className="h-6 w-6 text-gov-blue" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gov-blue mb-2">Orçamento Personalizado</h3>
              <p className="text-gray-700">
                Os valores são cuidadosamente formatados com base no tamanho do município, complexidade das soluções
                desejadas e módulos escolhidos. Implante progressivamente, conforme necessidade e disponibilidade orçamentária.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
