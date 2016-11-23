# webpack-example-workflow
Simple workflow for webpack with scss/pug/js/vue integration.

### JS
All modules are packaged into single bundle.
Supports ES2015 javascript features using Babel transpilation.

### Pug
Compiled to HTML and automatically has the generated JS bundle injected at the end of the body.

### SCSS
Compiled to CSS and automatically injected into the DOM head at run-time via a package JS module.

### Vue
Packaged into the bundle and uses standalone-distribution version (as opposed to npm/yarn native run-time only version)

## Use & Build

````
git clone https://github.com/varbrad/webpack-example-workflow
cd webpack-example-workflow
npm install
````

You can then generate production build files using `npm run build` or create a local hot-reload enabled server (via [webpack-dev-server](https://github.com/webpack/webpack-dev-server)) using `npm run dev-server`
