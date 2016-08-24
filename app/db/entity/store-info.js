const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storeSchema = new Schema({
  storeName: String,
  storeLocation: String,
  storePhone: String,
  storeState: Number
});

// the collection's name is `stores`
const Order = mongoose.model('Store', storeSchema);

module.exports = Store;
