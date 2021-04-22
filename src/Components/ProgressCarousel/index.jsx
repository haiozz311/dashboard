import React from "react";

export default function ProgressCarousel() {
  return (
    <div className="col-md-6 border-right">
      <div className="table-responsive mb-3 mb-md-0 mt-3">
        <table className="table table-borderless report-table">
          <tbody>
            <tr>
              <td className="text-muted">Illinois</td>
              <td className="w-100 px-0">
                <div className="progress progress-md mx-4">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </td>
              <td>
                <h5 className="font-weight-bold mb-0">713</h5>
              </td>
            </tr>
            <tr>
              <td className="text-muted">Washington</td>
              <td className="w-100 px-0">
                <div className="progress progress-md mx-4">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow={30}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </td>
              <td>
                <h5 className="font-weight-bold mb-0">583</h5>
              </td>
            </tr>
            <tr>
              <td className="text-muted">Mississippi</td>
              <td className="w-100 px-0">
                <div className="progress progress-md mx-4">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </td>
              <td>
                <h5 className="font-weight-bold mb-0">924</h5>
              </td>
            </tr>
            <tr>
              <td className="text-muted">California</td>
              <td className="w-100 px-0">
                <div className="progress progress-md mx-4">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </td>
              <td>
                <h5 className="font-weight-bold mb-0">664</h5>
              </td>
            </tr>
            <tr>
              <td className="text-muted">Maryland</td>
              <td className="w-100 px-0">
                <div className="progress progress-md mx-4">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow={40}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </td>
              <td>
                <h5 className="font-weight-bold mb-0">560</h5>
              </td>
            </tr>
            <tr>
              <td className="text-muted">Alaska</td>
              <td className="w-100 px-0">
                <div className="progress progress-md mx-4">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </td>
              <td>
                <h5 className="font-weight-bold mb-0">793</h5>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
