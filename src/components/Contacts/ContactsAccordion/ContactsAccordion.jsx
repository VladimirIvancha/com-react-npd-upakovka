import React from 'react'
import { bus, car, run } from '../../../utils/initialData'

function ContactsAccordion() {
  return (
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <img className='' src={run} alt='Пешком' />
            Пешком
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            Выход из метро в сторону Дворца Борьбы им. Ярыгина (в подземном переходе самый дальний предпоследний выход). Идти по ул. Авиамоторная около 1,5 км (примерно 20 минут ходьбы), по левой стороне улицы против движения транспорта, до ориентира – закусочная "Шашлык на углях". Зайти в ворота и через 10 метров будет слева подъезд с вывеской «Полиграфия».
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <img className='' src={car} alt='На машине' />
            На машине
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            По ш.Энтузиастов до перекрестка с ул. Авиамоторная. Повернув на Авиамоторную, продолжайте движение прямо около 1,1 км до ориентира – закусочная "Шашлык на углях". Поворачивайте налево, заезжайте в ворота на территорию двора к подъезду с вывеской "Полиграфия".
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <img className='' src={bus} alt='На транспорте' />
            На транспорте
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            Выход из метро в сторону Дворца Борьбы им. Ярыгина (в подземном переходе самый дальний предпоследний выход). Остановка находится у выхода из метро. На любом автобусе (кроме 805) или маршрутке проехать до остановки «4-ая Кабельная улица, Дворец Единоборств». Это 3 остановки, около 5 минут движения. От остановки перейти на другую сторону дороги по наземному пешеходному переходу и идти по улице около 150 метров против движения транспорта до ориентира – закусочная "Шашлык на углях". Зайти в ворота и через 10 метров увидите слева подъезд с вывеской «Полиграфия».
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsAccordion