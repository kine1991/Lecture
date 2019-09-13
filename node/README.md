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
