
import React, { useEffect, useRef } from 'react';
import { Building, Zap, Users, Globe, Cpu, Shield } from 'lucide-react';

const FloatingIcon: React.FC<{ 
  icon: React.ReactNode; 
  delay: number; 
  position: string; 
}> = ({ icon, delay, position }) => {
  return (
    <div 
      className={`absolute ${position} animate-bounce`} 
      style={{ animationDelay: `${delay}s` }}
    >
      {icon}
    </div>
  );
};

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const createParticles = () => {
      particles.length = 0;
      const particleCount = 30;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.6 + 0.2
        });
      }
    };

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
      });
      
      // Conectar partículas próximas
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 80) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 80)})`;
            ctx.stroke();
          }
        });
      });
      
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
    />
  );
};

const Hero3D: React.FC = () => {
  return (
    <div className="relative h-96 w-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl overflow-hidden border border-white/20">
      {/* Fundo animado com partículas */}
      <AnimatedBackground />
      
      {/* Elementos flutuantes */}
      <FloatingIcon
        icon={<Building className="h-8 w-8 text-blue-300 opacity-80" />}
        delay={0}
        position="top-6 left-8"
      />
      <FloatingIcon
        icon={<Zap className="h-6 w-6 text-yellow-300 opacity-80" />}
        delay={0.5}
        position="top-12 right-12"
      />
      <FloatingIcon
        icon={<Users className="h-7 w-7 text-green-300 opacity-80" />}
        delay={1}
        position="bottom-20 left-12"
      />
      <FloatingIcon
        icon={<Globe className="h-6 w-6 text-cyan-300 opacity-80" />}
        delay={1.5}
        position="bottom-16 right-8"
      />
      <FloatingIcon
        icon={<Cpu className="h-5 w-5 text-purple-300 opacity-80" />}
        delay={2}
        position="top-24 left-1/3"
      />
      <FloatingIcon
        icon={<Shield className="h-6 w-6 text-red-300 opacity-80" />}
        delay={2.5}
        position="bottom-32 right-1/4"
      />
      
      {/* Círculos animados */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/20 rounded-full animate-ping animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-400/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      
      {/* Texto central */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-2xl font-bold mb-2 animate-fade-in">
            IA para Gestão Pública
          </div>
          <div className="text-sm opacity-80 animate-fade-in animation-delay-500">
            Inovação • Eficiência • Transparência
          </div>
        </div>
      </div>
      
      {/* Brilho de fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
    </div>
  );
};

export default Hero3D;
