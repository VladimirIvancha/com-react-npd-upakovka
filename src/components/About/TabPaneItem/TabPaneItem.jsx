import React from "react";

function TabPaneItem({ id, title, text }) {
  return (
    <div className="col-sm-12 col-lg-6" id={id}>
      <div className="card h-100 text-center text-bg-info border">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title mb-2">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default TabPaneItem;
