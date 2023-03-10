import React from 'react'
import { contacts_address, contacts_letter, contacts_phone, contacts_phone2, contacts_time } from '../../../utils/initialData'

function ContactsBlock() {
  return (
    <div>
      <div className="contacts_phone fcontact font16">
        <span className="fw-bold">
          <a href="tel:74951039315">
            <img className='me-2' src={contacts_phone} alt='Телефон-1' />
            +7 (495) 777-77-77
          </a>
        </span>
      </div>
      <div className="contacts_phone2 fcontact font16">
        <span className="fw-bold">
          <a href="tel:88006002016">
            <img className='me-3' src={contacts_phone2} alt='Телефон-2' />
            8-800-777-77-77
          </a>
        </span>
        <br />
        <div className="ms-3">
          (Звонок бесплатный)
        </div>
      </div>
      <div className="contacts_address fcontact font16">
        <span className="fw-bold">
          <img className='me-3' src={contacts_address} alt='Адрес' />
          МЕСТОНАХОЖДЕНИЕ:
        </span>
        <br />
        <span className="fw-bold">
          Адрес:
        </span>
        <br />
        Россия, 142155, г. Московская обл., г. Подольск,,
        <br />
        мкр. Львовский, пр-д Металлургов, д. 3, стр. 1
        <br />
        <span className="fw-bold">
          Координаты:
        </span>
        <br />
        55.326719, 37.513517
      </div>
      <div className="contacts_time fcontact font16">
        <span className="fw-bold">
          <img className='me-3' src={contacts_time} alt='Время работы' />
          ВРЕМЯ РАБОТЫ:
          <br />
          Офис:
          <br />
        </span>
        пн-пт - с 10:00 до 19:00
        <br />
        сб-вс - выходные
        <br />
        <span className="fw-bold">
          Производство:
        </span>
        <br />
        без выходных, круглосуточно
      </div>
      <div className="contacts_email fcontact font16">
        <span className="fw-bold">
          <img className='me-3' src={contacts_letter} alt='Электронная почта' />
          ЭЛЕКТРОННАЯ ПОЧТА:
          <br />
        </span>
        <a href="mailto:zakaz@arbat-t.ru">
          info@npd-upakovka.ru
        </a>
        <br />
      </div>
      <div className="row">
        <div className="col text-center">
          <button type="button" className="btn btn-warning btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Схема проезда
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactsBlock