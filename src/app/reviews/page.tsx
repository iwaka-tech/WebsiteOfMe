
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Иван Петров",
    role: "Маркетинг Мениджър",
    text: "Работата с този екип беше изключително професионално преживяване. Всичко бе изпълнено в срок и с най-високо качество.",
    rating: 5,
    date: "12 Юни 2023"
  },
  {
    name: "Мария Георгиева",
    role: "Основател на Стартъп",
    text: "Полезните ресурси тук ми помогнаха да организирам процесите в моята компания по съвсем нов начин. Благодарим!",
    rating: 5,
    date: "28 Август 2023"
  },
  {
    name: "Стефан Димитров",
    role: "Дизайнер на свободна практика",
    text: "Страхотно съдържание и уникален подход. Силно препоръчвам за всеки, който търси нови идеи.",
    rating: 5,
    date: "05 Октомври 2023"
  }
];

export default function ReviewsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold font-headline mb-4">Клиентски отзиви</h1>
        <p className="text-xl text-muted-foreground">Какво казват хората, с които съм имал удоволствието да работя.</p>
      </div>

      <div className="space-y-8">
        {reviews.map((review, i) => (
          <Card key={i} className="glass-card relative">
            <div className="absolute top-6 right-8 text-primary/10">
              <Quote size={80} />
            </div>
            <CardContent className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start relative z-10">
              <div className="flex flex-col items-center text-center space-y-3">
                <Avatar className="w-20 h-20 border-2 border-primary/20">
                  <AvatarImage src={`https://picsum.photos/seed/${i + 10}/200/200`} />
                  <AvatarFallback>{review.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-headline font-bold text-lg">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xl italic leading-relaxed text-foreground/90">
                  "{review.text}"
                </p>
                <p className="text-sm text-muted-foreground text-right">{review.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
