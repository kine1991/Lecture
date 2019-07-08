

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