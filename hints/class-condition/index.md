---
title: Classes by condition
date: 2022-06-19
tag: hint
---

### {{title}}

All we know that one element can have multiple classes, this is obvious

```js
<button class="btn boxItem">BTN</button>
```

But if we need to add a class 'active' by clicking, then what?

#### Vanilla JS

Adding class with classList.add('active') or classList.toggle('active'):

```js
const btn = document.querySelector(".btn");

btn.onclick = (e) => e.target.classList.add("active");
```

#### What about React?

If you try to use the same methon upper in React, you will get a lot of useless code:

1. Create ref of button element
2. After that get ref and get attribute className
3. Change className state

I think it's hard... So I show you a good way:

```js
const [isBtnActive, setIsBtnActive] = useState(false)
const toggleBtn = () => setIsBtnActive(!isBtnActive)

<button className={`btn boxItem ${isBtnActive ? 'active' : ''}`} onClick=(toggleBtn)}>
```

I just used template strings to create a condition right inside the className attribute

Like I avoided unnecessary code to get ref and etc, you know.

#### Conclusion

In Vanilla JS you also can use React version, but it will not work until you call a re-render of the element.
