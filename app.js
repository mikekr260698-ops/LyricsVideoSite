/**
 * ARTIST VISUALS — Core Application Script
 * Multilingual Engine (EN / RO / RU), Auto-Currency Detector & Switcher,
 * Interactive Modals & Dual Checkout (Pay Now / Pay Later via Telegram),
 * Calm Parallax Wiggle & Audio/Video Demo Player.
 */

// ==========================================================================
// 1. MULTILINGUAL DICTIONARY (i18n)
// ==========================================================================
const translations = {
  en: {
    "nav.packages": "Packages",
    "nav.cases": "Portfolio",
    "nav.reviews": "Reviews",
    "nav.faq": "FAQ",
    "header.orderBtn": "Order",

    "hero.badge": "Accepting orders for new releases",
    "hero.title1": "Visuals for",
    "hero.title2": "your music",
    "hero.subtitle": "Track cover art and lyrics videos that elevate your release and set the perfect mood.",
    "hero.btnPackages": "Choose Package",
    "hero.btnCases": "View Cases",

    "features.turnkey.title": "Turnkey",
    "features.turnkey.desc": "You just submit the brief, we handle the rest",
    "features.ontime.title": "On Time",
    "features.ontime.desc": "Strict deadlines and guaranteed high quality",
    "features.style.title": "Your Style",
    "features.style.desc": "Tailored to your sound, references, and vision",

    "packages.tag": "PACKAGES",
    "packages.title": "Choose your format",
    "packages.subtitle": "Ready-to-release solutions for artists",
    "packages.btnOrder": "Order",
    "packages.btnDiscuss": "Discuss",

    "packages.cover.name": "Cover Art",
    "packages.cover.desc": "Unique 3000x3000px artwork that makes your track stand out.",
    "packages.cover.p1": "3000 × 3000 px resolution, 300 DPI",
    "packages.cover.p2": "Ready for Spotify, Apple Music & all DSPs",
    "packages.cover.p3": "Up to 3 concepts to choose from",
    "packages.cover.p4": "Free revisions until final approval",

    "packages.lyrics.name": "Lyrics Video",
    "packages.lyrics.desc": "Dynamic music video with synced text matched to the beat.",
    "packages.lyrics.p1": "Full HD / 4K UHD video resolution",
    "packages.lyrics.p2": "16:9 widescreen format for YouTube",
    "packages.lyrics.p3": "Precise text synchronization on beat",
    "packages.lyrics.p4": "Atmospheric motion background & effects",

    "packages.full.badge": "Best Value",
    "packages.full.name": "Full Pack",
    "packages.full.desc": "Cover Art + Lyrics Video. Unified aesthetic, maximum impact.",
    "packages.full.p1": "Cover Art 3000 × 3000 px for all DSPs",
    "packages.full.p2": "Lyrics Video 16:9 (YouTube) in 4K",
    "packages.full.p3": "Social media banner suite (YouTube, Facebook, Spotify Canvas)",
    "packages.full.p4": "Priority turnaround time",

    "included.title": "What's included?",
    "included.subtitle": "Everything required for a stunning, release-ready visual.",
    "included.item1": "Tailored approach focused on your mood and references",
    "included.item2": "Distinctive artwork design and fluid animation",
    "included.item3": "Approval at every milestone of the process",
    "included.item4": "Release-ready files formatted for all streaming platforms",
    "included.item5": "Fast revisions until you are 100% satisfied",

    "cases.tag": "CASES",
    "cases.title": "Selected Works",
    "cases.subtitle": "Explore visuals created for recent music releases",
    "cases.row1.pill": "▶ 4K LYRICS VIDEOS & VISUALIZERS",
    "cases.row2.pill": "💿 COVER ARTWORKS 3000 × 3000 PX",
    "cases.hint": "Click any project to inspect full breakdown & details",
    "project.specsTitle": "What was crafted:",
    "project.orderBtn": "Order similar format",
    "project.tabVideo": "Lyrics Video 4K",
    "project.tabCover": "Cover Art 3000px",
    "project.tabBanner": "Banner & Promo Suite",
    "project.zoomBtn": "🔍 Original HD",
    "project.labelVideo": "Lyrics Video 4K Master (16:9)",
    "project.labelCover": "Streaming Cover (3000 × 3000 px)",
    "project.labelBanner": "Social Media & Promo Banner Suite",
    "project.zoomCover": "🔍 HD 3000px",
    "project.zoomBanner": "🔍 Banner Suite HD",

    "reviews.tag": "REVIEWS",
    "reviews.title": "What artists say",
    "reviews.role": "Artist",
    "reviews.quote1": "«Created the cover and lyrics video in my exact vibe. Fast, sharp, zero hassle — 10/10.»",
    "reviews.quote2": "«Top-tier production quality. Great communication, revisions done swiftly. Highly recommended.»",
    "reviews.quote3": "«Super smooth process: submitted the brief and got exactly what I envisioned on time. Will order again.»",

    "faq.tag": "FAQ",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "How long does a project take?",
    "faq.a1": "Typically delivered in 3 to a maximum of 7 days depending on complexity. If you need it sooner (rush / express delivery), we can arrange priority turnaround upon discussion.",
    "faq.q2": "What file formats will I receive?",
    "faq.a2": "Covers: High-resolution PNG format 3000×3000 px, 300 DPI (100% compliant with Spotify, Apple Music, etc.). Videos: 4K UHD 16:9 master rendered in modern HEVC / H.265 codec (or H.264/MP4 upon request) for maximum bitrate and sharpness on YouTube.",
    "faq.q3": "What if I need revisions?",
    "faq.a3": "All adjustments for colors, typography, text timing, and details are free until final approval. Please note: additional revisions may require extra turnaround time. Workflow starts with approving the cover art, followed by crafting the video and promo suite.",
    "faq.q4": "How does payment work?",
    "faq.a4": "We work with a 50% or 100% deposit. Accepted payment methods include Card (Visa/Mastercard), Revolut, Bank Transfer, or Crypto (USDT).",

    "final.title": "Ready to amplify your release?",
    "final.subtitle": "Pick your package, place your order, and get industry-standard visuals without the headache.",
    "final.btn": "Order now",

    "footer.desc": "Visuals & Lyrics videos for music artists worldwide.",
    "footer.contactsTitle": "Direct Contact",

    "modal.order.pill": "ORDER BRIEF",
    "modal.order.title": "Visuals Project Brief",
    "modal.order.packageLabel": "Choose Package",
    "modal.order.artistLabel": "Your Artist Name *",
    "modal.order.trackLabel": "Track Title *",
    "modal.order.demoLabel": "Link to Track / Demo",
    "modal.order.demoHint": "You can also share it in chat later",
    "modal.order.notesLabel": "Preferences / Style / References",
    "modal.order.contactLabel": "Contact handle (Telegram / WhatsApp / Instagram) *",
    "modal.order.paymentLabel": "Payment Timing & Method",
    "modal.order.payLaterTitle": "Pay after approval",
    "modal.order.payLaterDesc": "We discuss brief details first, then proceed to payment",
    "modal.order.payNowTitle": "Pay now online",
    "modal.order.payNowDesc": "Card (Visa/Mastercard, Revolut, Apple Pay)",
    "modal.order.submitBtn": "Submit Order",
    "modal.order.guarantee": "🔒 We will reach out within 30–60 minutes to confirm details and initiate production.",

    "modal.success.title": "Order submitted successfully!",
    "modal.success.desc": "Thank you! We received your details and are already prepping your concept.",
    "modal.success.payNowBtn": "💳 Proceed to secure checkout",
    "modal.success.closeBtn": "Back to site",

    "modal.discuss.pill": "DIRECT CONTACT",
    "modal.discuss.title": "Discuss your project",
    "modal.discuss.desc": "Choose your preferred messaging channel. We reply quickly and help you pick the best package.",
    "modal.discuss.fastest": "Fastest response (~15 min)",
    "modal.discuss.portfolio": "Check stories and portfolio",
    "modal.discuss.messages": "Voice notes and file sharing"
  },

  ro: {
    "nav.packages": "Pachete",
    "nav.cases": "Portofoliu",
    "nav.reviews": "Recenzii",
    "nav.faq": "FAQ",
    "header.orderBtn": "Comandă",

    "hero.badge": "Acceptăm comenzi pentru lansări noi",
    "hero.title1": "Vizualuri pentru",
    "hero.title2": "muzica ta",
    "hero.subtitle": "Covere de piese și lyrics video care îți amplifică lansarea și creează atmosfera perfectă.",
    "hero.btnPackages": "Alege pachetul",
    "hero.btnCases": "Vezi portofoliul",

    "features.turnkey.title": "La cheie",
    "features.turnkey.desc": "Tu doar trimiți brief-ul, de restul ne ocupăm noi",
    "features.ontime.title": "La termen",
    "features.ontime.desc": "Termene clare și rezultat stabil garantat",
    "features.style.title": "Pe stilul tău",
    "features.style.desc": "Ținem cont de sound-ul, referințele și ideile tale",

    "packages.tag": "PACHETE",
    "packages.title": "Alege formatul potrivit",
    "packages.subtitle": "Soluții complete pentru lansarea ta",
    "packages.btnOrder": "Comandă",
    "packages.btnDiscuss": "Discută",

    "packages.cover.name": "Cover pentru piesă",
    "packages.cover.desc": "O copertă unică ce îți va scoate piesa în evidență.",
    "packages.cover.p1": "Rezoluție 3000 × 3000 px, 300 DPI",
    "packages.cover.p2": "Format gata pentru Spotify, Apple Music etc.",
    "packages.cover.p3": "Până la 3 concepte din care să alegi",
    "packages.cover.p4": "Modificări gratuite până la aprobare",

    "packages.lyrics.name": "Lyrics Video",
    "packages.lyrics.desc": "Video dinamic cu versurile piesei sincronizate pe beat.",
    "packages.lyrics.p1": "Calitate video Full HD / 4K UHD",
    "packages.lyrics.p2": "Format 16:9 pentru YouTube",
    "packages.lyrics.p3": "Sincronizare exactă a versurilor pe ritm",
    "packages.lyrics.p4": "Fundal atmosferic cu efecte vizuale",

    "packages.full.badge": "Recomandat",
    "packages.full.name": "Pachet Complet",
    "packages.full.desc": "Cover + Lyrics Video. Stil unitar, impact maxim.",
    "packages.full.p1": "Cover 3000 × 3000 px pentru toate platformele",
    "packages.full.p2": "Lyrics video 16:9 (YouTube) în 4K",
    "packages.full.p3": "Bannere pentru rețele sociale (YouTube, Facebook, Spotify Canvas)",
    "packages.full.p4": "Timp prioritar de execuție",

    "included.title": "Ce este inclus în lucru?",
    "included.subtitle": "Tot ce ai nevoie pentru un vizual puternic gata de lansare.",
    "included.item1": "Abordare individuală și atenție la referințele tale",
    "included.item2": "Design unic și animații fluide",
    "included.item3": "Aprobare la fiecare etapă a producției",
    "included.item4": "Fișiere finale în formatele cerute de distribuitori",
    "included.item5": "Modificări rapide până la aprobarea completă",

    "cases.tag": "PORTOFOLIU",
    "cases.title": "Exemple de lucrări",
    "cases.subtitle": "Descoperă vizualurile create pentru cele mai recente lansări",
    "cases.row1.pill": "▶ 4K LYRICS VIDEOS & VIZUALIZERE",
    "cases.row2.pill": "💿 COVER ARTWORKS 3000 × 3000 PX",
    "cases.hint": "Apasă pe un proiect pentru a vedea detaliile complete",
    "project.specsTitle": "Ce a fost realizat:",
    "project.orderBtn": "Comandă un format similar",
    "project.tabVideo": "Lyrics Video 4K",
    "project.tabCover": "Cover Art 3000px",
    "project.tabBanner": "Pachet Bannere & Promo",
    "project.zoomBtn": "🔍 Original HD",
    "project.labelVideo": "Lyrics Video 4K Master (16:9)",
    "project.labelCover": "Cover Streaming (3000 × 3000 px)",
    "project.labelBanner": "Pachet Promo Bannere & Rețele Sociale",
    "project.zoomCover": "🔍 HD 3000px",
    "project.zoomBanner": "🔍 Banner Suite HD",

    "reviews.tag": "RECENZII",
    "reviews.title": "Ce spun artiștii",
    "reviews.role": "Artist",
    "reviews.quote1": "«Au făcut coverul și lyrics video-ul exact în stilul meu. Rapid, clar, fără întrebări inutile — 10/10.»",
    "reviews.quote2": "«Calitate la nivel înalt. Am comunicat la fiecare pas, modificările au fost făcute imediat. Recomand cu încredere.»",
    "reviews.quote3": "«Foarte comod: am trimis cererea și referințele, iar rezultatul a fost gata la timp. Voi mai comanda cu siguranță.»",

    "faq.tag": "FAQ",
    "faq.title": "Întrebări frecvente",
    "faq.q1": "Cât timp durează realizarea comenzii?",
    "faq.a1": "De obicei proiectul este gata în 3 zile, maxim 7 zile în funcție de complexitate. Dacă ai nevoie de livrare mai rapidă (urgență / expres), putem discuta un termen prioritar.",
    "faq.q2": "În ce formate voi primi fișierele finale?",
    "faq.a2": "Covere: Fișiere PNG de rezoluție maximă 3000×3000 px, 300 DPI (conforme 100% cu Spotify, Apple Music etc.). Video: Master 4K UHD 16:9 randat în codec modern HEVC / H.265 (sau H.264/MP4 la cerere) pentru bitrate și claritate maximă pe YouTube.",
    "faq.q3": "Ce se întâmplă dacă am nevoie de modificări?",
    "faq.a3": "Toate modificările de culoare, fonturi, sincronizare sau mici detalii sunt gratuite până la aprobarea finală. De reținut: ajustările suplimentare pot dura timp extra. De regulă, fluxul de lucru începe cu aprobarea coverului, iar apoi se realizează videoul și restul pachetului.",
    "faq.q4": "Cum se efectuează plata?",
    "faq.a4": "Lucrăm cu avans de 50% sau 100%. Plata se poate face cu cardul, Revolut, transfer bancar sau criptomonedă (USDT).",

    "final.title": "Ești gata să-ți amplifici lansarea?",
    "final.subtitle": "Alege pachetul potrivit, trimite comanda și obține vizualuri profesionale fără stres.",
    "final.btn": "Comandă acum",

    "footer.desc": "Vizualuri și Lyrics video pentru artiști din toată lumea.",
    "footer.contactsTitle": "Contact Direct",

    "modal.order.pill": "PLASARE COMANDĂ",
    "modal.order.title": "Brief pentru vizualuri",
    "modal.order.packageLabel": "Alege pachetul",
    "modal.order.artistLabel": "Pseudonimul tău / Nume *",
    "modal.order.trackLabel": "Titlul piesei *",
    "modal.order.demoLabel": "Link către piesă / demo",
    "modal.order.demoHint": "Poți trimite și mai târziu în chat",
    "modal.order.notesLabel": "Preferințe / stil / referințe",
    "modal.order.contactLabel": "Contact pentru legătură (Telegram / WhatsApp / Instagram) *",
    "modal.order.paymentLabel": "Modalitate și timp de plată",
    "modal.order.payLaterTitle": "Plată după confirmare",
    "modal.order.payLaterDesc": "Discutăm detaliile și brief-ul, apoi achiți",
    "modal.order.payNowTitle": "Achită acum online",
    "modal.order.payNowDesc": "Card (Visa/Mastercard, Revolut, Apple Pay)",
    "modal.order.submitBtn": "Trimite comanda",
    "modal.order.guarantee": "🔒 Te contactăm în 30–60 minute pentru a discuta detaliile și a porni lucrul.",

    "modal.success.title": "Comanda a fost trimisă cu succes!",
    "modal.success.desc": "Mulțumim! Am primit datele tale și pregătim deja conceptul.",
    "modal.success.payNowBtn": "💳 Mergi la plata securizată",
    "modal.success.closeBtn": "Înapoi la site",

    "modal.discuss.pill": "LEGĂTURĂ DIRECTĂ",
    "modal.discuss.title": "Discută proiectul",
    "modal.discuss.desc": "Alege metoda preferată de comunicare. Răspundem rapid, te ajutăm să alegi pachetul și calculăm costul exact.",
    "modal.discuss.fastest": "Cel mai rapid răspuns (~15 min)",
    "modal.discuss.portfolio": "Vezi stories și portofoliul",
    "modal.discuss.messages": "Mesaje vocale și fișiere"
  },

  ru: {
    "nav.packages": "Пакеты",
    "nav.cases": "Кейсы",
    "nav.reviews": "Отзывы",
    "nav.faq": "FAQ",
    "header.orderBtn": "Заказать",

    "hero.badge": "Принимаем заказы на новые релизы",
    "hero.title1": "Визуалы для",
    "hero.title2": "твоей музыки",
    "hero.subtitle": "Обложки для треков и lyrics видео, которые усиливают твой релиз и создают правильное настроение.",
    "hero.btnPackages": "Выбрать пакет",
    "hero.btnCases": "Смотреть кейсы",

    "features.turnkey.title": "Под ключ",
    "features.turnkey.desc": "Ты просто оформляешь заказ, мы делаем остальное",
    "features.ontime.title": "В срок",
    "features.ontime.desc": "Чёткие дедлайны и стабильный результат",
    "features.style.title": "Под твой стиль",
    "features.style.desc": "Учитываем твоё звучание, референсы и идеи",

    "packages.tag": "ПАКЕТЫ",
    "packages.title": "Выбери свой формат",
    "packages.subtitle": "Готовые решения под твой релиз",
    "packages.btnOrder": "Заказать",
    "packages.btnDiscuss": "Обсудить",

    "packages.cover.name": "Обложка для трека",
    "packages.cover.desc": "Уникальная обложка, которая выделит твой релиз.",
    "packages.cover.p1": "Разрешение 3000 × 3000 px, 300 DPI",
    "packages.cover.p2": "Форматы для Spotify, Apple Music, VK",
    "packages.cover.p3": "До 3 вариантов концепта на выбор",
    "packages.cover.p4": "Бесплатные правки до утверждения",

    "packages.lyrics.name": "Lyrics видео",
    "packages.lyrics.desc": "Стильное видео с текстом трека под твоё звучание.",
    "packages.lyrics.p1": "Full HD / 4K качество видеоряда",
    "packages.lyrics.p2": "Формат 16:9 для YouTube и VK Видео",
    "packages.lyrics.p3": "Анимация текста точно в такт бита",
    "packages.lyrics.p4": "Атмосферный фон с эффектами",

    "packages.full.badge": "Выгодно",
    "packages.full.name": "Полный пакет",
    "packages.full.desc": "Обложка + lyrics видео. Единый стиль, максимальный эффект.",
    "packages.full.p1": "Обложка 3000 × 3000 px для всех площадок",
    "packages.full.p2": "Lyrics видео 16:9 (YouTube) в 4K",
    "packages.full.p3": "Баннеры для соцсетей (YouTube, Facebook, Spotify Canvas)",
    "packages.full.p4": "Приоритетный срок изготовления",

    "included.title": "Что входит в работу?",
    "included.subtitle": "Всё, что нужно для сильного и готового к релизу визуала.",
    "included.item1": "Индивидуальный подход и учёт твоих референсов",
    "included.item2": "Уникальный дизайн и плавная анимация",
    "included.item3": "Согласование на каждом этапе производства",
    "included.item4": "Готовые файлы в нужных форматах (релиз, соцсети и т.д.)",
    "included.item5": "Оперативные правки до полного утверждения",

    "cases.tag": "КЕЙСЫ",
    "cases.title": "Примеры работ",
    "cases.subtitle": "Ознакомься с визуалами, созданными для последних релизов",
    "cases.row1.pill": "▶ 4K LYRICS VIDEOS & ВИЗУАЛИЗАТОРЫ",
    "cases.row2.pill": "💿 COVER ARTWORKS 3000 × 3000 PX",
    "cases.hint": "Нажми на проект, чтобы увидеть детали",
    "project.specsTitle": "Что было сделано:",
    "project.orderBtn": "Заказать такой же формат",
    "project.tabVideo": "Lyrics видео 4K",
    "project.tabCover": "Обложка 3000px",
    "project.tabBanner": "Пакет баннеров и промо",
    "project.zoomBtn": "🔍 Оригинал HD",
    "project.labelVideo": "Lyrics Video 4K Master (16:9)",
    "project.labelCover": "Обложка для стриминга (3000 × 3000 px)",
    "project.labelBanner": "Пакет промо-баннеров для соцсетей",
    "project.zoomCover": "🔍 HD 3000px",
    "project.zoomBanner": "🔍 Баннеры HD",

    "reviews.tag": "ОТЗЫВЫ",
    "reviews.title": "Что говорят артисты",
    "reviews.role": "Артист",
    "reviews.quote1": "«Сделали обложку и lyrics видео точно в моём стиле. Быстро, чётко, без лишних вопросов — 10/10.»",
    "reviews.quote2": "«Качество на уровне. Всё согласовывали, правки вносили оперативно. Советую, если нужен сильный визуал к релизу.»",
    "reviews.quote3": "«Очень удобно: оформил заказ, скинул референсы — и просто получил готовый результат в срок. Буду ещё заказывать.»",

    "faq.tag": "FAQ",
    "faq.title": "Частые вопросы",
    "faq.q1": "Сколько времени занимает работа над заказом?",
    "faq.a1": "Обычно работа занимает от 3 до максимум 7 дней в зависимости от сложности. Если проект нужен быстрее (срочный / экспресс заказ), это обсуждается индивидуально.",
    "faq.q2": "В каких форматах я получу готовые файлы?",
    "faq.a2": "Обложки: Всегда в формате PNG высокого разрешения 3000×3000 px, 300 DPI (строго по стандартам Spotify, Apple Music и др.). Видео: Мастер 4K UHD 16:9 в современном кодеке HEVC / H.265 (или H.264/MP4 по запросу) для максимального битрейта и чёткости на YouTube.",
    "faq.q3": "Что если мне понадобятся правки?",
    "faq.a3": "Все базовые правки по цвету, шрифтам, таймингу и деталям бесплатны до финального утверждения. Важно учитывать: дополнительные правки могут потребовать экстра-время. Обычно сначала утверждается обложка, а затем создаётся видео и остальные промо-материалы.",
    "faq.q4": "Как происходит оплата?",
    "faq.a4": "Работаем по предоплате 50% или 100%. Оплатить можно банковской картой (Visa/Mastercard), Revolut, через СБП/Тинькофф/Сбер, перевод или криптовалюту (USDT).",

    "final.title": "Готов усилить свой релиз?",
    "final.subtitle": "Выбери подходящий пакет, оформи заказ и получи профессиональные визуалы без лишнего стресса.",
    "final.btn": "Заказать сейчас",

    "footer.desc": "Визуалы и Lyrics видео для музыкантов по всему миру.",
    "footer.contactsTitle": "Прямая связь",

    "modal.order.pill": "ОФОРМЛЕНИЕ ЗАКАЗА",
    "modal.order.title": "Бриф на визуалы",
    "modal.order.packageLabel": "Выбери пакет",
    "modal.order.artistLabel": "Твой псевдоним / Имя *",
    "modal.order.trackLabel": "Название трека *",
    "modal.order.demoLabel": "Ссылка на трек / демо",
    "modal.order.demoHint": "Можно прислать позже в переписке",
    "modal.order.notesLabel": "Пожелания / стиль / референсы",
    "modal.order.contactLabel": "Контакт для связи (Telegram / WhatsApp / Instagram) *",
    "modal.order.paymentLabel": "Способ и время оплаты",
    "modal.order.payLaterTitle": "Оплата после согласования",
    "modal.order.payLaterDesc": "Обсуждаем детали и бриф, затем оплата",
    "modal.order.payNowTitle": "Оплатить сейчас онлайн",
    "modal.order.payNowDesc": "Картой (Visa/Mastercard, Revolut, Apple Pay)",
    "modal.order.submitBtn": "Отправить заявку",
    "modal.order.guarantee": "🔒 Мы свяжемся с тобой в течение 30–60 минут для согласования деталей и старта работы.",

    "modal.success.title": "Заявка успешно отправлена!",
    "modal.success.desc": "Спасибо! Мы получили твои данные и уже готовим концепт.",
    "modal.success.payNowBtn": "💳 Перейти к безопасной оплате",
    "modal.success.closeBtn": "Вернуться на сайт",

    "modal.discuss.pill": "ПРЯМАЯ СВЯЗЬ",
    "modal.discuss.title": "Обсудить проект",
    "modal.discuss.desc": "Выбери удобный способ связи. Отвечаем быстро, поможем выбрать формат и рассчитаем точную стоимость.",
    "modal.discuss.fastest": "Самый быстрый ответ (~15 мин)",
    "modal.discuss.portfolio": "Смотри сторис и портфолио",
    "modal.discuss.messages": "Голосовые и файлы"
  }
};

