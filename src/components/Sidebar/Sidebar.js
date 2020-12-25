import React from "react";
import "./Sidebar.scss";
import avatar from "../../data/img/av-1.png";
import dashboard from "../../data/img/icons/dashboard.png";
import tasks from "../../data/img/icons/tasks.png";
import email from "../../data/img/icons/email.png";
import contacts from "../../data/img/icons/contacts.png";
import chat from "../../data/img/icons/chat.png";
import deals from "../../data/img/icons/deals.png";
import settings from "../../data/img/icons/settings.png";

const userData = {
  fullName: "Pasha Life",
  email: "pashalife@mail.com",
  avatar,
};

const sideBarMenus = [
  {
    title: "Dashboard",
    icon: dashboard,
    active: true,
  },
  {
    title: "Tasks",
    icon: tasks,
    active: false,
  },
  {
    title: "Email",
    icon: email,
    active: false,
  },
  {
    title: "Contacts",
    icon: contacts,
    active: false,
  },
  {
    title: "Chat",
    icon: chat,
    active: false,
  },
  {
    title: "Deals",
    icon: deals,
    active: false,
  },
  {
    title: "Settings",
    icon: settings,
    active: false,
  },
];

const Sidebar = () => {
  const { fullName, email, avatar } = userData;

  return (
    <div className="Sidebar py-5">
      <div className="d-flex flex-row justify-content-center align-items-center user-box my-3">
        <div>
          <img
            className="rounded-circle"
            width="62"
            src={avatar}
            alt="avatar"
          />
        </div>
        <div className="d-flex flex-column">
          <h6>{fullName}</h6>
          <span>{email}</span>
        </div>
      </div>
      <ul className="list-unstyled py-3">
        {sideBarMenus.map((item) => (
          <React.Fragment key={item.title}>
            {item.title === "Settings" ? <hr /> : ""}
            <li className={`sidebar-menu-item ${item.active ? "active" : ""}`}>
              <img alt={item.icon} src={item.icon} />
              <span>{item.title}</span>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
