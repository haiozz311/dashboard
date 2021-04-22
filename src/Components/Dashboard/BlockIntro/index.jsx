import React from "react";

export default function BlockIntro({ data }) {
  const mapData = data.map((item, index) => (
    <div className="col-md-6 mb-4 stretch-card transparent" key={index}>
      <div className={"card " + item.color}>
        <div className="card-body">
          <p className="mb-4">{item.title}</p>
          <p className="fs-30 mb-2">{item.number}</p>
          <p>{item.percent}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="col-md-6 grid-margin transparent">
      <div className="row">{mapData}</div>
    </div>
  );
}
