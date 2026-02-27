import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, FileText, Globe } from "lucide-react";

const resources = [
  {
    title: "Пътеводител за дигитална продуктивност",
    description: "Най-добрите инструменти и методи за управление на времето в модерната епоха.",
    type: "PDF Документ",
    icon: FileText,
  },
  {
    title: "Списък с полезни източници",
    description: "Курирана колекция от уебсайтове за дизайн, програмиране и личностно развитие.",
    type: "Уеб ресурс",
    icon: Globe,
  },
  {
    title: "Темплейти за планиране",
    description: "Готови за използване шаблони, които ще подобрят организацията на деня ви.",
    type: "Изтегляне",
    icon: Download,
  }
];

export default function UsefulPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold font-headline mb-4">Полезни ресурси</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Колекция от материали, които съм събрал и създал, за да ви помогна в работата и ежедневието.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((item, i) => (
          <Card key={i} className="glass-card hover:translate-y-[-4px] transition-transform duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="font-headline">{item.title}</CardTitle>
              <CardDescription className="text-muted-foreground">{item.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full btn-transparent group rounded-lg">
                <span>Виж ресурса</span>
                <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
