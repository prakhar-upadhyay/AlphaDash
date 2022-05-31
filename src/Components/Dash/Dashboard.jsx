import * as React from "react";
import "./Dashboard.css";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import alfaLogo from "./alfa.png";
import widgetLogo1 from "./w1.PNG";

import { UserData } from "./Data";
import { useState } from "react";
import Chart from "react-apexcharts";

function Dashboard() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <div className="container">
        <div className="items" id="sidenav"></div>

        <div className="items" id="main"></div>

        <div className="items" id="search-container">
          <button type="submit" className="search-btn " id="right">
            <i className="fa-solid fa-arrow-down-short-wide"></i>
          </button>

          <input
            type="text"
            className="search-box"
            placeholder="Search..."
          ></input>

          <button type="submit" className="search-btn" id="left">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          <div className="profile">
            <i className="fa-solid fa-circle-user"></i>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="sidebar">
          <div className="items" id="sidenav">
            {/* <ArrowBackIosNewIcon style={{ fontSize: 22 }} fontWeight="bold" /> */}
            <SubjectOutlinedIcon id="docs" style={{ fontSize: 25 }} />
          </div>
          <ul>
            {/* Nav Menu */}
            <li>
              <a href="#" id="dashboard">
                DASHBOARD
              </a>
            </li>
            <li>
              <a href="#">TRUE MATCH</a>
            </li>
            <li>
              <a href="#">FALSE POSITIVE</a>
            </li>
            <li>
              <a href="#">PENDING ANALYST REVIEW</a>
            </li>
            <li>
              <a href="#">REVIEWED ALERTS</a>
            </li>
            <li>
              <a href="#">CONTACT/ SUPPORT</a>
            </li>

            {/* Logo and Credit */}
            <li>
              <a href="#" className="alfaLogo">
                <img src={alfaLogo} height="50px" alt="Logo"></img>
              </a>
            </li>
            <li className="globe">
              <i className="fa-solid fa-earth-africa"></i> webpage
            </li>
          </ul>
        </div>

        {/* Main Dashboard Info Container */}
        <div className="main_content">
          {/* First  Widget Card Starts */}

          <div className="top-widget-header">
            <p>
              <b>NEWS ALERT PROCESSED BY AI ENGINE</b>
            </p>
          </div>
          <div className="top-dash-grid">
            <div className="widget-title-container">
              <p className="widget-title">RECENT PENDING REVIEWS</p>
              <div className="widget-container">
                <div className="widget-info-grid">
                  <div className="widget-info">
                    <p className="widget-review">
                      <b>PENDING MANUAL REVIEW</b>
                    </p>
                    <p className="widget-review-count"> 20</p>
                    <p className="widget-btn">REVIEW</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget-title-container">
              <p className="widget-title">RECENT ALERTS LAST 7 DAYS</p>

              <div className="widget-container">
                <div className="widget-info-grid ">
                  <div className="widget-info">
                   
                    <p className="widget-review">
                      <b>FALSE POSITIVE</b>
                    </p>
                    <p className="widget-review-count"> 20</p>
                    <p className="widget-btn">REVIEW</p>
                  </div>
                </div>

                <div className="widget-info-grid">
                  <div className="widget-info">
                   
                    <p className="widget-review">
                      <b>TRUE MATCH</b>
                    </p>
                    <p className="widget-review-count"> 20</p>
                    <p className="widget-btn">REVIEW</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* First  Widget Card Ends */}

          {/* Second Chart Widget Card */}

          <div className="bottom-widget-header">
            <p>
              <b>REVIEWED ALERTS</b>
            </p>
          </div>
          <div className="bottom-dash-grid">
            <div className="bottom-widget-info-grid">
              <div className="bottom-widget-chart">
                <Chart
                  type="bar"
                  series={[
                    {
                      name: "Total Alerts",
                      data: [100, 200, 232, 132, 422, 132, 350],
                      color: "#A3A1FB",
                    },
                    {
                      name: "%AI Proccessed",
                      data: [150, 230, 332, 162, 302, 302, 540],
                      color: "#56D9FE",
                    },
                    {
                      name: "%False Positive",
                      data: [134, 250, 290, 120, 482, 532, 150],
                      color: "#26FB42",
                    },
                    {
                      name: "%True Match",
                      data: [167, 260, 360, 101, 110, 602, 102],
                      color: "#FF4E61",
                    },
                  ]}
                  options={{
                    dataLabels: {
                      enabled: false,
                    },
                    chart: {
                      stacked: true,
                      background: "#f5f5f5",
                      toolbar: {
                        show: false,
                      },
                    },
                    plotOptions: {
                      bar: {
                        borderRadius: 5,
                      },
                    },

                    tooltip: {
                      followCursor: true,
                    },
                    xaxis: {
                      tickPlacement: "on",
                      categories: [
                        "Day 1",
                        "Day 2",
                        "Day 3",
                        "Day 4",
                        "Day 5",
                        "Day 6",
                        "Day 7",
                      ],
                    },
                    legend: {
                      show: true,
                      position: "top",
                    },
                    title: {
                      text: "REVIEWED ALERT LAST(7 Days)",
                      style: {
                        fontSize: 12,
                        color: "#808080",
                      },
                    },
                    grid: {
                      borderColor: "#f0eded",
                    },
                  }}
                ></Chart>
              </div>
            </div>
            <div className="bottom-info-grid item2">
              <div>
                <Chart
                  type="bar"
                  series={[
                    {
                      name: "Total Alerts",
                      data: [100, 200, 232],
                      color: "#A3A1FB",
                    },
                    {
                      name: "%AI Proccessed",
                      data: [150, 230, 332],
                      color: "#56D9FE",
                    },
                    {
                      name: "%False Positive",
                      data: [134, 250, 290],
                      color: "#26FB42",
                    },
                    {
                      name: "%True Match",
                      data: [167, 260, 360],
                      color: "#FF4E61",
                    },
                  ]}
                  options={{
                    dataLabels: {
                      enabled: false,
                    },
                    chart: {
                      stacked: true,
                      background: "#f5f5f5",
                      toolbar: {
                        show: false,
                      },
                    },
                    plotOptions: {
                      bar: {
                        borderRadius: 5,
                      },
                    },

                    tooltip: {
                      followCursor: true,
                    },
                    xaxis: {
                      tickPlacement: "on",
                      categories: [
                        "Month to Date",
                        "Quater to Date",
                        "Year to Date",
                      ],
                    },

                    legend: {
                      show: true,
                      position: "top",
                    },
                    title: {
                      text: "REVIEWED ALERT (Month to Date, Quarter to Date, Year to Date)",
                      // text: "REVIEWED ALERT",
                      style: {
                        fontSize: 12,
                        color: "#808080",
                      },
                    },
                    grid: {
                      borderColor: "#f0eded",
                    },
                  }}
                ></Chart>
              </div>
            </div>
            {/* Second Chart Widget Card Ends */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
