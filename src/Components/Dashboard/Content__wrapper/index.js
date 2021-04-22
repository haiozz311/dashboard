/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import BlockCard from '../BlockCard';
// import BlockIntro from ' '
import BlockIntro from '../BlockIntro';
import CarouselDashboard from '../CarouselDashboard';
import BarChart from '../Chart/BarChart';
import LineChart from '../Chart/LineChart';
export default function Content_wapper() {
  // const [number, setNumber] = useState(0);


  const data = [{
    title: "Today’s Bookings",
    number: "4006",
    percent: "10.00% (30 days)",
    color: 'card-tale'
  }, {
    title: "Total Bookings",
    number: "61344",
    percent: "22.00% (30 days)",
    color: 'card-dark-blue'
  }, {
    title: "Number of Meetings",
    number: "34040",
    percent: "2.00% (30 days)",
    color: 'card-light-blue'
  }, {
    title: "Number of Clients",
    number: "47033",
    percent: "0.22% (30 days)",
    color: 'card-light-danger'
  }, {
    title: "Today’s Bookings",
    number: "4006",
    percent: "10.00% (30 days)",
    color: 'card-tale'
  }, {
    title: "Total Bookings",
    number: "61344",
    percent: "22.00% (30 days)",
    color: 'card-dark-blue'
  }]
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
                {/* <p>{number}</p>
                <button className="btn btn-danger" onClick={() => {
                  setNumber(number => number += 1)
                }}>increment</button> */}

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
                    <h4 className="location font-weight-normal">Hồ Chí Minh</h4>
                    <h6 className="font-weight-normal">Việt Nam</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BlockIntro data={data} />
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
              <LineChart />
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
              <div id="sales-legend" className="chartjs-legend mt-4 mb-2"><ul className="1-legend"><li><span style={{ backgroundColor: 'rgb(152, 189, 255)' }} />Offline Sales</li><li><span style={{ backgroundColor: 'rgb(75, 73, 172)' }} />Online Sales</li></ul></div>

              <BarChart />
            </div>
          </div>
        </div>
      </div>
      {/* row-4  */}
      <CarouselDashboard />
      {/* row-5  */}
      <div className="row">
        <BlockCard />
        <BlockCard />
        <BlockCard />
      </div>
    </div>
  )
}
