const { Schema } = require('mongoose');

const schema = new Schema({
  user: {
    type: Schema.Types.String,
    required: true
  },
  token: {
    type: Schema.Types.String,
    required: true
  }
}, {
  timestamps: true
})

schema.index({ 'updatedAt': 1 }, { expireAfterSeconds: 300 });

module.exports = schema;