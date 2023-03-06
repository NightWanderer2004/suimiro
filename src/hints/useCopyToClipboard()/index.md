---
title: Copy to clipboard
date: 2023-03-06
tag: hint
---

### {{title}}

Today we talk about creating own hook called **_UseCopyToClipboard_** in ReactJS. It's a hook that allows you to copy text to clipboard. So let's start:

#### For what?

I found this very useful when you have a code section and you want to copy it to clipboard. It's usually a small button in right corner of code section.

#### Coding

```jsx
import { useState } from "react";

const useCopyToClipboard = () => {
   const [copiedText, setCopiedText] = useState(null);

   const copy = async (text) => {
      if (!navigator || !navigator.clipboard) {
         console.warn("Clipboard not supported");
         return false;
      }

      try {
         await navigator.clipboard.writeText(text);
         setCopiedText(text);
         return true;
      } catch (error) {
         console.warn("Copy failed", error);
         setCopiedText(null);
         return false;
      }
   };

   return [copiedText, copy];
};

export default useCopyToClipboard;
```

**Note:** This hook is not supported in IE11 and below. Because of _**navigator.clipboard**_ missing. If you want to support IE11, you can use [clipboard.js](https://clipboardjs.com/).

#### Usage

```jsx
import { useCopyToClipboard } from ".../.../...";

export default function Component() {
   const [value, copy] = useCopyToClipboard();

   return (
      <>
         <div>
            <button onClick={() => copy("Hello")}>Hello</button>
            <button onClick={() => copy("React")}>React</button>
            <button onClick={() => copy("JavaScript")}>JavaScript</button>
         </div>
         <p>Copied value: {value ? "Nothing is copied yet!" : ""}</p>
      </>
   );
}
```

Here we use _**copy**_ function to copy text to clipboard. And _**value**_ is the text that is copied.

#### Conclusion

Using the _**useCopyToClipboard**_ hook improving the user experience to make "fast-copy". I hope you will find it useful too. Give it a try in your own projects and see how it works for you!
