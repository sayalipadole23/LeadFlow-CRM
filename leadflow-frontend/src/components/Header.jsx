
import React from "react";

import {
    Search,
    Bell,
    Plus
} from "lucide-react";

function Header({
    onAddLead,
    searchTerm,
    onSearchChange
}) {

    return (

        <header className="header">

            <div>
                <h2>Dashboard</h2>
                <p>Welcome to LeadFlow CRM</p>
            </div>

            <div className="header-actions">

                <div className="search-box">

                    <Search size={18} />

                    <input
                        type="text"
                        placeholder="Search leads..."
                        value={searchTerm}
                        onChange={(e) =>
                            onSearchChange(e.target.value)
                        }
                    />

                </div>

                <button className="icon-button">
                    <Bell size={20} />
                </button>

                <button
                    className="add-button"
                    onClick={onAddLead}
                >
                    <Plus size={18} />
                    Add New Lead
                </button>

            </div>

        </header>
    );
}

export default Header;
