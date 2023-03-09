import React from 'react'
import { contactsIntroText } from '../../utils/initialData'
import ContactsAccordion from './ContactsAccordion/ContactsAccordion'
import ContactsBlock from './ContactsBlock/ContactsBlock'
import ContactsMap from './ContactsMap/ContactsMap'
import ContactsSchemeModal from './ContactsSchemeModal/ContactsSchemeModal'

function Contacts() {
  return (
    <section className='contacts' id='contacts'>
      <div className="container py-5">

        <div className="row">
          <div className="col-12 text-center">
            <h2 className="products-title fw-bold">Как нас найти</h2>
          </div>
        </div>

        <div className="row">
          <div className="text-start col-12 fs-5 my-5">{contactsIntroText}</div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-6 mb-4">
            <ContactsAccordion />
            <ContactsMap />
          </div>

          <div className="col-sm-12 col-lg-5 offset-lg-1">
            <ContactsBlock />
          </div>
        </div>

      </div>
      <ContactsSchemeModal />
    </section>
  )
}

export default Contacts