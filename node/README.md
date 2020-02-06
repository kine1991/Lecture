# node JS

terminal comand
control + d => выйти
comand + k => очистить


```javascript
const fs = require('fs')
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textOut)
```


<!-- console.log(url.parse('https://www.youtube.com/watch?v=X6IBdwSN-ck, true')) -->

npm outdated

## npm
Разница между тильдой(~) и крышкой(^) в package.json
Опубликовано в NodeJS • 19 октября 2017 г. • 1 мин. на чтение
Тильда(~) подбирает последнюю минорную версию пакета (последнюю цифру), например ~7.3.3 найдет последнюю 7.3.x, допустим 7.3.12 но не 7.4.0.

Крышка(^) подбирает последнюю мажорную версию пакета (среднюю цифру), например ^7.3.3 найдет последнюю 7.x.x, допустим 7.4.0 но не 8.0.0.



DNS - domain name service   127.0.0.1 => www.rot.ru
https:// - Protocol
www.youtube.com - Domain name
playlist?list=WL - Resource

https://216.58.211.206:422
216.58.211.206 - IP adress 
422 - port

TCP/IP sockeck connection  =>   client <-> server


##event loop

```javascript
const fs = require("fs");

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("----------------");
});

console.log("Hello from the top-level code");


// => Hello from the top-level code
// => Timer 1 finished
// => Immediate 1 finished
// => I/O finished
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



