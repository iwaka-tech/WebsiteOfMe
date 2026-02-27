import { Card, CardContent } from "@/components/ui/card";
import { Quote, Clock } from "lucide-react";

const statuses = [
  {
    text: "Вярвам, че технологиите трябва да служат на човека, а не обратното. В малките моменти на аналогово спокойствие намираме истинското вдъхновение.",
    date: "12 Февруари 2024"
  },
  {
    text: "Минимализмът не е просто липса на вещи, а присъствие на смисъл.",
    date: "05 Януари 2024"
  },
  {
    text: "Всеки нов проект е празно платно, на което рисуваме не само код, но и бъдеще.",
    date: "20 Декември 2023"
  }
];

export default function StatusesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold font-headline mb-4">Моите мисли</h1>
        <p className="text-xl text-muted-foreground">Кратки статуси, идеи и философски отклонения.</p>
      </div>

      <div className="grid gap-8">
        {statuses.map((status, i) => (
          <Card key={i} className="glass-card group overflow-hidden">
            <CardContent className="p-8 md:p-10 relative">
              <div className="absolute -top-4 -right-4 text-primary/5 transition-transform group-hover:scale-110 duration-500">
                <Quote size={120} />
              </div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  <Clock className="w-4 h-4" />
                  <span>{status.date}</span>
                </div>
                
                <p className="text-2xl leading-relaxed text-foreground/90 font-light">
                  {status.text}
                </p>
                
                <div className="w-12 h-1 bg-accent/30 rounded-full" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
