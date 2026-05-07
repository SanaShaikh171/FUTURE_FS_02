import {
  deleteLead,
  getLeads,
  updateLead,
  createLead,
} from "../api";

import { useEffect, useState } from "react";

import LeadForm from "./LeadForm";

function Dashboard() {

  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  const fetchLeads = async () => {

    const { data } = await getLeads();

    setLeads(data);

  };

  useEffect(() => {

    fetchLeads();

  }, []);

  const handleAddLead = async (formData) => {

    await createLead(formData);

    fetchLeads();

  };

  const handleDelete = async (id) => {

    await deleteLead(id);

    fetchLeads();

  };

  const handleStatus = async (id, status) => {

    await updateLead(id, { status });

    fetchLeads();

  };

  const stats = {
    total: leads.length,

    contacted: leads.filter(
      (lead) => lead.status === "Contacted"
    ).length,

    converted: leads.filter(
      (lead) => lead.status === "Converted"
    ).length,
  };

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
       <div className="navbar">

  <h2>Mini CRM</h2>

  <button
    className="logout-btn"
    onClick={() => {
      localStorage.removeItem("admin");
      window.location.reload();
    }}
  >
    Logout
  </button>

</div>
      <h1 className="title">
        Mini CRM Dashboard
      </h1>

      {/* STATS */}

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Total Leads</h3>
          <p>{stats.total}</p>
        </div>

        <div className="stat-card">
          <h3>Contacted</h3>
          <p>{stats.contacted}</p>
        </div>

        <div className="stat-card">
          <h3>Converted</h3>
          <p>{stats.converted}</p>
        </div>

      </div>

      {/* FORM */}

      <LeadForm onAdd={handleAddLead} />

      {/* TABLE */}
      <input
  className="search-input"
  type="text"
  placeholder="Search leads..."
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
    />
      <div className="table-container">

        <table>

          <thead>

            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Source</th>
              <th>Status</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>

          </thead >
          <tbody>

            {filteredLeads.map((lead) => (

              <tr key={lead._id}>

                <td>{lead.name}</td>

                <td>{lead.email}</td>

                <td>{lead.source}</td>

                <td>

                  <select
                    value={lead.status}
                    onChange={(e) =>
                      handleStatus(
                        lead._id,
                        e.target.value
                      )
                    }
                  >

                    <option>New</option>

                    <option>
                      Contacted
                    </option>

                    <option>
                      Converted
                    </option>

                  </select>

                </td>

                <td>{lead.notes}</td>

                <td>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(lead._id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;