// ==========================================================================
// 2. CURRENCY & PRICING CONFIGURATION
// ==========================================================================
const currencies = {
  USD: { symbol: "$", code: "USD" },
  EUR: { symbol: "€", code: "EUR" },
  MDL: { symbol: "lei", code: "MDL" },
  RON: { symbol: "lei", code: "RON" },
  RUB: { symbol: "₽", code: "RUB" }
};

const priceMatrix = {
  cover: { USD: "$55", EUR: "50 €", MDL: "1 000 lei", RON: "250 lei", RUB: "5 000 ₽" },
  lyrics: { USD: "$90", EUR: "80 €", MDL: "1 600 lei", RON: "400 lei", RUB: "8 000 ₽" },
  full: { USD: "$130", EUR: "120 €", MDL: "2 400 lei", RON: "600 lei", RUB: "12 000 ₽" }
};

const oldPriceMatrix = {
  full: { USD: "$145", EUR: "130 €", MDL: "2 600 lei", RON: "650 lei", RUB: "13 000 ₽" }
};

// State
let currentLang = 'en';
let currentCurrency = 'USD';

// Detect Country / Currency automatically
function detectUserCurrency() {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const locale = (navigator.language || navigator.userLanguage || "").toLowerCase();

    if (timezone.includes("Chisinau") || locale.includes("md")) {
      return "MDL";
    }
    if (timezone.includes("Bucharest") || locale.includes("ro")) {
      return "RON";
    }
    if (timezone.includes("Moscow") || timezone.includes("Samara") || timezone.includes("Yekaterinburg") || timezone.includes("Almaty") || timezone.includes("Minsk")) {
      return "RUB";
    }
    if (timezone.includes("London") || timezone.includes("Paris") || timezone.includes("Berlin") || timezone.includes("Rome") || timezone.includes("Madrid") || timezone.includes("Europe")) {
      return "EUR";
    }
  } catch (e) {
    console.warn("Currency detection fallback:", e);
  }
  return "USD";
}

