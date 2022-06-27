---
title: CSS модули
date: 2022-06-27
tag: hint
---

### {{title}}

Давайте посмотрим как разбивать стили на модули. Покажу как я делаю это в React и ванильном CSS

#### Ванильный CSS

Должна быть папка _styles_, в которой будут все CSS файлы. Есть _index.css_, внутри он может выглядеть так:

```
@import "./colors.css";
@import "./settings.css";
@import "./navbar.css";
@import "./page.css";
@import "./feed.css";
@import "./content.css";
@import "./darktheme.css";
@import "./footer.css";
@import "./categoryPage.css";
@import "./article.css";
```

Здесь происходит импорт всех _.css_ файлов. То есть, нужно просто создать файл _.css_, в котором как и обычно пишутся стили, а потом просто в _index.css_ сделать импорт, ВСЁ

#### React

В React можно использовать файлы с расширением _.module.css_ и импортировать их уже в комнонентах:

```
import React from 'react'
import s from '../../styles/homePage/hero.module.css'

const Hero = () => {
   return (
      <div className={s.main}>
         <div className={s.tagline}>
            <span>At Tokners we are</span>
            <h1>
               Reimagining social <br />
               media through the <br />
               power of the blockchain.
            </h1>
            <p>
               We are creating social media 3.0 with influencers, celebrities and creators being
               able to launch their own digital currency by simply creating a profile with media
               content posted as Non fungible Tokens that can be owned and traded on the Tknrs
               network
            </p>
            <a href='#about'>Learn More</a>
         </div>
         <img src='/assets/img/home/main-img.png' loading='lazy' alt='' />
      </div>
   )
}

export default Hero
```

Вот обычный код React компоненты, _'s'_ в _import s from '...'_ это как переменная (может быть любое название), которую потом нужно будет указывать в _className_ элемента

```
className={s.tagline}
```

tagline это название класса. CSS будет выглядеть так:

```
.main .tagline {
   display: flex;
   flex-direction: column;
   ...
}
```

#### Итог

Ничего сложного в этих двух вариантах нет. В CSS нужно просто сделать _@import_, а в React _import s from '...'_

Плюс в React финальная версия названия класса будет примерно такой: _hero_tagline\_\_K9D64_, React делает так, чтобы этот класс всегда был уникальным и не перемешивал стили с другими классами
