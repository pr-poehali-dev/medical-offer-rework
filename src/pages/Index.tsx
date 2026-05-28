import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/ecc2701a-044d-4d78-bdf1-ce5ecc2aed1d/files/ec31f5f5-bef5-4308-a79f-629d9b7173a1.jpg";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Как работаем", href: "#tech" },
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
  { num: "01", title: "Аудит и стратегия", desc: "Исследуем вашу нишу, конкурентов и текущую аналитику. Разрабатываем 90-дневный план с конкретными KPI." },
  { num: "02", title: "Техническая подготовка", desc: "Настраиваем сквозную аналитику, коллтрекинг, CRM-интеграции. Убеждаемся, что каждая заявка фиксируется." },
  { num: "03", title: "Запуск каналов", desc: "Параллельно запускаем SEO, контекст и контент-маркетинг. Первые заявки — в течение 2 недель." },
  { num: "04", title: "Оптимизация", desc: "Еженедельный анализ данных, A/B-тесты, перераспределение бюджета в пользу работающих каналов." },
  { num: "05", title: "Масштабирование", desc: "Когда ROI достигает цели — масштабируем бюджет и добавляем новые рынки или продуктовые линейки." },
];

const ADVANTAGES = [
  { icon: "ShieldCheck", title: "Знаем специфику медпроизводства", desc: "Работали с производителями медизделий, БАДов, фармацевтики. Знаем ограничения рекламных систем, требования к маркировке и B2B-воронке." },
  { icon: "Zap", title: "Результат за 14 дней", desc: "Первые заявки появляются в течение двух недель после старта. Никаких «подождите 3 месяца» без движения." },
  { icon: "LineChart", title: "Прозрачная аналитика", desc: "Еженедельные отчёты с метриками: стоимость заявки, ROI, источники. Вы всегда знаете, куда уходит каждый рубль." },
  { icon: "Users", title: "Выделенная команда", desc: "Персональный менеджер + аналитик + специалист по рекламе. Не колл-центр — живые люди, которые отвечают за ваш результат." },
];

