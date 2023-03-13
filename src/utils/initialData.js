// Photos and Pictures Import

import photo1 from "../assets/images/alco_2-min.webp";
import photo2 from "../assets/images/Babaevskiy_packaging-min.webp";
import photo3 from "../assets/images/DesignDepot_2_calendar.webp";

import pic1 from '../assets/images/pos1-min.webp'
import pic2 from '../assets/images/tea1-min.webp'
import pic3 from '../assets/images/uf1-min.webp'
import pic4 from '../assets/images/symbol-logo.png'
import pic5 from '../assets/images/symbol-services.png'

import homepic1 from '../assets/images/plastik.webp'
import homepic2 from '../assets/images/uf-lak.webp'
import homepic3 from '../assets/images/upack.webp'
import homepic4 from '../assets/images/prozr-plenka.webp'

import upak1 from '../assets/images/upak-1.webp'

import reason1 from '../assets/images/reason1.png'
import reason2 from '../assets/images/reason2.png'
import reason3 from '../assets/images/reason3.png'
import reason4 from '../assets/images/reason4.png'

import skrepka from '../assets/images/skrepka.webp'

import run from '../assets/images/run.webp'
import bus from '../assets/images/bus.webp'
import car from '../assets/images/car.webp'
import contacts_address from '../assets/images/contacts_address.jpg'
import contacts_letter from '../assets/images/contacts_letter.jpg'
import contacts_phone from '../assets/images/contacts_phone.jpg'
import contacts_phone2 from '../assets/images/contacts_phone2.jpg'
import contacts_time from '../assets/images/contacts_time.jpg'
import scheme02 from '../assets/images/scheme-02.PNG'
import scheme03 from '../assets/images/scheme-03.PNG'

// NavBarStickyTop Initial Data

const navBarStickyTopItemsInitialData = [
  {
    id: "main",
    link: "/",
    title: "Главная",
  },
  {
    id: "about",
    link: "/about",
    title: "О нас",
  },
  {
    id: "dashboard",
    link: "/products",
    title: "Продукция",
  },
  {
    id: "services",
    link: "/services",
    title: "Услуги",
  },
  {
    id: "contacts",
    link: "/contacts",
    title: "Контакты",
  },
]

// Header Initial Data

const headerCarouselItemsInitialData = [
  {
    id: "header-carousel-item01",
    name: "/about",
    mainClassCarousel: "carousel-item bg-warning header-carousel-item active",
    spanClass1: "red",
    spanClass2: "darks",
    spanText1: "POS-",
    spanText2: "материалы",
    img: pic1,
    alt: "POS-материалы",
  },
  {
    id: "header-carousel-item02",
    name: "/products",
    mainClassCarousel: "carousel-item bg-success header-carousel-item",
    spanClass1: "",
    spanClass2: "green",
    spanText1: "Печать",
    spanText2: " упаковки",
    img: pic2,
    alt: "Печать упаковки",
  },
  {
    id: "header-carousel-item03",
    name: "/services",
    mainClassCarousel: "carousel-item bg-danger header-carousel-item",
    spanClass1: "yellow",
    spanClass2: "",
    spanText1: "UF-",
    spanText2: "печать",
    img: pic3,
    alt: "UF-печать",
  },
  {
    id: "header-carousel-item04",
    name: "/contacts",
    mainClassCarousel: "carousel-item bg-primary header-carousel-item",
    spanClass1: "yellow",
    spanClass2: "",
    spanText1: "UF-",
    spanText2: "печать",
    img: pic3,
    alt: "UF-печать",
  },
]

const headerPageTopItemsInitialData = [
  {
    id: "header-item01",
    name: "/about",
    mainClass: "carousel-item bg-warning header-carousel-item active",
    spanClass1: "red",
    spanClass2: "darks",
    spanText1: "POS-",
    spanText2: "материалы",
    img: pic1,
    alt: "POS-материалы",
  },
  {
    id: "header-item02",
    name: "/products",
    mainClass: "carousel-item bg-success header-carousel-item active",
    spanClass1: "",
    spanClass2: "green",
    spanText1: "Печать",
    spanText2: " упаковки",
    img: pic2,
    alt: "Печать упаковки",
  },
  {
    id: "header-item03",
    name: "/services",
    mainClass: "carousel-item bg-danger header-carousel-item active",
    spanClass1: "yellow",
    spanClass2: "",
    spanText1: "UF-",
    spanText2: "печать",
    img: pic5,
    alt: "UF-печать",
  },
  {
    id: "header-item04",
    name: "/contacts",
    mainClass: "carousel-item bg-primary header-carousel-item active",
    spanClass1: "yellow",
    spanClass2: "",
    spanText1: "Наши ",
    spanText2: "контакты",
    img: pic4,
    alt: "UF-печать",
  },
]

