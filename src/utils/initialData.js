import photo1 from "../assets/images/alco_2-min.webp";
import photo2 from "../assets/images/Babaevskiy_packaging-min.webp";
import photo3 from "../assets/images/DesignDepot_2_calendar.webp";

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
  aboutIntroText,
  aboutPortfolioSwiperInitialData,
  aboutOurMachinesLinksInitialData,
  tabPaneInitialData,
  aboutDocsInitialData,
};
