const express = require("express");
 const router = express.Router();

 const {
  createMentor,
  getAllMentors,
  getMentorById,
  updateMentor,
  deleteMentor,
} = require("../controllers/mentor.controller");

//Routes
router.post("/",createMentor);
router.get("/",getAllMentors);
router.get("/:id",getMentorById);
router.patch("/:id",updateMentor);
router.delete("/:id",deleteMentor);

module.exports = router;
