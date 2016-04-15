# AltspaceVR/altspace-webpack-starter

Starter template for building Altspace apps with es6 and Webpack. The code is bundled up using [Webpack](https://webpack.github.io/) and a dev server is provided for previewing the app with live reload and [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html).

## Local Development

If you don't already have it installed, install [npm](https://www.npmjs.com/) then run the following to spin it up:

```
npm install
npm start
```

This will start a development server on port 8080. Changes to any of the javascript or css files will automatically be reflected (most times without losing application state).

## Distribution

To build for distribution on Mac or Linux run:

```
npm run build
```

If you are building on a windows run:

```
npm run build_win
```

This will create a production version of bundle.js ready for deployment with index.html

## Notes

When developing you may see the warning:

```
WARNING in ./~/altspace/dist/altspace.js
Critical dependencies:
2777:113-120 This seems to be a pre-built javascript file. Though this is possible, it's not recommended. Try to require the original source to get better results.
 @ ./~/altspace/dist/altspace.js 2777:113-120
```

This is expected due to the way Altspace is published to npm and will be fixed in the future.
