import React from "react";

export default function BlockCard() {
  return (
    <div className="col-md-4 stretch-card grid-margin grid-margin-md-0">
      <div className="card data-icon-card-primary">
        <div className="card-body">
          <p className="card-title text-white">Number of Meetings</p>
          <div className="row">
            <div className="col-8 text-white">
              <h3>34040</h3>
              <p className="text-white font-weight-500 mb-0">
                The total number of sessions within the date range.It is
                calculated as the sum .
              </p>
            </div>
            <div className="col-4 background-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
