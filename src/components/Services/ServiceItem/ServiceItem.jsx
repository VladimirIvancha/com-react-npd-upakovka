import React from 'react'
import ServiceItemLink from './ServiceItemLink/ServiceItemLink'

function ServiceItem({ item }) {
  return (
    <div className="col-12 col-lg-3 col-md-4 col-sm-6 serv-container bg-light py-4 text-center ">
      <div className="service-header my-2">{item.name}</div>
      <div className="service-image text-center my-2">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="service-links mb-2 mt-4 fw-bold text-center text-sm-start">
        {item.list?.map((item) => (
          <ServiceItemLink key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ServiceItem