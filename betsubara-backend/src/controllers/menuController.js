const MenuItem = require('../models/MenuItem');

// Get all menu items
exports.getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new menu item
exports.createMenuItem = async (req, res) => {
  const menuItem = new MenuItem({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });

  try {
    const newMenuItem = await menuItem.save();
    res.status(201).json(newMenuItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update menu item
exports.updateMenuItem = async (req, res) => {
  try {
    const updated = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Menu item not found.' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete menu item
exports.deleteMenuItem = async (req, res) => {
  try {
    const deleted = await MenuItem.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Menu item not found.' });
    res.json({ message: 'Menu item deleted.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};