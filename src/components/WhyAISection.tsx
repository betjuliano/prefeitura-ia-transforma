
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Check } from 'lucide-react';

const WhyAISection: React.FC = () => {
  const benefits = [
    {
      title: "Automação de Processos",
      description: "Elimine tarefas repetitivas e libere recursos humanos para atividades estratégicas."
    },
    {
      title: "Análise de Dados",
      description: "Transforme dados em insights para tomadas de decisão mais inteligentes e eficazes."
    },
    {
      title: "Atendimento ao Cidadão",
      description: "Ofereça respostas rápidas e precisas 24/7 melhorando a satisfação da população."
    }
  ];

  return (
    <section id="why-ai" className="section py-24 bg-gradient-to-b from-white to-gov-lightBlue/30">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gov-blue mb-6">
          Por que investir em <span className="text-transparent bg-clip-text bg-gradient-to-r from-gov-blue to-blue-500">Inteligência Artificial</span>?
        </h2>
        
        <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto">
          A Inteligência Artificial permite modernizar a gestão pública, 
          reduzir custos e transformar o relacionamento com o cidadão.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 bg-gradient-to-br from-white to-gov-lightBlue/20">
                <div className="h-12 w-12 rounded-full bg-gov-blue/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-gov-blue group-hover:text-white transition-colors duration-300">
                  <ArrowRight className="h-6 w-6 text-gov-blue group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gov-blue">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="border-l-4 border-l-gov-blue bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <p className="text-lg italic text-gray-700">
                "Sua prefeitura pode se tornar referência em inovação para toda a região, 
                atraindo investimentos e melhorando a qualidade de vida da população."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyAISection;
