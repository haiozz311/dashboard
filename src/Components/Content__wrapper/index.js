import React from 'react'

export default function Content_wapper() {
  return (
    <div className="content-wrapper">
    {/* row-1 */}
    <div className="row">
      <div className="col-md-12 grid-margin">
        <div className="row">
          <div className="col-12 col-xl-8 mb-4 mb-xl-0">
            <h3 className="font-weight-bold">Welcome Aamir</h3>
            <h6 className="font-weight-normal mb-0">
              All systems are running smoothly! You have
              <span className="text-primary">3 unread alerts!</span>
            </h6>
          </div>
          <div className="col-12 col-xl-4">
            <div className="justify-content-end d-flex">
              <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                <button className="btn btn-sm btn-light bg-white dropdown-toggle" type="button" id="dropdownMenuDate2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <i className="mdi mdi-calendar" /> Today (10 Jan 2021)
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate2">
                  <a className="dropdown-item" href="#">January - March</a>
                  <a className="dropdown-item" href="#">March - June</a>
                  <a className="dropdown-item" href="#">June - August</a>
                  <a className="dropdown-item" href="#">August - November</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* row-2  */}
    <div className="row">
      <div className="col-md-6 grid-margin stretch-card">
        <div className="card tale-bg">
          <div className="card-people mt-auto">
            <img src="images/dashboard/people.svg" alt="people" />
            <div className="weather-info">
              <div className="d-flex">
                <div>
                  <h2 className="mb-0 font-weight-normal">
                    <i className="icon-sun mr-2" />31<sup>C</sup>
                  </h2>
                </div>
                <div className="ml-2">
                  <h4 className="location font-weight-normal">Bangalore</h4>
                  <h6 className="font-weight-normal">India</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 grid-margin transparent">
        <div className="row">
          <div className="col-md-6 mb-4 stretch-card transparent">
            <div className="card card-tale">
              <div className="card-body">
                <p className="mb-4">Today’s Bookings</p>
                <p className="fs-30 mb-2">4006</p>
                <p>10.00% (30 days)</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4 stretch-card transparent">
            <div className="card card-dark-blue">
              <div className="card-body">
                <p className="mb-4">Total Bookings</p>
                <p className="fs-30 mb-2">61344</p>
                <p>22.00% (30 days)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
            <div className="card card-light-blue">
              <div className="card-body">
                <p className="mb-4">Number of Meetings</p>
                <p className="fs-30 mb-2">34040</p>
                <p>2.00% (30 days)</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 stretch-card transparent">
            <div className="card card-light-danger">
              <div className="card-body">
                <p className="mb-4">Number of Clients</p>
                <p className="fs-30 mb-2">47033</p>
                <p>0.22% (30 days)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* row-3 */}
    <div className="row">
      <div className="col-md-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
            <p className="card-title">Order Details</p>
            <p className="font-weight-500">
              The total number of sessions within the date range. It is
              the period time a user is actively engaged with your
              website, page or app, etc
            </p>
            <div className="d-flex flex-wrap mb-5">
              <div className="mr-5 mt-3">
                <p className="text-muted">Order value</p>
                <h3 className="text-primary fs-30 font-weight-medium">
                  12.3k
                </h3>
              </div>
              <div className="mr-5 mt-3">
                <p className="text-muted">Orders</p>
                <h3 className="text-primary fs-30 font-weight-medium">
                  14k
                </h3>
              </div>
              <div className="mr-5 mt-3">
                <p className="text-muted">Users</p>
                <h3 className="text-primary fs-30 font-weight-medium">
                  71.56%
                </h3>
              </div>
              <div className="mt-3">
                <p className="text-muted">Downloads</p>
                <h3 className="text-primary fs-30 font-weight-medium">
                  34040
                </h3>
              </div>
            </div>
            <canvas id="order-chart" style={{display: 'block', width: 741, height: 370}} width={741} height={370} className="chartjs-render-monitor" />
          </div>
        </div>
      </div>
      <div className="col-md-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
            <div className="d-flex justify-content-between">
              <p className="card-title">Sales Report</p>
              <a href="#" className="text-info">View all</a>
            </div>
            <p className="font-weight-500">
              The total number of sessions within the date range. It is
              the period time a user is actively engaged with your
              website, page or app, etc
            </p>
            <div id="sales-legend" className="chartjs-legend mt-4 mb-2"><ul className="1-legend"><li><span style={{backgroundColor: 'rgb(152, 189, 255)'}} />Offline Sales</li><li><span style={{backgroundColor: 'rgb(75, 73, 172)'}} />Online Sales</li></ul></div>
            <canvas id="sales-chart" width={741} height={370} className="chartjs-render-monitor" style={{display: 'block', width: 741, height: 370}} />
          </div>
        </div>
      </div>
    </div>
    {/* row-4  */}
    <div className="row">  
    <div className="col-md-12 grid-margin stretch-card">
    <div className="card position-relative">
      <div className="card-body">
        <div id="detailedReports" className="carousel slide detailed-report-carousel position-static pt-2" data-ride="carousel">
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
                      The total number of sessions within the date
                      range. It is the period time a user is
                      actively engaged with your website, page or
                      app, etc
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-xl-9">
                  <div className="row">
                    <div className="col-md-6 border-right">
                      <div className="table-responsive mb-3 mb-md-0 mt-3">
                        <table className="table table-borderless report-table">
                          <tbody><tr>
                              <td className="text-muted">Illinois</td>
                              <td className="w-100 px-0">
                                <div className="progress progress-md mx-4">
                                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
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
                                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
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
                                  <div className="progress-bar bg-danger" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
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
                                  <div className="progress-bar bg-info" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
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
                                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
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
                                  <div className="progress-bar bg-danger" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                              </td>
                              <td>
                                <h5 className="font-weight-bold mb-0">
                                  793
                                </h5>
                              </td>
                            </tr>
                          </tbody></table>
                      </div>
                    </div>
                    <div className="col-md-6 mt-3"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
                      <canvas id="north-america-chart" width={564} height={282} className="chartjs-render-monitor" style={{display: 'block', width: 564, height: 282}} />
                      <div id="north-america-legend"><div className="report-chart"><div className="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div className="d-flex align-items-center"><div className="mr-3" style={{width: 20, height: 20, borderRadius: '50%', backgroundColor: '#4B49AC'}} /><p className="mb-0">Offline sales</p></div><p className="mb-0">88333</p></div><div className="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div className="d-flex align-items-center"><div className="mr-3" style={{width: 20, height: 20, borderRadius: '50%', backgroundColor: '#FFC100'}} /><p className="mb-0">Online sales</p></div><p className="mb-0">66093</p></div><div className="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div className="d-flex align-items-center"><div className="mr-3" style={{width: 20, height: 20, borderRadius: '50%', backgroundColor: '#248AFD'}} /><p className="mb-0">Returns</p></div><p className="mb-0">39836</p></div></div></div>
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
                      The total number of sessions within the date
                      range. It is the period time a user is
                      actively engaged with your website, page or
                      app, etc
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-xl-9">
                  <div className="row">
                    <div className="col-md-6 border-right">
                      <div className="table-responsive mb-3 mb-md-0 mt-3">
                        <table className="table table-borderless report-table">
                          <tbody><tr>
                              <td className="text-muted">Illinois</td>
                              <td className="w-100 px-0">
                                <div className="progress progress-md mx-4">
                                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
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
                                  <div className="progress-bar bg-warning" role="progressbar" style={{width: '30%'}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
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
                                  <div className="progress-bar bg-danger" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
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
                                  <div className="progress-bar bg-info" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
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
                                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
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
                                  <div className="progress-bar bg-danger" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                              </td>
                              <td>
                                <h5 className="font-weight-bold mb-0">
                                  793
                                </h5>
                              </td>
                            </tr>
                          </tbody></table>
                      </div>
                    </div>
                    <div className="col-md-6 mt-3"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
                      <canvas id="south-america-chart" height={282} className="chartjs-render-monitor" width={564} style={{display: 'block', width: 564, height: 282}} />
                      <div id="south-america-legend"><div className="report-chart"><div className="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div className="d-flex align-items-center"><div className="mr-3" style={{width: 20, height: 20, borderRadius: '50%', backgroundColor: '#4B49AC'}} /><p className="mb-0">Offline sales</p></div><p className="mb-0">495343</p></div><div className="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div className="d-flex align-items-center"><div className="mr-3" style={{width: 20, height: 20, borderRadius: '50%', backgroundColor: '#FFC100'}} /><p className="mb-0">Online sales</p></div><p className="mb-0">630983</p></div><div className="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div className="d-flex align-items-center"><div className="mr-3" style={{width: 20, height: 20, borderRadius: '50%', backgroundColor: '#248AFD'}} /><p className="mb-0">Returns</p></div><p className="mb-0">290831</p></div></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#detailedReports" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#detailedReports" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    {/* row-5  */}
    <div className="row">
      <div className="col-md-4 stretch-card grid-margin grid-margin-md-0">
        <div className="card data-icon-card-primary">
          <div className="card-body">
            <p className="card-title text-white">Number of Meetings</p>
            <div className="row">
              <div className="col-8 text-white">
                <h3>34040</h3>
                <p className="text-white font-weight-500 mb-0">
                  The total number of sessions within the date
                  range.It is calculated as the sum .
                </p>
              </div>
              <div className="col-4 background-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 stretch-card grid-margin grid-margin-md-0">
        <div className="card data-icon-card-primary">
          <div className="card-body">
            <p className="card-title text-white">Number of Meetings</p>
            <div className="row">
              <div className="col-8 text-white">
                <h3>34040</h3>
                <p className="text-white font-weight-500 mb-0">
                  The total number of sessions within the date
                  range.It is calculated as the sum .
                </p>
              </div>
              <div className="col-4 background-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 stretch-card grid-margin grid-margin-md-0">
        <div className="card data-icon-card-primary">
          <div className="card-body">
            <p className="card-title text-white">Number of Meetings</p>
            <div className="row">
              <div className="col-8 text-white">
                <h3>34040</h3>
                <p className="text-white font-weight-500 mb-0">
                  The total number of sessions within the date
                  range.It is calculated as the sum .
                </p>
              </div>
              <div className="col-4 background-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
