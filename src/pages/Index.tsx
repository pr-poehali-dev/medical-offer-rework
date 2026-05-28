import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/ecc2701a-044d-4d78-bdf1-ce5ecc2aed1d/files/ec31f5f5-bef5-4308-a79f-629d9b7173a1.jpg";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Технологии", href: "#tech" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Кейсы", href: "#cases" },
  { label: "Контакты", href: "#contacts" },
];

const STATS = [
  { value: "2128%", label: "ROI в медицинской нише" },
  { value: "89", label: "заявок в месяц" },
  { value: "×3", label: "рост продаж" },
  { value: "6", label: "лет в производстве" },
];

const SERVICES = [
  {
    icon: "Search",
    title: "SEO для медпроизводства",
    desc: "Выводим сайт в ТОП по коммерческим запросам: дистрибьюторы, тендеры, B2B-партнёры. Специфика ФЗ-61, ЖНВЛП и медицинских стандартов.",
  },
  {
    icon: "Target",
    title: "Контекстная реклама",
    desc: "Яндекс.Директ под медицинскую тематику — с учётом ограничений, заверений и семантики производства. Цена заявки от 800 ₽.",
  },
  {
    icon: "BarChart2",
    title: "Аналитика и трекинг",
    desc: "Сквозная аналитика от клика до сделки. Отслеживаем B2B-воронку: дистрибьютор → заявка → контракт → повторные заказы.",
  },
  {
    icon: "Globe",
    title: "Сайт под производство",
    desc: "Разработка и оптимизация сайта с продуктовыми каталогами, сертификатами, документацией — всё что нужно для B2B-продаж.",
  },
  {
    icon: "Mail",
    title: "Email и CRM-маркетинг",
    desc: "Автоматизация касаний с партнёрами, дистрибьюторами и корпоративными клиентами. Прогрев длинного B2B-цикла.",
  },
  {
    icon: "TrendingUp",
    title: "Комплексное продвижение",
    desc: "Полный цикл: аудит → стратегия → запуск → оптимизация → масштаб. Один подрядчик за всё.",
  },
];

const TECH_STEPS = [
  {
    num: "01",
    title: "Аудит и стратегия",
    desc: "Исследуем вашу нишу, конкурентов и текущую аналитику. Разрабатываем 90-дневный план с конкретными KPI.",
  },
  {
    num: "02",
    title: "Техническая подготовка",
    desc: "Настраиваем сквозную аналитику, коллтрекинг, CRM-интеграции. Убеждаемся, что каждая заявка фиксируется.",
  },
  {
    num: "03",
    title: "Запуск каналов",
    desc: "Параллельно запускаем SEO, контекст и контент-маркетинг. Первые заявки — в течение 2 недель.",
  },
  {
    num: "04",
    title: "Оптимизация",
    desc: "Еженедельный анализ данных, A/B-тесты, перераспределение бюджета в пользу работающих каналов.",
  },
  {
    num: "05",
    title: "Масштабирование",
    desc: "Когда ROI достигает цели — масштабируем бюджет и добавляем новые рынки или продуктовые линейки.",
  },
];

const ADVANTAGES = [
  {
    icon: "ShieldCheck",
    title: "Знаем специфику медпроизводства",
    desc: "Работали с производителями медизделий, БАДов, фармацевтики. Знаем ограничения рекламных систем, требования к маркировке и B2B-воронке.",
  },
  {
    icon: "Zap",
    title: "Результат за 14 дней",
    desc: "Первые заявки появляются в течение двух недель после старта. Никаких «подождите 3 месяца» без движения.",
  },
  {
    icon: "LineChart",
    title: "Прозрачная аналитика",
    desc: "Еженедельные отчёты с метриками: стоимость заявки, ROI, источники. Вы всегда знаете, куда уходит каждый рубль.",
  },
  {
    icon: "Users",
    title: "Выделенная команда",
    desc: "Персональный менеджер + аналитик + специалист по рекламе. Не колл-центр — живые люди, которые отвечают за ваш результат.",
  },
];

