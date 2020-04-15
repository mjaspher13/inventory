var express = require("express");
var router = express.Router();
const ItemController = require("../controllers/ItemController");

/* GET Item listing. */
router.get("/", ItemController.getAllItems);
/** POST Item */
router.post("/", ItemController.createItem);
/** GET Item by Id */
router.get("/:itemId", ItemController.getItemById);
/** Update Item */
router.put('/:itemId', ItemController.updateItem);
/** Dele Item */
router.delete('/:itemId', ItemController.deleteItem);

module.exports = router;
