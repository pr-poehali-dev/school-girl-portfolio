import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const achievements = [
    {
      title: "Победитель олимпиады по математике",
      year: "2024",
      description: "Первое место в региональном этапе",
      icon: "Trophy"
    },
    {
      title: "Научная конференция",
      year: "2023",
      description: "Доклад по экологии получил высшую оценку",
      icon: "Award"
    },
    {
      title: "Сертификат английского языка",
      year: "2024",
      description: "Уровень B2 (Upper-Intermediate)",
      icon: "BookOpen"
    }
  ];

  const hobbies = [
    {
      title: "Рисование",
      description: "Акварель и графика",
      icon: "Palette"
    },
    {
      title: "Программирование",
      description: "Python и веб-разработка",
      icon: "Code"
    },
    {
      title: "Волонтерство",
      description: "Помощь в приюте для животных",
      icon: "Heart"
    },
    {
      title: "Чтение",
      description: "Классическая литература",
      icon: "BookMarked"
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Портфолио
            </h1>
            <div className="flex gap-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Обо мне
              </button>
              <button 
                onClick={() => scrollToSection('achievements')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Достижения
              </button>
              <button 
                onClick={() => scrollToSection('hobbies')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Увлечения
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="GraduationCap" size={64} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 font-heading">
            Филиппова Айаана
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Ученица 11а класса · МБОУ "Нюрбинский технический лицей им.А.Н.Чусовского"
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            МР "Нюрбинский район" РС(Я)
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Отличница
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Химия и биология
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Творческая личность
            </Badge>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 font-heading text-center">
            Обо мне
          </h2>
          <Card className="p-8 shadow-lg border-purple-100">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Привет! Меня зовут Айаана, я учусь в 11а классе Нюрбинского технического лицея 
              имени А.Н.Чусовского. Мои любимые предметы — химия и биология. Я увлекаюсь естественными науками 
              и мечтаю связать свою будущую профессию с исследованиями. В свободное время люблю рисовать, 
              читать книги и помогать в приюте для животных.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Мечтаю стать учёным или врачом и внести свой вклад в развитие медицины или экологии. 
              Активно участвую в школьных мероприятиях, олимпиадах по химии и биологии.
            </p>
          </Card>
        </div>
      </section>

      <section id="achievements" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 font-heading text-center animate-fade-in">
            Достижения
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-purple-100 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Icon name={achievement.icon as any} size={32} className="text-white" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-lg font-semibold font-heading">
                    {achievement.title}
                  </h3>
                </div>
                <Badge variant="outline" className="mb-3 border-primary text-primary">
                  {achievement.year}
                </Badge>
                <p className="text-muted-foreground">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="hobbies" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 font-heading text-center animate-fade-in">
            Увлечения
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-purple-100 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-4">
                  <Icon name={hobby.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-heading">
                  {hobby.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {hobby.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 font-heading">
            Контакты
          </h2>
          <Card className="p-8 shadow-lg border-purple-100">
            <p className="text-lg text-muted-foreground mb-8">
              Если у вас есть предложения или вопросы, буду рада общению!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                <Icon name="Mail" size={20} />
                ajaana.filippova@example.com
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="gap-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Icon name="Phone" size={20} />
                +7 (900) 123-45-67
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <p className="text-sm">
          © 2024 Филиппова Айаана. Создано с любовью ✨
        </p>
      </footer>
    </div>
  );
};

export default Index;