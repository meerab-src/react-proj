import { useEffect, useState } from "react";
import { UsersAPI } from "./api";

export default function UsersCrud() {
  const [users, setUsers] = useState([]); // list of users
  const [form, setForm] = useState({ name: "", email: "" }); // form inputs
  const [editingId, setEditingId] = useState(null); // track user being edited

  // Load all users
  async function loadUsers() {
    const { data } = await UsersAPI.list();
    setUsers(data);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  // Add or Update user
  async function handleSubmit(e) {
    e.preventDefault();

    if (editingId) {
      await UsersAPI.update(editingId, form);
    } else {
      await UsersAPI.create(form);
    }

    // reset form
    setForm({ name: "", email: "" });
    setEditingId(null);

    loadUsers();
  }

  // Delete user
  async function handleDelete(id) {
    await UsersAPI.remove(id);
    loadUsers();
  }

  // Start editing
  function handleEdit(user) {
    setEditingId(user.id);
    setForm({ name: user.name, email: user.email });
  }

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
        color: "black",
      }}
    >
      <h2>Users (Mock API)</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <button type="submit">{editingId ? "Update" : "Add"}</button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setForm({ name: "", email: "" });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      {/* User list */}
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} — {u.email}
            <button onClick={() => handleEdit(u)}>Edit</button>
            <button onClick={() => handleDelete(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
