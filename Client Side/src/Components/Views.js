import React from "react";
import "../index.css";

const Views = ({ getcustomers, customers, head }) => {
  return (
    <>
      <section
        id="header"
        className="views-section d-flex align-items-center my-4 "
      >
        <div className="container">
          <button
            className="btn btn-light mx-auto d-block"
            id="button"
            onClick={getcustomers}
          >
            Click Here to View Customers
          </button>

          <div className="table-section ">
            <div className="extra-div">
              <table class="table table-dark table-hover">
                <thead>
                  <tr>
                    {head.map((key, index) => {
                      return (
                        <th scope="col" key={index}>
                          {key}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {customers.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td>{value.id}</td>
                        <td>{value.Name}</td>
                        <td>{value.Email}</td>
                        <td>{value.Balance}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Views;
