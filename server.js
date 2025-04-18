
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const participantRoutes = require('./routes/participantRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/', participantRoutes);

//mongodb connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