// Detect User Language
function detectUserLanguage() {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const locale = (navigator.language || navigator.userLanguage || "").toLowerCase();

    if (timezone.includes("Chisinau") || timezone.includes("Bucharest") || locale.startsWith("ro")) {
      return "ro";
    }
    if (timezone.includes("Moscow") || timezone.includes("Samara") || timezone.includes("Minsk") || timezone.includes("Almaty") || locale.startsWith("ru")) {
      return "ru";
    }
  } catch (e) {
    console.warn("Language detection fallback:", e);
  }
  return "en"; // Default is EN as requested
}

// Update Currency in UI
function setCurrency(currCode) {
  if (!currencies[currCode]) return;
  currentCurrency = currCode;

  // Update header buttons
  const symbolEl = document.getElementById('currentCurrencySymbol');
  const codeEl = document.getElementById('currentCurrencyCode');
  if (symbolEl) symbolEl.textContent = currencies[currCode].symbol;
  if (codeEl) codeEl.textContent = currencies[currCode].code;

  // Update Package cards
  document.querySelectorAll('.package-card').forEach(card => {
    const pkg = card.getAttribute('data-package');
    const priceEl = card.querySelector('.price-value');
    if (priceEl && priceMatrix[pkg]) {
      priceEl.textContent = priceMatrix[pkg][currCode];
    }
    const oldPriceEl = card.querySelector('.old-price');
    if (oldPriceEl && oldPriceMatrix[pkg]) {
      oldPriceEl.textContent = oldPriceMatrix[pkg][currCode];
    }
  });

  // Update Modal radio prices
  if (document.getElementById('modalPriceCover')) {
    document.getElementById('modalPriceCover').textContent = priceMatrix.cover[currCode];
  }
  if (document.getElementById('modalPriceLyrics')) {
    document.getElementById('modalPriceLyrics').textContent = priceMatrix.lyrics[currCode];
  }
  if (document.getElementById('modalPriceFull')) {
    document.getElementById('modalPriceFull').textContent = priceMatrix.full[currCode];
  }
}

// Update Language in UI
function setLanguage(langCode) {
  if (!translations[langCode]) return;
  currentLang = langCode;

  // Update lang switch buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === langCode);
  });

  // Update html lang attribute
  document.documentElement.lang = langCode;

  // Replace text in elements with data-i18n (except kinetic title handled separately)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key === 'hero.title1' || key === 'hero.title2') return;
    if (translations[langCode][key]) {
      el.textContent = translations[langCode][key];
    }
  });

  // Refresh open project modal if active
  const projectModal = document.getElementById('projectModal');
  if (projectModal && projectModal.classList.contains('active') && currentModalProjectId) {
    openProjectModal(currentModalProjectId);
  }

  // Cinematic optical blur focus animation on language change
  renderCinematicTitle(langCode);

  // Maintain any admin custom media overrides
  if (typeof loadAdminOverrides === 'function') {
    loadAdminOverrides();
  }
  if (typeof updateDemoLyricsDisplay === 'function') {
    updateDemoLyricsDisplay();
  }
}

// Cinematic Title Word Generator
function renderCinematicTitle(langCode) {
  const line1El = document.getElementById('heroTitleLine1');
  const line2El = document.getElementById('heroTitleLine2');
  if (!line1El || !line2El) return;

  const text1 = translations[langCode]["hero.title1"] || "Visuals for";
  const text2 = translations[langCode]["hero.title2"] || "your music";

  const words1 = text1.split(/\s+/).filter(Boolean);
  const words2 = text2.split(/\s+/).filter(Boolean);

  let cIdx = 0;
  line1El.innerHTML = words1.map(w => `<span class="cinematic-word" style="--c-idx:${cIdx++}">${w}</span>`).join(' ');
  line2El.innerHTML = words2.map(w => `<span class="cinematic-word text-gradient" style="--c-idx:${cIdx++}">${w}</span>`).join(' ');
}

