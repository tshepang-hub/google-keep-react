import React from "react";
import "./Sidebar.css";
import Tooltip from "../Tooltip/Tooltip";

const Sidebar = ({ isCollapsed }) => {
  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-item active-item">
        <Tooltip icon="lightbulb" text="Notes" />
        {!isCollapsed && <span className="sidebar-text">Notes</span>}
      </div>
      <div className="sidebar-item">
        <Tooltip icon="notifications" text="Reminders" />
        {!isCollapsed && <span className="sidebar-text">Reminders</span>}
      </div>
      <div className="sidebar-item">
        <Tooltip icon="edit" text="Edit Labels" />
        {!isCollapsed && <span className="sidebar-text">Edit Labels</span>}
      </div>
      <div className="sidebar-item">
        <Tooltip icon="archive" text="Archive" />
        {!isCollapsed && <span className="sidebar-text">Archive</span>}
      </div>
      <div className="sidebar-item">
        <Tooltip icon="delete" text="Trash" />
        {!isCollapsed && <span className="sidebar-text">Trash</span>}
      </div>
    </div>
  );
};

export default Sidebar;