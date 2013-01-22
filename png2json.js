var fs = require('fs')
var PNG = require('pngjs').PNG

var options = require('dreamopt')([
  "Usage: png2json <source> [<destination>]",
  "  <source>           Source file to convert to json #required",
  "  <destination>      Destination file (defaults to source file with .json extension)",
  function(value, options) {
    if (!value) {
      return options.source.replace(/\.png/, '') + '.json';
    }
  }
]);

var heightMap = {};

fs.createReadStream(options.source)
.pipe(new PNG({
  filterType: 4
}))
.on('parsed', function() {

  for (var y = 0; y < this.height; y++) {
    heightMap[y] = {};
    for (var x = 0; x < this.width; x++) {
      var idx = (this.width * y + x) << 2;
      heightMap[y][x] = {};
      heightMap[y][x].r = this.data[idx];
      heightMap[y][x].g = this.data[idx+1];
      heightMap[y][x].b = this.data[idx+2];
      heightMap[y][x].a = this.data[idx+3];
    }
  }

  fs.writeFile(options.destination, JSON.stringify(heightMap), function(err) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    else {
      console.log("Saved " + options.destination);
    }
  }); 

});