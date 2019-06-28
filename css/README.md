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

[Полный список опций](https://google.com)