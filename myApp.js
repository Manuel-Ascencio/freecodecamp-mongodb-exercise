require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");

const url = process.env.DB_URL;

let personSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: Number,
  favoriteFoods: [String],
});

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  let manuel = new Person({
    name: "manuel",
    age: 22,
    favoriteFoods: ["eggs", "pizza"],
  });

  manuel.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

var arrayOfPeople = [
  { name: "Jose", age: 20, favoriteFoods: ["meat"] },
  { name: "Eduardo", age: 23, favoriteFoods: ["pizza"] },
  { name: "Julio", age: 19, favoriteFoods: ["tacos"] },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.log(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function (err, person) {
    if (err) return console.log(err);
    done(null, person);
  });
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connection successful..."))
  .catch((err) => console.log("MongoDB connection field", err.message));

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
