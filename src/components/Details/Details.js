import { Link, Router } from "@reach/router";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@reach/tabs";
import React from "react";
import avatar from "../../data/img/av-2.png";
import "./Details.scss";

function Details() {
  const DummyCompOne = () => {
    return (
      <>
        <h2>Shexsi informasiya</h2>
        <p>
          One - hat is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </>
    );
  };
  const DummyCompTwo = () => {
    return (
      <>
        <h2>Struktur esasnamesi</h2>
        <p>
          Two - What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </>
    );
  };
  const DummyCompThree = () => {
    return (
      <>
        <h2>Vezife telimati</h2>
        <p>
          Three - What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </>
    );
  };

  const EmployeeCard = () => {
    return (
      <div className="Employee-Card">
        <div>
          <div className="Employee-Card-header">
            <div>
              <img
                src={avatar}
                width={63}
                alt="avatar"
                className="rounded-circle"
              />
            </div>
            <div>
              <div className="py-3">
                <h6 className="p-0 m-0">Toghrul Rajab</h6>
                <span>example@mail.com</span>
              </div>
              <div className="d-flex p-1 flex-direction-row justify-content-between">
                <span className="_score">222</span>
                <span className="_score">222</span>
                <span className="_score">222</span>
              </div>
            </div>
          </div>

          <div className="Employee-Card-container">
            <div className="text-center sides border-right">
              <span>Struktur </span>
              <h6>Marketing</h6>
            </div>
            <div className="text-center sides">
              <span>Vəzifə </span>
              <h6>Direktor</h6>
            </div>
          </div>

          <div className="Employee-Card-footer text-center">
            <button>Mail at</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="Details">
      <Link to="/" className="go-back-link">
        <span className="go-back-icon">
          <i className="fas fa-chevron-left"></i>
        </span>{" "}
        Geri qayit
      </Link>
      <EmployeeCard />

      <Tabs
        style={{
          backgroundColor: "white",
          boxShadow: "0.845026px 2.53508px 10.1403px rgba(0, 0, 0, 0.03)",
          padding: "3rem",
        }}
      >
        <TabList className="px-5">
          <Tab
            style={{
              border: "none",
              padding: ".4rem",
              borderBottom: "4px solid #0072ff",
              backgroundColor: "transparent",
            }}
          >
            Shexsi informasiya
          </Tab>
          <Tab
            style={{
              border: "none",
              padding: ".4rem",
              borderBottom: "4px solid #0072ff",
              backgroundColor: "transparent",
            }}
          >
            Struktur esasnamesi
          </Tab>
          <Tab
            style={{
              border: "none",
              padding: ".4rem",
              borderBottom: "4px solid #0072ff",
              backgroundColor: "transparent",
            }}
          >
            Vezife telimati
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel style={{ padding: "1rem", backgroundColor: "#FCFCFF" }}>
            <DummyCompOne />
          </TabPanel>
          <TabPanel style={{ padding: "1rem", backgroundColor: "#FCFCFF" }}>
            <DummyCompTwo />
          </TabPanel>
          <TabPanel style={{ padding: "1rem", backgroundColor: "#FCFCFF" }}>
            <DummyCompThree />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Details;
