const express = require("express");
require("./Db/connection");
const app = express();
app.use(express.json());

const Mentor = require("./models/mentor");

const PORT = process.env.PORT || 3000;

//ROUTES------------------------------------
const mentorRoutes = require("./routes/mentor.routes")
app.use("/api/mentors",mentorRoutes);

// app.post("/api/mentors", async (req, res) => {
//   try {
//     const mentor = new Mentor(req.body);
//     const createMentor = await mentor.save();
//     res.status(201).json(createMentor);
//   } catch (err) {
//     res.send(err);
//   }
// });
//GET----
// app.get("/api/mentors", async (req, res) => {
//   const mentorData = await Mentor.find();
//   res.status(201).json(mentorData);
// });

//GET BY ID--------------------
// app.get("/api/mentors/:id", async (req, res) => {
//   const id = req.params.id;
//   const mentorData = await Mentor.find({ _id: id });
//   res.status(201).json(mentorData);
// });

//PATCH----
// app.patch("/api/mentors/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const updateData = await Mentor.findByIdAndUpdate({ _id: id }, req.body, {
//       new: true,
//     });
//     res.send(updateData);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

//DELETE----------request
// app.delete("/api/mentors/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const deleteData = await Mentor.findByIdAndDelete({ _id: id });
//     res.send(deleteData);
//   } catch (err) {
//     res.send(err);
//   }
// });

app.listen(PORT, () => {
  console.log(`Server are running on ${PORT}`);
});
