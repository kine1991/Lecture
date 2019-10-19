
##binging
```console
    <img [src]="img" alt="">
```


```console
    inputValue = ''
    onInput(event: KeyboardEvent){
        this.inputValue = (<HTMLInputElement>event.target).value
    }

    onClick(){
        console.log('click')
    }

    onBlur(str: string){
        this.inputValue = str
        console.log(str)
    }

    <input type="text" (keyup.enter)="onInput($event)" (blur)="onBlur(MyInput.value)" #MyInput >
    <p>{{inputValue}}</p>

    <button (click)="onClick()">Click</button>
```

2 way binging
```console
    // импортироват
    import { FormsModule } from '@angular/forms';

    <input type="text" [(ngModel)]="title">
    {{title}}

    title = 'angular-basics';
```

    <div *ngIf="toggle; else blueP" class="red">xxxx.</div> // документ удаляеться из шаблона

    <ng-template #blueP>
        <div class="blue">Lorem idivsum dolor sit, amet consectetur adipisicing elit. Harum recusandae possimus labore dolorem eius amet cumque provident totam, nam quos vel unde rem corrupti similique atque voluptas autem voluptates necessitatibus.</div>
    </ng-template>


        <li *ngFor="let n of arr; let idx = index">{{n}} : {{idx+1}}</li>


@Pipe({
  name: 'filter',
  pure: false // чтобы при добавлении сразу мог фильторовать
})

@Injectable({
  providedIn: 'root'
}) // если добавлен @Injectable то мы можем инжектировать в вервис другие сервисы