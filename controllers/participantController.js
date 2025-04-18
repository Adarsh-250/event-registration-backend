const Participant = require("../models/Participant");

//registraiton for new participants
//POST /events
const registerParticipant = async (req, res) => {
  try {
    const { name, event, email } = req.body;

    
    if (!name || !event || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newParticipant = new Participant({ name, event, email });
    await newParticipant.save();

    res.status(201).json({ message: "Participant registered", participant: newParticipant });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

//get all participants
//GET /events
const getAllParticipants = async (req, res) => {
  try {
    const participants = await Participant.find();
    res.status(200).json(participants);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = {
  registerParticipant,
  getAllParticipants
};
