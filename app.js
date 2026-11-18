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
    "packages.full.p3": "Vertical 9:16 snippet for Reels/TikTok/Shorts",
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

    "reviews.tag": "REVIEWS",
    "reviews.title": "What artists say",
    "reviews.role": "Artist",
    "reviews.quote1": "«Created the cover and lyrics video in my exact vibe. Fast, sharp, zero hassle — 10/10.»",
    "reviews.quote2": "«Top-tier production quality. Great communication, revisions done swiftly. Highly recommended.»",
    "reviews.quote3": "«Super smooth process: submitted the brief and got exactly what I envisioned on time. Will order again.»",

    "faq.tag": "FAQ",
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "How long does a project take?",
    "faq.a1": "Cover art is typically delivered within 1–3 days, lyrics videos in 2–4 days. Express 24h delivery is available upon request.",
    "faq.q2": "What file formats will I receive?",
    "faq.a2": "Cover art: 3000×3000px, 300 DPI (JPG, PNG). Videos: MP4 (H.264 / ProRes) in Full HD or 4K UHD, both 16:9 and 9:16 vertical.",
    "faq.q3": "What if I need revisions?",
    "faq.a3": "All standard revisions regarding color tuning, typography, text timing, and layout adjustments are free until final approval.",
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
    "packages.full.p3": "Snippet vertical 9:16 (Reels/TikTok/Shorts)",
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

    "reviews.tag": "RECENZII",
    "reviews.title": "Ce spun artiștii",
    "reviews.role": "Artist",
    "reviews.quote1": "«Au făcut coverul și lyrics video-ul exact în stilul meu. Rapid, clar, fără întrebări inutile — 10/10.»",
    "reviews.quote2": "«Calitate la nivel înalt. Am comunicat la fiecare pas, modificările au fost făcute imediat. Recomand cu încredere.»",
    "reviews.quote3": "«Foarte comod: am trimis cererea și referințele, iar rezultatul a fost gata la timp. Voi mai comanda cu siguranță.»",

    "faq.tag": "FAQ",
    "faq.title": "Întrebări frecvente",
    "faq.q1": "Cât timp durează realizarea comenzii?",
    "faq.a1": "De obicei coverul este gata în 1–3 zile, iar un lyrics video în 2–4 zile. Dacă te grăbești, putem discuta o opțiune expres de 24h.",
    "faq.q2": "În ce formate voi primi fișierele finale?",
    "faq.a2": "Covere: 3000×3000px, 300 DPI (JPG, PNG) conforme cu standardele Spotify/Apple. Video: MP4 Full HD sau 4K, 16:9 orizontal și 9:16 vertical pentru TikTok/Reels.",
    "faq.q3": "Ce se întâmplă dacă am nevoie de modificări?",
    "faq.a3": "Toate modificările de culoare, fonturi, sincronizare sau mici detalii sunt gratuite până la aprobarea finală.",
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
    "packages.full.p3": "Вертикальный сниппет 9:16 (Reels/TikTok/Shorts)",
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

    "reviews.tag": "ОТЗЫВЫ",
    "reviews.title": "Что говорят артисты",
    "reviews.role": "Артист",
    "reviews.quote1": "«Сделали обложку и lyrics видео точно в моём стиле. Быстро, чётко, без лишних вопросов — 10/10.»",
    "reviews.quote2": "«Качество на уровне. Всё согласовывали, правки вносили оперативно. Советую, если нужен сильный визуал к релизу.»",
    "reviews.quote3": "«Очень удобно: оформил заказ, скинул референсы — и просто получил готовый результат в срок. Буду ещё заказывать.»",

    "faq.tag": "FAQ",
    "faq.title": "Частые вопросы",
    "faq.q1": "Сколько времени занимает работа над заказом?",
    "faq.a1": "Обычно обложка готова за 1–3 дня, а lyrics видео — за 2–4 дня. Если у тебя горят дедлайны, возможен срочный экспресс-заказ за 24 часа по согласованию.",
    "faq.q2": "В каких форматах я получу готовые файлы?",
    "faq.a2": "Обложки: 3000×3000px, 300 DPI (JPG, PNG, TIFF) — строго по стандартам площадок. Видео: MP4 (H.264 / ProRes) в Full HD или 4K UHD, горизонтальный 16:9 и вертикальный 9:16 (для Reels / Shorts / TikTok).",
    "faq.q3": "Что если мне понадобятся правки?",
    "faq.a3": "Все базовые правки по цвету, шрифтам, таймингу текста и деталям композиции абсолютно бесплатны до финального утверждения проекта.",
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

  // Energetic kinetic word-by-word entrance animation (duration ~2.5s)
  renderKineticTitle(langCode);
}

// Kinetic Title Word Stagger Generator
function renderKineticTitle(langCode) {
  const line1El = document.getElementById('heroTitleLine1');
  const line2El = document.getElementById('heroTitleLine2');
  if (!line1El || !line2El) return;

  const text1 = translations[langCode]["hero.title1"] || "Visuals for";
  const text2 = translations[langCode]["hero.title2"] || "your music";

  const words1 = text1.split(/\s+/).filter(Boolean);
  const words2 = text2.split(/\s+/).filter(Boolean);

  let wordIdx = 0;
  line1El.innerHTML = words1.map(w => `<span class="kinetic-word" style="--w-idx:${wordIdx++}">${w}</span>`).join(' ');
  line2El.innerHTML = words2.map(w => `<span class="kinetic-word" style="--w-idx:${wordIdx++}">${w}</span>`).join(' ');
}

// ==========================================================================
// 3. MODALS LOGIC
// ==========================================================================
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
function setupDemoPlayer() {
  const playBtn = document.getElementById('demoPlayBtn');
  const playIcon = document.getElementById('playIcon');
  const progress = document.getElementById('demoProgress');
  const timer = document.getElementById('demoTimer');
  if (!playBtn) return;

  let isPlaying = false;
  let currentSec = 42;
  const totalSec = 156;
  let interval = null;

  playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      playIcon.textContent = '❚❚';
      interval = setInterval(() => {
        currentSec++;
        if (currentSec > totalSec) currentSec = 0;
        const pct = (currentSec / totalSec) * 100;
        progress.style.width = `${pct}%`;
        const mins = Math.floor(currentSec / 60);
        const secs = String(currentSec % 60).padStart(2, '0');
        timer.textContent = `${mins}:${secs} / 2:36`;
      }, 1000);
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
// 6. INITIALIZATION & EVENT LISTENERS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
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
