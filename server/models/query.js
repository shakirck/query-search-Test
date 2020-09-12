const mongoose = require('mongoose');
// const { query } = require('express');
const fuzzySearch = require('mongoose-fuzzy-searching');

const querySchema = new mongoose.Schema(
  {
    query: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
      enum: [
        'Us Admission',
        'Uk Admission',
        'International Student',
        'Europe University',
        'US Universities',
        'Unspecified',
      ],
      default: 'Unspecified',
    },
    tags: [
      {
        type: String,
        required: true,
        enum: ['University', 'Admission', 'Mentor', 'Cost', 'Other'],
        default: 'Other',
      },
    ],
  },
  { timestamps: true }
);
const Query = mongoose.model('Query', querySchema);

module.exports = Query;
