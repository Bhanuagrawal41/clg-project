const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
  subject:     { type: String, required: true },
  daysLeft:    { type: Number, required: true },
  hoursPerDay: { type: Number, required: true },
  planData:    { type: Object, required: true }, // stores full AI response
  createdAt:   { type: Date, default: Date.now },
});

module.exports = mongoose.model('Plan', PlanSchema);