// ==========================================================================
// 2.5 PORTFOLIO PROJECTS DATA
// ==========================================================================
const projectsData = {
  // --- ROW 2: COVER ARTWORKS (3000x3000px) ---
  parabellum: {
    title: "Si vis pacem Parabellum",
    pill: { en: "COVER ARTWORK 3000 × 3000 PX", ro: "COVER ARTWORK 3000 × 3000 PX", ru: "ОБЛОЖКА 3000 × 3000 PX" },
    badge: "LYRICS VIDEO 4K",
    subtitle: "Lyrics Video 4K Master",
    img: "assets/covers/cover_parabellum.jpg",
    bannerImg: "assets/banners/banner_moostaf.jpg",
    videoSrc: "assets/videos/video_parabellum.mp4",
    videoPoster: "assets/videos/posters/video_parabellum_poster.jpg",
    isVideo: false,
    package: "full",
    placement: "both",
    inVideo: true,
    inCovers: true,
    specs: {
      en: [
        "Master Resolution: 3000 × 3000 px, 300 DPI (RGB)",
        "Monochrome film noir aesthetic with subtle analog grain & texture",
        "Custom calligraphy title lettering & signature stroke",
        "Stream-ready for Spotify, Apple Music, Tidal, Deezer",
        "Delivery timeframe: 48h turnaround with unlimited refinements"
      ],
      ro: [
        "Rezoluție Master: 3000 × 3000 px, 300 DPI (RGB)",
        "Stil cinematic noir monocrom cu textură analogică fină",
        "Caligrafie & lettering vectorial personalizat",
        "Formatat pentru Spotify, Apple Music, Deezer, Tidal",
        "Timp de execuție: 48 ore cu modificări incluse"
      ],
      ru: [
        "Мастер-разрешение: 3000 × 3000 px, 300 DPI",
        "Кинематографичный ч/б нуар-стиль с аналоговым зерном и фактурой",
        "Авторский каллиграфический леттеринг названия",
        "Полное соответствие стандартам Spotify, Apple Music, VK",
        "Срок сдачи: 48 часов с бесплатными правками"
      ]
    }
  },
  na_krasivom: {
    title: "На красивом",
    pill: { en: "FULL RELEASE", ro: "FULL RELEASE", ru: "FULL RELEASE" },
    badge: "FULL RELEASE",
    subtitle: "Lyrics Video + Cover Suite",
    img: "assets/covers/cover_na_krasivom.jpg",
    bannerImg: "assets/banners/banner_na_krasivom.jpg",
    videoSrc: "assets/videos/video_na_krasivom.mp4",
    videoPoster: "assets/videos/posters/video_na_krasivom_poster.jpg",
    isVideo: false,
    package: "full",
    placement: "both",
    inVideo: true,
    inCovers: true,
    specs: {
      en: [
        "Master Resolution: 3000 × 3000 px, 300 DPI",
        "Duo artist studio retouching & high-contrast skin tones",
        "Atmospheric crimson flare, sparks & bokeh lights",
        "Clean minimal signature typography overlay",
        "100% compliant with global streaming platforms"
      ],
      ro: [
        "Rezoluție Master: 3000 × 3000 px, 300 DPI",
        "Retuș de studio pentru duo de artiști și corecție avansată de culori",
        "Efecte atmosferice: lumini crimson, scântei și bokeh",
        "Tipografie albă minimalistă de mare impact",
        "Formatat conform standardelor platformelor de streaming"
      ],
      ru: [
        "Мастер-разрешение: 3000 × 3000 px, 300 DPI",
        "Студийная ретушь дуэта артистов и глубокая цветокоррекция",
        "Атмосферное алое свечение, искры и боке",
        "Минималистичный леттеринг названия",
        "Готово к релизу на всех цифровых площадках"
      ]
    }
  },
  ribz: {
    title: "Ribz ft Conway The Machine — Legend Like Kareem",
    pill: { en: "COVER ARTWORK 3000 × 3000 PX", ro: "COVER ARTWORK 3000 × 3000 PX", ru: "ОБЛОЖКА 3000 × 3000 PX" },
    badge: "COVER ART",
    subtitle: "Single Cover 3000×3000 px",
    img: "assets/covers/cover_ribz.jpg",
    bannerImg: "",
    videoSrc: "",
    videoPoster: "",
    isVideo: false,
    package: "cover",
    placement: "cover",
    inVideo: false,
    inCovers: true,
    specs: {
      en: [
        "Master Resolution: 3000 × 3000 px, 300 DPI",
        "Vintage torn-paper hip-hop photo collage aesthetic",
        "London street photography integration (Kilburn / Camden)",
        "Custom graffiti tag & typewriter stencil typography",
        "Delivered for international DSP distribution"
      ],
      ro: [
        "Rezoluție Master: 3000 × 3000 px, 300 DPI",
        "Colaj foto hip-hop vintage cu efect de hârtie ruptă",
        "Integrare fotografie stradală Londra (Kilburn / Camden)",
        "Tipografie graffiti & stencil underground",
        "Formatat pentru distribuție internațională pe platforme"
      ],
      ru: [
        "Мастер-разрешение: 3000 × 3000 px, 300 DPI",
        "Винтажный хип-хоп фотоколлаж с эффектом рваной бумаги",
        "Интеграция лондонских стрит-фотографий (Kilburn, Camden)",
        "Граффити-теги и стилизованный уличный шрифт",
        "Полный комплект файлов для цифровой дистрибуции"
      ]
    }
  },
  laureall: {
    title: "Laureall — Pa Pa",
    pill: { en: "COVER ARTWORK 3000 × 3000 PX", ro: "COVER ARTWORK 3000 × 3000 PX", ru: "ОБЛОЖКА 3000 × 3000 PX" },
    badge: "COVER ART",
    subtitle: "Single Cover 3000×3000 px",
    img: "assets/covers/cover_laureall.jpg",
    bannerImg: "",
    videoSrc: "",
    videoPoster: "",
    isVideo: false,
    package: "cover",
    placement: "cover",
    inVideo: false,
    inCovers: true,
    specs: {
      en: [
        "Master Resolution: 3000 × 3000 px, 300 DPI",
        "Cinematic studio portrait with vintage grain & dust texture",
        "Vibrant neon pink signature calligraphy with outer glow",
        "Optimized for high visibility on smartphone music apps",
        "Exported in lossless TIFF, PNG, and JPG formats"
      ],
      ro: [
        "Rezoluție Master: 3000 × 3000 px, 300 DPI",
        "Portret de studio cinematic cu granulație de film analog",
        "Caligrafie neon pink vibrantă cu efect de strălucire",
        "Optimizat pentru vizibilitate maximă pe smartphone-uri",
        "Exportat în formate fără pierdere de calitate (PNG, JPG)"
      ],
      ru: [
        "Мастер-разрешение: 3000 × 3000 px, 300 DPI",
        "Кинематографичный студийный портрет с плёночным зерном",
        "Яркий неоновый розовый рукописный шрифт со свечением",
        "Оптимизировано под отображение в мобильных плеерах",
        "Файлы без сжатия: PNG, JPG, готово к публикации"
      ]
    }
  },
  silvika: {
    title: "SILVIKA — ZERO",
    pill: { en: "COVER ARTWORK 3000 × 3000 PX", ro: "COVER ARTWORK 3000 × 3000 PX", ru: "ОБЛОЖКА 3000 × 3000 PX" },
    badge: "COVER ART",
    subtitle: "Single Cover 3000×3000 px",
    img: "assets/covers/cover_silvika.jpg",
    bannerImg: "assets/banners/banner_na_krasivom.jpg",
    videoSrc: "",
    videoPoster: "",
    isVideo: false,
    package: "cover",
    placement: "cover",
    inVideo: false,
    inCovers: true,
    specs: {
      en: [
        "Master Resolution: 3000 × 3000 px, 300 DPI",
        "Dramatic warehouse cinematic frame capture & grading",
        "Bold blood-red title typography with high contrast",
        "Wet floor reflection & ambient darkness enhancement",
        "Approved for Spotify Canvas & worldwide single release"
      ],
      ro: [
        "Rezoluție Master: 3000 × 3000 px, 300 DPI",
        "Cadru dramatic din hală industrială / warehouse cinematic",
        "Tipografie bold roșu-sânge cu impact vizual puternic",
        "Reflexie pe podea umedă și atmosferă întunecată",
        "Aprobat pentru Spotify Canvas și lansare internațională"
      ],
      ru: [
        "Мастер-разрешение: 3000 × 3000 px, 300 DPI",
        "Драматичный кадр из видеоклипа в заброшенном цехе",
        "Массивный кроваво-красный шрифт с сильным визуальным фокусом",
        "Глубокие тени, мокрый пол и кинематографичный контраст",
        "Готово для Spotify Canvas и официального релиза"
      ]
    }
  },
  ciorniy: {
    title: "CIORNIY — Doar ea",
    pill: { en: "COVER ARTWORK 3000 × 3000 PX", ro: "COVER ARTWORK 3000 × 3000 PX", ru: "ОБЛОЖКА 3000 × 3000 PX" },
    badge: "COVER ART",
    subtitle: "Cover 3000×3000 + YT & Reels",
    img: "assets/covers/cover_ciorniy.jpg",
    bannerImg: "assets/banners/banner_ciorniy_doar_ea.jpg",
    videoSrc: "",
    videoPoster: "",
    isVideo: false,
    package: "cover",
    placement: "cover",
    inVideo: false,
    inCovers: true,
    specs: {
      en: [
        "Master Resolution: 3000 × 3000 px, 300 DPI",
        "Authentic vintage Polaroid frame texture and paper grain",
        "Cobalt blue mood lighting with artistic long-exposure motion blur",
        "Handwritten black marker signature typography",
        "Full DSP compatibility: Spotify, Apple, Deezer, YouTube"
      ],
      ro: [
        "Rezoluție Master: 3000 × 3000 px, 300 DPI",
        "Ramă foto Polaroid retro cu textură realistă de carton",
        "Iluminare neon albastru-cobalt cu motion blur artistic",
        "Tipografie stil marker negru scris autentic de mână",
        "Compatibilitate completă cu Spotify, Apple Music, Deezer"
      ],
      ru: [
        "Мастер-разрешение: 3000 × 3000 px, 300 DPI",
        "Аутентичная текстура полароидного снимка с фактурой бумаги",
        "Глубокий синий неоновый свет с художественным смазом движения",
        "Надпись чёрным маркером ручной работы",
        "Полное соответствие стандартам всех стриминговых сервисов"
      ]
    }
  },
  young_queen: {
    title: "MISSYRIGHT — Young Queen",
    pill: { en: "LYRICS VIDEO 4K", ro: "LYRICS VIDEO 4K", ru: "LYRICS ВИДЕО 4K" },
    badge: "LYRICS VIDEO 4K",
    subtitle: "Lyrics Video 4K Master",
    img: "assets/covers/cover_young_queen.jpg",
    bannerImg: "assets/banners/banner_young_queen.jpg",
    videoSrc: "assets/videos/video_young_queen.mp4",
    videoPoster: "assets/videos/posters/video_young_queen_poster.jpg",
    isVideo: true,
    package: "full",
    placement: "both",
    inVideo: true,
    inCovers: true,
    specs: {
      en: [
        "Master Resolution: 3000 × 3000 px, 300 DPI",
        "Moody deep teal portrait grading with dark sunglasses styling",
        "Hand-drawn neon doodle crown, floating diamonds & bullets",
        "Aggressive brush lettering title for urban / trap release",
        "Ready for immediate worldwide digital distribution"
      ],
      ro: [
        "Rezoluție Master: 3000 × 3000 px, 300 DPI",
        "Portret urban moody în nuanțe profunde de teal și ochelari negri",
        "Grafică doodle desenată de mână: coroană neon, diamante și gloanțe",
        "Tipografie brush energică adaptată pentru genul trap / hip-hop",
        "Gata de încărcare pe toate platformele muzicale"
      ],
      ru: [
        "Мастер-разрешение: 3000 × 3000 px, 300 DPI",
        "Стильный портрет в глубоких тёмно-бирюзовых тонах",
        "Авторские дудл-элементы: светящаяся корона, алмазы и патроны",
        "Энергичный браш-шрифт для трэп/хип-хоп релиза",
        "Подготовлено для загрузки на лейблы и агрегаторы"
      ]
    }
  },
  jenika: {
    title: "JENIKA — Altcineva",
    pill: { en: "FULL RELEASE", ro: "FULL RELEASE", ru: "FULL RELEASE" },
    badge: "FULL RELEASE",
    subtitle: "Cover Art + Promo Suite",
    img: "assets/covers/cover_jenika.jpg",
    bannerImg: "assets/banners/banner_jenika.jpg",
    videoSrc: "",
    videoPoster: "",
    isVideo: false,
    package: "full",
    placement: "cover",
    inVideo: false,
    inCovers: true,
    specs: {
      en: [
        "Master Resolution: 3000 × 3000 px, 300 DPI",
        "Clean emotional portrait design with selective color accent",
        "Refined typography balance tailored to melodic pop / indie",
        "Formatted for Spotify Canvas and promo social banners",
        "Turnaround in 48 hours with full revisions"
      ],
      ro: [
        "Rezoluție Master: 3000 × 3000 px, 300 DPI",
        "Design curat și emoțional cu accente cromatice subtile",
        "Tipografie echilibrată și adaptată piesei pop / indie",
        "Optimizat pentru Spotify Canvas și postări de promovare",
        "Livrare în 48 de ore cu toate reviziile incluse"
      ],
      ru: [
        "Мастер-разрешение: 3000 × 3000 px, 300 DPI",
        "Эмоциональный и чистый портретный стиль с акcents",
        "Сбалансированная типографика для поп/инди релиза",
        "Оптимизировано для Spotify Canvas и промо-кампаний",
        "Срок сдачи 48 часов с полным пакетом правок"
      ]
    }
  },

  // --- ROW 1: 4K VIDEOS & FULL RELEASES ---
  moostaf: {
    title: "MOOSTAF — Отпускаю",
    pill: { en: "LYRICS VIDEO 4K", ro: "LYRICS VIDEO 4K", ru: "LYRICS ВИДЕО 4K" },
    badge: "LYRICS VIDEO 4K",
    subtitle: "Lyrics Video 4K Master",
    img: "assets/covers/cover_silvika.jpg",
    bannerImg: "assets/banners/banner_moostaf.jpg",
    videoSrc: "assets/videos/video_moostaf.mp4",
    videoPoster: "assets/videos/posters/video_moostaf_poster.jpg",
    isVideo: true,
    package: "lyrics",
    placement: "video",
    inVideo: true,
    inCovers: false,
    specs: {
      en: [
        "Ultra HD 4K (3840 × 2160 px), 60 FPS Master Video",
        "Beat-synced dynamic typography matched frame-by-frame",
        "Cinematic atmospheric effects: camera shake, smoke, sparks",
        "Includes YouTube 16:9 Master + Spotify Canvas 9:16 vertical loop",
        "Color-matched precisely to the song's audio master"
      ],
      ro: [
        "Rezoluție Ultra HD 4K (3840 × 2160 px), 60 FPS",
        "Sincronizare dinamică cadru cu cadru a versurilor pe ritm",
        "Efecte cinematografice de atmosferă: vibrații cameră, fum, particule",
        "Include versiune 16:9 pentru YouTube și buclă verticală 9:16 pentru Spotify Canvas",
        "Corecție de culoare adaptată perfect pe stilul piesei"
      ],
      ru: [
        "Мастер-видео в формате Ultra HD 4K (3840 × 2160 px), 60 кадров/сек",
        "Покадровая динамическая анимация текста строго в такт бита",
        "Атмосферные эффекты: вибрация камеры, дым, вспышки",
        "Включает 16:9 для YouTube и вертикальный 9:16 луп для Spotify Canvas",
        "Полный монтаж и рендеринг в ProRes / H.264"
      ]
    }
  },
  skolko_stoit: {
    title: "Si vis pacem — Сколько стоит боль?",
    pill: { en: "LYRICS VIDEO 4K", ro: "LYRICS VIDEO 4K", ru: "LYRICS ВИДЕО 4K" },
    badge: "LYRICS VIDEO 4K",
    subtitle: "Lyrics Video 4K Master",
    img: "assets/covers/cover_parabellum.jpg",
    bannerImg: "assets/banners/banner_moostaf.jpg",
    videoSrc: "assets/videos/video_parabellum.mp4",
    videoPoster: "assets/videos/posters/video_skolko_stoit_poster.jpg",
    isVideo: true,
    package: "lyrics",
    placement: "video",
    inVideo: true,
    inCovers: false,
    specs: {
      en: [
        "4K UHD urban paper-rip collage animation with stop-motion feel",
        "Beat-pulse visual reactive effects synchronized with 90s hip-hop groove",
        "Underground graffiti text animation popping on snare hits",
        "Includes full widescreen YouTube video and vertical promo snippets",
        "Express studio mastering turnaround"
      ],
      ro: [
        "Animație colaj urban 4K UHD în stil stop-motion cu hârtie ruptă",
        "Efecte vizuale reactive sincronizate pe ritmul tobelor hip-hop",
        "Animație de text graffiti care explodează pe loviturile de tobă",
        "Include versiune widescreen pentru YouTube și snippet-uri verticale",
        "Mastering video de calitate superioară"
      ],
      ru: [
        "4K UHD урбан-коллаж с эффектом рваной бумаги и покадровой анимацией",
        "Реактивные визуальные эффекты, пульсирующие в такт олдскул-бита",
        "Граффити-анимация текста с акцентами на снейрах и бас-бочке",
        "Широкоформатная версия 16:9 + вертикальные промо-ролики",
        "Экспресс-монтаж и адаптация под все площадки"
      ]
    }
  },
  hooligan: {
    title: "MISSYRIGHT — Полюбила хулигана",
    pill: { en: "LYRICS VIDEO 4K", ro: "LYRICS VIDEO 4K", ru: "LYRICS ВИДЕО 4K" },
    badge: "LYRICS VIDEO 4K",
    subtitle: "Lyrics Video 4K Master",
    img: "assets/covers/cover_young_queen.jpg",
    bannerImg: "assets/banners/banner_young_queen.jpg",
    videoSrc: "assets/videos/video_young_queen.mp4",
    videoPoster: "assets/videos/posters/video_hooligan_poster.jpg",
    isVideo: true,
    package: "lyrics",
    placement: "video",
    inVideo: true,
    inCovers: false,
    specs: {
      en: [
        "4K UHD (3840 × 2160 px) cinematic aspect ratio 2.39:1",
        "High-glow neon pink typography reacting to vocal power and hook",
        "Cinematic film dust, slow zoom and subtle lighting pulses",
        "Both 16:9 YouTube video and 9:16 vertical TikTok/Reels version",
        "Delivered with priority support"
      ],
      ro: [
        "Rezoluție 4K UHD (3840 × 2160 px) în format cinematic 2.39:1",
        "Tipografie neon pink intensă care reacționează la refren și voce",
        "Praf de film vintage, zoom lent și pulsații subtile de lumină",
        "Include versiune orizontală 16:9 și versiune 9:16 pentru TikTok/Reels",
        "Predare cu suport complet și modificări incluse"
      ],
      ru: [
        "4K UHD (3840 × 2160 px) в кинематографичном формате 2.39:1",
        "Светящийся розовый неон, реагирующий на дроп и вокальные акценты",
        "Винтажная плёночная пыль, медленный зум и световые пульсации",
        "Комплект 16:9 для YouTube + вертикальное 9:16 для TikTok и Reels",
        "Приоритетный рендеринг и гарантия качества"
      ]
    }
  },
  silvika_video: {
    title: "MOOSTAF — Отпускаю",
    pill: { en: "LYRICS VIDEO 4K", ro: "LYRICS VIDEO 4K", ru: "LYRICS ВИДЕО 4K" },
    badge: "LYRICS VIDEO 4K",
    subtitle: "Lyrics Video 4K Master",
    img: "assets/covers/cover_silvika.jpg",
    bannerImg: "assets/banners/banner_moostaf.jpg",
    videoSrc: "assets/videos/video_moostaf.mp4",
    videoPoster: "assets/videos/posters/video_moostaf_poster.jpg",
    isVideo: true,
    package: "lyrics",
    specs: {
      en: [
        "Ultra HD 4K (3840 × 2160 px), 60 FPS Master Video",
        "Beat-synced dynamic typography matched frame-by-frame",
        "Cinematic atmospheric effects: camera shake, smoke, sparks",
        "Includes YouTube 16:9 Master + Spotify Canvas 9:16 vertical loop",
        "Color-matched precisely to the song's audio master"
      ],
      ro: [
        "Rezoluție Ultra HD 4K (3840 × 2160 px), 60 FPS",
        "Sincronizare dinamică cadru cu cadru a versurilor pe ritm",
        "Efecte cinematografice de atmosferă: vibrații cameră, fum, particule",
        "Include versiune 16:9 pentru YouTube și buclă verticală 9:16 pentru Spotify Canvas",
        "Corecție de culoare adaptată perfect pe stilul piesei"
      ],
      ru: [
        "Мастер-видео в формате Ultra HD 4K (3840 × 2160 px), 60 кадров/сек",
        "Покадровая динамическая анимация текста строго в такт бита",
        "Атмосферные эффекты: вибрация камеры, дым, вспышки",
        "Включает 16:9 для YouTube и вертикальный 9:16 луп для Spotify Canvas",
        "Полный монтаж и рендеринг в ProRes / H.264"
      ]
    }
  },
  jenika_video: {
    title: "JENIKA — Altcineva",
    pill: { en: "FULL RELEASE", ro: "FULL RELEASE", ru: "FULL RELEASE" },
    badge: "FULL RELEASE",
    subtitle: "Lyrics Video + Cover Suite",
    img: "assets/covers/cover_jenika.jpg",
    bannerImg: "assets/banners/banner_jenika.jpg",
    videoSrc: "assets/videos/video_ori_blaze.mp4",
    videoPoster: "assets/videos/posters/video_ori_blaze_poster.jpg",
    isVideo: true,
    package: "full",
    specs: {
      en: [
        "4K UHD (3840 × 2160 px) smooth motion visualizer",
        "Subtle floating dust particles and slow camera zoom easing",
        "Elegant animated title card and seamless looping background",
        "Optimized for crystal-clear YouTube 4K streaming bitrate",
        "Includes social cut-downs for Instagram and TikTok teasers"
      ],
      ro: [
        "Rezoluție 4K UHD (3840 × 2160 px) cu mișcare lină continuă",
        "Particule plutitoare, raze subtile și zoom cinematografic lent",
        "Animație elegantă de titlu și buclă perfectă fără întreruperi",
        "Optimizat pentru compresia YouTube la bitrate 4K maxim",
        "Include teasere video 9:16 pentru Instagram Stories și TikTok"
      ],
      ru: [
        "4K UHD (3840 × 2160 px) плавный визуализатор релиза",
        "Плавающие частицы, мягкие световые лучи и плавный зум камеры",
        "Элегантная анимация названия и бесшовное зацикливание",
        "Оптимизировано под максимальный битрейт YouTube 4K",
        "Включает вертикальные сниппеты для сторис и рилс"
      ]
    }
  },
  ciorniy_video: {
    title: "CIORNIY — Iubirea e o boală grea",
    pill: { en: "LYRICS VIDEO 4K", ro: "LYRICS VIDEO 4K", ru: "LYRICS ВИДЕО 4K" },
    badge: "LYRICS VIDEO 4K",
    subtitle: "Lyrics Video 4K Master",
    img: "",
    bannerImg: "assets/banners/banner_ciorniy.jpg",
    videoSrc: "assets/videos/video_ciorniy.mp4",
    videoPoster: "assets/videos/posters/video_ciorniy_poster.jpg",
    isVideo: true,
    package: "lyrics",
    placement: "video",
    inVideo: true,
    inCovers: false,
    specs: {
      en: [
        "4K UHD 16:9 Master Video with VHS chromatic aberration & grain",
        "Fluid handwritten lyrics animation appearing in sync with vocals",
        "Deep cobalt blue atmosphere with rhythmic pulse on bass kicks",
        "Vertical 9:16 version for Reels and TikTok promo included",
        "Ready for immediate YouTube Music release"
      ],
      ro: [
        "Video Master 4K UHD 16:9 cu aberație cromatică VHS și granulație",
        "Animație fluidă a textului scris de mână în sincron cu vocea",
        "Atmosferă albastră cobalt cu pulsație ritmică pe toba mare",
        "Include versiune 9:16 verticală pentru TikTok și Reels",
        "Gata de lansare pe YouTube și YouTube Music"
      ],
      ru: [
        "4K UHD 16:9 видеоряд с эффектом хроматических аберраций и плёнки",
        "Плавное появление рукописного текста точно под вокальную партию",
        "Глубокая синяя неоновая атмосфера с пульсацией на басовых ударах",
        "Вертикальная версия 9:16 для Reels и Shorts в комплекте",
        "Готово к моментальной публикации на YouTube"
      ]
    }
  },
  ribz_video: {
    title: "Si vis pacem — Сколько стоит боль?",
    pill: { en: "LYRICS VIDEO 4K", ro: "LYRICS VIDEO 4K", ru: "LYRICS ВИДЕО 4K" },
    badge: "LYRICS VIDEO 4K",
    subtitle: "Lyrics Video 4K Master",
    img: "assets/covers/cover_ribz.jpg",
    bannerImg: "assets/banners/banner_moostaf.jpg",
    videoSrc: "assets/videos/video_moostaf.mp4",
    videoPoster: "assets/videos/posters/video_skolko_stoit_poster.jpg",
    isVideo: true,
    package: "lyrics",
    specs: {
      en: [
        "4K UHD urban paper-rip collage animation with stop-motion feel",
        "Beat-pulse visual reactive effects synchronized with 90s hip-hop groove",
        "Underground graffiti text animation popping on snare hits",
        "Includes full widescreen YouTube video and vertical promo snippets",
        "Express studio mastering turnaround"
      ],
      ro: [
        "Animație colaj urban 4K UHD în stil stop-motion cu hârtie ruptă",
        "Efecte vizuale reactive sincronizate pe ritmul tobelor hip-hop",
        "Animație de text graffiti care explodează pe loviturile de tobă",
        "Include versiune widescreen pentru YouTube și snippet-uri verticale",
        "Mastering video de calitate superioară"
      ],
      ru: [
        "4K UHD урбан-коллаж с эффектом рваной бумаги и покадровой анимацией",
        "Реактивные визуальные эффекты, пульсирующие в такт олдскул-бита",
        "Граффити-анимация текста с акцентами на снейрах и бас-бочке",
        "Широкоформатная версия 16:9 + вертикальные промо-ролики",
        "Экспресс-монтаж и адаптация под все площадки"
      ]
    }
  },
  laureall_video: {
    title: "MISSYRIGHT — Полюбила хулигана",
    pill: { en: "LYRICS VIDEO 4K", ro: "LYRICS VIDEO 4K", ru: "LYRICS ВИДЕО 4K" },
    badge: "LYRICS VIDEO 4K",
    subtitle: "Lyrics Video 4K Master",
    img: "assets/covers/cover_laureall.jpg",
    bannerImg: "assets/banners/banner_jenika.jpg",
    videoSrc: "assets/videos/video_young_queen.mp4",
    videoPoster: "assets/videos/posters/video_hooligan_poster.jpg",
    isVideo: true,
    package: "lyrics",
    specs: {
      en: [
        "4K UHD (3840 × 2160 px) cinematic aspect ratio 2.39:1",
        "High-glow neon pink typography reacting to vocal power and hook",
        "Cinematic film dust, slow zoom and subtle lighting pulses",
        "Both 16:9 YouTube video and 9:16 vertical TikTok/Reels version",
        "Delivered with priority support"
      ],
      ro: [
        "Rezoluție 4K UHD (3840 × 2160 px) în format cinematic 2.39:1",
        "Tipografie neon pink intensă care reacționează la refren și voce",
        "Praf de film vintage, zoom lent și pulsații subtile de lumină",
        "Include versiune orizontală 16:9 și versiune 9:16 pentru TikTok/Reels",
        "Predare cu suport complet și modificări incluse"
      ],
      ru: [
        "4K UHD (3840 × 2160 px) в кинематографичном формате 2.39:1",
        "Светящийся розовый неон, реагирующий на дроп и вокальные акценты",
        "Винтажная плёночная пыль, медленный зум и световые пульсации",
        "Комплект 16:9 для YouTube + вертикальное 9:16 для TikTok и Reels",
        "Приоритетный рендеринг и гарантия качества"
      ]
    }
  },
  young_queen_video: {
    title: "MISSYRIGHT — Young Queen",
    pill: { en: "LYRICS VIDEO 4K", ro: "LYRICS VIDEO 4K", ru: "LYRICS ВИДЕО 4K" },
    badge: "LYRICS VIDEO 4K",
    subtitle: "Lyrics Video 4K Master",
    img: "assets/covers/cover_young_queen.jpg",
    bannerImg: "assets/banners/banner_young_queen.jpg",
    videoSrc: "assets/videos/video_young_queen.mp4",
    videoPoster: "assets/videos/posters/video_young_queen_poster.jpg",
    isVideo: true,
    package: "lyrics",
    specs: {
      en: [
        "4K UHD high-impact motion visualizer with 808 bass reactivity",
        "Animated neon doodle crown, diamond shines & floating shell casings",
        "Fast kinetic cuts and text impact on the trap drop",
        "Complete package: YouTube 16:9 + Reels 9:16 vertical video",
        "Exported in 60 FPS for maximum fluidity"
      ],
      ro: [
        "Vizualizer 4K UHD de mare impact cu reacție pe basul 808",
        "Elemente doodle animate: coroană neon, străluciri de diamante și cartușe",
        "Tăieturi kinetice rapide și text de impact pe drop-urile de trap",
        "Pachet complet: YouTube 16:9 + Reels / TikTok 9:16 vertical",
        "Exportat la 60 cadre/secundă pentru fluiditate maximă"
      ],
      ru: [
        "4K UHD динамичный моушн-визуализатор с реакцией на 808 бас",
        "Анимированная неоновая корона, сияние алмазов и летающие гильзы",
        "Кинетическая типографика и мощные вспышки на трэп-дропах",
        "Полный комплект: 16:9 для YouTube и 9:16 для Reels/TikTok",
        "Экспорт в 60 FPS для максимальной плавности на экранах"
      ]
    }
  },
  parabellum_video: {
    title: "Si vis pacem Parabellum",
    pill: { en: "LYRICS VIDEO 4K", ro: "LYRICS VIDEO 4K", ru: "LYRICS ВИДЕО 4K" },
    badge: "LYRICS VIDEO 4K",
    subtitle: "Lyrics Video 4K Master",
    img: "assets/covers/cover_parabellum.jpg",
    bannerImg: "assets/banners/banner_moostaf.jpg",
    videoSrc: "assets/videos/video_parabellum.mp4",
    videoPoster: "assets/videos/posters/video_parabellum_poster.jpg",
    isVideo: true,
    package: "lyrics",
    specs: {
      en: [
        "4K UHD Black & White cinematic visualizer with 3D depth",
        "Slow-motion volumetric smoke and drifting embers",
        "Clean, high-fashion serif text motion synchronized with track milestones",
        "Full suite for YouTube, Spotify Canvas, and social media teaser",
        "High-bitrate master file ready for publishing"
      ],
      ro: [
        "Vizualizer cinematic alb-negru 4K UHD cu profunzime 3D",
        "Fum volumetric slow-motion și particule luminoase în plutire",
        "Text serif elegant animat în armonie cu atmosfera piesei",
        "Suită completă pentru YouTube, Spotify Canvas și promo social media",
        "Fișier Master la bitrate ridicat gata de publicare"
      ],
      ru: [
        "Чёрно-белый кинематографичный визуализатор 4K UHD с 3D-глубиной",
        "Замедленный объёмный дым и парящие световые микрочастицы",
        "Элегантная типографика, синхронизированная с развитием композиции",
        "Полный набор для YouTube, Spotify Canvas и тизеров в соцсетях",
        "Мастер-файл максимального битрейта для безупречной картинки"
      ]
    }
  },
  na_krasivom_video: {
    title: "IRAVELLE feat Andrei Green — На красивом",
    pill: { en: "FULL RELEASE", ro: "FULL RELEASE", ru: "FULL RELEASE" },
    badge: "FULL RELEASE",
    subtitle: "Lyrics Video + Cover Suite",
    img: "assets/covers/cover_na_krasivom.jpg",
    bannerImg: "assets/banners/banner_na_krasivom.jpg",
    videoSrc: "assets/videos/video_na_krasivom.mp4",
    videoPoster: "assets/videos/posters/video_na_krasivom_poster.jpg",
    isVideo: true,
    package: "full",
    specs: {
      en: [
        "Full Pack: 3000x3000px Cover Artwork + 4K UHD Lyrics Video",
        "Social media banner suite (YouTube header, Facebook banner, Spotify Canvas)",
        "Precision bilingual text synchronization with rich vocal effects",
        "Atmospheric red flare lighting and luxury cinematic color grading",
        "Turnkey delivery with full distributor upload assistance"
      ],
      ro: [
        "Pachet complet: Cover 3000x3000px + Lyrics Video 4K UHD",
        "Suită de bannere pentru rețele sociale (YouTube, Facebook, Spotify Canvas)",
        "Sincronizare precisă a textului pe refrene și versuri",
        "Efecte atmosferice de lumină roșie și colorizare luxoasă de club",
        "Predare la cheie cu asistență la distribuție"
      ],
      ru: [
        "Полный пакет: Обложка 3000x3000px + 4K UHD Lyrics видео",
        "Пакет баннеров для соцсетей (шапка YouTube, баннер Facebook, Spotify Canvas)",
        "Точная синхронизация текста на куплетах и припевах",
        "Атмосферное алое клубное свечение и стильная цветокоррекция",
        "Сдача под ключ с консультацией по загрузке на дистрибьютор"
      ]
    }
  }
};

