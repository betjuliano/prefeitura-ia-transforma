
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Calendar, Building, Zap, Users } from 'lucide-react';
import Hero3D from './Hero3D';
import ParticleBackground from './ParticleBackground';

const Header: React.FC = () => {
  return (
    <header className="relative min-h-screen bg-gradient-to-br from-gov-blue via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background com partículas animadas */}
      <ParticleBackground />
      
      {/* Efeitos de gradiente sobrepostos */}
      <div className="absolute inset-0 bg-gradient-to-r from-gov-blue/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 left-10 animate-bounce animation-delay-1000">
        <Building className="h-8 w-8 text-blue-300 opacity-60" />
      </div>
      <div className="absolute top-32 right-20 animate-pulse animation-delay-2000">
        <Zap className="h-6 w-6 text-yellow-300 opacity-70" />
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce animation-delay-3000">
        <Users className="h-7 w-7 text-green-300 opacity-60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Conteúdo textual */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                🚀 Inovação em Gestão Pública
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transforme sua
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  Prefeitura
                </span>
                com <span className="text-yellow-300">IA</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl leading-relaxed">
                Revolucione a gestão municipal com inteligência artificial avançada. 
                Mais eficiência, menos burocracia, cidadãos mais satisfeitos.
              </p>
            </div>
            
            {/* Stats animados */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center animate-zoom-in animation-delay-500">
                <div className="text-3xl font-bold text-yellow-300">70%</div>
                <div className="text-sm text-blue-200">Redução no Tempo</div>
              </div>
              <div className="text-center animate-zoom-in animation-delay-1000">
                <div className="text-3xl font-bold text-green-300">24/7</div>
                <div className="text-sm text-blue-200">Atendimento</div>
              </div>
              <div className="text-center animate-zoom-in animation-delay-1500">
                <div className="text-3xl font-bold text-cyan-300">30%</div>
                <div className="text-sm text-blue-200">Economia</div>
              </div>
            </div>
            
            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-whatsapp text-lg px-8 py-4 hover:scale-105 transition-transform duration-300" 
                size="lg" 
                onClick={() => window.open('https://wa.me/55999631365', '_blank')}
              >
                <MessageSquare className="mr-3 h-6 w-6" />
                Fale Conosco Agora
              </Button>
              <Button 
                className="btn-calendar text-lg px-8 py-4 hover:scale-105 transition-transform duration-300" 
                size="lg" 
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/r/eventedit', '_blank')}
              >
                <Calendar className="mr-3 h-6 w-6" />
                Agendar Demo
              </Button>
            </div>
          </div>
          
          {/* Componente 3D */}
          <div className="relative animate-zoom-in animation-delay-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <Hero3D />
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
