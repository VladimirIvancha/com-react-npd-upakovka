import React from 'react'
import { scheme02 } from '../../../utils/initialData'

function ContactsSchemeModal() {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Схема проезда со стороны А107</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <img className='col-12' src={scheme02} alt='Схема проезда к офису и производству ООО "NPD-упаковка"' />
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          </div>
          <div className="modal-footer">
            <a className="btn btn-secondary" href="https://transport.mos.ru/common/upload/docs/map/s1.pdf" target="_blank">Скачать в PDF</a>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsSchemeModal