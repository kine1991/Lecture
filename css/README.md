# CCS

## Button


```bash
.btn{
    background-color: $color-primary;
    color: #fff;
    border: none;
    border-radius: 0;
    padding: 1.8rem 3rem;
    font-family: $font-display;
    font-size: 1.5rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .2s;

    &:hover{
        background-color: $color-primary-dark;

    }

    &:focus{
        outline: none;        
    }
}
```


```bash
.btn{
    &:link,
    &:visited{
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.5rem 4rem;
        display: inline-block;
        border-radius: 10rem;
        transition: all .2s;
        position: relative;
        /* z-index: -1; */
    }
    
    &:hover{
        transform: translateY(-0.3rem);
        box-shadow: 0 1rem 2rem rgba($color-black, .2);

        &::after{
            /* content: ""; */
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }
    
    &:active {
        transform: translateY(-0.1rem);
        box-shadow: 0 0.5rem 1rem rgba($color-black, .2);
    }
    
    &--white{
        background-color: $color-white;
        color: $color-gray-dark;

        &::after{
            background-color: $color-white;
        }
    }
    
    &::after{
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 10rem;
        position: absolute;
        top: 0;
        left: 0;
        transition: all .4s;
        z-index: -1;
        /* background-color: rebeccapurple; */
    }
    
    
    &--animated{
        animation: moveInBottom .5s ease-out .75s;
        animation-fill-mode: backwards;
    }
    
}
```



## Filter
```bash
filter: brightness(70%);
```
## Image
```bash
    background-image: linear-gradient(rgba($color-secondary, .93), rgba($color-secondary, .68)), url(../img/hero.jpeg);
    background-size: cover;
    background-position: center;
```



## ul li a
```bash
<ul class="nav">
<li class="nav__item"><a href="#" class="nav__link">Find your dream home</a></li>
<li class="nav__item"><a href="#" class="nav__link">Request proposal</a></li>
<li class="nav__item"><a href="#" class="nav__link">Download home planner</a></li>
<li class="nav__item"><a href="#" class="nav__link">Contact us</a></li>
<li class="nav__item"><a href="#" class="nav__link">Submit your property</a></li>
<li class="nav__item"><a href="#" class="nav__link">Come work with us!</a></li>
</ul>

.nav{ 
    list-style: none;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 2rem;
    align-items: center;

    &__link:link,
    &__link:visited{
        font-size: 1.4rem;
        color: #fff;
        text-decoration: none;
        font-family: $font-display;
        text-transform: uppercase;
        text-align: center;
        padding: 1.5rem;
        display: block;
        transition: all .2s;

    }

    &__link:hover,
    &__link:active {
        background-color: rgba(#fff, .05);
        transform: translateY(-3rem);
    }
}
```

## Shadow

```bash
    box-shadow: 0 2rem 5rem rgba(#000, .1);
```

## background-image

```bash
    background-image : linear-gradient(rgba($color-primary, .5), rgba($color-primary, .5)), url(../img/back.jpg);
```
## :before - надожение изображения

```bash
    /* Showcase */
#showcase {
    color: #fff;
    background: #333;
    padding: 2rem;
    position: relative;
  }
  
  #showcase:before {
    content: '';
    background: url('../img/featured.jpg') no-repeat center center/cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }
```


## grid 
    grid-template-columns: minmax(min-content, max-content); - ели хватает места то вся строка помещаеться, если нет то переносится


## overflow: hidden
    ```bash
        overflow: hidden; # // убирает скролбар
    ```


