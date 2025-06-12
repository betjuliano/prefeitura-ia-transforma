
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(3, { message: 'Nome é obrigatório' }),
  phone: z.string().min(8, { message: 'Telefone inválido' }),
});

const CTASection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Redirecionar para WhatsApp com mensagem personalizada
    const message = encodeURIComponent(`Olá! Gostaria de solicitar uma apresentação das soluções de IA para prefeituras.\n\nNome: ${values.name}\nTelefone: ${values.phone}`);
    window.open(`https://wa.me/55999631365?text=${message}`, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para o WhatsApp para continuar a conversa.",
    });
    setSubmitted(true);
  };

  return (
    <section className="section py-20 px-4">
      <Card className="bg-gradient-to-r from-gov-blue to-blue-900 text-white shadow-xl overflow-hidden rounded-2xl max-w-5xl mx-auto border-none">
        <CardContent className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Vamos inovar sua gestão pública?
              </h2>
              
              <p className="text-lg mb-8 text-white/90">
                Marque uma apresentação personalizada e descubra como a IA pode transformar
                sua prefeitura, reduzir custos e melhorar o atendimento ao cidadão.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                  <span>Demonstração personalizada para sua prefeitura</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                  <span>Análise de viabilidade e economia projetada</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-3 h-5 w-5 text-green-400" />
                  <span>Proposta adaptada ao seu orçamento</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              {!submitted ? (
                <>
                  <h3 className="text-xl font-bold mb-4 text-center">Solicite uma apresentação</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                placeholder="Seu nome" 
                                className="h-12 bg-white/20 border-white/20 placeholder:text-white/60 text-white" 
                                {...field} 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                placeholder="Seu telefone" 
                                className="h-12 bg-white/20 border-white/20 placeholder:text-white/60 text-white" 
                                {...field} 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full h-12 bg-white text-gov-blue hover:bg-white/90"
                      >
                        Solicitar apresentação
                      </Button>
                    </form>
                  </Form>
                  
                  <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-gov-whatsapp hover:bg-green-600 text-white" 
                            onClick={() => window.open('https://wa.me/55999631365', '_blank')}>
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Conversar Agora
                    </Button>
                    <Button className="bg-gov-calendar hover:bg-blue-600 text-white"
                            onClick={() => window.open('https://calendar.google.com/calendar/u/0/r/eventedit', '_blank')}>
                      <Calendar className="mr-2 h-5 w-5" />
                      Agendar
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="mb-6 mx-auto bg-green-500/20 p-4 rounded-full inline-flex">
                    <CheckCircle className="h-16 w-16 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Solicitação enviada!</h3>
                  <p className="mb-6">Você será redirecionado para o WhatsApp para continuar a conversa.</p>
                  <Button className="bg-white text-gov-blue hover:bg-white/90"
                          onClick={() => setSubmitted(false)}>
                    Enviar outro contato
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default CTASection;
