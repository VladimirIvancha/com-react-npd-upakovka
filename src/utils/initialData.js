import photo1 from "../assets/images/alco_2-min.webp";
import photo2 from "../assets/images/Babaevskiy_packaging-min.webp";
import photo3 from "../assets/images/DesignDepot_2_calendar.webp";

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

export { aboutPortfolioSwiperInitialData, tabPaneInitialData };
