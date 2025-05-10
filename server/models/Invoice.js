const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  amount: { type: Number, required: true },
  dueDate: Date,
  status: { type: String, enum: ['unpaid', 'paid', 'overdue'], default: 'unpaid' },
  sentOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Invoice', invoiceSchema);
