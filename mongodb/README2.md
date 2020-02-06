
```console
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB

> use shop
switched to db shop

> db.products.insertOne({name: "Max", age: 29})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5dfe4dfe24afc388275ede55")
}

> db.products.find()
{ "_id" : ObjectId("5dfe4dfe24afc388275ede55"), "name" : "Max", "age" : 29 }

> db.products.find().pretty()
{ "_id" : ObjectId("5dfe4dfe24afc388275ede55"), "name" : "Max", "age" : 29 }



```

```bash
db.products.insertOne({title: "A book", price: 12.99})
db.customers.insertOne({name: "Nikolay", age: 28})



> db.flights.deleteOne({})
> db.flights.deleteOne({departureAirport: "LHR"})


> db.flights.updateOne({role: "admin"}, {$set: {xxx: 'yyy'}})

> db.flights.updateOne({_id: ObjectId("5e005ebd5619fc2f61ae6c
7f")}, {delayed: true }) # выдвс ошибку т.к. нету $set
> db.flights.updateMany({_id: ObjectId("5e005ebd5619fc2f61ae6c
7f")}, {delayed: true }) # выдвс ошибку т.к. нету $set

> db.flights.update({_id: ObjectId("5e005ebd5619fc2f61ae6c7f")}, {delayed: true }) # дас  результат
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

> db.flights.replaceOne({_id: ObjectId("5e0066aeb1777562c
0e051ce")}, {xxx: "xxx"}) # заменяем весь объект

# find() возвращает нам  Cursor а не весь объект 
# find().toArray возвращает нам весь объект


# projection
> db.passengers.find({}, {name: 1}).pretty()
{ "_id" : ObjectId("5e0067a9b1777562c0e051d1"), "name" : "Manu Lorenz" }
{ "_id" : ObjectId("5e0067a9b1777562c0e051d2"), "name" : "Chris Hayton" }

# id по умолчанию всегда true


> db.passengers.find({}, {name: 1, _id: 0}).pretty()
{ "name" : "Max Schwarzmueller" }
{ "name" : "Manu Lorenz" }



> db.passengers.updateOne({name: "Albert Twostone"}, {$se
t: {hobbies: ["dd", "rr"]}})


# посмотреть все коллекции в mong shell
> db.getCollectionNames()
[ "customers", "products" ]

```


```bash
# Data type
Text - "Nikolay"
Boolean - true
Number - {
        (int32) 55
        (int64) 1000000000
        (decimal) 13.99
}
ObjectId - ObjectId("fdsfsdfsd")
ISODate - {
        ISODate("2019-12-11")
        Timestamp(1212123232)
}
Embeded Document - {a: {b: {}}}
Array: []

db.dropDatabase()





# $lookup

{
   $lookup:
     {
       from: <collection to join>,
       localField: <field from the input documents>,
       foreignField: <field from the documents of the "from" collection>,
       as: <output array field>
     }
}

> db.books.find().pretty()
{
        "_id" : ObjectId("5e009d21b1777562c0e051ed"),
        "title" : "Lent to Fad",
        "authors" : [
                ObjectId("5e009bd4b1777562c0e051eb"),
                ObjectId("5e009bd4b1777562c0e051eb")
        ]
}

# db.books.aggregate(
db.books.aggregate([
   { $lookup: { from: "authors", localField: "authors", foreignField: "_id", as: "creators"}}
]).pretty()

 > db.books.aggregate([    { $lookup: { from: "authors", l
ocalField: "authors", foreignField: "_id", as: "creators"}} ]).pretty()
{
        "_id" : ObjectId("5e009d21b1777562c0e051ed"),
        "title" : "Lent to Fad",
        "authors" : [
                ObjectId("5e009bd4b1777562c0e051eb"),
                ObjectId("5e009bd4b1777562c0e051ec")
        ],
        "creators" : [
                {
                        "_id" : ObjectId("5e009bd4b1777562c0e051eb"),
                        "name" : "Pushkin",
                        "age" : 37
                },
                {
                        "_id" : ObjectId("5e009bd4b1777562c0e051ec"),
                        "name" : "dostoevskiy",
                        "age" : 64
                }
        ]
}
```


```bash
db.createCollection('posts', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['title', 'text', 'creator', 'comments'],
      properties: {
        title: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        text: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        creator: {
          bsonType: 'objectId',
          description: 'must be an objectid and is required'
        },
        comments: {
          bsonType: 'array',
          description: 'must be an array and is required',
          items: {
            bsonType: 'object',
            required: ['text', 'author'],
            properties: {
              text: {
                bsonType: 'string',
                description: 'must be a string and is required'
              },
              author: {
                bsonType: 'objectId',
                description: 'must be an objectid and is required'
              }
            }
          }
        }
      }
    }
  }
});

db.runCommand({
  collMod: 'posts',
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['title', 'text', 'creator', 'comments'],
      properties: {
        title: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        text: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        creator: {
          bsonType: 'objectId',
          description: 'must be an objectid and is required'
        },
        comments: {
          bsonType: 'array',
          description: 'must be an array and is required',
          items: {
            bsonType: 'object',
            required: ['text', 'author'],
            properties: {
              text: {
                bsonType: 'string',
                description: 'must be a string and is required'
              },
              author: {
                bsonType: 'objectId',
                description: 'must be an objectid and is required'
              }
            }
          }
        }
      }
    }
  },
  validationAction: 'warn'
});
ll

# db.createCollection( <name>,
#    {
#      capped: <boolean>,
#      autoIndexId: <boolean>,
#      size: <number>,
#      max: <number>,
#      storageEngine: <document>,
#      validator: <document>,
#      validationLevel: <string>,
#      validationAction: <string>,
#      indexOptionDefaults: <document>,
#      viewOn: <string>,              // Added in MongoDB 3.4
#      pipeline: <pipeline>,          // Added in MongoDB 3.4
#      collation: <document>,         // Added in MongoDB 3.4
#      writeConcern: <document>
#    }
# )
```




## CRUD