// Home Page Initial Data

const homeOurSpecialityItemInitialData = [
  {
    id: "spec01",
    title: "ПЕЧАТЬ НА ПЛАСТИКЕ",
    img: homepic1,
    alt: "ПЕЧАТЬ НА ПЛАСТИКЕ",
  },
  {
    id: "spec02",
    title: "Офсетная уф печать",
    img: homepic2,
    alt: "Офсетная уф печать",
  },
  {
    id: "spec03",
    title: "ИЗГОТОВЛЕНИЕ УПАКОВКИ",
    img: homepic3,
    alt: "ИЗГОТОВЛЕНИЕ УПАКОВКИ",
  },
  {
    id: "spec04",
    title: "Печать на пленке",
    img: homepic4,
    alt: "Печать на пленке",
  },
]

const homeReadyItemInitialData = [
  {
    id: "ready1",
    img: upak1,
    alt: "Коробка «Коньячная»",
    title: "Коробка «Коньячная»",
    text: "Коробка с самосборным дном. Размер&nbsp;200х90х260 мм. Красочность: 4+0. Кашированный на микрогофру картон.",
    qty: "Тираж: 5000 экз.",
  },
  {
    id: "ready2",
    img: upak1,
    alt: "Коробка «Коньячная»",
    title: "Коробка «Лекарственная»",
    text: "Коробка клеевая на 1 точку. Размер 42х20х102 мм. Красочность: 4+0. Картон 1-стороннего мелования 250 г/м2.",
    qty: "Тираж: 10000 экз.",
  },
  {
    id: "ready3",
    img: upak1,
    alt: "Коробка «Коньячная»",
    title: "Коробка «Коньячная»",
    text: "Коробка с самосборным дном. Размер&nbsp;200х90х260 мм. Красочность: 4+0. Кашированный на микрогофру картон.",
    qty: "Тираж: 5000 экз.",
  },
  {
    id: "ready4",
    img: upak1,
    alt: "Коробка «Лекарственная»",
    title: "Коробка «Лекарственная»",
    text: "Коробка клеевая на 1 точку. Размер 42х20х102 мм. Красочность: 4+0. Картон 1-стороннего мелования 250 г/м2.",
    qty: "Тираж: 10000 экз.",
  },
]

const homeReasonItemInitialData = [
  {
    id: 'reason-1',
    cardClass: "row reason1",
    title: "Быстро",
    description: "Ответим на запрос в течение 20 мин. Предоставим стоимость в течение 3 часов. Изготовим тираж за 5 дней.",
  },
  {
    id: 'reason-2',
    cardClass: "row reason2",
    title: "Под ключ",
    description: "Разработаем макет. Сделаем тестовый образец конструкции. Напечатаем и обработаем. Упакуем и доставим.",
  },
  {
    id: 'reason-3',
    cardClass: "row reason3",
    title: "Доставка - 0р",
    description: "Доставляем бесплатно тиражи в будни в пределах МКАД, если вес тиража составляет 1500 кг.",
  },
  {
    id: 'reason-4',
    cardClass: "row reason4",
    title: "Качество - 100%",
    description: "Многоуровневая система контроля качества позволяет нам безупречно выполнять свою работу.",
  },
]

const homeOurAdvantageItemInitialData = [
  {
    id: "advantage-01",
    title: "Оборудование",
    text: "Большой парк собственного оборудования.",
    link: "#",
    linkText: "ссылка",
  },
  {
    id: "advantage-02",
    title: "Конструкторское бюро",
    text: "Разработаем и предоставим тестовый образец упаковки.",
    link: "#",
    linkText: "ссылка",
  },
  {
    id: "advantage-03",
    title: "Постпечатная обработка",
    text: "Большие возможности по отделке и послепечатной обработке продукции.",
    link: "#",
    linkText: "ссылка",
  },
  {
    id: "advantage-04",
    title: "УФ печать",
    text: "Печатаем на всех видах невпитывающих материалов.",
    link: "#",
    linkText: "ссылка",
  },
  {
    id: "advantage-05",
    title: "Автоматизация",
    text: "Полная автоматизация всех бизнес-процессов. Ни одно Ваше обращение не останется без внимания.",
    link: "",
    linkText: "ссылка",
  },
]

