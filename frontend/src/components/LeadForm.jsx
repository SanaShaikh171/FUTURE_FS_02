import { useState } from "react";

function LeadForm({ onAdd }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    source: "",
    notes: "",
  });

  const handleSubmit = (e) => {

    e.preventDefault();

    onAdd(form);

    setForm({
      name: "",
      email: "",
      source: "",
      notes: "",
    });

  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Lead Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Lead Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Lead Source"
        value={form.source}
        onChange={(e) =>
          setForm({ ...form, source: e.target.value })
        }
      />

      <textarea
        placeholder="Follow-up Notes"
        value={form.notes}
        onChange={(e) =>
          setForm({ ...form, notes: e.target.value })
        }
      ></textarea>

      <button type="submit">
        Add Lead
      </button>

    </form>
  );
}

export default LeadForm;