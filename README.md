# express-vue-boilerplate

> A full-featured BrowserSync + Browserify + vueify setup with hot-reload, linting & unit testing.

### Usage

This is a project template for vue-cli.

```bash
$ npm install -g vue-cli
$ vue init daliborgogic/express-vue-boilerplate foo
$ cd foo
$ npm i
$ npm run dev
```

### What's Included

`npm run dev`: BrowserSync + Browserify + vueify with proper config for source map & hot-reload.

`npm run lint`: Lint JavaScript and *.vue files with ESLint.

For more information see the [docs for vueify](https://github.com/vuejs/vueify).

###Customizations

You will likely need to do some tuning to suit your own needs:

Install additional libraries that you need, e.g. vue-router, vue-resource, vuex, etc...

Use your preferred .eslintrc config. Don't forget to keep the plugin field so that ESLint can lint *.vue files.

Add your preferred CSS pre-processor, for example:

```bash
npm i -D stylus
```

Then you can do:

```vue
<style lang="stylus">
  /* write with style! */
</style>
```

Fork It And Make Your Own
You can fork this repo to create your own boilerplate, and use it with vue-cli:

```bash
vue init username/repo foo
```