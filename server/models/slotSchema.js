import mongoose from "mongoose";

const slotSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  startTime: {
    type: String,
    required: true,
  },
  endsTime: {
    type: String,
    required: true,
  },
  bookingDate: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Slot", slotSchema);