// About Us Page Initial Data

const aboutIntroText = "«NPD-упаковка» - крупная типография европейского уровня обслуживания и надежный партнер вашего бизнеса. Предоставляем каждому клиенту лучшие полиграфические решения, путем внедрения передовых технологий полиграфии и самых высоких стандартов качества. Мы типография полного производственного цикла. У нас лучшее специализированное программное обеспечение, современное высокотехнологичное оборудование. Наша типография является официальным партнером компаний КБА и Гейдельберг."

const aboutDocsInitialData = [
  {
    id: "doc-01",
    title: "Сертификат соответствия ISO 22000:2018",
    link: "#",
  },
  {
    id: "doc-02",
    title:
      "Декларация о соответствии требованиям технического регламента таможенного союза «О безопасности упаковки»",
    link: "#",
  },
  {
    id: "doc-03",
    title: "Сертификат соответствия ISO 22000:2005",
    link: "#",
  },
  {
    id: "doc-04",
    title: "Сертификат еще какой-то",
    link: "#",
  },
];

const aboutOurMachinesLinksInitialData = [
  {
    id: "mach-all",
    name: "Все",
    link: "#",
    active: true,
  },
  {
    id: "mach-before",
    name: "Допечатное оборудование",
    link: "#",
    active: false,
  },
  {
    id: "mach-print",
    name: "Печатное оборудование",
    link: "#",
    active: false,
  },
  {
    id: "mach-after",
    name: "Послепечатное оборудование",
    link: "#",
    active: false,
  },
]

const tabPaneInitialData = [
  {
    id: "tab-01",
    title: "Heidelberg Suprasetter 105 Gen II DCL",
    text: "Термальная CtP-система для вывода печатных форм.",
    active: true,
  },
  {
    id: "tab-02",
    title: "Hohner Maschinenbau",
    text: "Проволокошвейная машина.",
    active: false,
  },
  {
    id: "tab-03",
    title: "Iberica",
    text: "Машина для высечки, тиснения фольгой и конгревного тиснения.",
    active: false,
  },
  {
    id: "tab-04",
    title: "Domino K150 VR",
    text: "Линия для персонализации/нумерации, в том числе по невпитывающим материалам.",
    active: false,
  },
  {
    id: "tab-05",
    title: "Heidelberg Stahl KD 78",
    text: "Фальцевальная машина.",
    active: false,
  },
];

const aboutPortfolioSwiperInitialData = [
  {
    id: "pack-01",
    photo: photo1,
    name: "Упаковка 1",
  },
  {
    id: "pack-02",
    photo: photo2,
    name: "Упаковка 2",
  },
  {
    id: "pack-03",
    photo: photo3,
    name: "Упаковка 3",
  },
  {
    id: "pack-04",
    photo: photo1,
    name: "Упаковка 4",
  },
  {
    id: "pack-05",
    photo: photo2,
    name: "Упаковка 5",
  },
  {
    id: "pack-06",
    photo: photo3,
    name: "Упаковка 6",
  },
];

// Products Page Initial Data

