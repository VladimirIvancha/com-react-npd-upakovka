import React from "react";

function AboutDocsItem({ item }) {
  return (
    <div
      className="col-12 col-md-6 col-lg-4 text-center d-flex py-2 shadow-sm rounded"
      id={item.id}
    >
      <div className="row flex-column justify-content-between rounded-2 p-2 w-100 mx-auto">
        <div className="row mt-3 mx-auto">
          <h3 className="fs-5">{item.title}</h3>
        </div>
        <div className="row flex-column mx-auto">
          <div className="icon mx-auto my-3">
            <i className="fa-regular fa-file-pdf fs-1 icon__center"></i>
          </div>
          <a
            className="btn btn-success mb-4 col-4 mx-auto"
            href={item.link}
            target="_blank"
          >
            Скачать
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutDocsItem;
