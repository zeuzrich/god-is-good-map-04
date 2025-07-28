import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  Heart, 
  BookOpen, 
  Users, 
  GraduationCap, 
  Star, 
  Check, 
  Gift,
  Shield,
  Download,
  Play,
  FileText,
  Palette,
  Clock
} from "lucide-react";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

const GodisgoodSales = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Timer ended, reset to 24 hours
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-accent/10 backdrop-blur-sm border-b border-accent/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-destructive" />
              <span className="text-muted-foreground">Oferta termina em:</span>
              <span className="font-bold text-destructive">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Banner Promocional */}
      <div className="w-full">
        <img 
          src="/lovable-uploads/d4305883-1a66-474c-8433-ab7c61cf4c33.png"
          alt="Últimos dias da promoção de Férias"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Hero Section */}
      <section className="gradient-peaceful py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm font-semibold">
                ✨ Tempo de qualidade com Deus e família
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-standard font-bold leading-tight">
                God Is Good: Conecte sua criança à 
                <span className="text-primary"> Palavra</span> com amor, cor e propósito
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                O mapa bíblico que ensina os valores cristãos de forma divertida e visual. 
                60 desenhos para colorir do Antigo ao Novo Testamento.
              </p>
            </div>
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="https://bibliatecamapeada.com/wp-content/uploads/2025/05/MOCKUPS-48-768x543.png"
                  alt="God Is Good - Mapa Bíblico para Colorir"
                  className="w-full rounded-2xl shadow-divine border-2 border-primary/20"
                />
              </div>
              <div className="text-center space-y-4">
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-primary">Por apenas R$10</p>
                  <p className="text-sm text-muted-foreground">Milhares de famílias já transformaram o ensino bíblico em casa!</p>
                </div>
                <Button size="lg" variant="cta" className="text-base px-12 py-4" onClick={scrollToPricing}>
                  Eu quero God Is Good
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Imagem dos materiais */}
            <div className="order-2 lg:order-1">
              <img 
                src="https://bibliatecamapeada.com/wp-content/uploads/2025/05/MOCKUPS-45.png"
                alt="God Is Good - Materiais para colorir"
                className="w-full rounded-2xl shadow-divine"
              />
            </div>
            
            {/* Conteúdo */}
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl lg:text-4xl font-standard font-bold text-primary mb-8">
                O God Is Good é pra você que:
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-base leading-relaxed text-foreground">
                      Em um mundo com tantas distrações, entende a <strong>importância de transmitir valores e princípios cristãos às crianças desde cedo</strong>, de forma didática, leve e eficiente;
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-base leading-relaxed text-foreground">
                      Quer <strong>dar vida à Bíblia, de Gênesis a Apocalipse</strong>. Cada página é um convite para explorar a imaginação e meditar sobre os principais acontecimentos através dos 60 versículos relacionados ao tema;
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-base leading-relaxed text-foreground">
                      É <strong>pai/mãe; Professor; Pastor; Líder de Ministério</strong> e deseja <strong>enriquecer e incentivar o conhecimento dos pequenos sobre a Palavra</strong> de forma lúdica, didática e ilustrada.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-base leading-relaxed text-foreground">
                      <strong>Não permitimos a comercialização</strong> dos nossos materiais, que devem ser utilizados apenas para fins de uso/estudo pessoal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Seção de Feedbacks */}
          <div className="mt-16 text-center">
            <img 
              src="https://bibliatecamapeada.com/wp-content/uploads/2025/02/black-friday-11-1-1024x133.png"
              alt="Mais de 1000 feedbacks positivos"
              className="mx-auto max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Carrossel de depoimentos com fotos */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-standard font-bold mb-4">
              Veja as famílias que já transformaram o ensino bíblico
            </h2>
            <p className="text-lg text-muted-foreground">
              Crianças aprendendo e se divertindo com a Palavra de Deus
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Carousel 
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 3000,
                })
              ]}
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="shadow-gentle overflow-hidden">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/bd42116f-680f-4729-a721-1405cdf93ba5.png"
                          alt="Crianças usando o material God Is Good"
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground italic">
                            "As crianças adoram colorir e aprender sobre a Bíblia!"
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="shadow-gentle overflow-hidden">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/89d29b90-22df-4f01-9764-f4772b08b4ec.png"
                          alt="Criança colorindo com tablet"
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground italic">
                            "Segundo Aurora e a casinha que Cristo vai para ressuscitar 😍❤️🙏"
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="shadow-gentle overflow-hidden">
                      <CardContent className="p-0">
                        <img 
                          src="/lovable-uploads/330631a5-7c6e-457f-a65e-0990236a5df2.png"
                          alt="Criança estudando com o material"
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground italic">
                            "Gratidão pela confiança e pelo carinho, amamos receber os registros de vocês!"
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Como Funciona - Inspirado no sucesso */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-standard font-bold mb-6">
              Inspirado no sucesso dos 
              <span className="text-accent"> desenhos terapêuticos</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Assim como milhares encontram paz colorindo, criamos uma experiência única 
              que conecta sua família à Palavra de Deus de forma visual e acolhedora.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold">Conexão Emocional</h3>
                <p className="text-sm text-muted-foreground">Desperta o interesse das crianças pela Bíblia de forma natural</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold">Aprendizado Visual</h3>
                <p className="text-sm text-muted-foreground">60 desenhos que contam toda a história bíblica</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-secondary/30 rounded-full mx-auto flex items-center justify-center">
                  <Users className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-semibold">Tempo em Família</h3>
                <p className="text-sm text-muted-foreground">Momentos especiais de qualidade com Deus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bônus Devocional */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="text-sm font-semibold">
                  🎁 Bônus Especial
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-standard font-bold">
                  E como este é um material para a família, além do God Is Good, nós vamos te presentear com o nosso 
                  <span className="text-accent"> Devocional Hábitos Vencedores</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Um devocional completo para fortalecer os vínculos familiares e criar hábitos cristãos saudáveis em casa.
                </p>
              </div>
              <div>
                <img 
                  src="https://bibliatecamapeada.com/wp-content/uploads/2025/05/MOCKUPS-23-1536x1086-1-1024x724.png"
                  alt="Devocional Hábitos Vencedores - Bônus"
                  className="w-full rounded-2xl shadow-divine"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você recebe - Seção de Preços */}
      <section id="pricing-section" className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-standard font-bold mb-4">
              Escolha a melhor opção para você
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Versão Simples */}
            <Card className="shadow-gentle border-2 border-border bg-price-simple">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">Versão Simples</h3>
                  <div className="text-3xl font-bold text-primary">R$10,00</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Mapa Bíblico Colorido</p>
                      <p className="text-sm text-muted-foreground">60 desenhos para colorir do Antigo ao Novo Testamento</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Explicação visual por livros</p>
                      <p className="text-sm text-muted-foreground">Cada desenho acompanha versículo relacionado</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Acesso 100% digital</p>
                      <p className="text-sm text-muted-foreground">Download imediato em PDF</p>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="secondary" 
                  className="w-full mt-6" 
                  size="lg" 
                  onClick={() => window.open('https://pay.kirvano.com/dfecf8c3-4672-482d-b61b-bbfd317d3332', '_blank')}
                >
                  Eu quero God Is Good
                </Button>
              </CardContent>
            </Card>

            {/* Versão Avançada */}
            <Card className="shadow-divine border-2 border-accent relative overflow-hidden bg-price-advanced">
              <div className="absolute top-4 right-4">
                <Badge variant="default" className="bg-accent text-accent-foreground font-bold">
                  Melhor escolha ⭐
                </Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">Versão Avançada + Bônus</h3>
                  <div className="text-3xl font-bold text-accent">R$30,00</div>
                  <p className="text-sm text-muted-foreground">ou 6x de R$5,00</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <p className="font-medium text-accent mb-2">✅ Tudo da versão Simples +</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Play className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Vídeo-aula explicativa</p>
                      <p className="text-sm text-muted-foreground">Como usar o material de forma eficiente</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Guia para pais e professores</p>
                      <p className="text-sm text-muted-foreground">Instruções detalhadas e dicas pedagógicas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Palette className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Atividades práticas extras</p>
                      <p className="text-sm text-muted-foreground">Jogos e brincadeiras complementares</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gift className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Imprimíveis bônus</p>
                      <p className="text-sm text-muted-foreground">Materiais extras para diversificar as atividades</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Checklist devocional infantil</p>
                      <p className="text-sm text-muted-foreground">Para criar uma rotina de estudos bíblicos</p>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="cta" 
                  className="w-full mt-6" 
                  size="lg" 
                  onClick={() => window.open('https://pay.kirvano.com/64b7146d-bab3-406d-b1a3-0688cb07e716', '_blank')}
                >
                  Eu quero God Is Good
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-standard font-bold mb-4">
              + de 1.000 famílias transformadas
            </h2>
            <p className="text-lg text-muted-foreground">
              Veja o que os pais estão dizendo sobre o God Is Good
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-gentle bg-card/90">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm mb-4 italic">
                  "Minha filha agora pede para ler a Bíblia todo dia! O material é lindo e muito didático."
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  — Ana Paula, mãe de Sofia (6 anos)
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-gentle bg-card/90">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm mb-4 italic">
                  "Usei na igreja com os pequenos e eles amaram o mapa! Super recomendo para professores de EBD."
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  — Professora Carla, EBD Infantil
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-gentle bg-card/90">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm mb-4 italic">
                  "Finalmente encontrei um material que prende a atenção das crianças e ensina a Palavra!"
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  — Ricardo, pai de Lucas (8 anos)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center">
              <Shield className="w-10 h-10 text-accent-foreground" />
            </div>
            <h2 className="text-3xl font-standard font-bold mb-4">
              Garantia de 7 dias
            </h2>
            <p className="text-lg mb-6">
              100% digital, acesso imediato. Se não amar o conteúdo, devolvemos seu dinheiro.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>100% digital</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Garantia total</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="cta" className="text-base px-12 py-4" onClick={scrollToPricing}>
              Eu quero God Is Good
            </Button>
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section className="py-16 gradient-blessing">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-standard font-bold mb-6">
              Eduque seu filho com valores eternos.
              <br />
              <span className="text-accent">Invista em algo que realmente importa.</span>
            </h2>
            <p className="text-lg mb-8 text-foreground/80">
              Transforme o tempo em família em momentos especiais de conexão com Deus
            </p>
            <div className="flex justify-center">
              <Button size="lg" variant="cta" className="text-base px-12 py-4 min-w-[250px]" onClick={scrollToPricing}>
                Eu quero God Is Good
              </Button>
            </div>
            <p className="text-sm mt-4 text-foreground/60">
              ⏰ Condição especial de lançamento - Últimas vagas
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GodisgoodSales;