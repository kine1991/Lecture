## FONDATION

# Execution context

![Alt text](./image/code-execution-context.png?raw=true "Title")

![Alt text](./image/global-execution-context2.png?raw=true "Title")


* Когда код запущен в js-engine  global execution context создан, когда запускаем функцию добавляеться новый execution context


# Lexical enviroment 

* Lexical enviroment - где код написан


![Alt text](./image/code-lexical-enviroment.png?raw=true "Title")

функция a() - лексически в findMyName окружении

<strong>lexical scope</strong> - где функция была определена. Все в js lexical scope, кроме <strong>this</strong>

<strong>dinamic scope</strong> - где функция была вызвана. В js это   <strong>this</strong>

Определение : 

![Alt text](./image/lexical-dinamic-scope-determination.png "Title")


```bash
    function(){} - dinamic scope
    () => {} - lexical scope
```

 



