---
title: CSS modules
date: 2022-06-27
tag: hint
---

### {{title}}

Let's see how can we split styles into modules. I will show you how I do it in React and vanilla CSS.

#### Vanilla CSS

Needs to be a folder called **_styles_**, in which all CSS files will be. There is **_index.css_**, inside it can look like this:

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

Here we import all _.css_ files. So, you just need to create a **_.css_** file in which you write styles as usual, and then just import it in **_index.css_**, THAT'S IT.

#### React

In React you can use **_.module.css_** files and import them already in components:

```
import React from 'react'
import s from '../../styles/homePage/hero.module.css'

const Hero = () => {
   return (
      <div className={s.main}>
         <div className={s.tagline}>
            <h1>
               Hello :)
            </h1>
            <p>Suimiro blog</p>
         </div>
      </div>
   )
}

export default Hero
```

It's basic React component. **_'s'_** in **_import s from '...'_** is just a variable (can be any name), which you will then need to specify in the _className_ element.

```
className={s.tagline}
```

tagline it's class name in _hero.module.css_.

```
.main .tagline {
   display: flex;
   flex-direction: column;
   ...
}
```

#### Conclusion

Nothing complicated in these two options. In CSS you just need to do **_@import_**, and in React **_import s from '...'_**.

**Note:** In React final version of class name will be something like this: **_hero_tagline\_\_K9D64_**, React makes it so that this class is always unique and does not mix styles with other classes.
