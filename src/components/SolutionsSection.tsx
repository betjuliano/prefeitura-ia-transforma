
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const solutions = [
  {
    title: "Chatbots 24/7",
    description: "Atendimento automático para cidadãos.",
    icon: "💬"
  },
  {
    title: "Monitoramento Inteligente (YOLO)",
    description: "Câmeras que detectam eventos em tempo real.",
    icon: "🎥"
  },
  {
    title: "Transcrição de Áudio (Whisper)",
    description: "Geração automática de atas e relatórios públicos.",
    icon: "🎙️"
  },
  {
    title: "Automação de Processos",
    description: "Documentos, licenças e agendamentos automatizados.",
    icon: "⚙️"
  },
  {
    title: "Dashboards Estratégicos",
    description: "Indicadores e gestão inteligente em tempo real.",
    icon: "📊"
  },
  {
    title: "Auditoria Automatizada",
    description: "Controle de gastos e análise de contratos públicos.",
    icon: "🔍"
  }
];

const SolutionsSection: React.FC = () => {
  return (
    <section className="section bg-gradient-to-b from-gov-lightBlue/30 to-white">
      <h2 className="section-title">Soluções Inteligentes Disponíveis</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {solutions.map((solution, index) => (
          <Card key={index} className="feature-card group cursor-pointer" 
                style={{animationDelay: `${index * 100}ms`}}>
            <CardHeader className="pb-2">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{solution.icon}</div>
              <CardTitle>{solution.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{solution.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
