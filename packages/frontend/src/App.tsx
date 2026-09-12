import { FileText, Sparkles, Wifi } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { DocumentGenerator } from './components/DocumentGenerator';

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/10">
              <FileText className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">DocxGen</p>
              <p className="text-xs text-muted-foreground">AI document studio</p>
            </div>
          </div>
          <Badge variant="outline" className="gap-2 rounded-full px-3 py-1.5 text-xs font-medium">
            <Wifi className="size-3 text-chart-2" />
            <span>Pipeline online</span>
          </Badge>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" />
            Документы без ручной верстки
          </div>
          <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Превратите текст в готовый документ.</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">Опишите задачу обычными словами — DocxGen структурирует содержание, проверит реквизиты и соберёт профессиональный .docx.</p>
        </div>
        <DocumentGenerator />
      </section>
    </main>
  );
}

export default App;
