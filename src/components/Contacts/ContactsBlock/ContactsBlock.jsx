import React from 'react'
import { contacts_address, contacts_letter, contacts_phone, contacts_phone2, contacts_time } from '../../../utils/initialData'

function ContactsBlock() {
  return (
    <div>
      <div class="contacts_phone fcontact font18">
        <span class="fw-bold">
          <a href="tel:74951039315">
            <img className='me-2' src={contacts_phone} alt='Телефон-1' />
            +7 (495) 777-77-77
          </a>
        </span>
      </div>
      <div class="contacts_phone2 fcontact font18">
        <span class="fw-bold">
          <a href="tel:88006002016">
            <img className='me-3' src={contacts_phone2} alt='Телефон-2' />
            8-800-777-77-77
          </a>
        </span>
        <br />
        <div class="monserrat-medium d-none d-lg-block">
          (Для региональных звонков)
        </div>
      </div>
      <div class="contacts_address fcontact font18">
        <span class="fw-bold">
          <img className='me-3' src={contacts_address} alt='Адрес' />
          АДРЕС:
        </span>
        <br />
        Россия, 142155, г. Московская обл., г. Подольск,,
        <br />
        мкр. Львовский, пр-д Металлургов, д. 3, стр. 1
      </div>
      <div class="contacts_time fcontact font18">
        <span class="fw-bold">
          <img className='me-3' src={contacts_time} alt='Время работы' />
          ВРЕМЯ РАБОТЫ:
          <br />
          Офис:
          <br />
        </span>
        пн-пт - с 10:00 до 19:00<br />
        сб-вс - выходные
        <br />
        <span class="fw-bold">
          Производство:
        </span>
        <br />
        без выходных, круглосуточно
      </div>
      <div class="contacts_email fcontact font18">
        <span class="fw-bold">
          <img className='me-3' src={contacts_letter} alt='Электронная почта' />
          ЭЛЕКТРОННАЯ ПОЧТА:
          <br />
        </span>
        <a href="mailto:zakaz@arbat-t.ru">
          info@npd-upakovka.ru
        </a>
        <br />
      </div>
    </div>
  )
}

export default ContactsBlock