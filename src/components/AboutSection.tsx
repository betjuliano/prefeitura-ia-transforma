
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  return (
    <section className="section">
      <Card className="border-none shadow-lg p-6 bg-white/80 backdrop-blur-sm animate-zoom-in">
        <CardContent className="pt-6">
          <h2 className="section-title">Sobre o Projeto</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-center">
              <span className="font-bold">Juliano Nunes Alves</span> — Professor da UFSM, com mais de 10 anos de experiência 
              em Administração Pública e Tecnologias Emergentes. Desenvolve e coordena projetos de IA 
              com apoio institucional e avaliação administrativa da Universidade Federal de Santa Maria.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AboutSection;
