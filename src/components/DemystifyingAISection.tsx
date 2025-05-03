
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle } from 'lucide-react';

const DemystifyingAISection: React.FC = () => {
  const myths = [
    {
      myth: "IA é muito cara para o setor público",
      reality: "Implementações modulares permitem adequação a diversos orçamentos, com retorno rápido do investimento através da redução de custos operacionais."
    },
    {
      myth: "Substituirá servidores públicos",
      reality: "A IA complementa o trabalho humano, liberando servidores para atividades estratégicas e de maior valor agregado ao invés de tarefas repetitivas."
    },
    {
      myth: "É complexa demais para implementar",
      reality: "Soluções são desenvolvidas com foco na simplicidade de uso, com suporte constante e treinamento para equipes locais."
    },
    {
      myth: "Não é segura para dados públicos",
      reality: "Sistemas implementados seguem a LGPD e protocolos rígidos de segurança, com armazenamento e processamento em ambientes controlados."
    }
  ];

  return (
    <section id="demystifying-ai" className="section py-24 bg-gradient-to-b from-gov-lightBlue/30 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Desmistificando a <span className="text-transparent bg-clip-text bg-gradient-to-r from-gov-blue to-blue-500">IA no Setor Público</span>
        </h2>
        
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Entenda a realidade sobre a Inteligência Artificial na administração pública e como ela pode 
          revolucionar a gestão do seu município.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {myths.map((item, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-red-50 p-5 border-b border-red-100 flex items-center gap-3">
                  <XCircle className="text-red-500 h-6 w-6 flex-shrink-0" />
                  <h3 className="font-bold text-gray-800 text-lg">{item.myth}</h3>
                </div>
                <div className="bg-green-50 p-5 flex items-center gap-3">
                  <CheckCircle className="text-green-500 h-6 w-6 flex-shrink-0" />
                  <p className="text-gray-700">{item.reality}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gov-blue/10 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gov-blue mb-4">
            Quer entender mais sobre IA no setor público?
          </h3>
          <p className="text-lg mb-6">
            Agende uma apresentação personalizada e descubra como a Inteligência Artificial 
            pode transformar a administração do seu município.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#cta" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gov-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Solicitar Apresentação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemystifyingAISection;
