
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Calendar } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="section bg-gov-blue text-white text-center py-16 px-4 rounded-lg mx-4 md:mx-8 mt-10 mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Vamos inovar sua gestão pública?</h2>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-gov-whatsapp hover:bg-green-600 text-white text-base" size="lg" 
                onClick={() => window.open('https://wa.me/5555999631365', '_blank')}>
          <MessageSquare className="mr-2 h-5 w-5" />
          Conversar Agora
        </Button>
        <Button className="bg-gov-calendar hover:bg-blue-600 text-white text-base" size="lg"
                onClick={() => window.open('https://calendar.google.com/calendar/u/0/r/eventedit', '_blank')}>
          <Calendar className="mr-2 h-5 w-5" />
          Agendar Apresentação
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