const CASES = [
  {
    tag: "Медицинские панели",
    company: "ГМЛ Панели",
    title: "Производитель медицинских панелей вышел на новые рынки за 4 месяца",
    metrics: [
      { value: "×3", label: "рост входящих заявок" },
      { value: "−40%", label: "стоимость лида" },
      { value: "312%", label: "ROI" },
    ],
    desc: "Производитель стеновых медицинских панелей ГМЛ обратился с задачей: найти корпоративных заказчиков — клиники, больницы, девелоперы медобъектов. Запустили SEO + Директ, создали отдельные посадочные под сегменты. Результат: 3-кратный рост заявок при снижении стоимости лида в 2,5 раза.",
    color: "from-cyan-500/10 to-blue-600/10",
    border: "border-cyan-500/20",
    comingSoon: false,
  },
  {
    tag: "Медтехника",
    company: "Camtech",
    title: "Выход на рынок с нуля: от производства к первым дилерам за 90 дней",
    metrics: [
      { value: "0→150", label: "заявок в месяц" },
      { value: "456%", label: "ROI в первом квартале" },
      { value: "12", label: "новых дистрибьюторов" },
    ],
    desc: "Новый производитель медицинского оборудования Camtech выходил на рынок без репутации и клиентской базы. Разработали стратегию запуска: от нейминга и сайта до рекламных кампаний. Привлекли первых дилеров и наладили стабильный поток B2B-заявок. Кейс в разработке — подробности скоро.",
    color: "from-violet-500/10 to-blue-600/10",
    border: "border-violet-500/20",
    comingSoon: true,
  },
];