const productsItemsInitialData = [
  {
    id: "product-01",
    img: pic1,
    name: "Изготовление стаканов",
    links: [
      {
        id: "productlink-01",
        name: "Рекламные диспенсеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-02",
        name: "Хардпостеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-03",
        name: "Cтрайп-лента",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-04",
        name: "Воблеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-05",
        name: "Некхенгеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
    ]
  },
  {
    id: "product-02",
    img: pic2,
    name: "Изготовление ванн для плавленого сыра",
    links: [
      {
        id: "productlink-01",
        name: "Рекламные диспенсеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-02",
        name: "Хардпостеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-03",
        name: "Cтрайп-лента",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-04",
        name: "Воблеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-05",
        name: "Некхенгеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
    ]
  },
  {
    id: "product-03",
    img: pic3,
    name: "Изготовление упаковки для мороженого",
    links: [
      {
        id: "productlink-01",
        name: "Рекламные диспенсеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-02",
        name: "Хардпостеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-03",
        name: "Cтрайп-лента",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-04",
        name: "Воблеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-05",
        name: "Некхенгеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
    ]
  },
  {
    id: "product-04",
    img: pic1,
    name: "Вырубка из картона",
    links: [
      {
        id: "productlink-01",
        name: "Рекламные диспенсеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-02",
        name: "Хардпостеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-03",
        name: "Cтрайп-лента",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-04",
        name: "Воблеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-05",
        name: "Некхенгеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
    ]
  },
  {
    id: "product-05",
    img: pic2,
    name: "Изготовление упаковки для шаурмы",
    links: [
      {
        id: "productlink-01",
        name: "Рекламные диспенсеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-02",
        name: "Хардпостеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-03",
        name: "Cтрайп-лента",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-04",
        name: "Воблеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-05",
        name: "Некхенгеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
    ]
  },
  {
    id: "product-06",
    img: pic3,
    name: "Изготовление конусных крышек для мороженого",
    links: [
      {
        id: "productlink-01",
        name: "Рекламные диспенсеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-02",
        name: "Хардпостеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-03",
        name: "Cтрайп-лента",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-04",
        name: "Воблеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
      {
        id: "productlink-05",
        name: "Некхенгеры",
        href: "/produktsiya/pos-materialy/dispensery/",
      },
    ]
  }
]

// Services Page Initial Data

const servicesItemsInitialData = [
  {
    id: "service-01",
    name: "Формовка бумажных стаканов с печатью и без",
    img: pic1,
    list: [
      {
        id: "servicelink-01-1",
        href: "#",
        name: "DW cups",
      },
      {
        id: "servicelink-01-2",
        href: "#",
        name: "SP cups",
      },
      {
        id: "servicelink-01-3",
        href: "#",
        name: "Креманки",
      },
      {
        id: "servicelink-01-4",
        href: "#",
        name: "Стаканы под мороженое",
      },
    ]
  },
  {
    id: "service-02",
    name: "Термоформовка пластиковых контейнеров",
    img: pic1,
    list: [
      {
        id: "servicelink-02-1",
        href: "#",
        name: "DW cups",
      },
    ]
  },
  {
    id: "service-03",
    name: "Вырубка из бумаги",
    img: pic1,
    list: [
      {
        id: "servicelink-03-1",
        href: "#",
        name: "DW cups",
      },
      {
        id: "servicelink-03-2",
        href: "#",
        name: "SP cups",
      },
      {
        id: "servicelink-03-3",
        href: "#",
        name: "Креманки",
      },
      {
        id: "servicelink-03-4",
        href: "#",
        name: "Стаканы под мороженое",
      },
    ]
  },
  {
    id: "service-04",
    name: "Печать на пластиковых контейнерах",
    img: pic1,
    list: [
      {
        id: "servicelink-04-1",
        href: "#",
        name: "DW cups",
      },
      {
        id: "servicelink-04-2",
        href: "#",
        name: "Стаканы под мороженое",
      },
    ]
  },
  {
    id: "service-05",
    name: "Еще какая-то услуга",
    img: pic1,
    list: [
      {
        id: "servicelink-05-1",
        href: "#",
        name: "DW cups",
      },
      {
        id: "servicelink-05-2",
        href: "#",
        name: "SP cups",
      },
      {
        id: "servicelink-05-3",
        href: "#",
        name: "Креманки",
      },
    ]
  },
]

// Contacts Page Initial Data

const contactsIntroText = "Будем рады видеть Вас на нашем производстве. Офис и производство находятся в одном месте. Ближайшая к нам станция второго диаметра D2 - Львовская. Ждём Вас!"

export {
  navBarStickyTopItemsInitialData,
  headerCarouselItemsInitialData,
  headerPageTopItemsInitialData,
  homeOurSpecialityItemInitialData,
  homeReadyItemInitialData,
  homeReasonItemInitialData,
  homeOurAdvantageItemInitialData,
  aboutIntroText,
  aboutPortfolioSwiperInitialData,
  aboutOurMachinesLinksInitialData,
  tabPaneInitialData,
  aboutDocsInitialData,
  reason1,
  reason2,
  reason3,
  reason4,
  productsItemsInitialData,
  skrepka,
  servicesItemsInitialData,
  contactsIntroText,
  run,
  bus,
  car,
  contacts_address,
  contacts_letter,
  contacts_phone,
  contacts_phone2,
  contacts_time,
  scheme02,
  scheme03,
};
