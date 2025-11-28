import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [forumTopics, setForumTopics] = useState<{ [key: string]: { author: string; text: string }[] }>({
    player: [],
    admin: [],
    suggestions: []
  });
  const [newTopic, setNewTopic] = useState({ author: '', text: '' });

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const addForumTopic = (category: string) => {
    if (newTopic.author && newTopic.text) {
      setForumTopics({
        ...forumTopics,
        [category]: [...forumTopics[category], { ...newTopic }]
      });
      setNewTopic({ author: '', text: '' });
    }
  };

  const passLevels = [
    { level: 1, title: 'Новичок', reward: '5000$', icon: 'Star' },
    { level: 2, title: 'Водитель', reward: '10000$', icon: 'Car' },
    { level: 3, title: 'Бизнесмен', reward: '25000$', icon: 'Briefcase' },
    { level: 4, title: 'Авторитет', reward: '50000$', icon: 'Crown' },
    { level: 5, title: 'Босс', reward: '100000$', icon: 'Gem' },
    { level: 6, title: 'Магнат', reward: '200000$', icon: 'TrendingUp' },
    { level: 7, title: 'Легенда', reward: '500000$', icon: 'Trophy' },
    { level: 8, title: 'Легенда+', reward: '1000000$', icon: 'Award' },
    { level: 9, title: 'Элита', reward: '2000000$', icon: 'Zap' },
    { level: 10, title: 'Император', reward: '5000000$', icon: 'Shield' }
  ];

  const gameImages = [
    { url: 'https://cdn.poehali.dev/projects/1b2ebc96-3897-4a64-98b6-48f2d426a7a7/files/6c10b5f6-bc9b-4466-aa05-256bf650b485.jpg', title: 'Закат в городе' },
    { url: 'https://cdn.poehali.dev/projects/1b2ebc96-3897-4a64-98b6-48f2d426a7a7/files/8bb12301-039a-4b16-b1cf-d237b48b2fcd.jpg', title: 'Встреча игроков' },
    { url: 'https://cdn.poehali.dev/projects/1b2ebc96-3897-4a64-98b6-48f2d426a7a7/files/a8cf4845-ff58-4cfc-b80f-859cccc46d94.jpg', title: 'Полицейская погоня' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1419] via-[#16213e] to-[#0f1419]">
      <nav className="fixed top-0 w-full bg-[#0f1419]/95 backdrop-blur-sm border-b-2 border-primary/50 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Gamepad2" className="text-primary" size={32} />
              <h1 className="text-2xl md:text-3xl font-bold text-primary">Arizona Legacy</h1>
              <Badge className="bg-secondary text-black font-bold">v0.8</Badge>
            </div>
            <div className="hidden md:flex gap-4">
              <Button variant="ghost" onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary">
                Главная
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('pass')} className="text-foreground hover:text-primary">
                Arizona Pass
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary">
                О сервере
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary">
                Моменты
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection('forum')} className="text-foreground hover:text-primary">
                Форум
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 drop-shadow-[0_0_20px_rgba(255,107,53,0.5)]">
              Arizona Legacy
            </h1>
            <p className="text-3xl md:text-4xl text-secondary mb-8">Версия 0.8</p>
            <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
              Добро пожаловать на легендарный сервер SA:MP! Погрузитесь в мир ролевых игр и незабываемых приключений
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-black font-bold text-xl px-12 py-6 rounded-lg shadow-[0_0_30px_rgba(255,107,53,0.6)] hover:shadow-[0_0_40px_rgba(255,107,53,0.8)] transition-all"
              onClick={() => window.open('https://t.me/Arizonalegacyofical', '_blank')}
            >
              <Icon name="Play" className="mr-2" size={24} />
              ИГРАТЬ СЕЙЧАС
            </Button>
          </div>
        </div>
      </section>

      <section id="pass" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">Arizona Pass</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {passLevels.map((level) => (
              <Card 
                key={level.level} 
                className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all hover:scale-105 p-6"
              >
                <div className="text-center">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={level.icon as any} className="text-primary" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-secondary mb-2">{level.level}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{level.title}</h3>
                  <Badge className="bg-secondary/20 text-secondary border border-secondary">
                    {level.reward}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-[#0f1419]/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">Описание сервера</h2>
          <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/50 p-8 md:p-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-foreground">
                Здравствуйте игроки Arizona Legacy! Данная версия 0.8 так как добавился свой лаунчер нашей Аризоны. 
                Прошу вас не обзывать игроков, а также соблюдать Role Play действия. 
              </p>
              <p className="text-lg leading-relaxed text-foreground mt-4">
                Также поздравляю вас с наступлением зимы — играйте с нами в Arizona Legacy!
              </p>
              <div className="flex items-center justify-center gap-4 mt-8">
                <Icon name="Users" className="text-primary" size={32} />
                <Icon name="Shield" className="text-secondary" size={32} />
                <Icon name="Zap" className="text-primary" size={32} />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">Моменты из игры</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gameImages.map((image, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary transition-all hover:scale-105"
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-primary">{image.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="forum" className="py-20 px-4 bg-[#0f1419]/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">Форум</h2>
          
          <Tabs defaultValue="player" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-card/50 border border-primary/30">
              <TabsTrigger value="player" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                Жалоба на игрока
              </TabsTrigger>
              <TabsTrigger value="admin" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                Жалоба на Администрацию
              </TabsTrigger>
              <TabsTrigger value="suggestions" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                Предложения
              </TabsTrigger>
            </TabsList>

            <TabsContent value="player">
              <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/50 p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Жалоба на игрока</h3>
                <div className="space-y-4 mb-6">
                  {forumTopics.player.map((topic, index) => (
                    <Card key={index} className="bg-muted/50 p-4 border border-primary/20">
                      <p className="text-sm text-secondary font-bold mb-2">Автор: {topic.author}</p>
                      <p className="text-foreground">{topic.text}</p>
                    </Card>
                  ))}
                </div>
                <div className="space-y-4">
                  <Input 
                    placeholder="Ваше имя" 
                    value={newTopic.author}
                    onChange={(e) => setNewTopic({ ...newTopic, author: e.target.value })}
                    className="bg-muted border-primary/30"
                  />
                  <Textarea 
                    placeholder="Хочу подать жалобу на [имя игрока]..." 
                    value={newTopic.text}
                    onChange={(e) => setNewTopic({ ...newTopic, text: e.target.value })}
                    className="bg-muted border-primary/30 min-h-[100px]"
                  />
                  <Button 
                    onClick={() => addForumTopic('player')}
                    className="bg-primary hover:bg-primary/80 text-black font-bold"
                  >
                    Отправить жалобу
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="admin">
              <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/50 p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Жалоба на Администрацию</h3>
                <div className="space-y-4 mb-6">
                  {forumTopics.admin.map((topic, index) => (
                    <Card key={index} className="bg-muted/50 p-4 border border-primary/20">
                      <p className="text-sm text-secondary font-bold mb-2">Автор: {topic.author}</p>
                      <p className="text-foreground">{topic.text}</p>
                    </Card>
                  ))}
                </div>
                <div className="space-y-4">
                  <Input 
                    placeholder="Ваше имя" 
                    value={newTopic.author}
                    onChange={(e) => setNewTopic({ ...newTopic, author: e.target.value })}
                    className="bg-muted border-primary/30"
                  />
                  <Textarea 
                    placeholder="Хочу подать жалобу на администратора..." 
                    value={newTopic.text}
                    onChange={(e) => setNewTopic({ ...newTopic, text: e.target.value })}
                    className="bg-muted border-primary/30 min-h-[100px]"
                  />
                  <Button 
                    onClick={() => addForumTopic('admin')}
                    className="bg-primary hover:bg-primary/80 text-black font-bold"
                  >
                    Отправить жалобу
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="suggestions">
              <Card className="bg-card/80 backdrop-blur-sm border-2 border-primary/50 p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Предложения что можно добавить в игру</h3>
                <div className="space-y-4 mb-6">
                  {forumTopics.suggestions.map((topic, index) => (
                    <Card key={index} className="bg-muted/50 p-4 border border-primary/20">
                      <p className="text-sm text-secondary font-bold mb-2">Автор: {topic.author}</p>
                      <p className="text-foreground">{topic.text}</p>
                    </Card>
                  ))}
                </div>
                <div className="space-y-4">
                  <Input 
                    placeholder="Ваше имя" 
                    value={newTopic.author}
                    onChange={(e) => setNewTopic({ ...newTopic, author: e.target.value })}
                    className="bg-muted border-primary/30"
                  />
                  <Textarea 
                    placeholder="Предлагаю добавить в игру..." 
                    value={newTopic.text}
                    onChange={(e) => setNewTopic({ ...newTopic, text: e.target.value })}
                    className="bg-muted border-primary/30 min-h-[100px]"
                  />
                  <Button 
                    onClick={() => addForumTopic('suggestions')}
                    className="bg-primary hover:bg-primary/80 text-black font-bold"
                  >
                    Отправить предложение
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="bg-[#0f1419] border-t-2 border-primary/50 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Gamepad2" className="text-primary" size={24} />
            <span className="text-xl font-bold text-primary">Arizona Legacy</span>
          </div>
          <p className="text-foreground/60">© 2025 Arizona Legacy. Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