// ==========================================================================
// 3. MODALS LOGIC
// ==========================================================================
let currentModalProjectId = null;

function openProjectModal(projectId) {
  if (!projectsData[projectId]) {
    if (projectId.endsWith('_video') && projectsData[projectId.replace('_video', '')]) {
      projectId = projectId.replace('_video', '');
    }
  }
  const project = projectsData[projectId];
  if (!project || project.hidden) return;
  currentModalProjectId = projectId;

  const pillEl = document.getElementById('projectPill');
  const titleEl = document.getElementById('projectTitle');
  const listEl = document.getElementById('projectFeaturesList');
  const orderBtn = document.getElementById('projectOrderBtn');

  const lang = currentLang || 'en';

  if (pillEl) {
    pillEl.textContent = (project.pill && project.pill[lang]) || (project.pill && project.pill.en) || project.badge || 'PORTFOLIO CASE';
    if (project.videoSrc) {
      pillEl.style.background = 'rgba(230, 25, 55, 0.15)';
      pillEl.style.borderColor = 'rgba(230, 25, 55, 0.4)';
      pillEl.style.color = '#ff4d6d';
    } else {
      pillEl.style.background = 'rgba(255, 255, 255, 0.08)';
      pillEl.style.borderColor = 'rgba(255, 255, 255, 0.18)';
      pillEl.style.color = '#e4e4e7';
    }
  }

  const titleStr = typeof project.title === 'object' ? (project.title[lang] || project.title.ro || project.title.ru || project.title.en) : project.title;
  if (titleEl) titleEl.textContent = titleStr;

  // Multi-Media Showcase Board Elements
  const showcaseTopRow = document.getElementById('showcaseTopRow');
  const showcaseVideoCard = document.getElementById('showcaseVideoCard');
  const showcaseCoverCard = document.getElementById('showcaseCoverCard');
  const showcaseBannerCard = document.getElementById('showcaseBannerCard');

  const imgEl = document.getElementById('projectImg');
  const bannerImgEl = document.getElementById('projectBannerImg');
  const coverZoomBtn = document.getElementById('coverZoomBtn');
  const bannerZoomBtn = document.getElementById('bannerZoomBtn');
  const coverFrameClick = document.getElementById('coverFrameClick');
  const bannerFrameClick = document.getElementById('bannerFrameClick');

  // Video Player Elements
  const videoEl = document.getElementById('projectModalVideo');
  const videoSource = document.getElementById('videoSource');
  const playOverlay = document.getElementById('videoPlayOverlay');
  const bigPlayBtn = document.getElementById('bigPlayBtn');
  const vctrlPlayPause = document.getElementById('vctrlPlayPause');
  const vctrlTime = document.getElementById('vctrlTime');
  const vctrlProgress = document.getElementById('vctrlProgress');
  const vctrlScrubBar = document.getElementById('vctrlScrubBar');
  const vctrlMute = document.getElementById('vctrlMute');
  const vctrlFullscreen = document.getElementById('vctrlFullscreen');
  const videoBox = (showcaseVideoCard && showcaseVideoCard.querySelector('.showcase-media-frame')) || document.getElementById('projectVideoBox') || showcaseVideoCard;

  const hasVideo = !!project.videoSrc;
  const hasCover = !!(project.img || project.thumb);
  const hasBanner = !!project.bannerImg;

  // 1. VIDEO SETUP (stânga pe rândul de sus)
  if (hasVideo) {
    if (showcaseVideoCard) showcaseVideoCard.style.display = 'flex';
    if (videoSource) videoSource.src = project.videoSrc;
    if (videoEl) {
      videoEl.poster = project.videoPoster || '';
      videoEl.load();
    }
    if (playOverlay) playOverlay.style.display = 'flex';
    if (vctrlPlayPause) vctrlPlayPause.textContent = '▶';
    if (vctrlProgress) vctrlProgress.style.width = '0%';
    if (vctrlTime) vctrlTime.textContent = '0:00 / 0:35';
  } else {
    if (showcaseVideoCard) showcaseVideoCard.style.display = 'none';
    if (videoEl && !videoEl.paused) videoEl.pause();
  }

  // 2. COVER 3000x3000px SETUP (dreapta pe rândul de sus)
  if (hasCover) {
    if (showcaseCoverCard) showcaseCoverCard.style.display = 'flex';
    if (imgEl) {
      imgEl.src = project.img;
      imgEl.alt = `${project.title} - Cover Artwork`;
    }
    if (coverZoomBtn) coverZoomBtn.href = project.img;
    if (coverFrameClick) {
      coverFrameClick.onclick = (e) => {
        if (e.target !== coverZoomBtn && !coverZoomBtn.contains(e.target)) {
          window.open(project.img, '_blank');
        }
      };
    }
  } else {
    if (showcaseCoverCard) showcaseCoverCard.style.display = 'none';
  }

  // Ajustare automată a grilei superioare (single item dacă lipsește video sau cover)
  if (showcaseTopRow) {
    if (!hasVideo || !hasCover) {
      showcaseTopRow.classList.add('single-item');
    } else {
      showcaseTopRow.classList.remove('single-item');
    }
  }

  // 3. PROMO BANNER SUITE SETUP (mai jos restu)
  if (hasBanner) {
    if (showcaseBannerCard) showcaseBannerCard.style.display = 'flex';
    if (bannerImgEl) {
      bannerImgEl.src = project.bannerImg;
      bannerImgEl.alt = `${project.title} - Promo Banner Suite`;
    }
    if (bannerZoomBtn) bannerZoomBtn.href = project.bannerImg;
    if (bannerFrameClick) {
      bannerFrameClick.onclick = (e) => {
        if (e.target !== bannerZoomBtn && !bannerZoomBtn.contains(e.target)) {
          window.open(project.bannerImg, '_blank');
        }
      };
    }
  } else {
    if (showcaseBannerCard) showcaseBannerCard.style.display = 'none';
  }

  // Dynamic custom labels for modal showcase
  const vLabelEl = document.getElementById('showcaseVideoLabel');
  const cLabelEl = document.getElementById('showcaseCoverLabel');
  const bLabelEl = document.getElementById('showcaseBannerLabel');
  if (vLabelEl) vLabelEl.textContent = project.videoLabel || 'Lyrics Video 4K Master (16:9)';
  if (cLabelEl) cLabelEl.textContent = project.coverLabel || 'Streaming Cover (3000 × 3000 px)';
  if (bLabelEl) bLabelEl.textContent = project.bannerLabel || 'Pachet Promo Bannere & Rețele Sociale';

  // Video Player Controls & Events
  if (videoEl && playOverlay) {
    const togglePlay = () => {
      if (videoEl.paused) {
        videoEl.play().catch(err => console.log('Playback error:', err));
        playOverlay.style.display = 'none';
        if (vctrlPlayPause) vctrlPlayPause.textContent = '❚❚';
      } else {
        videoEl.pause();
        if (vctrlPlayPause) vctrlPlayPause.textContent = '▶';
      }
    };

    if (bigPlayBtn) bigPlayBtn.onclick = (e) => { e.stopPropagation(); togglePlay(); };
    playOverlay.onclick = togglePlay;
    if (vctrlPlayPause) vctrlPlayPause.onclick = togglePlay;

    videoEl.onplay = () => {
      playOverlay.style.display = 'none';
      if (vctrlPlayPause) vctrlPlayPause.textContent = '❚❚';
    };

    videoEl.onpause = () => {
      if (vctrlPlayPause) vctrlPlayPause.textContent = '▶';
    };

    videoEl.onended = () => {
      playOverlay.style.display = 'flex';
      if (vctrlPlayPause) vctrlPlayPause.textContent = '▶';
      if (vctrlProgress) vctrlProgress.style.width = '0%';
    };

    videoEl.ontimeupdate = () => {
      const cur = videoEl.currentTime || 0;
      const dur = videoEl.duration || 35;
      const pct = (cur / dur) * 100;
      if (vctrlProgress) vctrlProgress.style.width = `${pct}%`;

      const curM = Math.floor(cur / 60);
      const curS = String(Math.floor(cur % 60)).padStart(2, '0');
      const durM = Math.floor(dur / 60);
      const durS = String(Math.floor(dur % 60)).padStart(2, '0');
      if (vctrlTime) vctrlTime.textContent = `${curM}:${curS} / ${durM}:${durS}`;
    };

    if (vctrlScrubBar) {
      vctrlScrubBar.onclick = (e) => {
        const rect = vctrlScrubBar.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        if (videoEl.duration) {
          videoEl.currentTime = pos * videoEl.duration;
        }
      };
    }

    if (vctrlMute) {
      vctrlMute.onclick = () => {
        videoEl.muted = !videoEl.muted;
        vctrlMute.textContent = videoEl.muted ? '🔇' : '🔊';
      };
    }

    if (vctrlFullscreen && videoBox) {
      const toggleFullscreen = () => {
        const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
        if (!isFs) {
          if (videoBox.requestFullscreen) {
            videoBox.requestFullscreen().catch(err => console.log('Fullscreen error:', err));
          } else if (videoEl.webkitEnterFullscreen) {
            videoEl.webkitEnterFullscreen();
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen().catch(err => console.log('Exit fullscreen error:', err));
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          }
        }
      };

      vctrlFullscreen.onclick = (e) => {
        e.stopPropagation();
        toggleFullscreen();
      };

      const syncFsBtn = () => {
        const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
        vctrlFullscreen.textContent = isFs ? '🗗' : '⛶';
        vctrlFullscreen.title = isFs ? 'Ieși din ecran complet' : 'Ecran complet';
      };

      document.onfullscreenchange = syncFsBtn;
      document.onwebkitfullscreenchange = syncFsBtn;
    }
  }

  // Populate Specs List
  if (listEl) {
    const specs = (project.specs && project.specs[lang]) || project.specs.en || [];
    listEl.innerHTML = specs.map(item => `
      <li>
        <span class="spec-bullet" style="color:var(--accent-red);font-weight:bold;margin-right:8px;">✓</span>
        <span>${item}</span>
      </li>
    `).join('');
  }

  if (orderBtn) {
    orderBtn.onclick = () => {
      if (videoEl && !videoEl.paused) videoEl.pause();
      closeModal('projectModal');
      openModal('orderModal', project.package);
    };
  }

  openModal('projectModal');
}

