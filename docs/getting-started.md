# Getting Started Page

### Project Setup

```
npm init -y
npm i -D vitepress vue

"scripts": {
  "docs:dev": "vitepress dev docs",
  "docs:build": "vitepress build docs",
  "docs:serve": "vitepress serve docs"
}

mkdir docs 
cd docs
touch index.md
```

### Adding Navigation
Create `docs/.vitepress/config.js`, set `nav` for top-level navigation and `sidebar` for Sidebar.

### Custom Containers
There is built-in support for custom containers when you want to call out something to a reader.

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### Code Blocks

```js
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### Deploying
Run the command `npm run docs:build`, and the rendered files will default go to your project page under `dist`.
