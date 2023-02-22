import React from 'react'

function HomeOurAdvantagesItem({ item }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 g-4">
      <div className="card h-100">
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="row">
            <h5 className="card-title mb-2">{item.title}</h5>
            <p className="card-text">{item.text}</p>
          </div>
          <a href={item.link} className="card-link">{item.linkText}</a>
        </div>
      </div>
    </div>
  )
}

export default HomeOurAdvantagesItem