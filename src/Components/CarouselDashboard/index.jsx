import React from "react";
import CircleChart from "../Chart/CircleChart";
import ProgressCarousel from "../ProgressCarousel";

export default function CarouselDashboard() {
  return (
    <div className="row">
      <div className="col-md-12 grid-margin stretch-card">
        <div className="card position-relative">
          <div className="card-body">
            <div
              id="detailedReports"
              className="carousel slide detailed-report-carousel position-static pt-2"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-12 col-xl-3 d-flex flex-column justify-content-start">
                      <div className="ml-xl-4 mt-3">
                        <p className="card-title">Detailed Reports</p>
                        <h1 className="text-primary">$34040</h1>
                        <h3 className="font-weight-500 mb-xl-4 text-primary">
                          North America
                        </h3>
                        <p className="mb-2 mb-xl-0">
                          The total number of sessions within the date range. It
                          is the period time a user is actively engaged with
                          your website, page or app, etc
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12 col-xl-9">
                      <div className="row">
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
                                    <h5 className="font-weight-bold mb-0">
                                      713
                                    </h5>
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
                                    <h5 className="font-weight-bold mb-0">
                                      583
                                    </h5>
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
                                    <h5 className="font-weight-bold mb-0">
                                      924
                                    </h5>
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
                                    <h5 className="font-weight-bold mb-0">
                                      664
                                    </h5>
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
                                    <h5 className="font-weight-bold mb-0">
                                      560
                                    </h5>
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
                                    <h5 className="font-weight-bold mb-0">
                                      793
                                    </h5>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="col-md-6 mt-3">
                          <div className="chartjs-size-monitor">
                            <div className="chartjs-size-monitor-expand">
                              <div className />
                            </div>
                            <div className="chartjs-size-monitor-shrink">
                              <div className />
                            </div>
                          </div>

                          <CircleChart />
                          <div id="north-america-legend">
                            <div className="report-chart">
                              <div className="d-flex justify-content-between mx-4 mx-xl-5 mt-3">
                                <div className="d-flex align-items-center">
                                  <div
                                    className="mr-3"
                                    style={{
                                      width: 20,
                                      height: 20,
                                      borderRadius: "50%",
                                      backgroundColor: "#4B49AC",
                                    }}
                                  />
                                  <p className="mb-0">Offline sales</p>
                                </div>
                                <p className="mb-0">88333</p>
                              </div>
                              <div className="d-flex justify-content-between mx-4 mx-xl-5 mt-3">
                                <div className="d-flex align-items-center">
                                  <div
                                    className="mr-3"
                                    style={{
                                      width: 20,
                                      height: 20,
                                      borderRadius: "50%",
                                      backgroundColor: "#FFC100",
                                    }}
                                  />
                                  <p className="mb-0">Online sales</p>
                                </div>
                                <p className="mb-0">66093</p>
                              </div>
                              <div className="d-flex justify-content-between mx-4 mx-xl-5 mt-3">
                                <div className="d-flex align-items-center">
                                  <div
                                    className="mr-3"
                                    style={{
                                      width: 20,
                                      height: 20,
                                      borderRadius: "50%",
                                      backgroundColor: "#248AFD",
                                    }}
                                  />
                                  <p className="mb-0">Returns</p>
                                </div>
                                <p className="mb-0">39836</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-12 col-xl-3 d-flex flex-column justify-content-start">
                      <div className="ml-xl-4 mt-3">
                        <p className="card-title">Detailed Reports</p>
                        <h1 className="text-primary">$34040</h1>
                        <h3 className="font-weight-500 mb-xl-4 text-primary">
                          North America
                        </h3>
                        <p className="mb-2 mb-xl-0">
                          The total number of sessions within the date range. It
                          is the period time a user is actively engaged with
                          your website, page or app, etc
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12 col-xl-9">
                      <div className="row">
                        <ProgressCarousel />
                        <div className="col-md-6 mt-3">
                          <div className="chartjs-size-monitor">
                            <div className="chartjs-size-monitor-expand">
                              <div className />
                            </div>
                            <div className="chartjs-size-monitor-shrink">
                              <div className />
                            </div>
                          </div>

                          <CircleChart />
                          <div id="south-america-legend">
                            <div className="report-chart">
                              <div className="d-flex justify-content-between mx-4 mx-xl-5 mt-3">
                                <div className="d-flex align-items-center">
                                  <div
                                    className="mr-3"
                                    style={{
                                      width: 20,
                                      height: 20,
                                      borderRadius: "50%",
                                      backgroundColor: "#4B49AC",
                                    }}
                                  />
                                  <p className="mb-0">Offline sales</p>
                                </div>
                                <p className="mb-0">495343</p>
                              </div>
                              <div className="d-flex justify-content-between mx-4 mx-xl-5 mt-3">
                                <div className="d-flex align-items-center">
                                  <div
                                    className="mr-3"
                                    style={{
                                      width: 20,
                                      height: 20,
                                      borderRadius: "50%",
                                      backgroundColor: "#FFC100",
                                    }}
                                  />
                                  <p className="mb-0">Online sales</p>
                                </div>
                                <p className="mb-0">630983</p>
                              </div>
                              <div className="d-flex justify-content-between mx-4 mx-xl-5 mt-3">
                                <div className="d-flex align-items-center">
                                  <div
                                    className="mr-3"
                                    style={{
                                      width: 20,
                                      height: 20,
                                      borderRadius: "50%",
                                      backgroundColor: "#248AFD",
                                    }}
                                  />
                                  <p className="mb-0">Returns</p>
                                </div>
                                <p className="mb-0">290831</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#detailedReports"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#detailedReports"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