```bash
 > db.dropDatabase() # удалит используемую БД


> db.persons.insert({name: "Man323223", age: 34343})
WriteResult({ "nInserted" : 1 })
# insert не рекомендуеться использовать  - не возвращает id



db.hobbies.insertMany([{_id: "a", name: "A"}, {_id: "b", name: "B"},{_id: "c", name: "C"},{_id: "d", name: "D"}])
# все вставилось
db.hobbies.insertMany([{_id: "s", name: "s"}, {_id: "b", name: "B"},{_id: "o", name: "O"},{_id: "i", name: "I"}])
# вставилось только s потом произошла ошибка

db.hobbies.insertMany([{_id: "a", name: "A"}, {_id: "b", name: "B"},{_id: "c", name: "C"},{_id: "d", name: "D"}, , {ordered: false}])
# z вставилать потом ошибка т.к. {ordered: false}



 > db.persons.insertOne({name: "eee", age: 11}, {write
Concern: {w: 0}})
{ "acknowledged" : false }

MongoDB Enterprise > db.persons.insertOne({name: "eee", age: 11}, {write
Concern: {w: 1}})
{ "acknowledged" : true,
"insertedId" : ObjectId("5e01b82a5e461b43f75b8931")}

# вставка документа в бд --jsonArray - массив json, --drop - удалить коллекцию если есть перед вставкой
$ mongoimport tv-shows.json -d movieData -c movies --jsonArray --drop



> db.movies.findOne() # позвращает первый объект (не курсор) 


> db.movies.find({runtime: {$eq: 60}})
> db.movies.find({runtime: {$ne: 60}}).pretty()
> db.movies.find({runtime: {$lt: 40}}).pretty()
> db.movies.find({"rating.average": {$gt: 7}}).pretty()
> db.movies.find({"genres": "Drama"}).pretty() # выведет все что содержит в массиве genres Drama

> db.movies.find({"genres": ["Drama"]}).pretty() # выведет если в массиве только один элемент ["Drama"]


 > db.movies.find({runtime: {$in: [30, 25]}}, {runtime: 1}).pretty()


 db.movies.find({$or: [
   {"rating.average": {$lt: 5}}, 
   {"rating.average": {$gt: 9.3}}
 ]})

 }, {"rating.average": {$gt: 9.3}}]}, {rating: 1, _id: 0})
# { "rating" : { "average" : 4.7 } }
# { "rating" : { "average" : 9.4 } }

db.movies.find({$and: [
  {"rating.average": {$gt: 9}},
  {genres: "Drama"}
]}, {"rating.average": 1, genres: 1, _id: 0})

# альтернатива с новым синтаксисом
db.movies.find({"rating.average": {$gt: 9}, genres: "Drama"}, {"rating.average": 1, genres: 1, _id: 0})


db.movies.find({
  genres: "Drama",
  genres: "Horror"
}).count() # Будет выдавать  неправильный результат только по последнему (дублируеться поле) жанру нужно  использовать $and

db.movies.find({$and: [
  {genres: "Drama"},
  {genres: "Horror"}
]}).count() 


 > db.movies.find({runtime: {$not: {$eq: 60}}}).coun
t()

 > db.movies.find({runtime: {$ne: 60}}).count()


db.user.insertMany([{name: "Max", hobbies: [{title: "Sports", friquency: 3}, {title: "Cooking", friquency: 6}], phone: 42343424}, {name: "Manuel", hobbies: [{title: "Cars", friquency: 2}, {title: "Cooking", friquency: 5}], phone: 99943424, age: 30}])


> db.user.find({}).pretty()
{
        "_id" : ObjectId("5e0208e50b531310837a99d6"),
        "name" : "Max",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "friquency" : 3
                },
                {
                        "title" : "Cooking",
                        "friquency" : 6
                }
        ],
        "phone" : 42343424
}
{
        "_id" : ObjectId("5e0208e50b531310837a99d7"),
        "name" : "Manuel",
        "hobbies" : [
                {
                        "title" : "Cars",
                        "friquency" : 2
                },
                {
                        "title" : "Cooking",
                        "friquency" : 5
                }
        ],
        "phone" : 99943424,
        "age" : 30
}
{
        "_id" : ObjectId("5e020b830b531310837a99d8"),
        "name" : "Ana",
        "hobbies" : [
                {
                        "title" : "ooooOO",
                        "friquency" : 2
                },
                {
                        "title" : "Cooking",
                        "friquency" : 5
                }
        ],
        "phone" : 4342323,
        "age" : null
}

> db.user.find({}, {name: 1, age: 1, _id: 0}).prett
y()
{ "name" : "Max" }
{ "name" : "Manuel", "age" : 30 }

# найти пользователя без уникальным полем $exists

 > db.user.find({age: {$exists: true}}, {phone: 1, 
age: 1}).pretty()
{ "_id" : ObjectId("5e0208e50b531310837a99d6"), "phone" : 42343424 }


db.user.insertOne({name: "Ana2", hobbies: [{title: "ooooOO", friquency: 2}, {title: "Cooking", friquency: 5}], phone: "4342323", age: null})

# если age = null то поле сужествует
 > db.user.find({age: {$exists: false}}, {name: 1, a
ge: 1, _id: 0}).pretty()
{ "name" : "Max" }

> db.user.find({age: {$exists: true, $ne: null }}, 
{name: 1, age: 1, _id: 0}).pretty()
{ "name" : "Manuel", "age" : 30 }


> db.user.find({phone: {$type: "number"}},{name: 1,
 phone:1, _id: 0}).pretty()
{ "name" : "Max", "phone" : 42343424 }
{ "name" : "Manuel", "phone" : 99943424 }
{ "name" : "Ana", "phone" : 4342323 }


> db.user.find({phone: {$type: "number"}},{name: 1,
 phone:1, _id: 0}).pretty()
{ "name" : "Max", "phone" : 42343424 }
{ "name" : "Manuel", "phone" : 99943424 }
{ "name" : "Ana", "phone" : 4342323 }

> db.user.find({phone: {$type: ["string", "number"]
}},{name: 1, phone:1, _id: 0}).pretty()
{ "name" : "Max", "phone" : 42343424 }
{ "name" : "Manuel", "phone" : 99943424 }
{ "name" : "Ana", "phone" : 4342323 }
{ "name" : "Ana2", "phone" : "4342323" }



db.sales.insertMany([{volume: 100, target: 120},{volume: 89, target: 80},{volume: 200, target: 177}])


db.sales.find({$expr: {$gt: ["$volume", "$target"]}})

db.sales.find({
  $expr: {
    $gt: [{$cond: {
      if: {$gte: ["$volume", 190]},
      then: {$subtract: ["$volume", 10]},
      else: "$volume"
    }}, "$target"]
  }
})



> db.user.find({"hobbies.title": "Sports"}).pretty(
)
{
        "_id" : ObjectId("5e0208e50b531310837a99d6"),
        "name" : "Max",
        "hobbies" : [
                {
                        "title" : "Sports",
                        "friquency" : 3
                },
                {
                        "title" : "Cooking",
                        "friquency" : 6
                }
        ],
        "phone" : 42343424
}

# $size
MongoDB Enterprise > db.user.find({hobbies: {$size: 3}}).pretty()
{
        "_id" : ObjectId("5e02203e0b531310837a99dd"),
        "name" : "Chris",
        "hobbies" : [
                "Sports",
                "aaa",
                "bbb"
        ]
}


{ tags: { $all: [ "ssl" , "security" ] } }
is equivalent to:
{ $and: [ { tags: "ssl" }, { tags: "security" } ] }



{ _id: 1, results: [ 82, 85, 88 ] }
{ _id: 2, results: [ 75, 88, 89 ] }

db.scores.find(
   { results: { $elemMatch: { $gte: 80, $lt: 85 } } }
)

{ "_id" : 1, "results" : [ 82, 85, 88 ] }






> db.movies.find({genres: "Drama"}, {"genres": 1, _
id: 0})
{ "genres" : [ "Drama", "Action", "Crime" ] }
{ "genres" : [ "Drama", "Action", "Science-Fiction" ] }
{ "genres" : [ "Drama", "Crime", "Thriller" ] }


> db.movies.find({genres: "Drama"}, {"genres.$": 1,
 _id: 0})
{ "genres" : [ "Drama" ] }
{ "genres" : [ "Drama" ] }




db.persons.updateOne({_id: ObjectId("5e030ee4abdf96a7c967fbb2")}, {$set: {hobbies: [
  {title: "Sports", frequency: 5},
  {title: "Cooking", frequency: 3},
  {title: "Hiking", frequency: 1},
]}})


 > db.users.find({"hobbies.title": "Sports"}).pretty() # выведет все где есть hobbies.title = "sports"

> db.persons.updateMany({"hobbies.title": "Sports"}
, {$set: {isSporty: true}})


 > db.persons.updateOne({_id: ObjectId("5e030ee4abdf96a7c967fbb2")}, {$set: {age: 40, phone:323232}})

 > db.persons.updateOne({_id: ObjectId("5e030ee4abdf96a7c967fbb2")}, {$set: {age: 40, phone:323232}})

> db.persons.updateOne({name: "Manuel"}, {$inc: {age: 2}})
> db.persons.updateOne({name: "Manuel"}, {$inc: {age: 1}, $set: {isSporty: false}})

> db.persons.updateOne({name: "Manuel"}, {$inc: {age: 1}, $set: {age: 30}}) # произойдет конфликт


db.persons.updateOne({name: "Chris"}, {$max: {age: 35}}) # измениться только если новое значенее будет меньше прежнего


> db.persons.updateOne({name: "Chris"}, {$max: {age: 38}}) # change if newValue > oldValue

> db.persons.updateOne({name: "Chris"}, {$mul: {age: 1.5}}) # multiply


 > db.persons.updateMany({isSporty: true}, {$set: {phone: null}} )


# get rid field
> db.persons.updateMany({isSporty: true}, {$unset: {phone: ""}} )


# переименование поля ($rename)
db.persons.updateMany({}, {$rename: {age: "totalAge"}})


# $upsert - по умолчанию false 
db.persons.updateOne({name: "Maria"}, {$set: {age: 29, hobbies: [{title: "Good food", frequency: 3}], isSporty: true}}) # ничего не измениться так как нету пользователя с именем {name: "Maria"}

# {$upsert: true} при обновлении несуществующие появиться
db.persons.updateOne({name: "Maria"}, {$set: {age: 29, hobbies: [{title: "Good food", frequency: 3}], isSporty: true}}, {upsert: true})


db.persons.updateMany({hobbies: {$elemMatch: {title: "Sports", frequency: {$gte: 3}}}}, {$set: {"hobbies.$.hightFrequency": true}})

db.persons.updateMany({"hobbies.frequency": {$gt:2}}, {$set: {"hobbies.$.goodFrequency": true}})  # добавиться только в первый элемент массива


db.persons.updateMany({totalAge: {$gt: 30}}, {$inc: {"hobbies.frequency": -1}})

db.persons.updateMany({totalAge: {$gt: 30}}, {$inc: {"hobbies.$[].frequency": -1}})

"hobbies.$.frequency" # даст первый элемент
"hobbies.$[].frequency" # даст все элементы

db.persons.updateMany({"hobbies.frequency": {$gt: 2}}, {$set: {"hobbies.$[el].MoreThenTwoFrecuency": true}}, {arrayFilters: [{"el.frequency": {$gt: 2}}]})


# $push
db.persons.updateOne({name: "Maria"}, {$push: {hobbies: {title: "Sports", frequency: 2}}})

db.persons.updateOne({name: "Maria"}, {$push: {hobbies: {title: "Sports", frequency: 2}}})

#  $addToSet похож на $push не дублирует значения
db.persons.updateOne({name: "Maria"}, {$addToSet: {hobbies: {title: "Sports", frequency: 2}}})



# delete

> db.persons.deleteOne({name: "Chris"})

> db.persons.drop()
```



