const mongoose = require("mongoose");

const recordingSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  recId: {
    type: String,
    required: [true, "RecordingId is required"],
    unique: true,
  },
  recType: {
    type: String,
    required: [true],
  },
});

module.exports = mongoose.model("RecData", recordingSchema);
