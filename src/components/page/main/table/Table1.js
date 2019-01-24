import React, { Component } from "react";
import RadiusButton from "../button/RadiusButton";
const sampleData = [
  {
    inVoice: "INV-0010001",
    customerName: "Johnny Lewis Mokovic",
    product: "1500",
    status: {
      color: "paid",
      title: "Paid"
    },
    categories: {
      icon: "fa fa-television",
      title: "food"
    },
    shipping: {
      min: 0,
      max: 100,
      now: 50
    },
    Amount: "12,000"
  },
  {
    inVoice: "INV-0010001",
    customerName: "Johnny Lewis Mokovic",
    product: "1500",
    status: {
      color: "declined",
      title: "Declined"
    },
    categories: {
      icon: "fa fa-television",
      title: "food"
    },
    shipping: {
      min: 0,
      max: 100,
      now: 50
    },
    Amount: "12,000"
  },
  {
    inVoice: "INV-0010001",
    customerName: "Johnny Lewis Mokovic",
    product: "1500",
    status: {
      color: "pending",
      title: "Pending"
    },
    categories: {
      icon: "fa fa-television",
      title: "food"
    },
    shipping: {
      min: 0,
      max: 100,
      now: 50
    },
    Amount: "12,000"
  }, {
    inVoice: "INV-0010001",
    customerName: "Johnny Lewis Mokovic",
    product: "1500",
    status: {
      color: "paid",
      title: "Paid"
    },
    categories: {
      icon: "fa fa-television",
      title: "food"
    },
    shipping: {
      min: 0,
      max: 100,
      now: 100
    },
    Amount: "12,000"
  }
];
export default class Table1 extends Component {
  getData = () => {
    return sampleData.map((data, index) => {
      return (
        <tr key={index}>
          <td className="text-truncate">{data.inVoice}</td>
          <td className="text-truncate">{data.customerName}</td>
          <td className="text-truncate">{data.product}</td>
          <td className="text-truncate">
            <PointType color={data.status.color} title={data.status.title} />
          </td>
          <td className="text-truncate">
            <CategoryButton
              icon={data.categories.icon}
              title={data.categories.title}
            />
          </td>
          <td className="text-truncate">
            <ProgressBar
              min={data.shipping.min}
              max={data.shipping.max}
              now={data.shipping.now}
            />
          </td>
          <td className="text-truncate"> ${data.Amount}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div id="recent-sale" className="col-12 col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Recent Transaction</h4>
            <a href="" className="heading-element-toggle">
              <i className="la la-ellipsis-v font-medium-3" />
            </a>
            <div className="heading-elements">
              <ul className="list-inline mb-0">
                <li>
                  <a
                    href="#"
                    className="btn btn-sm box-shadow-2 round btn-min-width puoll-right"
                    target="_blank"
                  >
                    Invoice Summary
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body mt-1">
            <div className="table-responsive">
              <table className="recent-orders table  table-xlmb-0">
                <thead>
                  <tr>
                    <th className="border-top-0">
                      <a href="#">Invoice#</a>
                    </th>
                    <th className="border-top-0">Customer Name</th>
                    <th className="border-top-0">Products</th>
                    <th className="border-top-0">Status</th>
                    <th className="border-top-0">Categories</th>
                    <th className="border-top-0">Shipping</th>
                    <th className="border-top-0">Amount</th>
                  </tr>
                </thead>
                <tbody>
                {this.getData()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class PointType extends Component {
  render() {
    return (
      <div className="status">
        <i
          className={`fa fa-stop-circle-o ${this.props.color}`}
          aria-hidden="true"
          style={{ width: "6px", height: "6px" }}
        />
        <div style={{ display: "inline-block", paddingLeft: "16px" }}>
          {this.props.title}
        </div>
      </div>
    );
  }
}

class ProgressBar extends Component {
  render() {
    return (
      <div className="progress progress-sm mt-3 -mb-0 box-shadow-2">
        <div
          className={`progress-bar bg-gradient-x-danger ${((this.props.now==100) ? "progress-bar-full": "")}`}
          role="progressbar"
          style={{ width: `${this.props.now}%` }}
          aria-valuenow={this.props.now}
          aria-valuemin={this.props.min}
          aria-valuemax={this.props.max}
        />
      </div>
    );
  }
}

class CategoryButton extends Component {
  render() {
    return (
      <div className="">
        <button className="btn category-btn ">
          <i className={`${this.props.icon}`} aria-hidden="true" />
          {this.props.title}
        </button>
      </div>
    );
  }
}
