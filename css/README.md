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

## -webkit-background-clip   typography

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

## background-blend-mode
Свойство background-blend-mode описывает то, как фоновое изображение элемента должно накладываться на фоны других элементов.

```bash
#Режимы наложения:
    background-blend-mode:  soft-light;
    background-blend-mode:  screen;
    background-blend-mode:  selected;
    background-blend-mode:  darken;
    background-blend-mode:  lighten;
    background-blend-mode:  dodge;
    background-blend-mode:  burn;
    background-blend-mode:  hard-light;
    background-blend-mode:  difference;
    background-blend-mode:  exclusion;
    background-blend-mode:  hue;
    background-blend-mode:  saturation;
    background-blend-mode:  color;
    background-blend-mode:  luminosity;
```

```bash
# Пример:
    &__picture{
        height: 20rem;
        background-size: cover;
        background-blend-mode:  soft-light;
        clip-path: 
        // background-blend-mode:  screen;
        // background-blend-mode:  selected;
        // background-blend-mode:  darken;
        // background-blend-mode:  lighten;
        // background-blend-mode:  dodge;
        // background-blend-mode:  burn;
        // background-blend-mode:  hard-light;
        // background-blend-mode:  difference;
        // background-blend-mode:  exclusion;
        // background-blend-mode:  hue;
        // background-blend-mode:  saturation;
        // background-blend-mode:  color;
        // background-blend-mode:  luminosity;

        &--1{
          background-image: linear-gradient(to right, rgba($color-danger, .8), rgba($color-primary, 0.8)), url(../image/nhl16.jpg);
        //   background-image: linear-gradient(to right, $color-danger, $color-primary), url(../image/nhl16.jpg);
        }
        &--2{
            background-image: linear-gradient(to right, $color-white, $color-black), url(../image/nhl17.jpg);
        }
        &--3{
            background-image: linear-gradient(to right, $color-black, $color-primary), url(../image/nhl19.jpeg);
        }
    }

```

## перенос на следущую строку box-decoration-break

![Alt text](./images/box-decoration-break-before.png?raw=true "Title")


```bash
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
```

![Alt text](./images/box-decoration-break-after.png?raw=true "Title")










## card with rotete animation

```bash
    <div class="card-custom">
        <div class="card-custom__side card-custom__side--front">
            <div class="card-custom__picture card-custom__picture--2"></div>
            <h4 class="card-custom__heading">
                <span class="card-custom__heading-span card-custom__heading-span--2">nhl 17 super game final</span>
            </h4>
            <div class="card-custom__details">
                <ul>
                    <li>Cheap</li>
                    <li>Hit</li>
                    <li>hight riting</li>
                </ul>
            </div>
        </div>
        <div class="card-custom__side card-custom__side--back card-custom__side--back-2">
            <div class="card-custom__cta">
                <div class="card-custom__box">
                    <div class="card-custom__box-name">nhl 17</div>
                    <div class="card-custom__box-price">$200</div>
                    <a href="#" class="btn-rounded btn-rounded--white">Buy</a>
                </div>
            </div>
        </div>
    </div>
```

```bash
.card-custom{ 
    perspective: 200rem;
    -moz-perspective: 200rem;
    height: 40rem;
    position: relative;

    
    &__side{
        height: 40rem;
        transition: all 3s;
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        border-radius: 3px;
        box-shadow: 0 2rem 5rem rgba(#000, .1);
        
        &--front{
            background: $color-grey-100;
        }
        &--back{
            transform: rotateY(180deg);

            &-1{
                background-image: linear-gradient(to bottom right, $color-primary, $color-danger);
            }
            &-2{
                background-image: linear-gradient(to bottom right, $color-black, $color-white);
            }
            &-3{
                background-image: linear-gradient(to bottom right, $color-black, $color-primary);
            }
        }
    }

    &:hover &__side--front{
        transform: rotateY(180deg);
    }
    &:hover &__side--back{
        transform: rotateY(0);
    }

    &__picture{
        height: 20rem;
        background-size: cover;
        background-blend-mode:  soft-light;
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        margin-bottom: 1.5rem;
        // background-blend-mode:  screen;
        // background-blend-mode:  selected;
        // background-blend-mode:  darken;
        // background-blend-mode:  lighten;
        // background-blend-mode:  dodge;
        // background-blend-mode:  burn;
        // background-blend-mode:  hard-light;
        // background-blend-mode:  difference;
        // background-blend-mode:  exclusion;
        // background-blend-mode:  hue;
        // background-blend-mode:  saturation;
        // background-blend-mode:  color;
        // background-blend-mode:  luminosity;

        &--1{
          background-image: linear-gradient(to right, rgba($color-danger, .8), rgba($color-primary, 0.8)), url(../image/nhl16.jpg);
        //   background-image: linear-gradient(to right, $color-danger, $color-primary), url(../image/nhl16.jpg);
        }
        &--2{
            background-image: linear-gradient(to right, $color-white, $color-black), url(../image/nhl17.jpg);
        }
        &--3{
            background-image: linear-gradient(to right, $color-black, $color-primary), url(../image/nhl19.jpeg);
        }
    }

    &__details{
        font-size: 2rem;
        padding: 0 3rem;
        ul{
            list-style: none;
            width: 80%;
            margin: 0 auto;
            
            li{
                text-align: center;
                padding: 1rem 1.5rem;
                &:not(:last-child){
                    border-bottom: 1px solid $color-grey-400;
                }
            }
        }
    }

    &__cta{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: $color-white;   
        // font-weight: 100; 
    }

    &__box{

    }

    &__box-name{
        font-size: 2rem;
    }
    &__box-price{
        font-size: 7rem;
        font-weight: 100;
    }

    &__heading{
        position: absolute;
        top: 12rem;
        right: 2rem;
        width: 60%;
        color: $color-white;
        text-align: right;

        &-span{
            padding: 1rem 1.5rem;
            font-size: 2rem;
            font-weight: 100;
            text-transform: uppercase;

            border-radius: .5rem;

            -webkit-box-decoration-break: clone;
            box-decoration-break: clone;

            &--1{
                background-image: linear-gradient(to right, rgba($color-danger, .7), rgba($color-primary, .7));
            }
            &--2{
                background-image: linear-gradient(to right, rgba($color-white, .7), rgba($color-black, .7));
            }
            &--3{
                background-image: linear-gradient(to right, rgba($color-black, .7), rgba($color-primary, .7));
            }
        }
    }
}

```


![Alt text](./images/card-rotate.png?raw=true "Title")




[Полный список опций](https://google.com)