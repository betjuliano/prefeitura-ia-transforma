
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { ArrowRight } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: 'Por favor, insira um e-mail válido.' }),
});

const AboutSection: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Inscrição realizada!",
      description: "Obrigado pelo interesse! Enviaremos mais informações para seu e-mail.",
    });
    form.reset();
  };

  return (
    <section id="about" className="section py-24 bg-gradient-to-b from-white to-gov-lightBlue/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gov-blue">
              Transformando a <span className="text-transparent bg-clip-text bg-gradient-to-r from-gov-blue to-blue-500">Gestão Pública</span>
            </h2>
            
            <p className="text-lg md:text-xl mb-6 text-gray-700">
              Somos especializados em soluções de Inteligência Artificial para o setor público, 
              desenvolvendo tecnologias inovadoras que modernizam a administração municipal 
              e melhoram o atendimento ao cidadão.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-gov-blue/10 p-2 rounded-full mr-4 mt-1">
                  <ArrowRight className="h-5 w-5 text-gov-blue" />
                </div>
                <p className="text-gray-700">
                  <span className="font-bold">Tecnologia de ponta</span> com métodos comprovados de IA aplicada à gestão pública
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gov-blue/10 p-2 rounded-full mr-4 mt-1">
                  <ArrowRight className="h-5 w-5 text-gov-blue" />
                </div>
                <p className="text-gray-700">
                  <span className="font-bold">Suporte dedicado</span> para implementação e capacitação das equipes municipais
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gov-blue/10 p-2 rounded-full mr-4 mt-1">
                  <ArrowRight className="h-5 w-5 text-gov-blue" />
                </div>
                <p className="text-gray-700">
                  <span className="font-bold">Resultados mensuráveis</span> com redução de custos e melhoria nos serviços prestados
                </p>
              </div>
            </div>
          </div>
          
          <Card className="shadow-lg border-none overflow-hidden bg-white animate-zoom-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gov-blue mb-4">Receba nossa apresentação exclusiva</h3>
              <p className="text-gray-600 mb-6">Descubra como a IA pode transformar sua prefeitura. Inscreva-se para receber nosso material informativo.</p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Seu e-mail profissional" 
                            className="h-12" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gov-blue hover:bg-blue-800 text-white"
                  >
                    Quero saber mais
                  </Button>
                </form>
              </Form>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                Respeitamos sua privacidade. Seus dados estão seguros conosco.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