const PROCESS = [
  { step: "1", title: "Созвон 30 минут", desc: "Разбираем вашу ситуацию: продукт, конкуренты, текущие результаты" },
  { step: "2", title: "Аудит бесплатно", desc: "Анализируем сайт, рекламу и конкурентов. Показываем точки роста" },
  { step: "3", title: "Стратегия и KPI", desc: "Готовим план с конкретными цифрами: сколько заявок, по какой цене" },
  { step: "4", title: "Запуск за 5 дней", desc: "Подписываем договор и стартуем. Первые результаты уже через 2 недели" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-cyan-glow border border-cyan/60 flex items-center justify-center glow-cyan">
              <span className="text-cyan font-mono-custom text-xs font-bold">T</span>
            </div>
            <span className="font-golos font-bold text-white text-lg tracking-tight">TOLKA<span className="text-cyan">DIGITAL</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-cyan transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </div>
          <a href="#contacts" className="hidden md:inline-flex items-center gap-2 bg-cyan text-background font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-all duration-200 glow-cyan">
            Получить консультацию
          </a>
          <button className="md:hidden text-muted-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-cyan" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contacts" className="text-center bg-cyan text-background font-semibold text-sm px-5 py-3 rounded-lg">
              Получить консультацию
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 grid-bg overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Медицинское производство" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow z-0"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-cyan/30 bg-cyan-glow rounded-full px-4 py-1.5 mb-8 animate-fade-up">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              <span className="text-cyan text-xs font-mono-custom font-medium tracking-widest uppercase">Медицинское производство</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-golos font-black leading-[1.05] mb-6 animate-fade-up-delay-1">
              Ваш завод<br />
              <span className="text-cyan glow-text">находят клиенты.</span><br />
              <span className="text-foreground/60">Не наоборот.</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-up-delay-2">
              Интернет-маркетинг для производителей медицинских изделий, оборудования и фармацевтики.
              Заявки от дистрибьюторов, клиник и корпоративных заказчиков — системно, измеримо, с ROI от 200%.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
              <a href="#contacts"
                className="inline-flex items-center justify-center gap-2 bg-cyan text-background font-bold text-base px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-200 glow-cyan">
                Получить бесплатный аудит
                <Icon name="ArrowRight" size={18} />
              </a>
              <a href="#cases"
                className="inline-flex items-center justify-center gap-2 border border-border bg-secondary/50 text-foreground font-semibold text-base px-8 py-4 rounded-xl hover:border-cyan/40 hover:bg-secondary transition-all duration-200">
                Смотреть кейсы
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border/50 backdrop-blur-md bg-background/60">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-cyan font-golos glow-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER BLOCK */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl border border-cyan/20 bg-gradient-to-br from-cyan/5 via-card to-blue-900/10 p-10 md:p-16 overflow-hidden scan-line">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)" }} />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-xs font-mono-custom text-cyan tracking-widest uppercase mb-4">// сильный оффер</div>
                <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                  Пока конкуренты ждут выставок — ваши клиенты{" "}
                  <span className="text-cyan">ищут вас в интернете</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  B2B-покупатели в медицине изучают поставщиков онлайн прежде чем позвонить.
                  Если вас нет в топе поиска — вас не существует для 80% потенциальных партнёров.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Дистрибьюторы находят вас через поиск",
                  "Тендерные запросы приходят напрямую",
                  "Клиники и госзаказчики видят вашу экспертизу",
                  "Реклама работает в рамках требований ФЗ",
                  "Каждая заявка отслеживается до сделки",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 border border-border/50 rounded-xl px-5 py-3.5 bg-card/50 hover:border-cyan/30 transition-colors">
                    <Icon name="CheckCircle" size={18} className="text-cyan flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-xs font-mono-custom text-cyan tracking-widest uppercase mb-3">// услуги</div>
            <h2 className="text-4xl md:text-5xl font-black">Что мы делаем</h2>
            <p className="text-muted-foreground mt-3 text-lg max-w-xl">Полный стек интернет-маркетинга под специфику медицинского производства</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div key={i} className="group border border-border/50 rounded-2xl p-7 bg-card hover:border-cyan/30 hover:bg-card/80 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl border border-cyan/30 bg-cyan-glow flex items-center justify-center mb-5 group-hover:glow-cyan transition-all">
                  <Icon name={s.icon} size={22} className="text-cyan" />
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="tech" className="py-24 bg-card/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-xs font-mono-custom text-cyan tracking-widest uppercase mb-3">// технологии</div>
            <h2 className="text-4xl md:text-5xl font-black">Как мы работаем</h2>
            <p className="text-muted-foreground mt-3 text-lg max-w-xl">Системный процесс без хаоса — от аудита до масштабирования</p>
          </div>
          <div className="relative">
            <div className="absolute left-[2.25rem] top-10 bottom-10 w-px bg-gradient-to-b from-cyan/40 via-cyan/20 to-transparent hidden md:block" />
            <div className="flex flex-col gap-6">
              {TECH_STEPS.map((step, i) => (
                <div key={i} className="relative flex gap-8 items-start group">
                  <div className="relative z-10 w-[4.5rem] flex-shrink-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-cyan/40 bg-background flex items-center justify-center group-hover:border-cyan group-hover:glow-cyan transition-all duration-300">
                      <span className="font-mono-custom text-cyan text-sm font-bold">{step.num}</span>
                    </div>
                  </div>
                  <div className="flex-1 border border-border/50 rounded-2xl p-6 bg-card hover:border-cyan/20 transition-all duration-300">
                    <h3 className="font-bold text-lg mb-1.5">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-xs font-mono-custom text-cyan tracking-widest uppercase mb-3">// преимущества</div>
            <h2 className="text-4xl md:text-5xl font-black">Почему выбирают нас</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="flex gap-5 border border-border/50 rounded-2xl p-7 bg-card hover:border-cyan/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl border border-cyan/30 bg-cyan-glow flex items-center justify-center flex-shrink-0 group-hover:glow-cyan transition-all">
                  <Icon name={a.icon} size={24} className="text-cyan" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{a.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-24 bg-card/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-xs font-mono-custom text-cyan tracking-widest uppercase mb-3">// кейсы</div>
            <h2 className="text-4xl md:text-5xl font-black">Реальные результаты</h2>
            <p className="text-muted-foreground mt-3 text-lg max-w-xl">Производители медицинской продукции, которым мы помогли вырасти</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-7">
            {CASES.map((c, i) => (
              <div key={i} className={`relative rounded-3xl border ${c.border} bg-gradient-to-br ${c.color} p-8 overflow-hidden`}>
                {c.comingSoon && (
                  <div className="absolute top-6 right-6 border border-violet-400/40 bg-violet-500/10 rounded-full px-3 py-1 text-xs text-violet-400 font-mono-custom">
                    скоро
                  </div>
                )}
                <div className="inline-flex items-center gap-1.5 border border-border/50 rounded-full px-3 py-1 text-xs text-muted-foreground mb-5 bg-card/50">
                  <Icon name="Tag" size={11} />
                  <span className="ml-1">{c.tag}</span>
                </div>
                <div className="text-xs font-mono-custom text-muted-foreground mb-2 uppercase tracking-widest">{c.company}</div>
                <h3 className="text-xl font-bold leading-snug mb-6">{c.title}</h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {c.metrics.map((m, j) => (
                    <div key={j} className="border border-border/40 rounded-xl p-3 bg-background/30 text-center">
                      <div className="text-xl font-black text-cyan glow-text">{m.value}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="text-xs font-mono-custom text-cyan tracking-widest uppercase mb-3">// старт работы</div>
            <h2 className="text-4xl md:text-5xl font-black">Как начать</h2>
            <p className="text-muted-foreground mt-3 text-lg">От первого контакта до первых заявок — 4 шага</p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {PROCESS.map((p, i) => (
              <div key={i} className="relative border border-border/50 rounded-2xl p-6 bg-card text-center hover:border-cyan/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full border border-cyan/40 bg-cyan-glow mx-auto mb-4 flex items-center justify-center group-hover:glow-cyan transition-all">
                  <span className="text-cyan font-mono-custom font-bold text-lg">{p.step}</span>
                </div>
                <h3 className="font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                {i < PROCESS.length - 1 && (
                  <div className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10">
                    <Icon name="ChevronRight" size={18} className="text-cyan/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-card/30 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-mono-custom text-cyan tracking-widest uppercase mb-4">// контакты</div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                Получите бесплатный<br /><span className="text-cyan">аудит вашего маркетинга</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Проанализируем ваш сайт, рекламу и конкурентов. Покажем, сколько заявок вы теряете и как это исправить. Занимает 30 минут онлайн.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: "Phone", text: "+7 (999) 123-45-67" },
                  { icon: "Mail", text: "hello@tolkadigital.ru" },
                  { icon: "MapPin", text: "Москва, работаем по всей России" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-9 h-9 rounded-lg border border-cyan/30 bg-cyan-glow flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={16} className="text-cyan" />
                    </div>
                    <span className="text-sm">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border/50 rounded-3xl p-8 bg-card scan-line">
              {sent ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full border border-cyan/40 bg-cyan-glow mx-auto mb-5 flex items-center justify-center glow-cyan">
                    <Icon name="CheckCircle" size={28} className="text-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Заявка отправлена!</h3>
                  <p className="text-muted-foreground">Свяжемся с вами в течение 2 часов в рабочее время</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-1">Бесплатная консультация</h3>
                  <p className="text-muted-foreground text-sm mb-7">Заполните форму — перезвоним в течение 2 часов</p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-muted-foreground mb-1.5 block">Ваше имя *</label>
                        <input
                          type="text"
                          required
                          placeholder="Александр"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground mb-1.5 block">Телефон *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+7 (999) 000-00-00"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan/50 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block">Название компании</label>
                      <input
                        type="text"
                        placeholder="ООО Медпром"
                        value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block">Расскажите о задаче</label>
                      <textarea
                        placeholder="Мы производим медицинское оборудование и хотим увеличить количество дилеров..."
                        rows={4}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan/50 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-cyan text-background font-bold py-4 rounded-xl hover:opacity-90 transition-all duration-200 glow-cyan flex items-center justify-center gap-2 text-base"
                    >
                      Получить бесплатный аудит
                      <Icon name="ArrowRight" size={18} />
                    </button>
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-cyan-glow border border-cyan/60 flex items-center justify-center">
              <span className="text-cyan font-mono-custom text-xs font-bold">T</span>
            </div>
            <span className="font-golos font-bold text-white">TOLKA<span className="text-cyan">DIGITAL</span></span>
          </div>
          <p className="text-xs text-muted-foreground">© 2024 TolkaDigital. Маркетинг для медицинского производства.</p>
          <div className="flex gap-6">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-xs text-muted-foreground hover:text-cyan transition-colors">{l.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}