# index

```bash

> db.contacts.explain().find({"dob.age": {$gt: 60}})
> db.contacts.explain("executionStats").find({"dob.age": {$gt: 60}})

# create inde
> db.contacts.createIndex( { "dob.age": 1 } )


> db.contacts.dropIndex( { "dob.age": 1 } )
# index может заведоить время выполнения если возвращаем большую часть


# compount index
> db.contacts.createIndex({"dob.age": 1, gender: 1})


# иногда нам нужен индекс не только чтобы ускорить время выполнения, но и для сортировки



> db.contacts.getIndexes()


        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "contactData.contacts"
        },
        {
                "v" : 2,
                "key" : {
                        "dob.age" : 1,
                        "gender" : 1
                },
                "name" : "dob.age_1_gender_1",
                "ns" : "contactData.contacts"
        }
]

# config index
 > db.contacts.createIndex({email: 1}, {unique: true})
# {unique: true} - поможет избежать дублирования

> db.contacts.createIndex({"dob.age": 1}, {partialFilterExpression: {"dob.age": {$gt: 60}}})
> db.contacts.createIndex({"dob.age": 1}, {partialFilterExpression: {gender: "male"})
# индекс будет создан для dob.age если dob.age больше 60


db.users.insertMany([{name: "Max", email: "max@test.com"}, {name: "Manu"}])

# partial expression example
db.users.createIndex({email: 1}, {unique: true})
> db.users.insertOne({name: "Anna"}) # error
> db.users.dropIndex("email_1")

> db.users.createIndex({email: 1}, {unique: true, partialFilterExpression: {email: {$exists: true}}})



# каждый элемент будет удален спустя 20 секунд
> db.sessions.createIndex({created_at: 1}, {expireAfterSeconds: 20})

db.sessions.insert({name: "fdsfsd", created_at: new Date()})


db.contacts.insertOne({name: "Max", hobbies: ["Cooking", "Sports"], address: [{street: "Main Street"}, {street: "Second Street"}]})

> db.contacts.createIndex({hobbies: 1})
> db.contacts.explain("executionStats").find({hobbies: "Sports"})

"isMultiKey" : true,




# text index - db.collection.createIndex({field: "text"}) - разбивает field на ключевые слова

{
  "_id" : ObjectId("5e04a824918048639e95a52d"),
  "title" : "A book",
  "description" : "This is an awersome book about a young artist!"
}
{
  "_id" : ObjectId("5e04a824918048639e95a52e"),
  "title" : "Red T_Shirt is red and it's pretty awersome!"
}

> db.products.createIndex({description: "text"})

 > db.products.find({$text: {$search: "awersome"}}).pretty()
{
  "_id" : ObjectId("5e04a824918048639e95a52d"),
  "title" : "A book",
  "description" : "This is an awersome book about a young artist!"
}

# $text - то что мы до этого добавили в Index (description)

> db.products.find({$text: {$search: "\"awersome book\""}}).pretty()

# Creating Combined Text Indexes
db.products.createIndex({title: "text", description: "text"})
> db.products.find({$text: {$search: "ship"}})

#  найдет поле в котором есть awesome и нет t_shirt
> db.products.find({$text: {$search: "awesome -t_shirt"}}).prett
y()
{
        "_id" : ObjectId("5e04b326918048639e95a535"),
        "title" : "A book",
        "description" : "This is an awesome book about a young artist!"
}


#  language
> db.products.createIndex({title: "text", description: "text"}, {default_language: "english", weights: {title: 1, description: 10}})

# db.products.find({$text: {$search: "", $language: "russian"}})
db.products.find({$text: {$search: "ребята", language: "russian", $caseSensitive: false}})


> db.products.find({$text: {$search: "red"}}, {score: {$meta: "t
extScore"}}).pretty()
{
        "_id" : ObjectId("5e04b326918048639e95a536"),
        "title" : "Red T_Shirt is red and it's pretty awesome!",
        "score" : 1.0499999999999998
}




db.products.find({$text: {$search: "ребята", language: "none", $caseSensitive: false}}) 
# будет искать везде
```


