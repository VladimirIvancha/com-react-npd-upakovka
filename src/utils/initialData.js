import photo1 from "../assets/images/alco_2-min.webp";
import photo2 from "../assets/images/Babaevskiy_packaging-min.webp";
import photo3 from "../assets/images/DesignDepot_2_calendar.webp";

import pic1 from '../assets/images/pos1-min.webp'
import pic2 from '../assets/images/tea1-min.webp'
import pic3 from '../assets/images/uf1-min.webp'

import homepic1 from '../assets/images/plastik.webp'
import homepic2 from '../assets/images/uf-lak.webp'
import homepic3 from '../assets/images/upack.webp'
import homepic4 from '../assets/images/prozr-plenka.webp'

import upak1 from '../assets/images/upak-1.webp'

import reason1 from '../assets/images/reason1.png'
import reason2 from '../assets/images/reason2.png'
import reason3 from '../assets/images/reason3.png'
import reason4 from '../assets/images/reason4.png'

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
    link: "/dashboard",
    title: "Продукция",
  },
  {
    id: "services",
    link: "/",
    title: "Услуги",
  },
  {
    id: "contacts",
    link: "/",
    title: "Контакты",
  },
]

const headerCarouselItemsInitialData = [
  {
    id: "heder-carousel-item01",
    mainClass: "carousel-item bg-warning header-carousel-item active",
    spanClass1: "red",
    spanClass2: "darks",
    spanText1: "POS-",
    spanText2: "материалы",
    img: pic1,
    alt: "POS-материалы",
  },
  {
    id: "heder-carousel-item02",
    mainClass: "carousel-item bg-success header-carousel-item",
    spanClass1: "",
    spanClass2: "green",
    spanText1: "Печать",
    spanText2: " упаковки",
    img: pic2,
    alt: "Печать упаковки",
  },
  {
    id: "heder-carousel-item03",
    mainClass: "carousel-item bg-danger header-carousel-item",
    spanClass1: "yellow",
    spanClass2: "",
    spanText1: "UF-",
    spanText2: "печать",
    img: pic3,
    alt: "UF-печать",
  },
]

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

export {
  navBarStickyTopItemsInitialData,
  headerCarouselItemsInitialData,
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
};
