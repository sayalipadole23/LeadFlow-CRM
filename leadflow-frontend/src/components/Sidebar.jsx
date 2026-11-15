
import React from "react";
import {
    LayoutDashboard,
    Users,
    UserPlus,
    Settings,
    LogOut,
    BriefcaseBusiness
} from "lucide-react";

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="logo">
                <BriefcaseBusiness size={28} />
                <h2>LeadFlow</h2>
            </div>

            <p className="menu-heading">MAIN MENU</p>

            <nav>
                <a href="#" className="menu-item active">
                    <LayoutDashboard size={20} />
                    Dashboard
                </a>

                <a href="#leads" className="menu-item">
                    <Users size={20} />
                    All Leads
                </a>

                <a href="#add-lead" className="menu-item">
                    <UserPlus size={20} />
                    Add Lead
                </a>
            </nav>

            <div className="sidebar-bottom">
                <a href="#" className="menu-item">
                    <Settings size={20} />
                    Settings
                </a>

                <a href="#" className="menu-item">
                    <LogOut size={20} />
                    Logout
                </a>
            </div>

        </aside>
    );
}

export default Sidebar;