const CASES = [
  {
    tag: "Медицинские панели",
    company: "ГМЛ Панели",
    title: "Производитель медицинских панелей вышел на новые рынки за 4 месяца",
    metrics: [
      { value: "×3", label: "рост заявок" },
      { value: "−40%", label: "стоимость лида" },
      { value: "312%", label: "ROI" },
    ],
    desc: "Производитель стеновых медицинских панелей ГМЛ обратился с задачей: найти корпоративных заказчиков — клиники, больницы, девелоперы медобъектов. Запустили SEO + Директ, создали отдельные посадочные под сегменты. Результат: 3-кратный рост заявок при снижении стоимости лида в 2,5 раза.",
    accent: "bg-blue-50 border-blue-100",
    badge: "text-blue-600 bg-blue-100",
  },
  {
    tag: "Медтехника",
    company: "Camtech",
    title: "Выход на рынок с нуля: от производства к первым дилерам за 90 дней",
    metrics: [
      { value: "0→150", label: "заявок в месяц" },
      { value: "456%", label: "ROI" },
      { value: "12", label: "дистрибьюторов" },
    ],
    desc: "Новый производитель медицинского оборудования Camtech выходил на рынок без репутации и клиентской базы. Разработали стратегию запуска: от нейминга и сайта до рекламных кампаний. Привлекли первых дилеров и наладили стабильный поток B2B-заявок.",
    accent: "bg-violet-50 border-violet-100",
    badge: "text-violet-600 bg-violet-100",
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
    <div className="min-h-screen bg-white text-foreground overflow-x-hidden font-golos">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
              <span className="text-white font-mono-custom text-xs font-bold">T</span>
            </div>
            <span className="font-golos font-bold text-foreground text-base tracking-tight">
              Tolka<span className="text-blue-600">Digital</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150">
                {l.label}
              </a>
            ))}
          </div>
          <a href="#contacts"
            className="hidden md:inline-flex items-center gap-2 bg-blue-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-150">
            Консультация
          </a>
          <button className="md:hidden text-muted-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contacts" className="text-center bg-blue-600 text-white font-semibold text-sm px-5 py-3 rounded-lg">
              Консультация
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-40"
            style={{ background: "radial-gradient(circle at 70% 30%, rgba(26,111,212,0.07) 0%, transparent 60%)" }} />
        </div>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-600 rounded-full px-4 py-1.5 mb-8 text-xs font-medium tracking-wide uppercase animate-fade-up">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Медицинское производство
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.08] mb-6 animate-fade-up-delay-1 text-foreground">
              Ваш завод<br />
              <span className="text-blue-600">находят</span><br />
              клиенты.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed animate-fade-up-delay-2">
              Интернет-маркетинг для производителей медицинских изделий, оборудования и фармацевтики.
              ROI от 200%, заявки от дистрибьюторов и корпоративных заказчиков.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up-delay-3">
              <a href="#contacts"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors duration-150">
                Получить бесплатный аудит
                <Icon name="ArrowRight" size={18} />
              </a>
              <a href="#cases"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-semibold text-base px-8 py-4 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-150">
                Смотреть кейсы
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <img src={HERO_IMG} alt="Медицинское производство" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border border-border rounded-2xl p-5 shadow-lg">
              <div className="text-2xl font-black text-blue-600">2128%</div>
              <div className="text-xs text-muted-foreground mt-0.5">ROI в медицинской нише</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white border border-border rounded-2xl p-5 shadow-lg">
              <div className="text-2xl font-black text-blue-600">89</div>
              <div className="text-xs text-muted-foreground mt-0.5">заявок в месяц</div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="max-w-6xl mx-auto px-6 mt-20">
          <div className="border border-border rounded-2xl bg-card grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {STATS.map((s, i) => (
              <div key={i} className="text-center py-6 px-4">
                <div className="text-3xl font-black text-blue-600">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-mono-custom text-blue-600 tracking-widest uppercase mb-4">Оффер</p>
              <h2 className="text-4xl font-black leading-tight mb-5">
                Пока конкуренты ждут выставок — ваши клиенты{" "}
                <span className="text-blue-600">ищут вас в интернете</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                B2B-покупатели в медицине изучают поставщиков онлайн прежде чем позвонить.
                Если вас нет в топе поиска — вас не существует для 80% потенциальных партнёров.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                "Дистрибьюторы находят вас через поиск",
                "Тендерные запросы приходят напрямую",
                "Клиники и госзаказчики видят вашу экспертизу",
                "Реклама работает в рамках требований ФЗ",
                "Каждая заявка отслеживается до сделки",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-border rounded-xl px-5 py-3.5 hover:border-blue-200 transition-colors">
                  <Icon name="Check" size={16} className="text-blue-600 flex-shrink-0" />
                  <span className="text-sm text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-mono-custom text-blue-600 tracking-widest uppercase mb-3">Услуги</p>
            <h2 className="text-4xl font-black">Что мы делаем</h2>
            <p className="text-muted-foreground mt-2 text-lg max-w-xl">Полный стек маркетинга под специфику медицинского производства</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <div key={i} className="group border border-border rounded-2xl p-6 bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <Icon name={s.icon} size={20} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-base mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="tech" className="py-20 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-mono-custom text-blue-600 tracking-widest uppercase mb-3">Процесс</p>
            <h2 className="text-4xl font-black">Как мы работаем</h2>
            <p className="text-muted-foreground mt-2 text-lg max-w-xl">Системный подход без хаоса — от аудита до масштабирования</p>
          </div>
          <div className="flex flex-col gap-3">
            {TECH_STEPS.map((step, i) => (
              <div key={i} className="flex gap-6 items-start bg-white border border-border rounded-2xl p-6 hover:border-blue-200 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-mono-custom font-bold">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-mono-custom text-blue-600 tracking-widest uppercase mb-3">Преимущества</p>
            <h2 className="text-4xl font-black">Почему выбирают нас</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="flex gap-5 border border-border rounded-2xl p-6 bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-200 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon name={a.icon} size={22} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1.5">{a.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-20 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-mono-custom text-blue-600 tracking-widest uppercase mb-3">Кейсы</p>
            <h2 className="text-4xl font-black">Реальные результаты</h2>
            <p className="text-muted-foreground mt-2 text-lg max-w-xl">Производители медицинской продукции, которым мы помогли вырасти</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {CASES.map((c, i) => (
              <div key={i} className={`relative rounded-2xl border p-8 ${c.accent}`}>
                {c.comingSoon && (
                  <div className="absolute top-6 right-6 bg-violet-100 text-violet-600 rounded-full px-3 py-1 text-xs font-medium">
                    скоро
                  </div>
                )}
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium mb-4 ${c.badge}`}>
                  {c.tag}
                </span>
                <div className="text-xs text-muted-foreground mb-1.5 uppercase tracking-widest font-mono-custom">{c.company}</div>
                <h3 className="text-xl font-bold leading-snug mb-6">{c.title}</h3>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {c.metrics.map((m, j) => (
                    <div key={j} className="border border-white/80 rounded-xl p-3 bg-white text-center shadow-sm">
                      <div className="text-xl font-black text-blue-600">{m.value}</div>
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-xs font-mono-custom text-blue-600 tracking-widest uppercase mb-3">Старт работы</p>
            <h2 className="text-4xl font-black">Как начать</h2>
            <p className="text-muted-foreground mt-2 text-lg">От первого контакта до первых заявок — 4 шага</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {PROCESS.map((p, i) => (
              <div key={i} className="relative border border-border rounded-2xl p-6 bg-card text-center hover:border-blue-200 hover:shadow-sm transition-all duration-200 group">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white mx-auto mb-4 flex items-center justify-center">
                  <span className="font-mono-custom font-bold text-base">{p.step}</span>
                </div>
                <h3 className="font-bold mb-2 text-sm">{p.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                {i < PROCESS.length - 1 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <Icon name="ChevronRight" size={16} className="text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-mono-custom text-blue-600 tracking-widest uppercase mb-4">Контакты</p>
              <h2 className="text-4xl font-black leading-tight mb-5">
                Получите бесплатный<br />
                <span className="text-blue-600">аудит вашего маркетинга</span>
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
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={16} className="text-blue-600" />
                    </div>
                    <span className="text-sm text-muted-foreground">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border rounded-2xl p-8 bg-white shadow-sm">
              {sent ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 mx-auto mb-5 flex items-center justify-center">
                    <Icon name="CheckCircle" size={26} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Заявка отправлена!</h3>
                  <p className="text-muted-foreground text-sm">Свяжемся с вами в течение 2 часов в рабочее время</p>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-bold mb-1">Бесплатная консультация</h3>
                  <p className="text-muted-foreground text-sm mb-6">Заполните форму — перезвоним в течение 2 часов</p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-muted-foreground mb-1.5 block">Ваше имя *</label>
                        <input
                          type="text" required placeholder="Александр"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-400 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground mb-1.5 block">Телефон *</label>
                        <input
                          type="tel" required placeholder="+7 (999) 000-00-00"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-400 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block">Название компании</label>
                      <input
                        type="text" placeholder="ООО Медпром"
                        value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block">Расскажите о задаче</label>
                      <textarea
                        placeholder="Мы производим медицинское оборудование и хотим увеличить количество дилеров..."
                        rows={4} value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-400 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-base"
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
      <footer className="border-t border-border py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
              <span className="text-white font-mono-custom text-xs font-bold">T</span>
            </div>
            <span className="font-golos font-bold text-foreground text-sm">
              Tolka<span className="text-blue-600">Digital</span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground">© 2024 TolkaDigital. Маркетинг для медицинского производства.</p>
          <div className="flex gap-6">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
