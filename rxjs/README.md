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