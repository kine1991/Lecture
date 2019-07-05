

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