---
title: "true ? < Ok /> : < Bad />"
date: 2022-06-14
tag: hint
---

### {{title}}

Let's imagine that we have a function that makes a request to the server. Obviously, the data will not load immediately, so we need to create 2 components:

-  the first is a list with data
-  the second is a loader or placeholder.

When app starts, we need to show a loader, and when the data is loaded, we need to show a list.

#### How can we do it, but not effectively

```js
if (loading) {
   return <Loader />;
} else {
   return <List />;
}
```

A lot of code for such a simple task. But what if we can do it in one line?

#### Short and effective

```js
loading ? <Loader /> : <List />;
```

#### Conclusion

Always try to use ternary operators in situations like this. Another option is (if else), where you can not put curly braces if the body is in 1 line.

But every time you do it, think about, does it make sense to do so? Will the code readability worsen?
