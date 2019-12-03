# rxjs

debounceTime(1000) - ждет 1000мс



```javascript
    import { of } from 'rxjs';
    import { distinctUntilChanged } from 'rxjs/operators';

    of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4).pipe(
        distinctUntilChanged(),
    ).subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4

    // distinctUntilChanged() - не позволяет отправлять один и тотже запрос последовательно
```

switchMap - позволяет переключиться на другой стрим

mergeMap(items => items) - делает массив плоским [{obj...}, {obj...}] => {obj...}, {obj...}

catchError - позволяет ловить ошибки 

```javascript
    const stream$ = of('Hello', 'World',4)

    stream$.subscribe(val => {
    console.log('Value: ', val)
    })
```

```javascript
const sub = interval(500).subscribe(v => console.log(v))

setTimeout(()=> {
    sub.unsubscribe()
}, 4000)
```

```javascript
timer(2000).subscribe(val => console.log(val)) // через 2 с выведет значение 

```

```javascript
range(42, 10).subscribe(val => console.log(val))  //  выведет 10 эл 42...52

```
