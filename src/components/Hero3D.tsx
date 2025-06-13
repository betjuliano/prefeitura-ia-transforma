
import React, { useEffect, useRef, useState } from 'react';
import { Building, Zap, Users, Globe, Cpu, Shield, MessageSquare, Bot, User } from 'lucide-react';

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
      const particleCount = 20;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.4 + 0.1
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
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
    />
  );
};

interface ChatMessage {
  id: number;
  type: 'user' | 'ai';
  message: string;
  timestamp: string;
}

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      type: 'ai',
      message: 'Olá! Como posso ajudar com a gestão da sua prefeitura hoje?',
      timestamp: '10:30'
    }
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const chatMessages = [
    {
      type: 'user' as const,
      message: 'Preciso gerar um relatório de transparência',
      timestamp: '10:31'
    },
    {
      type: 'ai' as const,
      message: 'Perfeito! Vou gerar o relatório de transparência com dados atualizados. Incluindo receitas, despesas e contratos públicos.',
      timestamp: '10:31'
    },
    {
      type: 'user' as const,
      message: 'Como está o atendimento ao cidadão hoje?',
      timestamp: '10:32'
    },
    {
      type: 'ai' as const,
      message: '📊 Hoje foram atendidos 247 cidadãos, tempo médio de 3min. Satisfação: 94%. Posso gerar relatório detalhado?',
      timestamp: '10:32'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentMessageIndex < chatMessages.length) {
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          ...chatMessages[currentMessageIndex]
        }]);
        setCurrentMessageIndex(prev => prev + 1);
      } else {
        // Reset conversation
        setMessages([{
          id: 1,
          type: 'ai',
          message: 'Olá! Como posso ajudar com a gestão da sua prefeitura hoje?',
          timestamp: '10:30'
        }]);
        setCurrentMessageIndex(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentMessageIndex]);

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 h-80 flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
        <div className="flex items-center justify-center w-8 h-8 bg-gov-blue rounded-full">
          <Bot className="h-4 w-4 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gov-blue">Assistente IA</h3>
          <p className="text-xs text-gray-500">Gestão Pública Inteligente</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-green-600">Online</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto py-2 space-y-3">
        {messages.map((msg, index) => (
          <div 
            key={msg.id} 
            className={`flex gap-2 animate-fade-in ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {msg.type === 'ai' && (
              <div className="flex items-center justify-center w-6 h-6 bg-gov-blue rounded-full flex-shrink-0 mt-1">
                <Bot className="h-3 w-3 text-white" />
              </div>
            )}
            
            <div className={`max-w-[80%] rounded-lg px-3 py-2 ${
              msg.type === 'user' 
                ? 'bg-gov-blue text-white rounded-br-sm' 
                : 'bg-gray-100 text-gray-800 rounded-bl-sm'
            }`}>
              <p className="text-sm">{msg.message}</p>
              <p className={`text-xs mt-1 ${
                msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {msg.timestamp}
              </p>
            </div>

            {msg.type === 'user' && (
              <div className="flex items-center justify-center w-6 h-6 bg-gray-400 rounded-full flex-shrink-0 mt-1">
                <User className="h-3 w-3 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="pt-3 border-t border-gray-200">
        <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
          <MessageSquare className="h-4 w-4 text-gray-400" />
          <div className="flex-1 text-sm text-gray-400">Digite sua mensagem...</div>
          <div className="w-2 h-4 bg-gov-blue rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

const Hero3D: React.FC = () => {
  return (
    <div className="relative h-96 w-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl overflow-hidden border border-white/20">
      {/* Fundo animado com partículas */}
      <AnimatedBackground />
      
      {/* Elementos flutuantes menores para não interferir no chat */}
      <FloatingIcon
        icon={<Building className="h-6 w-6 text-blue-300 opacity-60" />}
        delay={0}
        position="top-4 left-4"
      />
      <FloatingIcon
        icon={<Zap className="h-5 w-5 text-yellow-300 opacity-60" />}
        delay={0.5}
        position="top-6 right-4"
      />
      <FloatingIcon
        icon={<Globe className="h-5 w-5 text-cyan-300 opacity-60" />}
        delay={1.5}
        position="bottom-4 right-4"
      />
      <FloatingIcon
        icon={<Shield className="h-5 w-5 text-red-300 opacity-60" />}
        delay={2.5}
        position="bottom-6 left-4"
      />
      
      {/* Círculos animados menores */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-400/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-purple-400/10 rounded-full animate-ping animation-delay-1000"></div>
      
      {/* Chat de IA centralizado */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <AIChat />
      </div>
      
      {/* Brilho de fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent animate-pulse"></div>
    </div>
  );
};

export default Hero3D;