# Geospecial data
```bash
> db.places.insertOne({
  name: "gostiniy dvor", 
  location: {type: "Point", coordinates: [59.996937, 29.766577]}
})

> db.places.createIndex({location: "2dsphere "})


# distance
> db.places.find(
   {
     location:
       { $near :
          {
            $geometry: { type: "Point",  coordinates: [ 59.991581, 29.777744 ] },
            $maxDistance: 5000,
            $minDistance: 0,
          }
       }
   }
)

{ "_id" : ObjectId("5e05a7411919d58bdd12650f"), "name" : "California Academy of Sciences", "location" : { "type" : "Point", "coordinates" : [ -122.4724356, 37.7672544 ] } }


# polygon
const home = [60.009193, 29.724969]
const baseRsu = [60.00651б, 29.743111]
const pyatorochka = [60.01015, 29.722061]
const kv16 = [60.002015,29.757518]
const dvor = [59.996937,29.766577]

p1 = [60.013173, 29.719622]
p2 = [60.009968, 29.729464]
p3 = [60.005343, 29.723141]
p4 = [60.007581, 29.712259]


db.places.find(
   {
     location: {
       $geoWithin: {
          $geometry: {
             type : "Polygon" ,
             coordinates: [ [ p1, p2, p3, p4, p1 ]]
          }
       }
     }
   }
)

# создадим новую колекцию включающую в себя локацию k-19
db.areas.insertOne({
  name: "k-19", 
  area: {type: "Polygon", coordinates: [[p1,p2,p3,p4,p1]]}
})
db.areas.createIndex({area: "2dsphere"})

# выяснить что адрес  находиться внутри локации
db.areas.find({
  area: {$geoIntersects: {
    $geometry: {type: "Point", coordinates: kv16}
  }}
}).pretty()


# Радиус

db.places.find({
    location: {$geoWithin: {$centerSphere: [ home, 3/6378.1 ]}
    }
})
# 1/6378.1 - 1km
# 1/3963.2 - 1ml


```


