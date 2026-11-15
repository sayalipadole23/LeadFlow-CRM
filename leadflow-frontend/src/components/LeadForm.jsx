
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

function LeadForm({ isOpen, onClose, onSubmit, editingLead }) {

    const initialForm = {
        name: "",
        email: "",
        phone: "",
        company: "",
        source: "Website",
        status: "New"
    };

    const [formData, setFormData] = useState(initialForm);

    useEffect(() => {
        if (editingLead) {
            setFormData({
                name: editingLead.name || "",
                email: editingLead.email || "",
                phone: editingLead.phone || "",
                company: editingLead.company || "",
                source: editingLead.source || "Website",
                status: editingLead.status || "New"
            });
        } else {
            setFormData(initialForm);
        }
    }, [editingLead, isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">

            <div className="lead-form-modal">

                <div className="modal-header">
                    <h2>{editingLead ? "Edit Lead" : "Add New Lead"}</h2>

                    <button onClick={onClose} className="close-btn">
                        <X size={22} />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Full Name *</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter full name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email address"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                        />
                    </div>

                    <div className="form-group">
                        <label>Company</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Enter company name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Lead Source</label>
                        <select
                            name="source"
                            value={formData.source}
                            onChange={handleChange}
                        >
                            <option value="Website">Website</option>
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Referral">Referral</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Advertisement">Advertisement</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Lead Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Interested">Interested</option>
                            <option value="Converted">Converted</option>
                            <option value="Lost">Lost</option>
                        </select>
                    </div>

                    <div className="form-actions">
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button type="submit" className="save-btn">
                            {editingLead ? "Update Lead" : "Save Lead"}
                        </button>
                    </div>

                </form>

            </div>

        </div>
    );
}

export default LeadForm;
