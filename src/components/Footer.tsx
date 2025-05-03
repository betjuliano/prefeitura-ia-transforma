
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-gov-blue to-blue-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">IA Projetos</h2>
            <p className="text-lg opacity-90 max-w-md mb-4">
              Organização formada para atender e desenvolver projetos personalizados 
              e ajustados a todas as demandas e realidades do setor público.
            </p>
            <p className="text-base opacity-80 max-w-md">
              Transformando a gestão pública com soluções de Inteligência Artificial 
              para um atendimento mais ágil e eficiente ao cidadão.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20 rounded-full">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20 rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20 rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
          
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="mb-2 flex items-center justify-end gap-2">
              <Mail className="h-4 w-4" />
              contato@iaprojetos.com.br
            </p>
            <p className="mb-2 flex items-center justify-end gap-2">
              <Phone className="h-4 w-4" />
              +55 (55) 9 9963-1365
            </p>
            <p className="mb-6 flex items-center justify-end gap-2">
              <MapPin className="h-4 w-4" />
              Santa Maria, RS - Brasil
            </p>
            
            <p className="text-sm opacity-75">© {currentYear} IA Projetos - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
