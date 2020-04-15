const models = require("../models");

/* GET Item listing. */
const getAllItems = async (req, res) => {
  try {
    const items = await models.Item.findAll({});
    return res.status(200).json({ items });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

/** POST Item */
const createItem = async (req, res) => {
  try {
    const item = await models.Item.create(req.body);
    return res.status(201).json({
      item,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/** GET Item by Id */
const getItemById = async (req, res) => {
  try {
    const { itemId } = req.params;
    const item = await models.Item.findOne({
      where: { id: itemId },
    });
    if (item) {
      return res.status(200).json({ item });
    }
    return res.status(404).send({ error: "Item does not exists" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

/** Update Item */
const updateItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const [updated] = await models.Item.update(req.body, {
      where: { id: itemId },
    });
    if (updated) {
      const updatedItem = await models.Item.findOne({ where: { id: itemId } });
      return res.status(200).json({ updatedItem });
    }
    return res.status(404).send({ error: "Item update failed" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

/** Dele Item */
const deleteItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const deleted = await models.Item.destroy({
      where: { id: itemId },
    });

    return res.status(204).send("Item deleted");
  } catch (error) {
    return res.status(404).send({ error: "Item delete failed" });
  }
};

module.exports = {
  getAllItems,
  createItem,
  getItemById,
  updateItem,
  deleteItem,
};
