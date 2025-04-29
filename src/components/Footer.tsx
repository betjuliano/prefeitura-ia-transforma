
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gov-blue text-white py-10 px-4 text-center">
      <div className="container mx-auto">
        <div className="mb-6">
          <img 
            src="https://www.ufsm.br/app/uploads/sites/416/2018/09/marca-ufsm.png" 
            alt="UFSM Logo" 
            className="h-12 mx-auto mb-4 invert"
          />
        </div>
        
        <p className="mb-4">© {currentYear} Juliano Nunes Alves - Universidade Federal de Santa Maria</p>
        
        <div className="text-sm text-white/70">
          <p>Centro de Ciências Sociais e Humanas</p>
          <p>Departamento de Ciências Administrativas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
