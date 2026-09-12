import { FileText, Wifi } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { DocumentGenerator } from './components/DocumentGenerator';

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/70 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/10">
              <FileText className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">DocxGen</p>
              <p className="text-xs text-muted-foreground">Текст → документ</p>
            </div>
          </div>
          <Badge variant="outline" className="gap-2 rounded-full px-3 py-1.5 text-xs font-medium">
            <Wifi className="size-3 text-chart-2" />
            <span>Готово к работе</span>
          </Badge>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
        <div className="mb-10 max-w-3xl">
          <div className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Простая подготовка документа
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl">Напишите, что должно быть на бумаге.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">Вставьте готовый текст или начните с нуля. Мы оформим его в аккуратный документ — без лишних вопросов и сложной вёрстки.</p>
        </div>
        <DocumentGenerator />
      </section>
    </main>
  );
}

export default App;
