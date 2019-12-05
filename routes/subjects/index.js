const express = require("express")
const router = express.Router()

const subjectController = require("./controller")

//todo
router.get("/", subjectController.getAll)
router.get("/:id", subjectController.getOne)
router.delete("/:id", subjectController.deleteOne)
router.post("/", subjectController.addOne)
router.put("/:id", subjectController.updateOne)
router.get("/email/:email", subjectController.getByEmail)

module.exports = router;