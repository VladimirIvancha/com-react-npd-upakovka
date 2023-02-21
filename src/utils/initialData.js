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
  headerCarouselItemsInitialData,
  aboutIntroText,
  aboutPortfolioSwiperInitialData,
  aboutOurMachinesLinksInitialData,
  tabPaneInitialData,
  aboutDocsInitialData,
  homepic1,
  homepic2,
  homepic3,
  homepic4,
  upak1,
};
