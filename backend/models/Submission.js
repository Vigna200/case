const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productCost: { type: String, required: true },
});

module.exports = mongoose.model('Submission', submissionSchema);
