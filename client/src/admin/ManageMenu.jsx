import React, { useEffect, useState } from "react";

export default function ManageMenu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newItem, setNewItem] = useState({ name: "", description: "", price: "", image: "" });
  const [editId, setEditId] = useState(null);
  const [editItem, setEditItem] = useState({ name: "", description: "", price: "", image: "" });
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editMenuItem, setEditMenuItem] = useState({ _id: null, name: "", description: "", price: "", image: "" });

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load menu items.");
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewItem((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });
      if (!res.ok) throw new Error();
      const added = await res.json();
      setMenu((prev) => [...prev, added]);
      setNewItem({ name: "", description: "", price: "", image: "" });
    } catch {
      alert("Failed to add menu item.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this menu item?")) return;
    try {
      await fetch(`/api/menu/${id}`, { method: "DELETE" });
      setMenu((prev) => prev.filter((item) => item._id !== id));
    } catch {
      alert("Failed to delete menu item.");
    }
  };

  const handleEdit = (item) => {
    setEditId(item._id);
    setEditItem({ name: item.name, description: item.description, price: item.price, image: item.image });
    setEditMenuItem({ ...item });
    setShowEditModal(true);
  };

  const handleEditModalChange = (e) => {
    setEditMenuItem({ ...editMenuItem, [e.target.name]: e.target.value });
  };

  const handleEditModalFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditMenuItem((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditSave = async (id) => {
    try {
      const res = await fetch(`/api/menu/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editMenuItem),
      });
      if (!res.ok) throw new Error();
      const updated = await res.json();
      setMenu((prev) => prev.map((item) => (item._id === id ? updated : item)));
      setEditId(null);
      setShowEditModal(false);
    } catch {
      alert("Failed to update menu item.");
    }
  };

  const handleEditCancel = () => {
    setEditId(null);
    setShowEditModal(false);
  };

  return (
    <div className="p-8 w-full min-h-screen bg-[#fff6fa]">
      <h1 className="text-3xl font-bold mb-6 text-[#a85e7c] text-center drop-shadow">Manage Menu</h1>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <span className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#ffb6d5]"></span>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center font-semibold py-4 bg-red-50 border border-red-200 rounded-lg shadow">{error}</div>
      ) : (
        <>
          <button
            className="mb-8 bg-[#ffb6d5] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#a85e7c] transition"
            onClick={() => setShowAddModal(true)}
          >
            + Add Menu Item
          </button>

          {showAddModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="bg-white dark:bg-[#3a2230] rounded-2xl shadow-2xl p-4 sm:p-8 w-full max-w-[90vw] sm:max-w-lg relative border-2 border-[#ffb6d5] animate-fade-in mx-2">
                <button
                  className="absolute top-3 right-4 text-[#a85e7c] text-3xl font-bold hover:text-[#ffb6d5] focus:outline-none"
                  onClick={() => setShowAddModal(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <h2 className="text-2xl font-bold mb-6 text-[#a85e7c] dark:text-[#ffe4ec] text-center drop-shadow">Add Menu Item</h2>
                <form
                  onSubmit={e => {
                    handleAdd(e);
                    setShowAddModal(false);
                  }}
                  className="flex flex-col gap-4"
                >
                  <input 
                    name="name" 
                    value={newItem.name} 
                    onChange={e => {
                      // Only allow letters and spaces
                      const val = e.target.value.replace(/[^A-Za-z\s]/g, "");
                      setNewItem({ ...newItem, name: val });
                    }} 
                    placeholder="Name" 
                    className="border border-[#ffb6d5] rounded px-3 py-2 bg-[#fff6fa] dark:bg-[#4a2a3a] text-[#a85e7c] dark:text-[#ffe4ec] focus:ring-2 focus:ring-[#ffb6d5] outline-none" 
                    required 
                  />
                  <input 
                    name="description" 
                    value={newItem.description} 
                    onChange={handleInputChange} 
                    placeholder="Description" 
                    className="border border-[#ffb6d5] rounded px-3 py-2 bg-[#fff6fa] dark:bg-[#4a2a3a] text-[#a85e7c] dark:text-[#ffe4ec] focus:ring-2 focus:ring-[#ffb6d5] outline-none" 
                    required 
                  />
                  <input 
                    name="price" 
                    value={newItem.price} 
                    onChange={e => {
                      // Only allow numbers and optional decimal
                      const val = e.target.value.replace(/[^\d.]/g, "");
                      setNewItem({ ...newItem, price: val });
                    }} 
                    placeholder="Price" 
                    className="border border-[#ffb6d5] rounded px-3 py-2 bg-[#fff6fa] dark:bg-[#4a2a3a] text-[#a85e7c] dark:text-[#ffe4ec] focus:ring-2 focus:ring-[#ffb6d5] outline-none" 
                    required 
                  />
                  <label className="flex flex-col gap-1">
                    <span className="text-[#a85e7c] dark:text-[#ffe4ec] font-medium">Image</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={e => {
                        const file = e.target.files[0];
                        if (file && file.type.startsWith('image/')) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setNewItem((prev) => ({ ...prev, image: reader.result }));
                          };
                          reader.readAsDataURL(file);
                        } else {
                          e.target.value = null;
                          alert('Please select a valid image file.');
                        }
                      }} 
                      className="border border-[#ffb6d5] rounded px-3 py-2 bg-[#fff6fa] dark:bg-[#4a2a3a] text-[#a85e7c] dark:text-[#ffe4ec] focus:ring-2 focus:ring-[#ffb6d5] outline-none" 
                      required 
                    />
                  </label>
                  {newItem.image && (
                    <img src={newItem.image} alt="Preview" className="w-32 h-32 object-cover rounded self-center border border-[#ffb6d5]" />
                  )}
                  <button type="submit" className="bg-[#ffb6d5] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#a85e7c] transition">Add</button>
                </form>
              </div>
            </div>
          )}
          {showEditModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="bg-white dark:bg-[#3a2230] rounded-2xl shadow-2xl p-4 sm:p-8 w-full max-w-[90vw] sm:max-w-lg relative border-2 border-[#ffb6d5] animate-fade-in mx-2">
                <button
                  className="absolute top-3 right-4 text-[#a85e7c] text-3xl font-bold hover:text-[#ffb6d5] focus:outline-none"
                  onClick={handleEditCancel}
                  aria-label="Close"
                >
                  &times;
                </button>
                <h2 className="text-2xl font-bold mb-6 text-[#a85e7c] dark:text-[#ffe4ec] text-center drop-shadow">Edit Menu Item</h2>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    handleEditSave(editMenuItem._id);
                  }}
                  className="flex flex-col gap-4"
                >
                  <input 
                    name="name" 
                    value={editMenuItem.name} 
                    onChange={e => {
                      // Only allow letters and spaces
                      const val = e.target.value.replace(/[^A-Za-z\s]/g, "");
                      setEditMenuItem({ ...editMenuItem, name: val });
                    }} 
                    placeholder="Name" 
                    className="border border-[#ffb6d5] rounded px-3 py-2 bg-[#fff6fa] dark:bg-[#4a2a3a] text-[#a85e7c] dark:text-[#ffe4ec] focus:ring-2 focus:ring-[#ffb6d5] outline-none" 
                    required 
                  />
                  <input 
                    name="description" 
                    value={editMenuItem.description} 
                    onChange={handleEditModalChange} 
                    placeholder="Description" 
                    className="border border-[#ffb6d5] rounded px-3 py-2 bg-[#fff6fa] dark:bg-[#4a2a3a] text-[#a85e7c] dark:text-[#ffe4ec] focus:ring-2 focus:ring-[#ffb6d5] outline-none" 
                    required 
                  />
                  <input 
                    name="price" 
                    value={editMenuItem.price} 
                    onChange={e => {
                      // Only allow numbers and optional decimal
                      const val = e.target.value.replace(/[^\d.]/g, "");
                      setEditMenuItem({ ...editMenuItem, price: val });
                    }} 
                    placeholder="Price" 
                    className="border border-[#ffb6d5] rounded px-3 py-2 bg-[#fff6fa] dark:bg-[#4a2a3a] text-[#a85e7c] dark:text-[#ffe4ec] focus:ring-2 focus:ring-[#ffb6d5] outline-none" 
                    required 
                  />
                  <label className="flex flex-col gap-1">
                    <span className="text-[#a85e7c] dark:text-[#ffe4ec] font-medium">Image</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={e => {
                        const file = e.target.files[0];
                        if (file && file.type.startsWith('image/')) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setEditMenuItem((prev) => ({ ...prev, image: reader.result }));
                          };
                          reader.readAsDataURL(file);
                        } else {
                          e.target.value = null;
                          alert('Please select a valid image file.');
                        }
                      }} 
                      className="border border-[#ffb6d5] rounded px-3 py-2 bg-[#fff6fa] dark:bg-[#4a2a3a] text-[#a85e7c] dark:text-[#ffe4ec] focus:ring-2 focus:ring-[#ffb6d5] outline-none" 
                    />
                  </label>
                  {editMenuItem.image && (
                    <img src={editMenuItem.image} alt="Preview" className="w-32 h-32 object-cover rounded self-center border border-[#ffb6d5]" />
                  )}
                  <button type="submit" className="bg-[#ffb6d5] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#a85e7c] transition">Save</button>
                </form>
              </div>
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-[#fff6fa] border rounded-2xl shadow-lg text-[#a85e7c] text-sm sm:text-base">
              <thead className="bg-[#ffe4ec] text-[#a85e7c]">
                <tr>
                  <th className="py-2 sm:py-3 px-2 sm:px-6 border-b font-semibold text-base sm:text-lg">Food</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-6 border-b font-semibold text-base sm:text-lg">Description</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-6 border-b font-semibold text-base sm:text-lg">Price</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-6 border-b font-semibold text-base sm:text-lg">Image</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-6 border-b font-semibold text-base sm:text-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                {menu.map((item, idx) => (
                  <tr key={item._id} className={idx % 2 === 0 ? "bg-[#ffe4ec]/60" : "bg-[#fff6fa]"}>
                    <td className="py-2 sm:py-3 px-2 sm:px-6 border-b align-middle max-w-[120px] sm:max-w-none break-words">
                      <span className="font-medium">{item.name}</span>
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-6 border-b align-middle max-w-[180px] sm:max-w-none break-words">
                      {item.description}
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-6 border-b align-middle">
                      {item.price}
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-6 border-b align-middle">
                      <img src={item.image} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded mx-auto" />
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-6 border-b align-middle">
                      <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
                        <button className="bg-[#ffb6d5] text-white px-3 sm:px-4 py-1 rounded-lg font-semibold shadow hover:bg-[#a85e7c] transition w-full sm:w-auto" onClick={() => handleEdit(item)}>Edit</button>
                        <button className="bg-red-100 text-red-600 px-3 sm:px-4 py-1 rounded-lg font-semibold shadow hover:bg-red-200 transition w-full sm:w-auto" onClick={() => handleDelete(item._id)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
