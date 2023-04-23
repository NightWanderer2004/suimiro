---
title: Vibration in browser
date: 2023-04-11
tag: hint
---

### {{title}}

#### Why is it cool?

Your mobile OS has a vibrations and it makes a better UX. But why mobile browsers doen't have it??

**\*Prehistory** With the increasing use of mobile devices, web developers are constantly seeking ways to enhance the UX. Most demanded is vibration in mobile browsers.

Let's discuss how it works and how it can be used in mobile web development.

#### Cases for using

The most popular use cases for vibration are providing _**feedback for button presses**_ and _**alerting new notifications**_.

#### How to implement?

To trigger a vibration, simply call the _**navigator.vibrate([500, 250, 500])**_ function with an array of numbers representing the duration of each vibration and pause. This example vibrate for 0.5s, pause for a 0.25s, and then vibrate for another 0.5s...

Here is a [link](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate) to docs. And here is a live test [page](https://googlechrome.github.io/samples/vibration/)

#### Conclusion

For now, it's in the very early stages of development and doesn't support every browser. For example, Safari is not capable of running it 😒. I hope that in future updates, they will add support for it. However, I think that it's a really good way to improve UX and have some fun 😁. Let's wait and see.
