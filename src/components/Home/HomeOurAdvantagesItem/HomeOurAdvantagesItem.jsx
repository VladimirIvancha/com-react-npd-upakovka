import React from 'react'

function HomeOurAdvantagesItem({ item }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 g-4">
      <div class="card h-100">
        <div class="card-body d-flex flex-column justify-content-between">
          <div className="row">
            <h5 class="card-title mb-2">{item.title}</h5>
            <p class="card-text">{item.text}</p>
          </div>
          <a href={item.link} class="card-link">{item.linkText}</a>
        </div>
      </div>
    </div>
  )
}

export default HomeOurAdvantagesItem