# Aggregation framework
```bash
db.persons.aggregate([
  {$match: {gender: "female"}},
  {$group: {_id: {state: "$location.state"}, totalPersons: {$sum: 1}}}
]).pretty()

db.persons.aggregate([
  {$match: {gender: "female"}},
  {$group: {_id: {state: "$location.state"}, totalPersons: {$sum: 1}}},
  {$sort: {totalPersons: -1}}
]).pretty()


db.persons.aggregate([
  {
    $project: {
      _id: 0,
      gender: 1,
      fullName: {
        $concat: [
          {$toUpper: "$name.first"},
          "!!!"
        ]
      }
    }
  }
]).pretty()



db.persons.aggregate([
    {
      $project: {
        _id: 0,
        gender: 1,
        fullName: {
          $concat: [
            { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
            {
              $substrCP: [
                '$name.first',
                1,
                { $subtract: [{ $strLenCP: '$name.first' }, 1] }
              ]
            },
            ' ',
            { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
            {
              $substrCP: [
                '$name.last',
                1,
                { $subtract: [{ $strLenCP: '$name.last' }, 1] }
              ]
            }
          ]
        }
      }
    }
  ]).pretty();


  db.persons.aggregate([
    {
      $project: {
        _id: 0,
        name: 1,
        email: 1,
        birthdate: { $convert: { input: '$dob.date', to: 'date' } },
        age: "$dob.age",
        location: {
          type: 'Point',
          coordinates: [
            {
              $convert: {
                input: '$location.coordinates.longitude',
                to: 'double',
                onError: 0.0,
                onNull: 0.0
              }
            },
            {
              $convert: {
                input: '$location.coordinates.latitude',
                to: 'double',
                onError: 0.0,
                onNull: 0.0
              }
            }
          ]
        }
      }
    },
    {
      $project: {
        gender: 1,
        email: 1,
        location: 1,
        birthdate: 1,
        age: 1,
        fullName: {
          $concat: [
            { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
            {
              $substrCP: [
                '$name.first',
                1,
                { $subtract: [{ $strLenCP: '$name.first' }, 1] }
              ]
            },
            ' ',
            { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
            {
              $substrCP: [
                '$name.last',
                1,
                { $subtract: [{ $strLenCP: '$name.last' }, 1] }
              ]
            }
          ]
        }
      }
    }
  ]).pretty();

```


