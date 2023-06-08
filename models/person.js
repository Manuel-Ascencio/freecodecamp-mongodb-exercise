const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  favoriteFoods: {
    type: String,
    require: true,
  },
});

const Person = mongoose.model("person", personSchema);
