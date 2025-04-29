
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gov-blue hover:bg-blue-800 text-white z-50 shadow-lg"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
