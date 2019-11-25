import mongoose from "../database";

const PlanetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  climate: {
    type: String,
    required: true,
    lowercase: true,
  },
  ground: {
    type: String,
    required: true,
    lowercase: true,
  },
  appearances: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }

});

const Planet = mongoose.model("Planet", PlanetSchema);

export default Planet;