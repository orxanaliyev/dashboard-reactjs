import React, { useState } from "react";
import "./Header.scss";
import avatar from "../../data/img/av-1.png";
import notificationIcon from "../../data/img/icons/notification.png";

function Header() {
  const [name, setName] = useState("");
  const [structure, setStructure] = useState("");
  const [position, setPosition] = useState("");

  return (
    <div className="Header">
      <div className="container-fluid">
        <div className="row">
          <div className="header-top-icons">
            <img
              src={notificationIcon}
              alt="Notification"
              className="header-top-icon-notification"
            />
            <img
              src={avatar}
              alt="avatar"
              className="rounded-circle"
              width="40"
            />
          </div>
        </div>
        <hr />
        <div className="row">
          <h6 className="my-0 py-0">
            Axtarış:
            <i>
              {name.length > 100 ? null : name} {structure && name ? "," : ""}{" "}
              {structure.length > 100 ? null : structure}
              {""}
              {position ? "," : ""} {position.length > 100 ? null : position}
            </i>
          </h6>
          <form className="row g-2" onSubmit={(e) => e.preventDefault()}>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Ad, Soyad"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Struktur"
                value={structure}
                onChange={(e) => setStructure(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Vəzifə"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <button className="btn btn-primary">Axtar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
