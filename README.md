# **Suimiro**

## **[Link - Suimiro](https://suimiro.netlify.app/)**

### Starting the development server - **`npm run dev`**

## How to add a post/tip?

-  clone the repository
-  create a new branch
-  in the posts or hints folder, add a new folder and name it
-  in the folder of your post/tip create a file [index.md](http://index.md/)
-  (if you want to add a post) at the beginning of the [index.md](http://index.md/) file add:
   ```
   ---
   title: POST TITLE
   preview: POST PREVIEW (text)
   date: DATE (format: YYYY-MM-DD)
   author: AUTHOR
   tag: post
   ---

   ```
-  (if you want to add a tip) at the beginning of the [index.md](http://index.md/) file add:
   ```
   ---
   title: TIP TITLE
   date: DATE (format: YYYY-MM-DD)
   tag: hint
   ---

   ```
-  do a spell check:
   ```
   npm run spell

   ```
-  make a PR (pull request)

---

-  All code style rules are described in the configs:
-  **[.editorconfig]**
-  **[.prettierrc]**
-  The site is made on the **[eleventy](https://www.11ty.dev/)** engine
-  For CSS we use **[tailwindCSS](https://tailwindcss.com/)**
-  We give class names in the **camelCase** style

---

### Links to extensions for vsCode:

-  **[editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)**;
-  **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**;
-  Tips for **[TailwindCSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)**;
-  Syntax highlighting for **[Nunjucks](https://marketplace.visualstudio.com/items?itemName=ronnidc.nunjucks)**;
