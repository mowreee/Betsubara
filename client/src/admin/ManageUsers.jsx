import React, { useEffect, useState } from "react";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const [editEmail, setEditEmail] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [editUser, setEditUser] = useState({ _id: null, email: "" });

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
    setEditUser({ _id: user._id, email: user.email });
    setShowEditModal(true);
  };

  const handleEditSave = async (id) => {
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: editUser.email }),
      });
      if (!res.ok) throw new Error();
      const updated = await res.json();
      setUsers((prev) => prev.map((u) => (u._id === id ? updated : u)));
      setEditId(null);
      setShowEditModal(false);
    } catch {
      alert("Failed to update user.");
    }
  };

  const handleEditCancel = () => {
    setEditId(null);
    setEditEmail("");
    setShowEditModal(false);
  };

  return (
    <div className="p-8 w-full min-h-screen bg-[#fff6fa]">
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
          {showEditModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="bg-white dark:bg-[#3a2230] rounded-2xl shadow-2xl p-4 sm:p-8 w-full max-w-xs sm:max-w-md relative border-2 border-[#ffb6d5] animate-fade-in mx-2">
                <button
                  type="button"
                  className="absolute top-2 right-2 sm:top-3 sm:right-4 text-[#a85e7c] text-2xl sm:text-3xl font-bold hover:text-[#ffb6d5] focus:outline-none"
                  onClick={() => { setShowEditModal(false); setEditId(null); setEditEmail(""); }}
                  aria-label="Close"
                >
                  &times;
                </button>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#a85e7c] dark:text-[#ffe4ec] text-center drop-shadow">Edit User</h2>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    // Email validation
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(editUser.email)) {
                      alert('Please enter a valid email address.');
                      return;
                    }
                    handleEditSave(editUser._id);
                  }}
                  className="flex flex-col gap-3 sm:gap-4"
                >
                  <input
                    className="border border-[#ffb6d5] rounded px-3 py-2 focus:ring-2 focus:ring-[#ffb6d5] outline-none w-full bg-[#fff6fa] text-[#a85e7c] text-sm sm:text-base"
                    value={editUser.email}
                    onChange={e => setEditUser({ ...editUser, email: e.target.value })}
                    autoFocus
                    required
                  />
                  <button type="submit" className="bg-[#ffb6d5] text-white px-4 sm:px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#a85e7c] transition text-sm sm:text-base">Save</button>
                </form>
              </div>
            </div>
          )}
          <table className="min-w-full bg-white border rounded-2xl shadow-lg text-[#a85e7c] text-sm sm:text-base">
            <thead className="bg-[#ffe4ec] text-[#a85e7c]">
              <tr>
                <th className="py-2 sm:py-3 px-2 sm:px-6 border-b font-semibold text-base sm:text-lg">Email</th>
                <th className="py-2 sm:py-3 px-2 sm:px-6 border-b font-semibold text-base sm:text-lg">Created At</th>
                <th className="py-2 sm:py-3 px-2 sm:px-6 border-b font-semibold text-base sm:text-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr
                  key={user._id}
                  className={idx % 2 === 0 ? "bg-[#fff6fa]" : "bg-white"}
                >
                  <td className="py-2 sm:py-3 px-2 sm:px-6 border-b align-middle max-w-[120px] sm:max-w-none break-words">
                    <span className="font-medium">{user.email}</span>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-6 border-b align-middle max-w-[180px] sm:max-w-none break-words">
                    <span className="bg-[#ffe4ec]/60 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-mono">
                      {new Date(user.createdAt).toLocaleString()}
                    </span>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-6 border-b align-middle">
                    <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
                      <button
                        className="bg-[#ffb6d5] text-white px-3 sm:px-4 py-1 rounded-lg font-semibold shadow hover:bg-[#a85e7c] transition w-full sm:w-auto text-xs sm:text-base"
                        onClick={() => handleEdit(user)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-100 text-red-600 px-3 sm:px-4 py-1 rounded-lg font-semibold shadow hover:bg-red-200 transition w-full sm:w-auto text-xs sm:text-base"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </div>
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