```bash
db.persons.aggregate([
    {
      $project: {
        _id: 0,
        name: 1,
        email: 1,
        birthdate: { $convert: { input: '$dob.date', to: 'date' } },
        age: "$dob.age",

      }
    },
    { 
      $project: {
        gender: 1,
        fullName: {
          $concat: [
            { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
            {
              $substrCP: [
                '$name.first',
                1,
                { $subtract: [{ $strLenCP: '$name.first' }, 1] }
              ]
            },
            ' ',
            { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
            {
              $substrCP: [
                '$name.last',
                1,
                { $subtract: [{ $strLenCP: '$name.last' }, 1] }
              ]
            }
          ]
        }
      }
    }
  ]).pretty();






  db.persons.aggregate([
    {
      $project: {
        _id: 0,
        name: 1,
        email: 1,
        birthdate: { $convert: { input: '$dob.date', to: 'date' } },
        age: "$dob.age",
        location: {
          type: "Point",
          coordinates: [
            "$location.coordinates.longitude",
            "$location.coordinates.latitude",
          ]
        }

      }
    },
    {
      $project: {
        name: 1,
        email: 1,
        location: 1
      }
    }
  ]).pretty();




db.persons.aggregate([
    {
      $project: {
        _id: 0,
        name: 1,
        email: 1,
        birthdate: { $convert: { input: '$dob.date', to: 'date' } },
        age: "$dob.age",
        location: {
          type: "Point",
          coordinates: [
            {
              $convert: {
                input: "$location.coordinates.longitude",
                to: "double",
                onError: 0.0,
                onNull: 0.0,
              }
            },
            {
              $convert: {
                input: "$location.coordinates.latitude",
                to: "double",
                onError: 0.0,
                onNull: 0.0,
              }
            }
          ]
        }

      }
    },
    {
      $project: {
        name: 1,
        email: 1,
        location: 1
      }
    }
  ]).pretty();







  db.persons.aggregate([
    {
      $project: {
        _id: 0,
        name: 1,
        email: 1,
        age: "$dob.age",
        birthdate: {$convert: {input: "$dob.date", to: "date"}},
        location: {
          type: "Point",
          coordinates: [
            {
              $convert: {
                input: "$location.coordinates.longitude",
                to: "double",
                onError: 0.0,
                onNull: 0.0,
              }
            },
            {
              $convert: {
                input: "$location.coordinates.latitude",
                to: "double",
                onError: 0.0,
                onNull: 0.0,
              }
            }
          ]
        }

      }
    },
    {
      $project: {
        name: 1,
        email: 1,
        location: 1,
        birthdate: 1,
        age: 1
      }
    },
    {$group: {_id: {birthYear: {$isoWeekYear: "$birthdate"}}, numPersons: {$sum: 1}}}
  ]).pretty();


  db.friends.aggregate([
    {$unwind: "$hobbies"},
    {
      $group: {_id: {age: "$age"}, allHobies: {$addToSet: "$hobbies"}, num: {$sum: 1}}
    }
  ]).pretty()



db.friends.aggregate([
  { $project: { _id: 0, numScores: { $size: "$examScores" } } }
]).pretty();

db.friends.aggregate([
  { $project: { _id: 0, numScores: { $slice: ["$examScores", 1, 2] } } }
]).pretty();

db.friends.aggregate([
  { $project: { _id: 0, numScores: "$examScores" } }
]).pretty();



db.friends.aggregate([
    {
      $project: {
        _id: 0,
        scores: { $filter: { input: '$examScores', as: 'sc', cond: { $gt: ["$$sc.score", 60] } } }
      }
    }
  ]).pretty();



db.friends.aggregate([
  { $unwind: "$examScores" },
  { $project: { _id: 1, name: 1, age: 1, score: "$examScores.score" }},
  { $sort: { score: -1 } },
  { $group: { _id: "$_id", name: {$first: "$name"}, maxScore: { $max: "$score" }}},
  { $sort: { maxScore: -1 }}
]).pretty();

db.friends.aggregate([
  { $bucket: {groupBy: "$dob.age"}}
])


db.persons
  .aggregate([
    {
      $bucket: {
        groupBy: '$dob.age',
        boundaries: [18, 30, 40, 50, 60, 120],
        output: {
          numPersons: { $sum: 1 },
          averageAge: { $avg: '$dob.age' }
        }
      }
    }
  ])
  .pretty();

db.persons.aggregate([
    { $match: { gender: "male" } },
    { $project: { _id: 0, gender: 1, name: { $concat: ["$name.first", " ", "$name.last"] }, birthdate: { $toDate: "$dob.date" } } },
    { $sort: { birthdate: 1 } },
    { $skip: 10 },
    { $limit: 10 },
    { $out: "transformedPersons" }
  ]).pretty()


```

# numeric data
```bash 
Integers(int32) Long(int64) Doubles(64bit) Hight Precision Doumles (128bit)

By default 64-bit


32-bit
> db.persons.insertOne({age: NumberInt("29")})

> db.persons.insertOne({age: NumberInt("20000000000")}) // to mutch -1474836480

214748647 максимальное число которое мы можем ввести в NumberInt


> db.persons.insertOne({age: NumberLong("214748648")})
max value for NumberLong - 9223372036854775807

> db.persons.insertOne({age: NumberLong("9223372036854775807")})



db.companies.insertOne({valuetion: NumberLong("1232343434343439989")})

db.companies.updateOne({}, {$inc: {valuation: NumberLong("1")}})   // 
1232343434343440000 - incorrect



db.companies.insertOne({valuetion: NumberLong("1232343434343439989")})

> db.companies.updateOne({}, {$inc: {valuetion: NumberLo
ng("1")}}) // 1232343434343439990 - correct




wrong with double
0.3-0.1 = 0.1999999

db.science.insertOne({a: NumberDecimal("0.3"), b: NumberDecimal("0.1")})
0.3-0.1 = 0.20000000..
```