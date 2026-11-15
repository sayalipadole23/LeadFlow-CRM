
import React from "react";
import { Pencil, Trash2, Eye } from "lucide-react";

function LeadTable({ leads, onEdit, onDelete }) {

    const getStatusClass = (status) => {
        return status?.toLowerCase() || "new";
    };

    return (
        <div className="table-container">

            <table className="lead-table">

                <thead>
                    <tr>
                        <th>Lead Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                        <th>Source</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {leads.length > 0 ? (

                        leads.map((lead) => (

                            <tr key={lead.id}>

                                <td>
                                    <strong>{lead.name}</strong>
                                </td>

                                <td>{lead.email}</td>

                                <td>{lead.phone}</td>

                                <td>{lead.company}</td>

                                <td>{lead.source}</td>

                                <td>
                                    <span className={`status-badge ${getStatusClass(lead.status)}`}>
                                        {lead.status}
                                    </span>
                                </td>

                                <td>
                                    <div className="action-buttons">

                                        <button
                                            className="edit-btn"
                                            onClick={() => onEdit(lead)}
                                            title="Edit Lead"
                                        >
                                            <Pencil size={17} />
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() => onDelete(lead.id)}
                                            title="Delete Lead"
                                        >
                                            <Trash2 size={17} />
                                        </button>

                                    </div>
                                </td>

                            </tr>

                        ))

                    ) : (

                        <tr>
                            <td colSpan="7" className="empty-message">
                                No leads found. Add your first lead!
                            </td>
                        </tr>

                    )}

                </tbody>

            </table>

        </div>
    );
}

export default LeadTable;