## Селекторы

    ```bash
        ul > li; # // выбирает всех прямых потомков A > B

        div p – элементы p, являющиеся потомками div.
        div > p – только непосредственные потомки
        Есть и два более редких:

        div ~ p – правые соседи: все p на том же уровне вложенности, которые идут после div.
        div + p – первый правый сосед: p на том же уровне вложенности, который идёт сразу после div (если есть).

        Псевдокласс :link применяется к ссылкам, которые еще не посещались пользователем, и задает для них стилевое оформление.
        Псевдокласс :visited применяется к ссылкам, уже посещённым пользователем, и задаёт для них стилевое оформление.

        .btn:link,
        .btn:visited{}  - применяеться чтобы цвет до посещения и после не менялся
    ```

    ```bash
        <input type="checkbox" class="toggler">
        <div class="hamburger"><div></div></div>

        .menu-wrap .toggler:checked + .hamburger > div {
            transform: rotate(135deg);
        }
    ```

## attributes
Селекторы атрибутов отбирают элементы по наличию атрибута или его значению.

__[attr]__
Обозначает элемент с атрибутом по имени attr.
__[attr=value]__
Обозначает элемент с именем атрибута attr и значением в точности сопадающим с value.
__[attr~=value]__
Обозначает элемент с именем атрибута attr значением которого является набор слов разделенных пробелами, одно из которых в точности равно value
__[attr|=value]__
Обозначает элемент с именем атрибута attr. Его значение при этом может быть или в точности равно "value" или может начинаться с "value" со сразу же следующим "-" (U+002D). Это может быть использовано когда язык описывается с подкодом.
__[attr^=value]__
Обозначает элемент с именем атрибута attr значение которого начинается с "value"
__[attr$=value]__
Обозначает элемент с именем атрибута attr чье значение заканчивается на "value"
__[attr*=value]__
Обозначает элемент с именем атрибута attr чье значение содержит по крайней мере одно вхождение строки "value" как подстроки.



# a

```bash
    text-decoration: [ blink || line-through || overline || underline ] | none | inherit */
```

#margin, padding
```bash
    padding: 15px 40px;  #// 15px - top botton, 40px - left right.
    padding: 15px 40px 60px 1px;  #// 15px - top, 40px - right, 60px - botton, 1px - left.  по часовой
```


# Animations

```bash
@keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }

    80% {
        transform: translateX(20px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(100px);
    }

    80% {
        transform: translateX(-10px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
```

```bash
linear	Линейная функция, анимация происходит равномерно на протяжении всего времени, без колебаний в скорости.
функции Безье
ease	Функция по умолчанию, анимация начинается медленно, разгоняется быстро и замедляется в конце. Соответствует cubic-bezier(0.25,0.1,0.25,1).
ease-in	Анимация начинается медленно, а затем плавно ускоряется в конце. Соответствует cubic-bezier(0.42,0,1,1).
ease-out	Анимация начинается быстро и плавно замедляется в конце. Соответствует cubic-bezier(0,0,0.58,1).
ease-in-out	Анимация медленно начинается и медленно заканчивается. Соответствует cubic-bezier(0.42,0,0.58,1).
cubic-bezier(x1, y1, x2, y2)	Позволяет вручную установить значения от 0 до 1. На этом сайте вы сможете построить любую траекторию скорости изменения анимации.


animation-fill-mode: backwards;
backwards - Элемент сохранит стиль первого ключевого кадра на протяжении периода animation-delay.
```


# box-shadow

```bash 
    /* offset-x | offset-y | color */
    box-shadow: 60px -16px teal;

    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 10px 5px 5px black;

    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    /* inset | offset-x | offset-y | color */
    box-shadow: inset 5em 1em gold;

    /* Any number of shadows, separated by commas */
    box-shadow: 3px 3px red, -1em 0 0.4em olive;
```

#border-box

![Alt text](./images/border-box.png?raw=true "Title")



## clip-path

```bash
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
```


## background-clip

```bash
    .heading-secondary {
        font-size: 3.5rem;
        text-transform: uppercase;
        font-weight: 700;
        display: inline-block;
        background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
        -webkit-background-clip: text;
        color: transparent;
        letter-spacing: .2rem;
        transition: all .2s;

        &:hover {
            transform: skewY(2deg) skewX(15deg) scale(1.1);
            text-shadow: .5rem 1rem 2rem rgba($color-black, .2);
        }
    }
```




[Полный список опций](https://google.com)