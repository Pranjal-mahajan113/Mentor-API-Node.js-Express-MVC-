const mongoose = require("mongoose");

const mentorSchema = mongoose.Schema({
  name: String,
  phone: Number,
  tech: String,
  experienc: Number,
});

const Mentor = new mongoose.model("mentor", mentorSchema);

module.exports = Mentor;