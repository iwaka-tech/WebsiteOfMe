import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
      <section className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <Avatar className="w-48 h-48 border-4 border-background relative">
            <AvatarImage src="https://picsum.photos/seed/profile/400/400" alt="Profile" />
            <AvatarFallback>МС</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold font-headline mb-4 tracking-tight">
            Добре дошли в <span className="text-accent">Моят Свят</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg mb-8">
            Аз съм изследовател на идеи и създател на дигитални преживявания. Тук споделям своя опит и ресурси.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button className="btn-transparent rounded-full px-8 h-12 text-lg">
              Научи повече
            </Button>
            <div className="flex items-center gap-4 ml-2">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold font-headline mb-10 text-center">За мен</h2>
        <Card className="glass-card overflow-hidden">
          <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Вярвам, че светът е място за постоянно учене. През последните години се фокусирах върху развитието на
              умения, които помагат на хората да постигат целите си по-бързо и по-лесно.
            </p>
            <p>
              Моят подход е комбинация от аналитично мислене и творческа свобода. Обичам да намирам нестандартни решения
              на сложни проблеми и да споделям откритията си с другите.
            </p>
            <p>
              Тук ще намерите не само информация за мен, но и полезни материали, които се надявам да ви вдъхновят и
              подпомогнат във вашия личен и професионален път.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
