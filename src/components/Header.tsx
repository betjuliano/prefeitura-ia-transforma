
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Calendar } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gov-blue text-white py-20 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')] bg-cover opacity-10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Transforme sua Prefeitura com Inteligência Artificial
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90">
          Inovação, Eficiência e Atendimento Ágil ao Cidadão
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-whatsapp text-base" size="lg" onClick={() => window.open('https://wa.me/5555999631365', '_blank')}>
            <MessageSquare className="mr-2 h-5 w-5" />
            Fale pelo WhatsApp
          </Button>
          <Button className="btn-calendar text-base" size="lg" onClick={() => window.open('https://calendar.google.com/calendar/u/0/r/eventedit', '_blank')}>
            <Calendar className="mr-2 h-5 w-5" />
            Agendar Apresentação
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
