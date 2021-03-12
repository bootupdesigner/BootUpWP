import React from "react";
import { Table } from "react-bootstrap";

const DesignChart = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <h2 className="text-center">Compare Our Website Design Services</h2>
      <Table striped bordered hover variant="light" className="chart" responsive="md" size="sm">
        <thead>
          <tr>
            <th>What's Included</th>
            <th>E-Commerce</th>
            <th>Information & Booking</th>
            <th>Booking & E-Commerce</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fully Responsive Website</td>
            <td className="text-center text-justify">✔</td>
            <td className="text-center text-justify">✔</td>
            <td className="text-center text-justify">✔</td>
          </tr>
          <tr>
            <td>24 Product Uploads</td>
            <td className="text-center text-justify">✔</td>
            <td className="text-center text-justify">✖</td>
            <td className="text-center text-justify">✔</td>
          </tr>
          <tr>
            <td>Free SSL Certificate (3 month term)</td>
            <td className="text-center text-justify">✔</td>
            <td className="text-center text-justify">✔</td>
            <td className="text-center text-justify">✔</td>
          </tr>
          <tr>
            <td>Customer Relationship Management System</td>
            <td className="text-center text-justify">✔</td>
            <td className="text-center text-justify">✔</td>
            <td className="text-center text-justify">✔</td>
          </tr>
          <tr>
            <td>Subscription Management</td>
            <td className="text-center text-justify">✔</td>
            <td className="text-center text-justify">✔</td>
            <td className="text-center text-justify">✔</td>
          </tr>
          <tr>
            <td>Analytics & Tracking</td>
            <td className="text-center text-justify">✔</td>
            <td className="text-center text-justify">✔</td>
            <td className="text-center text-justify">✔</td>
          </tr>
          <tr>
            <td>Backup and Restor Capabilities</td>
            <td className="text-center text-justify">✔</td>
            <td className="text-center text-justify">✔</td>
            <td className="text-center text-justify">✔</td>
          </tr>
          <tr>
            <td>Stripe and/or Paypal Payment Gateway</td>
            <td className="text-center text-justify">✔</td>
            <td className="text-center text-justify">✔</td>
            <td className="text-center text-justify">✔</td>
          </tr>
          <tr>
            <td>Custom Booking Form (accept payments)</td>
            <td className="text-center text-justify">✖</td>
            <td className="text-center text-justify">✔</td>
            <td className="text-center text-justify">✔</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DesignChart;