function openModal(modalId, selectedPackage = null) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  if (selectedPackage && modalId === 'orderModal') {
    if (selectedPackage === 'cover') document.getElementById('radioCover').checked = true;
    else if (selectedPackage === 'lyrics') document.getElementById('radioLyrics').checked = true;
    else document.getElementById('radioFull').checked = true;
  }

  // Reset order success view if reopening
  const orderForm = document.getElementById('orderForm');
  const orderSuccess = document.getElementById('orderSuccess');
  if (orderForm && orderSuccess) {
    orderForm.style.display = 'flex';
    orderSuccess.style.display = 'none';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';

  if (modalId === 'projectModal') {
    const videoEl = document.getElementById('projectModalVideo');
    if (videoEl) {
      videoEl.pause();
      videoEl.currentTime = 0;
    }
  }
}

// ==========================================================================
// 4. ORDER FORM & DUAL PAYMENT BRIDGE
// ==========================================================================
function setupOrderForm() {
  const form = document.getElementById('orderForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const pkg = form.querySelector('input[name="selectedPackage"]:checked').value;
    const paymentTiming = form.querySelector('input[name="paymentOption"]:checked')?.value || 'later';
    const artist = document.getElementById('artistName').value.trim();
    const track = document.getElementById('trackTitle').value.trim();
    const demo = document.getElementById('demoLink').value.trim();
    const notes = document.getElementById('orderNotes').value.trim();
    const contact = document.getElementById('contactHandle').value.trim();

    const pkgName = pkg === 'cover' ? 'Cover Art 3000x3000' : (pkg === 'lyrics' ? 'Lyrics Video 4K' : 'Full Pack Combo');
    const priceText = priceMatrix[pkg][currentCurrency];
    const paymentLabel = paymentTiming === 'now' ? '💳 Оплата СЕЙЧАС онлайн (Card/Revolut)' : '💬 Оплата ПОСЛЕ согласования брифа';

    // Format message for Telegram
    const telegramMessage = `🔥 НОВЫЙ ЗАКАЗ — ARTIST VISUALS
-----------------------------
📦 Пакет: ${pkgName} (${priceText})
💰 Способ оплаты: ${paymentLabel}
🎤 Артист: ${artist}
🎵 Трек: ${track}
🔗 Демо: ${demo || 'Не указана (отправлю в ЛС)'}
📝 Пожелания: ${notes || 'Стандарт / на вкус автора'}
📱 Контакт клиента: ${contact}`;

    const tgUrl = `https://t.me/mikekr260698?text=${encodeURIComponent(telegramMessage)}`;

    // Update Direct Links on Success screen
    const directLink = document.getElementById('telegramDirectLink');
    if (directLink) directLink.href = tgUrl;

    const payNowBtn = document.getElementById('payNowDirectBtn');
    if (payNowBtn) {
      if (paymentTiming === 'now') {
        payNowBtn.style.display = 'inline-flex';
        payNowBtn.href = `https://revolut.me/mikekr`;
      } else {
        payNowBtn.style.display = 'none';
      }
    }

    const summary = document.getElementById('successSummary');
    if (summary) {
      const timingNotice = paymentTiming === 'now' 
        ? `<br><span style="color:#22c55e;">✓ Выбрана онлайн-оплата: нажми кнопку ниже для перехода к оплате.</span>`
        : `<br><span style="color:#8e8e99;">✓ Выбрана оплата после согласования: детали уточним в Telegram.</span>`;

      summary.innerHTML = `Пакет: <strong>${pkgName} (${priceText})</strong> для <em>"${artist} — ${track}"</em>.${timingNotice}`;
    }

    form.style.display = 'none';
    document.getElementById('orderSuccess').style.display = 'block';

    // Backup to localStorage
    try {
      const orders = JSON.parse(localStorage.getItem('artist_visuals_orders') || '[]');
      orders.push({ date: new Date().toISOString(), pkg, paymentTiming, artist, track, demo, contact, priceText });
      localStorage.setItem('artist_visuals_orders', JSON.stringify(orders));
    } catch (err) {}
  });
}

