const Mentor = require("../models/mentor");

//-------------CREATE---------------------------
const createMentor = async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    const createMentor = await mentor.save();
    res.status(201).json(createMentor);
  } catch (err) {
    res.status(400).send(err);
  }
};

//---------- READ ALL-------------------
const getAllMentors = async (req, res) => {
  // const id = req.params.id;
  const mentorData = await Mentor.find();
  res.status(200).json(mentorData);
};

//-----------------READ BY ID------------------------------
const getMentorById = async (req, res) => {
  const id = req.params.id;
  const mentorData = await Mentor.findById(id);
  res.status(200).json(mentorData);
};

//--------UPDATE--------------------------
const updateMentor = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = await Mentor.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateData);
  } catch (err) {
    res.status(400).send(err);
  }
};

// ------------DELETE-----------------------
const deleteMentor = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteData = await Mentor.findByIdAndDelete(id);
    res.status(200).json(deleteData);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  createMentor,
  getAllMentors,
  getMentorById,
  updateMentor,
  deleteMentor,
};
