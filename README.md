# GALLERY DEMO


This is a sample Gallery modal with infinite scrolling and some slightly-cool animation on transition. One simply will never get tired of a bold entrance.
This sample is built and bundled from ground up with following tech stacks and dependencies:

  - ReactJS, oh yeah the React we love, version 15++
  - Babel, one simply cannot live without Babel as long as he still works with ReactJS
  - Webpack 2, manually configured from ground up.
  - Semantic-ui
  - A third-lib called [React-infinite-scroller][RIS] by CassetteRocks
  - Another lib called [React-modal][Rsk] to create Modal
  - Fake RestAPI from [JSONPlaceholder][Fks]
  - Some dumb images from [Lorempixel][Lpx]
 
Open package.json for details. 
...or read on!

## Installation
Nothing special, just the usual routine:
```sh
$ git clone https://github.com/vutran1710/gallery_demo
$ cd doom_gallery
$ yarn
$ yarn start
```
or if you just want to stick with npm...
```sh
$ npm i
$ npm start
```
optimize the bundle with:
```sh
$ yarn build
```
or...
```sh
$ npm run build
```
For the moment, there is no code-coverage. Sorry for that. Will be implemented later.

## Brief introduction
For the demonstration and testing purpose, this sample is built from scratch instead of using create-react-app
In the wake of Webpack 2 release, manual configuration of webpack can now use webpack-dev-server, a slice of express.js for setting up local testing server.

To ensure familiarity, the configurations are set similar to create-react-app config, meaning:
- ES6 Javascript
- JS, JSX and extension-omit for import/export
- images, css importing as usual

However, differences are:
- Html now bundled also, meaning changes in index.html shall cause webpack to hot-reload
- I dont remember. I shall add more later should my memory works again.

About React-infinite-scroller:
- Not too cool lib, but it can get the job done quick at an acceptable level


## Todos
 - Write Tests
 - I dont know, maybe go back to sleep then?

License
----

MIT

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job.)
   [Fks]: <https://jsonplaceholder.typicode.com/>
   [Lpx]: <http://lorempixel.com/>
   [RIS]: <https://github.com/CassetteRocks/react-infinite-scroller/>
   [Rsk]: <https://github.com/reactjs/react-modal/>
   >
