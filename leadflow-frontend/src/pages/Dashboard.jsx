
import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import LeadTable from "../components/LeadTable";
import LeadForm from "../components/LeadForm";

import {
    getAllLeads,
    createLead,
    updateLead,
    deleteLead
} from "../services/leadService";

import {
    Users,
    UserPlus,
    UserCheck,
    TrendingUp
} from "lucide-react";

function Dashboard() {

    // Store leads
    const [leads, setLeads] = useState([]);

    // Search and filter
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    // Form controls
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingLead, setEditingLead] = useState(null);

    // Loading and error messages
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch leads from backend
    const fetchLeads = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await getAllLeads();

            setLeads(response.data);

        } catch (err) {
            console.error("Error fetching leads:", err);
            setError("Unable to load leads. Please check your backend.");

        } finally {
            setLoading(false);
        }
    };

    // Load leads when dashboard opens
    useEffect(() => {
        fetchLeads();
    }, []);

    // Open add lead form
    const handleAddLead = () => {
        setEditingLead(null);
        setIsFormOpen(true);
    };

    // Open edit lead form
    const handleEditLead = (lead) => {
        setEditingLead(lead);
        setIsFormOpen(true);
    };

    // Save or update lead
    const handleSubmit = async (formData) => {
        try {
            if (editingLead) {
                await updateLead(editingLead.id, formData);
            } else {
                await createLead(formData);
            }

            setIsFormOpen(false);
            setEditingLead(null);

            await fetchLeads();

        } catch (err) {
            console.error("Error saving lead:", err);
            alert("Unable to save lead. Please try again.");
        }
    };

    // Delete lead
    const handleDeleteLead = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this lead?"
        );

        if (!confirmDelete) return;

        try {
            await deleteLead(id);
            await fetchLeads();

        } catch (err) {
            console.error("Error deleting lead:", err);
            alert("Unable to delete lead.");
        }
    };

    // Search and filter leads
    const filteredLeads = leads.filter((lead) => {

        const search = searchTerm.toLowerCase();

        const matchesSearch =
            (lead.name || "").toLowerCase().includes(search) ||
            (lead.email || "").toLowerCase().includes(search) ||
            (lead.company || "").toLowerCase().includes(search);

        const matchesStatus =
            statusFilter === "All" ||
            lead.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    // Dashboard statistics
    const totalLeads = leads.length;

    const newLeads = leads.filter(
        lead => lead.status === "New"
    ).length;

    const interestedLeads = leads.filter(
        lead => lead.status === "Interested"
    ).length;

    const convertedLeads = leads.filter(
        lead => lead.status === "Converted"
    ).length;

    return (

        <div className="app-layout">

            <Sidebar />

            <main className="main-content">

                <Header
                    onAddLead={handleAddLead}
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                />

                {/* Dashboard Statistics */}

                <section className="stats-grid">

                    <div className="stat-card">
                        <div className="stat-icon blue">
                            <Users size={24} />
                        </div>

                        <div>
                            <p>Total Leads</p>
                            <h2>{totalLeads}</h2>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon purple">
                            <UserPlus size={24} />
                        </div>

                        <div>
                            <p>New Leads</p>
                            <h2>{newLeads}</h2>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon orange">
                            <TrendingUp size={24} />
                        </div>

                        <div>
                            <p>Interested</p>
                            <h2>{interestedLeads}</h2>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon green">
                            <UserCheck size={24} />
                        </div>

                        <div>
                            <p>Converted</p>
                            <h2>{convertedLeads}</h2>
                        </div>
                    </div>

                </section>

                {/* Lead Management */}

                <section className="leads-section" id="leads">

                    <div className="section-header">

                        <div>
                            <h2>Lead Management</h2>
                            <p>Manage and track all your leads</p>
                        </div>

                        <div className="filter-section">

                            <select
                                value={statusFilter}
                                onChange={(e) =>
                                    setStatusFilter(e.target.value)
                                }
                            >
                                <option value="All">All Status</option>
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Interested">Interested</option>
                                <option value="Converted">Converted</option>
                                <option value="Lost">Lost</option>
                            </select>

                        </div>

                    </div>

                    {loading ? (

                        <p className="loading-message">
                            Loading leads...
                        </p>

                    ) : error ? (

                        <p className="error-message">
                            {error}
                        </p>

                    ) : (

                        <LeadTable
                            leads={filteredLeads}
                            onEdit={handleEditLead}
                            onDelete={handleDeleteLead}
                        />

                    )}

                </section>

            </main>

            {/* Add / Edit Lead Form */}

            <LeadForm
                isOpen={isFormOpen}
                onClose={() => {
                    setIsFormOpen(false);
                    setEditingLead(null);
                }}
                onSubmit={handleSubmit}
                editingLead={editingLead}
            />

        </div>
    );
}

export default Dashboard;
