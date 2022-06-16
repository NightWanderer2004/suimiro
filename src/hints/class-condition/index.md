---
title: Класс по условию
tag: hint
---

### {{title}}

Все мы знаем, что у одного элемента может быть несколько классов, это очевидно

```
<button class="btn boxItem">BTN</button>
```

Но если нам нужно добавлять класс 'active' по нажатию, то как быть?

#### Простой JS

Добавить через classList.add('active') или же через classList.toggle('active'):

```
const btn = document.querySelector('.btn')

btn.onclick = e => e.target.classList.add('active')
```

#### Как быть в React?

Если с React использовать способ, который описан выше, то будет много лишнего кода:

1. Создать ref элемента кнопки
2. После этого брать ref и получать атрибут className
3. Менять состояние className

Я считаю, что это сложно, поэтому показываю хороший способ:

```
const [isBtnActive, setIsBtnActive] = useState(false)
const toggleBtn = () => setIsBtnActive(!isBtnActive)

<button className={`btn boxItem ${isBtnActive ? 'active' : ''}` onClick=(toggleBtn)}>
```

Уже поняли?

Я использовал template strings для того, чтобы создать условие прямо внутри атрибута className

То есть я избежал лишних срок кода на получение ref и так далее

По сути в обычном JS тоже можно провернуть такой способ, но как бы это странно не звучало, работать он не будет, пока не будет вызван перерендер элемента
