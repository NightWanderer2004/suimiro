---
title: Editorconfig and Prettier, what are they?
preview: Let's discuss why you should use text formatting utilities and how it helps in collaborative development?
date: 2022-06-18
author: Eduard Povierin
tag: post
---

### {{title}}

Editorconfig and Prettier - it's utilities that help you to format text.

#### Editorconfig

Unlike Prettier, editorconfig is more suitable for plain text, and Prettier was created specifically for code formatting.

File .editorconfig can look like this:

```
root = true
trim_trailing_whitespace = true

[*]
indent_style = space
indent_size = 3
end_of_line = lf
insert_final_newline = true

[package.json]
indent_style = space
indent_size = 2
```

This tool allows you to standardize the style of text (tab size, removing empty spaces, etc.). You can also specify standards for individual file types by specifying the file type in square brackets in the config.

Full documentation can be found on the [editorconfig](https://editorconfig.org/)

#### Prettier

Maybe the best plugin for the editor in terms of code formatting (HTML, CSS, JS, JSON, MD...)

If you use Visual Studio Code and have Prettier installed, then in the editor settings there will be a tab with Prettier settings. Personally, I like it when there are no ";" in JS, with Prettier I can configure my editor so that when I save the file, formatting of the file will occur according to the rules that I specified.

The same as a editorconfig, Prettier can be configured through the config file .prettierrc:

```
{
   "overrides": [
      {
         "files": "*.js",
         "options": {
            "semi": false,
            "singleQuote": true,
            "arrowParens": "avoid"
         }
      }
   ]
}
```

Here is a full list of [options](https://prettier.io/)

#### Сonclusion

I love this ability to configure through the config right in the project.

When projects are developed by more than one person, it would be nice to have such configs so that all members of the team have the same formatting standards. Use these tools and your project will be clean.😉
