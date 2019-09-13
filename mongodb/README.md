


> db
test
> use natours-test
switched to db natours-test

> db.tours.insertOne({mane: "The forest Hiker", price: 297,
 rating: 4.7})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5d7a5e4d9afa22a48b442054")
}

> db.tours.find()
{ "_id" : ObjectId("5d7a5e4d9afa22a48b442054"), "mane" : "The forest Hiker", "price" : 297, "rating" : 4.7 }


> show dbs
admin         0.000GB
config        0.000GB
local         0.000GB
natours-test  0.000GB


> show collections
tours

db.tours.insertMany([{name: "The Sea Explorer", price: 497, rating: 4.8}, {name: "The Snow Adventurer", price: 997, rating: 4.9, difficulty: "easy"}])

> db.tours.find().pretty()

> db.tours.find({difficulty : "easy"}).pretty()
> db.tours.find({name: "The Snow Adventurer"}).pretty()

db.tours.find({price: {$lte: 1000}}).pretty() // {$lte: 1000} - less then equal
> db.tours.find({price: {$lt: 500}, rating: {$gte: 4.8}}).pretty()  // And &

b.tours.find({ $or: [{price: {$lt: 500}}, {rating: {$gte: 4.8}}]}).pretty()  // OR

db.tours.find({ $or: [{price: {$lt: 500}}, {rating: {$gte: 4.8}}]}, {name: 1}).pretty() // выводит только имя

> db.tours.updateOne({name: "The Snow Adventurer"}, {$set: {price: 597}})  // 1 аргумент фильтр, 2 аргумент что должны обновить

> db.tours.updateMany({price: {$gte: 500}, rating: {$gte: 4.8}}, {$set: {premium: true}})

> db.tours.replaceMany()


db.tours.deleteMany({name : "Nikolay1"}) // удалит все таблицы с именем Nikolay1
db.tours.deleteMany({}) // удалит все 


# Mongoose

```javascript
const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  }
}); // в БД будут записаны те поля что есть в схеме

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
```

```javascript

//
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours: tours
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    // const tour = await Tour.findOne({ _id: req.params.id });
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        tour: tour
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    // const newTour = new Tour({})
    // newTour.save()
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'success',
      tour: tour
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'err'
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      tour: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'err'
    });
  }
};

```




```javascript
node dev-data/data/import-dev-data.js --import // вводим в командную строку argv[0] => node, argv[1] => dev-data/data/import-dev-data.js
console.log(argv[2]) // => --import
```