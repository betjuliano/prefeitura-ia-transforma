
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, ArrowRight, Network, FileText, Search, FileCheck, ShoppingCart, BarChart } from 'lucide-react';

const solutions = [
  {
    title: "Atendimento Virtual 24 horas",
    description: "Canal online que presta informações e orientações a qualquer momento, reduzindo filas e ligações.",
    icon: <Clock className="h-8 w-8 text-gov-blue" />
  },
  {
    title: "Triagem e Encaminhamento Automático",
    description: "Direciona solicitações (reclamações, pedidos de informação, serviços) diretamente à secretaria responsável, sem intervenção manual.",
    icon: <ArrowRight className="h-8 w-8 text-gov-blue" />
  },
  {
    title: "Integração de Sistemas Municipais",
    description: "Conecta arrecadação, protocolo, RH e outros sistemas em um só fluxo, eliminando retrabalho e inconsistências de dados.",
    icon: <Network className="h-8 w-8 text-gov-blue" />
  },
  {
    title: "Fluxo Automatizado de Documentos",
    description: "Encadeia etapas como emissão de alvará, licença e certidões, cortando em até 70% o tempo de liberação de processos.",
    icon: <FileText className="h-8 w-8 text-gov-blue" />
  },
  {
    title: "Portal de Legislação e Normas",
    description: "Busca instantânea em leis municipais, planos diretores e códigos tributários, com interface simples para servidores e cidadãos.",
    icon: <Search className="h-8 w-8 text-gov-blue" />
  },
  {
    title: "Leitura e Resumo Automático de Documentos",
    description: "Extrai dados-chave de petições, relatórios e licitações, gerando resumos prontos para análise em segundos.",
    icon: <FileCheck className="h-8 w-8 text-gov-blue" />
  },
  {
    title: "Compras e Licitações Simplificadas",
    description: "Guia passo a passo a elaboração de editais, análise de propostas e homologação, garantindo compliance e economia de até 30%.",
    icon: <ShoppingCart className="h-8 w-8 text-gov-blue" />
  },
  {
    title: "Controle de Bens e Planejamento Orçamentário",
    description: "Inventaria veículos e equipamentos, recomenda manutenções e projeta receitas vs. despesas com dashboards interativos.",
    icon: <BarChart className="h-8 w-8 text-gov-blue" />
  }
];

const SolutionsSection: React.FC = () => {
  return (
    <section className="section bg-gradient-to-b from-gov-lightBlue/30 to-white py-16">
      <h2 className="section-title">Soluções para Prefeituras</h2>
      
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        Oito pilares práticos para agilizar sua gestão e atender melhor o cidadão
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {solutions.map((solution, index) => (
          <Card key={index} className="feature-card group cursor-pointer h-full" 
                style={{animationDelay: `${index * 100}ms`}}>
            <CardHeader className="pb-2">
              <div className="mb-3 group-hover:scale-110 transition-transform">
                {solution.icon}
              </div>
              <CardTitle className="text-lg">{solution.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{solution.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 bg-gov-lightBlue/30 p-8 rounded-xl max-w-4xl mx-auto text-center">
        <div className="mb-4">
          <span className="text-2xl">👉</span>
        </div>
        <h3 className="text-2xl font-bold text-gov-blue mb-4">Pronto para transformar sua prefeitura?</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Agende agora uma demonstração gratuita e descubra como acelerar processos, 
          reduzir custos e elevar a satisfação da sua comunidade.
        </p>
      </div>
    </section>
  );
};

export default SolutionsSection;