// ==========================================================================
// 5. INTERACTIVE DEMO PLAYER & CALM PARALLAX WIGGLE
// ==========================================================================
const demoMarketingLines = {
  ro: [
    "Peste 100+ proiecte pe an",
    "CALITATE 4K & VITEZĂ RECORD",
    "Gata în 3–7 zile pentru Spotify & YouTube",
    "Design unic creat 100% pe sound-ul tău",
    "MODIFICĂRI GRATUITE PÂNĂ LA APROBARE",
    "Vizualul care îți ridică instant piesa"
  ],
  ru: [
    "Более 100+ проектов в год",
    "КАЧЕСТВО 4K И МАКСИМАЛЬНАЯ СКОРОСТЬ",
    "Готово за 3–7 дней для Spotify и YouTube",
    "Уникальный стиль точно под твой трек",
    "БЕСПЛАТНЫЕ ПРАВКИ ДО УТВЕРЖДЕНИЯ",
    "Визуал, который выделяет твой релиз"
  ],
  en: [
    "Over 100+ projects every year",
    "4K CINEMA QUALITY & FAST TURNAROUND",
    "Ready in 3–7 days for Spotify & YouTube",
    "Custom visuals tailored to your sound",
    "FREE REVISIONS UNTIL FINAL APPROVAL",
    "Visuals that elevate your next release"
  ]
};

let demoLineIndex = 1;

function buildDemoLyricsTrack() {
  const track = document.getElementById('demoLyricsTrack');
  if (!track) return;

  const lang = currentLang || 'ro';
  const lines = demoMarketingLines[lang] || demoMarketingLines.ro;
  const extended = [...lines, ...lines, ...lines];

  track.innerHTML = extended.map((text, idx) =>
    `<div class="lyrics-row${idx === demoLineIndex ? ' active' : ''}">${text}</div>`
  ).join('');

  track.style.transition = 'none';
  track.style.transform = `translateY(-${(demoLineIndex - 1) * 34}px)`;
  void track.offsetHeight;
  track.style.transition = 'transform 0.65s ease-in';
}

function updateDemoLyricsDisplay(animate = false) {
  const track = document.getElementById('demoLyricsTrack');
  if (!track) return;

  const lang = currentLang || 'ro';
  const lines = demoMarketingLines[lang] || demoMarketingLines.ro;
  const len = lines.length;

  if (!animate || track.children.length !== len * 3) {
    demoLineIndex = 1;
    buildDemoLyricsTrack();
    return;
  }

  const rows = track.querySelectorAll('.lyrics-row');
  // Step 1: Un-highlight previous line & glide track upward
  rows.forEach(r => r.classList.remove('active'));
  track.style.transition = 'transform 0.55s ease-in';
  track.style.transform = `translateY(-${(demoLineIndex - 1) * 34}px)`;

  const targetIdx = demoLineIndex;
  // Step 2: Highlight & bloom the new center line right as it lands in the middle
  setTimeout(() => {
    const latestRows = track.querySelectorAll('.lyrics-row');
    latestRows.forEach((r, i) => r.classList.toggle('active', i === targetIdx));
  }, 460);

  if (demoLineIndex >= len * 2) {
    setTimeout(() => {
      demoLineIndex = demoLineIndex - len;
      track.style.transition = 'none';
      const latestRows = track.querySelectorAll('.lyrics-row');
      latestRows.forEach((r, i) => r.classList.toggle('active', i === demoLineIndex));
      track.style.transform = `translateY(-${(demoLineIndex - 1) * 34}px)`;
      void track.offsetHeight;
      track.style.transition = 'transform 0.55s ease-in';
    }, 980);
  }
}

function setupDemoPlayer() {
  const playBtn = document.getElementById('demoPlayBtn');
  const playIcon = document.getElementById('playIcon');
  const progress = document.getElementById('demoProgress');
  const timer = document.getElementById('demoTimer');
  if (!playBtn) return;

  buildDemoLyricsTrack();

  let isPlaying = true;
  let currentSec = 0;
  const totalSec = 156;
  let interval = null;
  let tickCount = 0;

  progress.style.transition = 'width 1s linear';
  progress.style.width = '0%';
  timer.textContent = '0:00 / 2:36';

  const startPlayback = () => {
    clearInterval(interval);
    playIcon.textContent = '❚❚';
    interval = setInterval(() => {
      currentSec++;
      tickCount++;
      if (currentSec > totalSec) currentSec = 0;
      const pct = (currentSec / totalSec) * 100;
      progress.style.width = `${pct}%`;
      const mins = Math.floor(currentSec / 60);
      const secs = String(currentSec % 60).padStart(2, '0');
      timer.textContent = `${mins}:${secs} / 2:36`;

      if (tickCount % 2 === 0) {
        demoLineIndex++;
        updateDemoLyricsDisplay(true);
      }
    }, 1000);
  };

  startPlayback();

  playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      startPlayback();
    } else {
      playIcon.textContent = '▶';
      clearInterval(interval);
    }
  });
}

// Active scroll tracking for the red gradient, lateral burst & expanded vinyl movement
function setupScrollParallax() {
  const mockup = document.querySelector('.cover-card-mockup');
  const burstGlow = document.getElementById('heroBurstGlow');
  const ambientTop = document.querySelector('.glow-top');

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;

        // 1. Vinyl mockup: significantly larger range of movement!
        if (mockup && scrolled < 1100) {
          const tilt = -6 + (scrolled * 0.024); // From -6deg to +18deg
          const translateY = scrolled * 0.18;   // Smooth downward glide
          const translateX = Math.sin(scrolled * 0.007) * 25; // Lateral sway
          mockup.style.transform = `rotate(${tilt}deg) translate(${translateX}px, ${translateY}px)`;
        }

        // 2. Red burst gradient ACTIVELY MOVES up and down with scroll and expands to the sides
        if (burstGlow) {
          const progress = Math.min(scrolled / 650, 1);
          const translateY = scrolled * 0.65; // Moves DOWN with scroll actively!
          const translateX = Math.sin(scrolled * 0.007) * 45; // Sways across width
          const scaleX = 1 + (progress * 2.8); // Stretches massively to the sides
          const scaleY = 1 - (progress * 0.2);
          const opacity = Math.max(0.72 - (progress * 0.68), 0.04);
          const blur = 75 + (progress * 55);

          burstGlow.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;
          burstGlow.style.opacity = opacity;
          burstGlow.style.filter = `blur(${blur}px)`;
        }

        // 3. Ambient top glow actively tracks scroll
        if (ambientTop && scrolled < 900) {
          const ambY = scrolled * 0.38;
          const ambScaleX = 1 + (scrolled * 0.0035);
          ambientTop.style.transform = `translateY(${ambY}px) scaleX(${ambScaleX})`;
        }

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ==========================================================================
// 5.4. DYNAMIC MARQUEE TRACKS RENDERER
// Filters and renders cards based on user's placement (video / cover / both)
// ==========================================================================
function renderMarqueeTracks() {
  const videoTrack = document.getElementById('videoTrack');
  const coverTrack = document.getElementById('coverTrack');
  if (!videoTrack && !coverTrack) return;

  const lang = currentLang || 'ro';
  const allKeys = Object.keys(projectsData).filter(k => !k.endsWith('_video') && !projectsData[k].hidden);

  // Video projects: inVideo === true (or placement === 'video' || placement === 'both')
  const videoKeys = allKeys.filter(k => {
    const p = projectsData[k];
    if (!p) return false;
    if (p.inVideo !== undefined) return !!p.inVideo;
    const plc = p.placement || (p.package === 'cover' ? 'cover' : (p.package === 'lyrics' ? 'video' : (p.videoPoster || p.videoSrc ? 'both' : 'cover')));
    return plc === 'video' || plc === 'both';
  });

  // Cover projects: inCovers === true (or placement === 'cover' || placement === 'both')
  const coverKeys = allKeys.filter(k => {
    const p = projectsData[k];
    if (!p) return false;
    if (p.inCovers !== undefined) return !!p.inCovers;
    const plc = p.placement || (p.package === 'cover' ? 'cover' : (p.package === 'lyrics' ? 'video' : (p.img || p.thumb ? 'both' : 'video')));
    return plc === 'cover' || plc === 'both';
  });

  // Render Video Track (No text overlay on video cards!)
  if (videoTrack && videoKeys.length > 0) {
    const repeatCount = videoKeys.length < 5 ? 4 : 2;
    let html = '';
    for (let r = 0; r < repeatCount; r++) {
      videoKeys.forEach((key, idx) => {
        const p = projectsData[key];
        const titleStr = typeof p.title === 'object' ? (p.title[lang] || p.title.ro || p.title.ru || p.title.en) : (p.title || key);
        const badgeStr = p.badge || (typeof p.pill === 'object' ? (p.pill[lang] || p.pill.ro || p.pill.ru || p.pill.en) : p.pill) || 'LYRICS VIDEO 4K';
        const poster = p.videoPoster || p.thumb || p.img || '';

        html += `
          <div class="marquee-card video-card" data-project-id="${key}">
            <div class="card-thumb card-thumb-v${(idx % 8) + 1}">
              <img class="card-video-bg" src="${poster}" alt="${titleStr}" loading="lazy">
              <span class="card-play-btn">▶</span>
              <div class="card-badge-top">${badgeStr}</div>
            </div>
          </div>
        `;
      });
    }
    videoTrack.innerHTML = html;
  }

  // Render Cover Track
  if (coverTrack && coverKeys.length > 0) {
    const repeatCount = coverKeys.length < 5 ? 4 : 2;
    let html = '';
    for (let r = 0; r < repeatCount; r++) {
      coverKeys.forEach((key) => {
        const p = projectsData[key];
        const titleStr = typeof p.title === 'object' ? (p.title[lang] || p.title.ro || p.title.ru || p.title.en) : (p.title || key);
        const cover = p.thumb || p.img || '';

        html += `
          <div class="marquee-card cover-card" data-project-id="${key}">
            <div class="cover-thumb-wrapper">
              <img src="${cover}" alt="${titleStr}" loading="lazy">
              <div class="card-hover-overlay">
                <div class="hover-zoom-btn">🔍</div>
              </div>
            </div>
          </div>
        `;
      });
    }
    coverTrack.innerHTML = html;
  }

  // Re-bind click listener on all marquee cards to open project modal (skip if dragged)
  document.querySelectorAll('.marquee-card[data-project-id]').forEach(card => {
    card.addEventListener('click', (e) => {
      const track = card.closest('.marquee-track');
      if (track && track.dataset.justDragged === '1') {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      const pId = card.getAttribute('data-project-id');
      if (pId && typeof openProjectModal === 'function') {
        openProjectModal(pId);
      }
    });
  });

  if (videoTrack) initInteractiveMarquee(videoTrack, -0.55);
  if (coverTrack) initInteractiveMarquee(coverTrack, 0.52);
}

const marqueeControllers = {};

function initInteractiveMarquee(track, baseSpeed) {
  const row = track.closest('.marquee-row');
  if (!row) return;

  const id = track.id || ('marquee_' + Math.random());
  if (marqueeControllers[id] && marqueeControllers[id].rafId) {
    cancelAnimationFrame(marqueeControllers[id].rafId);
  }

  const state = {
    offset: baseSpeed > 0 ? -(track.scrollWidth / 2 || 600) : 0,
    isDragging: false,
    isHovered: false,
    startX: 0,
    startOffset: 0,
    velocity: 0,
    lastX: 0,
    lastTime: 0,
    dragDistance: 0,
    rafId: null
  };
  marqueeControllers[id] = state;

  const wrapOffset = () => {
    const half = track.scrollWidth / 2;
    if (half <= 0) return;
    while (state.offset <= -half) state.offset += half;
    while (state.offset > 0) state.offset -= half;
  };

  const startDrag = (clientX) => {
    state.isDragging = true;
    state.startX = clientX;
    state.startOffset = state.offset;
    state.lastX = clientX;
    state.lastTime = performance.now();
    state.velocity = 0;
    state.dragDistance = 0;
    track.dataset.justDragged = '0';
  };

  const moveDrag = (clientX) => {
    if (!state.isDragging) return;
    const dx = clientX - state.startX;
    state.dragDistance = Math.max(state.dragDistance, Math.abs(dx));
    if (state.dragDistance > 6) {
      track.classList.add('is-dragging');
    }
    state.offset = state.startOffset + dx;

    const now = performance.now();
    const dt = now - state.lastTime;
    if (dt > 0) {
      state.velocity = ((clientX - state.lastX) / dt) * 16;
    }
    state.lastX = clientX;
    state.lastTime = now;

    wrapOffset();
    track.style.transform = `translate3d(${state.offset}px, 0, 0)`;
  };

  const endDrag = () => {
    if (!state.isDragging) return;
    state.isDragging = false;
    track.classList.remove('is-dragging');
    if (state.dragDistance > 6) {
      track.dataset.justDragged = '1';
      setTimeout(() => { track.dataset.justDragged = '0'; }, 80);
    }
  };

  if (!track.dataset.dragBound) {
    track.dataset.dragBound = '1';

    track.addEventListener('dragstart', (e) => e.preventDefault());

    row.addEventListener('mouseenter', () => {
      const s = marqueeControllers[id];
      if (s) s.isHovered = true;
    });
    row.addEventListener('mouseleave', () => {
      const s = marqueeControllers[id];
      if (s) { s.isHovered = false; endDrag(); }
    });

    // Mouse drag
    track.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      startDrag(e.clientX);
    });
    window.addEventListener('mousemove', (e) => {
      const s = marqueeControllers[id];
      if (s && s.isDragging) moveDrag(e.clientX);
    });
    window.addEventListener('mouseup', () => {
      const s = marqueeControllers[id];
      if (s && s.isDragging) endDrag();
    });

    // Touch swipe (mobile / tablet sensor)
    track.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) startDrag(e.touches[0].clientX);
    }, { passive: true });
    track.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) moveDrag(e.touches[0].clientX);
    }, { passive: true });
    track.addEventListener('touchend', () => endDrag(), { passive: true });
    track.addEventListener('touchcancel', () => endDrag(), { passive: true });
  }

  const loop = () => {
    if (!state.isDragging) {
      if (Math.abs(state.velocity) > 0.15) {
        state.offset += state.velocity;
        state.velocity *= 0.94;
      } else if (!state.isHovered) {
        state.offset += baseSpeed;
      }
      wrapOffset();
      track.style.transform = `translate3d(${state.offset}px, 0, 0)`;
    }
    state.rafId = requestAnimationFrame(loop);
  };

  state.rafId = requestAnimationFrame(loop);
}

