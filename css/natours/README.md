

Псевдокласс :link применяется к ссылкам, которые еще не посещались пользователем, и задает для них стилевое оформление.

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

.logo-box{
    position: absolute;
    top: 40px;
    left: 40px;
}

.logo{
    height: 35px;
}

.heading-primary{
    color: #fff;
    text-transform: uppercase;

    backface-visibility: hidden; /* чтобы небыло встряхивания при анимации */
    margin-bottom: 60px;
}

.heading-primary-main{
    display: block;
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 35px;

    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    /* animation-iteration-count: 3; */
    /* animation-delay: 3s; */
}
.heading-primary-sub{
    display: block;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 15px;

    animation: moveInRight;
    animation-duration: 2s;
    animation-timing-function: ease-in;
}

.text-box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

```

##button
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
