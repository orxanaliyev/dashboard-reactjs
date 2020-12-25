import React from "react";
import avatar from "../../data/img/av-2.png";
import "./Details.scss";

function Details() {
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

          <div className="Employee-Card-footer">
            <button>Bax</button>
            <button>Mail at</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <EmployeeCard />
    </div>
  );
}

export default Details;
