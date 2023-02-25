# **Simple Блог**

## **[Ссылка - Suimiro](https://simple-w-blog.netlify.app/)**

### Старт сервера для разработки - **`npm run dev`**

## Как добавить пост/совет?

-  клонировать репозиторий
-  создать новую ветку
-  в папку posts или hints добавить папку и дать название
-  в папке вашего поста/совета создать файл index.md
-  (если вы хотите добавить пост)в начале файла index.md добавить:

   ```
   ---
   title: ЗАГОЛОВОК ПОСТА
   preview: ПРЕВЬЮ ПОСТА (текст)
   date: ДАТА (формат: YYYY-MM-DD)
   author: АВТОР
   tag: post
   ---
   ```

-  (если вы хотите добавить совет) в начале файла index.md добавить:

   ```
   ---
   title: ЗАГОЛОВОК СОВЕТА
   date: ДАТА (формат: YYYY-MM-DD)
   tag: hint
   ---
   ```

-  сделать проверку орфографии:
   ```
   npm run spell
   ```
-  сделать PR (pull request)

---

-Все правила стиля кода описаны в конфигах:

-  **[.editorconfig]**
-  **[.prettierrc]**

-Сайт сделан на движке **[eleventy](https://www.11ty.dev/)**

-Для CSS используем **[tailwindCSS](https://tailwindcss.com/)**

-Имена классам даём в стиле **camelCase**

---

### Ссылки на расширения для vsCode:

-  **[editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)**;

-  **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**;

-  Подсказки для **[TailwindCSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)**;

-  Подсветка синтаксиса **[Nunjucks](https://marketplace.visualstudio.com/items?itemName=ronnidc.nunjucks)**;
