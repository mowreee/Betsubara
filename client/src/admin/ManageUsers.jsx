import React, { useEffect, useState } from "react";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const [editEmail, setEditEmail] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load users.");
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await fetch(`/api/users/${id}`, { method: "DELETE" });
      setUsers((prev) => prev.filter((u) => u._id !== id));
    } catch {
      alert("Failed to delete user.");
    }
  };

  const handleEdit = (user) => {
    setEditId(user._id);
    setEditEmail(user.email);
  };

  const handleEditSave = async (id) => {
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: editEmail }),
      });
      if (!res.ok) throw new Error();
      const updated = await res.json();
      setUsers((prev) => prev.map((u) => (u._id === id ? updated : u)));
      setEditId(null);
    } catch {
      alert("Failed to update user.");
    }
  };

  const handleEditCancel = () => {
    setEditId(null);
    setEditEmail("");
  };

  return (
    <div className="p-8 w-full min-h-screen bg-gradient-to-br from-[#fff6fa] via-[#ffe4ec] to-[#f7e1f3] dark:from-[#3a2230] dark:via-[#4a2a3a] dark:to-[#2a1a1f] transition-colors duration-500">
      <h1 className="text-3xl font-bold mb-6 text-[#a85e7c] text-center drop-shadow">
        Manage Users
      </h1>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <span className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#ffb6d5]"></span>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center font-semibold py-4 bg-red-50 border border-red-200 rounded-lg shadow">
          {error}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-2xl shadow-lg text-[#a85e7c]">
            <thead className="bg-[#ffe4ec] text-[#a85e7c]">
              <tr>
                <th className="py-3 px-6 border-b font-semibold text-lg">
                  Email
                </th>
                <th className="py-3 px-6 border-b font-semibold text-lg">
                  Created At
                </th>
                <th className="py-3 px-6 border-b font-semibold text-lg">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr
                  key={user._id}
                  className={idx % 2 === 0 ? "bg-[#fff6fa]" : "bg-white"}
                >
                  <td className="py-3 px-6 border-b align-middle">
                    {editId === user._id ? (
                      <input
                        className="border border-[#ffb6d5] rounded px-3 py-2 focus:ring-2 focus:ring-[#ffb6d5] outline-none w-full bg-[#fff6fa] text-[#a85e7c]"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        autoFocus
                      />
                    ) : (
                      <span className="font-medium">{user.email}</span>
                    )}
                  </td>
                  <td className="py-3 px-6 border-b align-middle">
                    <span className="bg-[#ffe4ec]/60 px-3 py-1 rounded-full text-sm font-mono">
                      {new Date(user.createdAt).toLocaleString()}
                    </span>
                  </td>
                  <td className="py-3 px-6 border-b align-middle">
                    {editId === user._id ? (
                      <div className="flex gap-2">
                        <button
                          className="bg-green-100 text-green-700 px-4 py-1 rounded-lg font-semibold shadow hover:bg-green-200 transition"
                          onClick={() => handleEditSave(user._id)}
                        >
                          Save
                        </button>
                        <button
                          className="bg-gray-100 text-gray-600 px-4 py-1 rounded-lg font-semibold shadow hover:bg-gray-200 transition"
                          onClick={handleEditCancel}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          className="bg-[#ffb6d5] text-white px-4 py-1 rounded-lg font-semibold shadow hover:bg-[#a85e7c] transition"
                          onClick={() => handleEdit(user)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-100 text-red-600 px-4 py-1 rounded-lg font-semibold shadow hover:bg-red-200 transition"
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
