module.exports = function(x, y, z, heightmap) {
  var rgba;
  z = Math.round((z + 0) * 1);
  x = Math.round((x + 0) * 1);
  y = Math.round((y + 64) * 4);
  if (!heightmap[z] || !heightmap[z][x]) {
    return 0;
  }
  rgba = heightmap[z][x];
  return y < rgba.r ? Math.ceil((rgba.r / 255) * 9) : 0;
};