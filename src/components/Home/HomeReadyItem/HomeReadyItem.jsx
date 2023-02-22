import React from 'react'

function HomeReadyItem({ item }) {
  return (
    <div className="col-12 col-lg-6">
      <div className="col item-wrapper">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-4 d-flex justify-content-center m-auto">
              <img src={item.img} className="img-fluid rounded-start" alt={item.alt} />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title home-title">{item.title}</h5>
                <p className="card-text home-text">{item.text}</p>
                <p className="card-text home-text"><small>{item.qty}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeReadyItem