const express = require('express');
const router = express.Router();
const {
  registerParticipant,
  getAllParticipants
} = require('../controllers/participantController');

//POST /events fro register a participant
router.post('/events', registerParticipant);

//GET /events for get all participants
router.get('/events', getAllParticipants);

module.exports = router;

