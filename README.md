# voxel-heightmap-terrain

generate voxel terrain using a png heightmap

this is designed to work out of the box with [voxel-engine](https://npmjs.org/package/voxel-engine)

## heightmaps

The generator uses heightmaps in JSON form

This repo includes png2json.js which lets you create these JSON files from PNG images

`node png2json dog.png`

## demo

clone this repo

run `make`

serve eg `python -m SimpleHTTPServer 8080`

## install

`npm install voxel-heightmap-terrain`

## api

```javascript
var generator = require('voxel-heightmap-terrain');
var heightmap = require('./heightmap.json');

window.game = createGame({
  generate: function(x, y, z) {
    return generator(x, y, z, heightmap);
  },
  ...
});
```

## license

MIT