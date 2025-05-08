
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Camera, Car, AlertTriangle, PieChart, FileText } from 'lucide-react';

const solutions = [
  {
    title: "Chatbots 24/7",
    description: "Atendimento automático para cidadãos, reduzindo custos e aumentando a disponibilidade dos serviços.",
    icon: "💬"
  },
  {
    title: "Monitoramento Inteligente (YOLO)",
    description: "Identificação de veículos roubados, controle de tráfego e detecção de vandalismo em tempo real.",
    icon: <Camera className="h-8 w-8 text-gov-blue" />
  },
  {
    title: "Transcrição de Áudio (Whisper)",
    description: "Geração automática de atas, economizando tempo e recursos em reuniões e audiências públicas.",
    icon: "🎙️"
  },
  {
    title: "Automação de Processos",
    description: "Redução de até 70% no tempo de emissão de documentos e licenças, aumentando a eficiência administrativa.",
    icon: "⚙️"
  },
  {
    title: "Portal de Transparência Inteligente",
    description: "Visualização avançada de dados orçamentários em conformidade com a legislação, facilitando a prestação de contas.",
    icon: <PieChart className="h-8 w-8 text-gov-blue" />
  },
  {
    title: "Auditoria Automatizada",
    description: "Análise de contratos e despesas em tempo real, prevenindo irregularidades e otimizando recursos públicos.",
    icon: <FileText className="h-8 w-8 text-gov-blue" />
  },
  {
    title: "Segurança Pública Integrada",
    description: "Sistema de alerta para ocorrências de vandalismo e criminalidade, com integração às forças de segurança.",
    icon: <Shield className="h-8 w-8 text-gov-blue" />
  },
  {
    title: "Gestão Inteligente de Tráfego",
    description: "Otimização de fluxo de veículos, redução de congestionamentos e identificação de infrações de trânsito.",
    icon: <Car className="h-8 w-8 text-gov-blue" />
  }
];

const SolutionsSection: React.FC = () => {
  return (
    <section className="section bg-gradient-to-b from-gov-lightBlue/30 to-white py-16">
      <h2 className="section-title">Soluções Inteligentes para Prefeituras</h2>
      
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Tecnologias que reduzem custos operacionais, aumentam a eficiência dos serviços públicos 
        e melhoram a qualidade de vida dos cidadãos.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {solutions.map((solution, index) => (
          <Card key={index} className="feature-card group cursor-pointer h-full" 
                style={{animationDelay: `${index * 100}ms`}}>
            <CardHeader className="pb-2">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {typeof solution.icon === 'string' ? solution.icon : solution.icon}
              </div>
              <CardTitle>{solution.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{solution.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 bg-gov-lightBlue/30 p-6 rounded-xl max-w-4xl mx-auto">
        <div className="flex items-start gap-4">
          <div className="bg-gov-blue/10 p-3 rounded-full">
            <AlertTriangle className="h-6 w-6 text-gov-blue" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gov-blue mb-2">Retorno sobre Investimento</h3>
            <p className="text-gray-700">
              Nossas soluções são desenvolvidas com foco na redução de custos operacionais, 
              aumento da eficiência e melhoria na prestação de serviços. 
              Prefeituras que implementaram nossos sistemas registraram economia média de 30% 
              em processos administrativos e aumento significativo na satisfação do cidadão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
