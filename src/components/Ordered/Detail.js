// This component Use for Print Data into Table

import React, { useEffect, useState } from "react";
import "./Detail.css";

function Detail() {
    const [Details, setDetails] = useState([{}]); //State to render the fetched or Filtered Data
  
  const [resetdata,setresetdata]=useState([{}]); //To filter The data

  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(5);

  // Fetching Data From API
  const FetchData = async () => {
    let res = await fetch(
      "https://heyq.bsite.net/api/api/orderapi/71897957-87eb-45c0-8d50-a73c5490f17e",
      {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    setDetails(data);
    setresetdata(data);
  };

  useEffect(() => {
    FetchData();
  }, []);

  //Pagination java script code
  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = Details.slice(firstIndex, lastIndex);

  const numberOfPages = Math.ceil(Details.length / postsPerPage);

  const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== numberOfPages) setcurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setcurrentPage(currentPage - 1);
  };

  // Image Import

  //    const image = (supplier) => {
  //     return linkObject[supplier]
  // }

  return (
    <>
      <div>
        <div className="navbar">
          <header>
            <div className="brand">
              <a href="/">Order List</a>
            </div>

            <div className="dropdown">
              <button className="dropbtn">
                <p className="dropname">Filter by</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                  className="dropicon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
              <div className="dropdown-content">
                <a
                    onClick={
                        () => {setDetails(
                            resetdata.filter(
                            (item) => item.marketPlaceName === "Zomato"
                            )
                        )
                        setcurrentPage(1);
                    }

                  }
                >
                  Zomato
                </a>
                              <a onClick={() => {
                                  setDetails(
                                      resetdata.filter(
                                          (item) => item.marketPlaceName === "Swiggy"
                                      )
                                  )
                                  setcurrentPage(1);
                              }
                                  
                  }>Swiggy</a>
                              <a onClick={() => {
                                  setDetails(
                                      resetdata.filter(
                                          (item) => item.marketPlaceName === "Uber Eats"
                                      )
                                  )
                                  setcurrentPage(1);
                              }
                }>Uber Eats</a>
              </div>
            </div>

            <div className="dropname2">
              <p className="dropdownname">
                Entries per page:{" "}
            <select className="entery_selection">
                  <option>5</option>
                  <option
                    onClick={() => {
                      postsPerPage(10);
                    }}
                  >
                    10
                  </option>
                  <option>20</option>
                </select>
            <div className="entery_selection">
                  <a onClick={() =>  setpostsPerPage(5)}>5</a>
                  <a onClick={() =>  setpostsPerPage(10)}>10</a>
                  <a onClick={() =>  setpostsPerPage(20)}>20</a>
                </div>
              </p>
            </div>

            <nav className="navbarstatus">
              <ul className="ulcss">
                <li className="statuscss">
                  <p href="/" className="statusbuttonname">
                    Status :
                  </p>
                </li>
                <li className="statuscss statuscolor">
                  <a
                    className="statusbutton"
                    onClick={() =>
                      setDetails(
                          resetdata.filter((item) => item.status === "Accepted" || item.status === "Ready")
                      )
                    }
                  >
                    Pending
                  </a>
                </li>
                <li className="statuscss statuscolor">
                    <a className="statusbutton" onClick={() =>
                        setDetails(
                            resetdata.filter((item) => item.status === "Completed")
                        )
                    }>Patched</a>
                </li>
                <li className="statuscss statuscolor">
                    <a className="statusbutton" onClick={() =>
                        setDetails(
                            resetdata.filter((item) => item.status === "Cancelled")
                        )
                    }>
                    Cancelled
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <table id="example" className="tablecss">
          <thead>
            <tr className="trhead">
              <th scope="col">No</th>
              <th scope="col">Order Details</th>
              <th scope="col">Items</th>
              <th scope="col">Total price</th>
              <th scope="col">Delivery Details</th>
              <th scope="col">Location</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody style={{ marginTop: "100px" }}>
            {currentPosts.map((item, index) => {
              return (
                <>
                  <tr key={index} className="trborder">
                    <th scope="row">{index + 1}</th>

                    <td className="table_order_details_orderidname">
                      <div
                        className="table_order_details"
                        style={{ marginRight: "-80px" }}
                      >
                        <img
                          className="table_order_details_img"
                          src="logo192.png"
                        />{" "}
                        {/* <img
                          className="table_order_details_img"
                          src={image(item.marketPlaceName)}
                        /> */}
                        &nbsp;&nbsp; &nbsp;
                        {item.orderId} <br />
                        {item.customerName}
                      </div>
                    </td>
                    <td>{item.itemName}</td>
                    <td>{item.price}</td>
                    <td>{item.deliveryBoyName}</td>
                    <td>{item.location}</td>
                    <td className="order_status">{item.status}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>

        {/* Pagination Html/css Code */}
        <nav>
          <ul
            className="pagination justify-content-center"
            style={{ marginTop: "15px", float: "right" }}
          >
            <li className="page-item">
              <a className="page-link" onClick={prevPage} href="#">
                &laquo;
              </a>
            </li>
            {pageNumbers.map((pgNumber) => (
              <li
                key={pgNumber}
                className={`page-item ${
                  currentPage == pgNumber ? "active" : ""
                } `}
              >
                <a
                  onClick={() => setcurrentPage(pgNumber)}
                  className="page-link"
                  href="#"
                >
                  {pgNumber}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a className="page-link" onClick={nextPage} href="#">
                &raquo;
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Detail;
