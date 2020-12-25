import React from "react";
import viewIcon from "../../data/img/icons/view.png";
import mailToIcon from "../../data/img/icons/mail-to.png";
import { Link } from "@reach/router";

const EmployeeCard = (props) => {
  const {
    toggleCEO,
    avatar,
    name,
    numbers,
    email,
    structure,
    position,
  } = props;

  return (
    <div className="col-md-12" onClick={toggleCEO}>
      <div className="Employee-Card mx-auto mb-5">
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
              <h6 className="p-0 m-0">{name}</h6>
              <span>{email}</span>
            </div>
            <div className="d-flex p-1 flex-direction-row justify-content-between">
              {numbers.map((num) => (
                <span
                  key={num.score}
                  style={{ color: num.color, backgroundColor: num.bgColor }}
                  className="_score"
                >
                  {num.score}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="Employee-Card-container">
          <div className="text-center sides border-right">
            <span>Struktur </span>
            <h6>{structure}</h6>
          </div>
          <div className="text-center sides">
            <span>Vəzifə </span>
            <h6>{position}</h6>
          </div>
        </div>

        <div className="Employee-Card-footer">
          <Link to="/details" className="footer-btn">
            <img src={viewIcon} alt="view" /> Bax
          </Link>
          <button className="footer-btn">
            <img src={mailToIcon} alt="mail-to" />
            Mail at
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