// ==========================================================================
// 5.4b. PROJECT MODAL PREV / NEXT NAVIGATION
// ==========================================================================
function navigateProjectModal(direction) {
  const activeKeys = Object.keys(projectsData).filter(k => !k.endsWith('_video') && !projectsData[k].hidden);
  if (activeKeys.length === 0) return;

  const videoEl = document.getElementById('projectModalVideo');
  if (videoEl && !videoEl.paused) videoEl.pause();

  const currIdx = activeKeys.indexOf(currentModalProjectId);
  const nextIdx = currIdx === -1 ? 0 : (currIdx + direction + activeKeys.length) % activeKeys.length;
  openProjectModal(activeKeys[nextIdx]);
}

document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.getElementById('modalPrevProjectBtn');
  const nextBtn = document.getElementById('modalNextProjectBtn');
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateProjectModal(-1); });
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateProjectModal(1); });

  document.addEventListener('keydown', (e) => {
    const projectModal = document.getElementById('projectModal');
    if (projectModal && projectModal.classList.contains('active')) {
      if (e.key === 'ArrowLeft') navigateProjectModal(-1);
      else if (e.key === 'ArrowRight') navigateProjectModal(1);
    }
  });
});

// ==========================================================================
// 5.5. ADMIN OVERRIDES SYNC (Loads custom media, theme & layout from Admin)
// ==========================================================================
function applySiteLayout(layoutArr) {
  if (!Array.isArray(layoutArr) || layoutArr.length === 0) return;
  const container = document.getElementById('siteSectionsContainer') || document.querySelector('main');
  if (!container) return;

  layoutArr.forEach(item => {
    const id = typeof item === 'string' ? item : item.id;
    const isHidden = typeof item === 'object' ? !!item.hidden : false;
    const sec = container.querySelector(`section[data-section-id="${id}"]`);
    if (sec) {
      sec.style.display = isHidden ? 'none' : '';
      container.appendChild(sec);
    }
  });
}

async function syncLiveLayout() {
  try {
    const res = await fetch('site_layout.json?t=' + Date.now());
    if (res.ok) {
      const liveLayout = await res.json();
      applySiteLayout(liveLayout);
    }
  } catch (e) {}
  try {
    const localLayout = localStorage.getItem('av_site_layout');
    if (localLayout) applySiteLayout(JSON.parse(localLayout));
  } catch (e) {}
}

window.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'AV_PREVIEW_LAYOUT') {
    applySiteLayout(e.data.layout);
  }
});

function hexToRgbaStr(hex, alpha) {
  if (!hex || !hex.startsWith('#')) return `rgba(230, 25, 55, ${alpha})`;
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  const r = parseInt(h.substring(0, 2), 16) || 0;
  const g = parseInt(h.substring(2, 4), 16) || 0;
  const b = parseInt(h.substring(4, 6), 16) || 0;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function applySiteTheme(theme) {
  if (!theme || typeof theme !== 'object') return;
  const root = document.documentElement;
  if (theme.accentRed) {
    root.style.setProperty('--accent-red', theme.accentRed);
    root.style.setProperty('--border-focus', theme.accentRed);
    root.style.setProperty('--accent-red-glow', hexToRgbaStr(theme.accentRed, 0.45));
    root.style.setProperty('--accent-red-subtle', hexToRgbaStr(theme.accentRed, 0.12));
    const endColor = theme.accentDark || theme.accentRed;
    root.style.setProperty('--accent-red-gradient', `linear-gradient(135deg, ${theme.accentRed} 0%, ${endColor} 100%)`);
  }
  if (theme.bgDark) root.style.setProperty('--bg-dark', theme.bgDark);
  if (theme.bgCard) root.style.setProperty('--bg-card', theme.bgCard);
  if (theme.textMain) root.style.setProperty('--text-main', theme.textMain);
  if (theme.textMuted) root.style.setProperty('--text-muted', theme.textMuted);
}

async function syncLiveTheme() {
  try {
    const res = await fetch('site_theme.json?t=' + Date.now());
    if (res.ok) {
      const liveTheme = await res.json();
      applySiteTheme(liveTheme);
    }
  } catch (e) {}
  try {
    const localTheme = localStorage.getItem('av_site_theme');
    if (localTheme) applySiteTheme(JSON.parse(localTheme));
  } catch (e) {}
}

async function syncLiveProjects() {
  try {
    const res = await fetch('projects_data.json?t=' + Date.now());
    if (res.ok) {
      const data = await res.json();
      Object.keys(data).forEach(k => {
        if (!projectsData[k]) projectsData[k] = {};
        Object.assign(projectsData[k], data[k]);
      });
    }
  } catch(e) {
    // offline fallback
  }
  loadAdminOverrides();
}

function loadAdminOverrides() {
  try {
    const saved = localStorage.getItem('artist_visuals_custom_projects');
    if (saved) {
      const custom = JSON.parse(saved);
      Object.keys(custom).forEach(key => {
        if (!projectsData[key]) projectsData[key] = {};
        Object.assign(projectsData[key], custom[key]);
      });
    }

    // Ensure ribz, silvika, laureall never have fake video attached
    if (projectsData.ribz) {
      projectsData.ribz.videoSrc = '';
      projectsData.ribz.videoPoster = '';
      projectsData.ribz.inVideo = false;
      projectsData.ribz.inCovers = true;
    }
    if (projectsData.silvika) {
      projectsData.silvika.videoSrc = '';
      projectsData.silvika.videoPoster = '';
      projectsData.silvika.inVideo = false;
      projectsData.silvika.inCovers = true;
    }
    if (projectsData.laureall) {
      projectsData.laureall.videoSrc = '';
      projectsData.laureall.videoPoster = '';
      projectsData.laureall.inVideo = false;
      projectsData.laureall.inCovers = true;
    }
    if (projectsData.jenika && (!projectsData.jenika.videoSrc || projectsData.jenika.videoSrc.includes('ori_blaze'))) {
      projectsData.jenika.videoSrc = '';
      projectsData.jenika.videoPoster = '';
      projectsData.jenika.inVideo = false;
      projectsData.jenika.inCovers = true;
    }
    if (projectsData.moostaf) {
      projectsData.moostaf.videoSrc = 'assets/videos/video_moostaf.mp4';
      projectsData.moostaf.videoPoster = 'assets/videos/posters/video_moostaf_poster.jpg';
      projectsData.moostaf.bannerImg = 'assets/banners/banner_moostaf.jpg';
      if (projectsData.moostaf.inVideo === undefined) projectsData.moostaf.inVideo = true;
      if (projectsData.moostaf.inCovers === undefined) projectsData.moostaf.inCovers = false;
    }

    // Render cards dynamically matching checkboxes
    renderMarqueeTracks();
  } catch (err) {
    console.warn('Error loading custom projects from localStorage', err);
  }
}

// ==========================================================================
// 6. INITIALIZATION & EVENT LISTENERS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Load live projects, theme & layout JSON from repo + local admin overrides
  syncLiveTheme();
  syncLiveLayout();
  syncLiveProjects();

  // One-time scroll-triggered strikethrough animation on old price
  const oldPrices = document.querySelectorAll('.old-price');
  if (oldPrices.length > 0 && 'IntersectionObserver' in window) {
    const priceObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('struck');
          }, 650);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.8 });
    oldPrices.forEach(el => priceObserver.observe(el));
  } else {
    oldPrices.forEach(el => el.classList.add('struck'));
  }

  // Staggered overshoot + glow reveal for "Ce este inclus in lucru?" checkmarks
  const includedBox = document.querySelector('.included-box');
  if (includedBox && 'IntersectionObserver' in window) {
    const includedObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, 150);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    includedObserver.observe(includedBox);
  } else if (includedBox) {
    includedBox.classList.add('revealed');
  }

  // Set copyright year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize Language & Currency
  const detectedLang = detectUserLanguage();
  const detectedCurr = detectUserCurrency();
  setLanguage(detectedLang);
  setCurrency(detectedCurr);

  // Currency Dropdown Toggle
  const currBtn = document.getElementById('currencyBtn');
  const currMenu = document.getElementById('currencyMenu');
  if (currBtn && currMenu) {
    currBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currMenu.classList.toggle('active');
    });

    document.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        const c = item.getAttribute('data-currency');
        setCurrency(c);
        currMenu.classList.remove('active');
      });
    });

    document.addEventListener('click', () => currMenu.classList.remove('active'));
  }

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Marquee card click handlers for project modal
  document.querySelectorAll('.marquee-card').forEach(card => {
    card.addEventListener('click', () => {
      const pId = card.getAttribute('data-project-id');
      if (pId) openProjectModal(pId);
    });
  });

  // Modal open triggers
  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal');
      const pkg = btn.getAttribute('data-package');
      openModal(modalId, pkg);
    });
  });

  // Modal close triggers
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close');
      closeModal(modalId);
    });
  });

  // Close modals on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal(backdrop.id);
    });
  });

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.active').forEach(m => closeModal(m.id));
    }
  });

  // Setup components
  setupOrderForm();
  setupDemoPlayer();
  setupScrollParallax();
});
